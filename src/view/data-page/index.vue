<template>
    <div id="d-main" class="main-content">
        <NavControll ref="navControll"
                     @on-refresh="onUpdateData"
                     @on-save="onSave"
                     @on-Addbook="onAddbook" @on-bookmarkItem="setCurrentBookMark"/>

        <div class="b-content">
            <div class="measures-container">
                <div class="measure-line">
                    <!--上面选择数据表和 添加筛选条件-->
                    <div class="ops-item">
                        <top-table ref="topTable"
                                   @on-addFiltrate="onFiltrate"
                                   @on-fieldChange="onFieldChange"
                                   @on-CascaerChange="onUpdateData"></top-table>
                    </div>

                    <div class="ops-item">
                        <FilterGroup ref="filterGroup"
                                     :tableField="gettableField"
                                     @on-filterGroupAndChange="onUpdateData"/>
                    </div>

                    <div class="ops-item">
                        <ConditionGroup ref="condition"
                                        :tableField="gettableField"
                                        @on-sendData="onUpdateData"  />
                    </div>
                </div>
            </div>
            <!--charts components-->
            <charts-group ref="chartsGroup"
                          :typeValue="chartsType" @on-ChartsChange="onChartsChange"
                          @on-dateok="onUpdateData"></charts-group>

            <!--表格内容-->
            <Tables ref="tebles"
                    :query="allParam"
                    :result="chartsData"></Tables>

            <div style="height: 30px"></div>

        </div>
    </div>
</template>

<script>

    import NavControll from './nav-controll'
    import TopTable from './components/top-table';
    import FilterGroup from './components/filter-group'
    import ConditionGroup from  './components/condition-group'
    import ChartsGroup from './components/charts-group'
    import Tables from './components/tables'
    import * as datatype from './data-base'

    export default {
        name: 'index',
        components: {
            NavControll,
            FilterGroup,
            ConditionGroup,
            ChartsGroup,
            TopTable,
            Tables
        },
        data () {
            return {
                tableData: null,
                allData: null,
                chartsData: null,
                chartsType: 'd',
                fieldData: null,
                allParam: {}
            }
        },
        computed: {
            gettableField () {
                return this.fieldData
            },
            getChartsData (){
                let ob = {
                    query: this.allParam,
                    data: this.chartsData
                }
                return ob
            }
        },
        mounted(){
            this.$nextTick(() => {

            })
            this.init()
        },
        methods: {
            init(){
                console.log('index init')
                // this.onRefresh()
                // this.onUpdateData()
            },

            onChartsChange(){
                this.$refs.tebles.getTableDataBegin(this.chartsData, false)
            },

            // 添加筛选 栏目
            onFiltrate(){
                this.$refs.filterGroup.onAddItem()
            },

            //添加书签
            onAddbook(param){
                let top_dataBase = this.$refs.topTable.dataBaseValue
                let filter_select = JSON.parse(JSON.stringify(this.$refs.filterGroup.selectList))
                let condi_select = JSON.parse(JSON.stringify(this.$refs.condition.selectList))
                filter_select.map(item =>{
                    if(item.is_enum){
                        item.enumList = null
                    }
                })
                condi_select.map(item =>{
                    item.selectData = null
                })
                let bookmark = {}
                bookmark.title = param.title ? param.title:''
                bookmark.description = param.description ? param.description:''
                bookmark.data = {}
                bookmark.data.top_dataBaseValue = top_dataBase ? top_dataBase:'tv_log'
                bookmark.data.top_cascaderValue = this.$refs.topTable.cascaderValue
                bookmark.data.filter_selectList = filter_select
                bookmark.data.filter_andOrValue = this.$refs.filterGroup.andOrValue
                bookmark.data.condi_selectList  = condi_select
                bookmark.data.charts_dateValue  = this.$refs.chartsGroup.dateValue
                bookmark.data.charts_chartsType = this.$refs.chartsGroup.chartsType
                bookmark.data.charts_modelDate  = this.$refs.chartsGroup.modelDate
                if (param.is_update) {
                    this.$http.put('/admin/condition_bookmark/' + param.id, bookmark).then(res=>{
                        this.$Message.success('更新成功');
                        this.$refs.navControll.init()
                    }).catch(err =>{
                        console.log('查询更新失败')
                        console.log(err)
                    })
                }else {
                    this.$http.post('/admin/condition_bookmark', bookmark).then(res =>{
                        if (res.data.code === 0){
                            this.$Message.success('保存成功');
                            this.$refs.navControll.init()
                        }
                    }).catch(err =>{
                        console.log('查询保存失败')
                        console.log(err)
                    })
                }
            },

            setCurrentBookMark(bookitem){
                if (!bookitem || !bookitem.data) return
                let obj = bookitem
                this.$d_Global.is_bookmark = true
                this.$refs.topTable.dataBaseValue = obj.data.top_dataBaseValue
                this.$refs.topTable.cascaderValue = obj.data.top_cascaderValue
                this.$refs.filterGroup.bookmarkList  = obj.data.filter_selectList
                this.$refs.filterGroup.andOrValue  = obj.data.filter_andOrValue
                this.$refs.condition.bookmarkList  = obj.data.condi_selectList
                this.$refs.chartsGroup.dateValue  = obj.data.charts_dateValue
                this.$refs.chartsGroup.chartsType  = obj.data.charts_chartsType
                this.$refs.chartsGroup.modelDate  = obj.data.charts_modelDate
                this.$d_Global.is_bookmark = false
            },

            // 这个方法用来测试的
            onSave(){
                // this.chartsData = datatype.chartTableTest
                // console.log(datatype.chartTableTest)
                // try {
                //     this.$refs.chartsGroup.setChartData(datatype.chartTableTest);
                // }catch (e) {
                //     console.log(e)
                // }
                this.$d_Global.is_bookmark = true
                let obj = datatype.bookTest
                obj = JSON.parse(localStorage.getItem('addbookmark'))
                if (!obj){
                    return
                }
                this.$refs.topTable.dataBaseValue = obj.data.top_dataBaseValue
                this.$refs.topTable.cascaderValue = obj.data.top_cascaderValue
                this.$refs.filterGroup.bookmarkList  = obj.data.filter_selectList
                this.$refs.filterGroup.andOrValue  = obj.data.filter_andOrValue
                this.$refs.condition.bookmarkList  = obj.data.condi_selectList
                this.$refs.chartsGroup.dateValue  = obj.data.charts_dateValue
                this.$refs.chartsGroup.chartsType  = obj.data.charts_chartsType
                this.$refs.chartsGroup.modelDate  = obj.data.charts_modelDate
                this.$d_Global.is_bookmark = false
            },

            onUpdateData(data = {}){
                if(this.$d_Global.is_bookmark){
                    return
                }
                let and = this.$refs.filterGroup.selectList.length <= 1 ? '':this.$refs.filterGroup.andOrValue
                let param = {
                    param:{
                        index_alias: this.$refs.topTable.dataBaseValue ? this.$refs.topTable.dataBaseValue: 'tv_log',
                        date_range: {
                            "gte": this.$refs.chartsGroup.dateValue[0],
                            "lte":this.$refs.chartsGroup.dateValue[1]
                        },
                        group_by: this.$refs.condition.condData,
                        condition:{
                            type: and,
                            must:[],
                            must_not:[],
                            range: []
                        }
                    }
                }
                let dis = {} , sta = {}
                if (this.$refs.topTable.cascaderValue.length === 2) {
                    if(this.$refs.topTable.cascaderValue[1] === datatype.TOP_TABLE_DIST_Q_5){
                        dis = {distinct: this.$refs.topTable.cascaderValue[0]}
                    }
                    if(this.$refs.topTable.cascaderValue[1] === datatype.TOP_TABLE_STATS_N_1
                        || this.$refs.topTable.cascaderValue[1] === datatype.TOP_TABLE_STATS_N_2
                        || this.$refs.topTable.cascaderValue[1] === datatype.TOP_TABLE_STATS_N_3
                        || this.$refs.topTable.cascaderValue[1] === datatype.TOP_TABLE_STATS_N_4
                    ){
                        sta = {stats: this.$refs.topTable.cascaderValue[0]}
                    }
                }else if (this.$refs.topTable.cascaderValue.length === 1){
                    if(this.$refs.topTable.cascaderValue[0] === datatype.TOP_TABLE_DIST_A_2
                        || this.$refs.topTable.cascaderValue[0] === datatype.TOP_TABLE_DIST_A_3
                    ){
                        dis = {distinct: "eth0_mac"}
                    }
                }
                Object.assign(param.param, dis, sta)

                // filter-group data
                let must_term = [], must_not_term = [], range = []
                if (this.$refs.filterGroup.selectList.length > 0){
                    this.$refs.filterGroup.selectList.map((item, index)=>{
                        let term = {term: {}}
                        switch (item.condValue) {
                            case datatype.FILTER_GROUP_K_1:
                            case datatype.FILTER_GROUP_K_D_1:
                                term.term[item.fieldValue] = item.inputValue
                                must_term.push(term);
                                break;
                            case datatype.FILTER_GROUP_K_2:
                            case datatype.FILTER_GROUP_K_D_2:
                                term.term[item.fieldValue] = item.inputValue
                                must_not_term.push(term);
                                break;
                        }
                        if (item.is_section){
                            let ob = {}
                            ob[item.fieldValue] = {gte: item.section_1, lte: item.section_2}
                            range.push(ob)
                        }
                    })
                }
                param.param.condition.must      = must_term
                param.param.condition.must_not  = must_not_term
                param.param.condition.range     = range
                this.allParam = param
                this.onRefresh(param)
            },

            onRefresh(pa = null){
                let param = datatype.param
                if (pa != null){ param = pa }
                this.$d_Global.c_query = param
                this.onTabUpdateCharts(null, true)
                this.$http.post('/event', param).then(res =>{
                    let data = res.data
                    this.allData = data
                    this.chartsData = data
                    console.log('index- psot event')
                    console.log(this.chartsData)
                    this.onTabUpdateCharts(this.chartsData)
                }).catch(err =>{
                    console.log(err);
                });
            },

            onTabUpdateCharts(par, is_loading = false){
                console.log('tabUpdate')
                if (is_loading){
                    this.$refs.tebles.setTableDataEmtyp()
                    this.$refs.chartsGroup.setOption(null, null, true)
                    return
                }
                this.tableData = this.$refs.tebles.getTableDataBegin(par, false)

                this.$refs.chartsGroup.setOption(par, this.tableData, false);


                // if (is_loading){
                //     this.$refs.chartsGroup.setOption(null, true);
                // }else {
                //     // 带数据更新 图表
                //     if (par != null) {
                //         this.$refs.chartsGroup.setOption(null, false);
                //     }
                //
                // }


            },

            // top-table field 更换
            onFieldChange(field){
                this.fieldData = field
            },
        }
    }
</script>

<style lang="less">
    @import "./index.less";
</style>
