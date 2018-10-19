<template>
    <div class="d-group-control">
        <div class="group-control-item" v-for="(item, i) in selectList" :key="i">
            <span>按</span>
            <span class="group-item-input">
                <i-select style="min-width: 200px; width: auto;" v-model="item.selectValue" @on-change="onSelectChange(item)" filterable size="large">
                    <i-option :value="item.value">{{ item.label }}</i-option>

                    <OptionGroup label="事件属性">
                        <i-option v-for="sl in item.selectData" :value="sl.id" :key="sl.id" :disabled="sl.c_state && item.selectValue != sl.id">{{ sl.alias ? sl.alias: sl.name }}</i-option>
                    </OptionGroup>
                </i-select>
            </span>
            <span class="group-item-input f-control">
                <Button v-if="selectList.length > 1" shape="circle" type="text" icon="close" @click="onDelete(item)" />
                <Button v-if="i === selectList.length - 1" shape="circle" type="text" @click="onAdd" icon="plus-round" />
            </span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'condition-group',
    props: {
        tableField: Array,
    },
    data () {
        return {
            condData: [],
            selectList: [
                {
                    value: 'all',
                    label: '总体',
                    selectValue: 'all',
                    selectData: []
                },
            ],
            bookmarkList: []
        }
    },

    watch:{
        tableField(val, oval){
            this.selectList = [
                {
                    value: 'all',
                    label: '总体',
                    selectValue: 'all',
                    selectData: []
                },
            ]
            this.comData()
            this.selectList[0].selectData = val
            this.selectList[0].selectValue = 'all'
            this.selectList[0].selectName = '总体'
            this.selectList[0].selectData[0]['c_state'] = false
        },

        bookmarkList(val, oval){
            this.bookMarkInit(val)
        }
    },

    methods: {
        bookMarkInit(val){
            let bookarr = []
            for(let oj in this.tableField){
                delete this.tableField[oj].c_state
            }
            val.map(item => {
                let obj = {
                    value: 'all',
                    label: '总体',
                    selectValue: item.selectValue,
                    selectName: item.selectName,
                    selectData: this.tableField
                }
                for(let oj in this.tableField){
                    if(!this.tableField[oj].c_state){
                        obj.selectData = this.tableField
                        obj.selectData[oj]['c_state'] = true
                        break;
                    }
                }
                bookarr.push(obj)
                this.selectList = bookarr
            })
            this.tableField.map((oj, ij)=>{
                delete oj.c_state
            })
            this.selectList.map((item, index)=>{
                this.tableField.map((oj, ij)=>{
                    if(item.selectValue === oj.id) {
                        item.selectName = oj.name
                        oj['c_state'] = true
                    }
                })
            })
            this.comData()
        },
        onAdd(){
            let obj = {
                value: 'all',
                label: '总体',
                selectValue: this.tableField[this.selectList.length].id,
                selectName: this.tableField[this.selectList.length].name,
                selectData: this.tableField
            }
            for(let oj in this.tableField){
                if(!this.tableField[oj].c_state){
                    obj.selectValue = this.tableField[oj].id
                    obj.selectName = this.tableField[oj].name
                    obj.selectData = this.tableField
                    obj.selectData[oj]['c_state'] = true
                    break;
                }
            }
            this.selectList.push(obj)
            this.onSendData()
        },
        onDelete(item){
            this.tableField.map((oj, ij)=>{
                if(item.selectValue === oj.id){
                    delete oj.c_state
                }
            })
            this.selectList.map((obj, index) => {
                if(item === obj){
                    this.selectList.splice(index, 1);
                }
            });
            this.$nextTick(()=>{
                this.selectList = this.selectList.map(item => item)
                console.log('condition -- list')
                console.log(this.selectList)
                this.onSendData()
            })
        },

        comData(){
            this.condData = []
            this.selectList.map((item)=>{
                if (item.selectValue != 'all'){
                    this.condData.push(item.selectName)
                }
            })
        },

        onSendData(){
            this.comData()
            this.$emit('on-sendData')
        },

        // 选择事件更换
        onSelectChange(data){
            this.tableField.map((oj, ij)=>{
                delete oj.c_state
            })
            this.selectList.map((item, index)=>{
                this.tableField.map((oj, ij)=>{
                    if(item.selectValue === oj.id) {
                        item.selectName = oj.name
                        oj['c_state'] = true
                    }
                })
            })
            this.onSendData()
        }
    }
}
</script>
<style scoped lang="less">
  .d-group-control{
        border-bottom: 1px solid #EBEBEB;
        .group-control-item {
            padding-left: 48px;
            padding: 10px 4px 10px 48px;
            height: 56px;
            span {
                padding-right: 10px;
                color: #777C7C;
            }
            .f-control {
                display: none;
            }
            &:hover .f-control {
                display: inline-block;
            }
            &:hover {
                background-color: rgba(85,159,240,.12);
            }
        }
    }
</style>
