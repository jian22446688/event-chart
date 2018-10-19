<template>
    <div class="d-top-table">
        <span class="d-table-name">A</span>
        <Select style="width:200px"
                v-model="dataBaseValue"
                filterable size="large"
                placement="bottom"
                @on-change="onSelectValueChanage">
            <template v-for="(ite, index) in tableData" :keys="index">
                <template v-if="ite.name === null && ite.id === 0">
                    <Option v-for="item in ite.tables"
                            :value="item.name"
                            :key="item.name">{{item.alias ? item.alias:item.name}}
                    </Option>
                </template>

                <template v-if="ite.name">
                    <OptionGroup :label="ite.name">
                        <Option v-for="item in ite.tables"
                                :value="item.name"
                                :key="item.name">{{item.alias ? item.alias:item.name}}
                        </Option>
                    </OptionGroup>
                </template>
            </template>

        </Select>

        <span style="margin: 0px 10px;">的</span>
        <Cascader style="display: inline-block; width:200px;"
                  v-model="cascaderValue"
                  size="large"
                  :data="cascaData"
                  trigger="hover"
                  @on-change="onCascaerChange" />

        <div class="d-hide-panel float-right">
            <Button type="text" style="padding: 0px 6px" @click="onAddFiltrate"><b style="font-size: 18px">+</b>筛选条件</Button>
        </div>
    </div>
</template>

<script>
    import * as dataType from '../data-base'
    export default {
        name: 'top-table',
        data () {
            return {
                dataBaseValue: null,
                dataBaseName: null,
                cascaderValue: ['a_1'],
                tableData: [],
                tableField: null,
                cascaData: []
            }
        },
        watch: {
            // 数据更换事件
            tableField(val, oval){
                this.$d_Global.$vue.$emit('on-g-filterChange', val)
            },
            dataBaseValue(val, oval){
                // this.onDataBaseChange(val)
            }
        },
        created(){
            this.$d_Global.c_top_cascaerVaule = this.cascaderValue
            this.$d_Global.c_top_cascaerCountNmae = dataType.getTopCascaerName(this.cascaderValue)
        },
        mounted(){
            this.init();
        },
        methods: {
            init(){
                this.$http.get('/tables').then(res => {
                    if (res.status == 200){
                        let data = res.data;
                        // let trundata = data.pop();
                        // data.unshift(trundata)
                        this.tableData = data;
                        this.dataBaseValue = localStorage.getItem('indexBase');
                        if(this.dataBaseValue != null){
                            this.onDataBaseChange(this.dataBaseValue)
                        } else {
                            this.onDataBaseChange(0)
                        }
                    }else {
                        console.log('数据获取错误')
                    }
                }).catch(err => {
                    console.log(err)
                })
            },

            onAddFiltrate(){
                this.$emit('on-addFiltrate')
            },

            onSelectValueChanage(value){
                this.onDataBaseChange(value)
            },

            onDataBaseChange(value){
                this.cascaderValue = ['a_1'];
                localStorage.setItem('indexBase', value);
                let tId = 0
                for (let item in this.tableData) {
                    let reus = this.tableData[item].tables.find(val => val.name === value)
                    if (reus){
                        tId = reus.id
                        this.$d_Global.c_top_tableValue = reus.alias || reus.name
                        this.$d_Global.c_top_cascaerVauleId = tId
                        break
                    }
                }

                this.$http.get('/table/' + tId + '/fields').then(res => {
                    let data = res.data
                    this.tableField = data
                    let arr = this.initCascaderData(data);
                    this.cascaData = arr;
                }).catch(err => {
                    console.log(err);
                })
            },

            initCascaderData(data){
                let arr = [{value: 'a_1', label: '总次数'}]
                if (this.$d_Global.c_top_cascaerVauleId === 0){
                    arr = arr.concat(dataType.defaultType)
                }
                data.map((item, index) => {
                    let obj = {value: 'a_4', label: 'anylst_var', type: 'date',
                        children: [{value: 'v_1', label: 'var_name', children: []}]
                    }
                    obj.value = item.name
                    obj.label = item.alias ? item.alias : item.name
                    obj.type = item.type
                    obj.children = dataType.getTypeArray(item.type)
                    arr.push(obj)
                })
                return arr;
            },
            onCascaerChange(data, selectedData){
                this.cascaderValue = data
                this.$d_Global.c_top_cascaerVaule = data
                this.$d_Global.c_top_cascaerCountNmae = dataType.getTopCascaerName(data)
                console.log('rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
                console.log(this.$d_Global.c_top_cascaerCountNmae)
                this.$emit('on-CascaerChange')
                console.log(this.cascaderValue)
            }
        }
    }
</script>

<style scoped lang="less">
    .d-top-table {
        padding: 16px 16px;
        .d-table-name{
            font-size: 16px;
            background: #C3E6D0;
            color: #2DCA93;
            display: inline-block;
            text-align: center;
            width: 22px;
            border-radius: 2px;
        }
    }
</style>
