<template>
    <div class="d-filter-group-control" v-if="selectList.length > 0">
        <div class="d-filter-group-control-item" >
            <div class="filter-group-relation" v-if="selectList.length > 1">
                <div class="relation-topl"></div>
                <Button type="default" ghost @click="onAndChange">{{andOr ? '且': '或'}}</Button>
                <div class="relation-bottoml"></div>
            </div>

            <div class="filter-contain">

                <div class="filter-item" v-for="(sitem, index) in selectList">
                    <span class="filter-item-input">
                        <Select style="min-width: 200px; width: auto;"
                                v-model="sitem.fieldValue"
                                @on-change="onfieldChange(sitem, index)"
                                size="large">
                            <Option
                                v-for="item in tableField"
                                    :value="item.name"
                                :key="item.id">{{ item.alias ? item.alias:item.name }}</Option>
                        </Select>
                    </span>
                    <span class="filter-item-input">
                        <Select style="min-width: 110px; width: auto;"
                                v-model="sitem.condValue"
                                @on-change="oncondChange(sitem)"
                                size="large">
                            <Option
                                v-for="item in sitem.condData"
                                :value="item.value"
                                :keys="item.value">{{ item.label }}</Option>
                        </Select>
                    </span>
                    <span class="filter-item-input">
                        <template v-if="sitem.is_enum">
                            <Select v-model="sitem.inputValue"
                                    style="width: 165px;"
                                    size="large"
                                    @on-change="onBlurChange" @on-query-change="onQueryChange">
                                <Option
                                    v-for="(item, index) in sitem.enumList"
                                    :value="item.value"
                                    :key="index">{{ item.value }}</Option>
                            </Select>
                       </template>
                       <template v-else-if="sitem.is_section" >
                            <InputNumber v-model="sitem.section_1" size="large"></InputNumber>
                            <InputNumber
                                v-model="sitem.section_2"
                                size="large"
                                @keyup.enter.native="onBlurChange"></InputNumber>
                       </template>
                        <template v-else>
                            <Input style="min-width: 110px; width: auto;"
                                   v-model="sitem.inputValue" size="large"
                                   @keyup.enter.native="onBlurChange"/>
                        </template>
                    </span>

                    <span class="filter-item-input f-control">
                        <Button shape="circle"
                                type="text"
                                icon="close"
                                @click="onDeleteItem(sitem)"></Button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as dataType from '../data-base'
    export default {
        name: 'filter-group',
        props: {
            tableField: Array,
        },
        data () {
            return {
                // true '且' -and false '或' -or
                andOr: true,
                andOrValue: 'and',
                fieldValue: '',
                selectList: [],
                bookmarkList: [],
                mSelectList: [
                    {title: '等于', value: 'a'},
                    {title: '不等于', value: 'b'},
                ]
            }
        },

        watch:{
            tableField(val, oval){
                if(this.$d_Global.is_bookmark){

                }else {
                    this.selectList = []
                }
            },
            selectList(val, oval){
                if (this.$d_Global.is_bookmark){

                } else {
                    this.onBlurChange()
                }
            },
        },

        created(){
            this.$d_Global.$vue.$on('on-g-filter', ()=> {
                console.log('g-filete')
            })
        },

        methods: {
            bookmarkInit(arr){
                if (arr) {
                    let temparr = []
                    arr.map(item =>{
                        const obj = {
                            fieldValue: item.fieldValue,
                            condData: item.condData,
                            condValue: item.condValue,
                            inputValue: item.inputValue,
                            is_enum: item.is_enum,
                            enumList: item.enumList,
                            is_section: item.is_section,
                            section_1: item.section_1,
                            section_2: item.section_2
                        }
                        this.onBookmarkinit(obj)
                        temparr.push(obj)
                    })
                    this.selectList = temparr
                }

            },
            onAndChange(){
                // true '且' -and false '或' -or
                this.andOr = !this.andOr
                this.andOrValue = this.andOr ? 'and': 'or'
                this.onBlurChange()
            },
            onAddItem(){
                const obj = {
                    fieldValue: this.tableField[0].name,
                    condData: null,
                    condValue: '',
                    inputValue: '',
                    is_enum: false,
                    enumList: null,
                    is_section: false,
                    section_1: 0,
                    section_2: 0
                }
                this.selectList.push(obj);
                this.onfieldChange(obj, this.selectList.length - 1)
            },
            onDeleteItem(item){
                this.selectList = this.selectList.filter(obj => obj !== item)
                this.$emit('onDeleteItem', item)
            },

            // 初始化 书签的
            onBookmarkinit(val, vindex) {
                this.tableField.map((item, index)=>{
                    if(val.fieldValue === item.name){
                        val.condData = null
                        let obj = dataType.getFiledTypeArray(item.type)
                        val.condData = obj
                        val.condValue = obj[0].value
                        if (item.is_enum) {
                            val.is_enum = true
                            val.enumList = item.values
                        }else {
                            val.is_enum = false
                            val.enumList = null
                        }
                    }
                })
            },

            // 筛选表 选择
            onfieldChange(val, vindex) {
                this.tableField.map((item, index)=>{
                    if(val.fieldValue === item.name){
                        val.condData = null
                        let obj = dataType.getFiledTypeArray(item.type)
                        val.condData = obj
                        console.log(item.type, obj)
                        val.condValue = obj[0].value
                        if (item.is_enum) {
                            val.is_enum = true
                            val.enumList = item.values
                        }else {
                            val.is_enum = false
                            val.enumList = null
                        }
                        val.inputValue = ''
                        val.is_section = false
                        val.section_1 = 0
                        val.section_2 = 0
                    }
                })
            },

            // 条件选择更换事件
            oncondChange(val, index){
                console.log('filter - group - condchange'+ val)
                console.log(val)
                if(val.condValue === dataType.FILTER_GROUP_L_D_5){
                    val.is_section = true
                }else {
                    val.is_section = false
                }
            },

            // 所有的输入框, 选择框, 数字输入框,  其中一个失去焦点以后 更换事件;
            onBlurChange (e) {
                this.$emit('on-filterGroupAndChange')
            },

            onQueryChange(query){

                console.log(query)
            }
        }
    }
</script>

<style scoped lang="less">
    .d-filter-group-control {
        padding: 8px;
        border-bottom: 1px solid #EBEBEB;
        &-item {
            margin-left: 36px;
            padding-left: 10px;
            border-left: 2px #6FD3B3 solid;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            width: 100%;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            position: relative;
            .filter-group-relation {
                width: 30px;
                position: absolute;
                height: calc(~"100% - 10px");
                //height:100%;
                .relation-topl {
                    margin: 15px 0 0 20px;
                    border-left: 1px solid #6FD3B3;
                    border-top: 1px solid #6FD3B3;
                    width: 100%;
                    height: calc(~"50% - 33px");
                }
                .relation-bottoml {
                    margin: 0 0 15px 20px;
                    border-left: 1px solid #6FD3B3;
                    border-bottom: 1px solid #6FD3B3;
                    width: 100%;
                    height: calc(~"50% - 33px");
                }
            }
            .filter-contain {
                width: 94%;
                padding-left: 41px;
                .filter-item {
                    display: block;
                    padding: 6px;
                    &-input {
                        margin-left: 8px;
                    }
                    &-input:first-child {
                        margin-left: 0px;
                    }
                }
            }
            .f-control {
                display: none;
            }
            &:hover .f-control {
                display: inline-block;
            }
        }
    }

</style>



