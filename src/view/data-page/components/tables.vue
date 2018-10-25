<template>
    <div>
        <div class="table-config">
            <div class="input-icon-wrap float-left"></div>

            <div class="float-right">
                <!--<ButtonGroup size="large">-->
                <!--<Button>%</Button>-->
                <!--<Button icon="arrow-graph-down-right"></Button>-->
                <!--</ButtonGroup>-->
                <Button icon="arrow-down-a" size="large" :loading="exportLoading" @click="onExportCsv">导出</Button>
            </div>

        </div>
        <div class="table-config table-data-list">
            <Table ref="table" size="small" height="360" width="100%" border :columns="tableCloumns" :data="tableList"></Table>
        </div>
    </div>
</template>

<script>
    import excel from '@/libs/excel'
    import * as datatype from '../data-base'
    export default {
        name: 'tables',
        props: {
            query: Object,
            result: Object
        },
        data () {
            return {
                exportLoading: false,
                tableList: [],
                tableCloumns: []
            }
        },
        computed:{
            getTableList(){
                let list = []
                return
            }
        },
        methods: {
            // 设置 表头和数据
            setTableDataEmtyp(){
                this.tableList = []
                this.tableCloumns = []
            },

            // 获取表头 2018-10-16 暂时没用
            getTableCloMan(data, arrl){
                for(let key in data){
                    if (key === 'x' || key === 'y') break
                    let keys = data[key]
                    for (let item in keys) {
                        if(Array.isArray(keys[item])){
                            arrl[item+ '_'+ 'count'] = item+ '_'+ 'count'
                            arrl[item] = item
                            let keysobj = keys[item]
                            keysobj.map(ko => {
                                if (typeof ko === 'object'){
                                    this.getTableCloMan(ko, arrl)
                                }
                            })
                        }else {
                            arrl[item] = item
                        }
                    }
                }
                return arrl
            },

            getTableDataBegin(data){
                if (data != null){
                    return this.getTableDataMan(data)
                }
            },

            // 初始化数据
            getTableDataMan(result){
                console.log('图表更换')
                let data = result[this.$d_Global.c_date]
                this.tableList = []
                this.tableCloumns = []
                if (!data || data.x.length < 1) return
                let tempClo = []
                tempClo = this.query.param.group_by.map(val => {
                    return {title: val, key: val, minWidth: 60, width: 110, align:'right'}
                })
                if (tempClo.length < 1 && data) {
                    let dataObj = {}
                    data.x.forEach((vl, i)=>{
                        this.tableCloumns.push({title: vl, key:vl, minWidth: 60, width: 110, align:'right'})
                        let caseName = this.$d_Global.c_top_cascaerCountNmae
                        dataObj[vl] = data[vl][caseName]
                    })
                    this.tableCloumns.unshift({title: '指标', key: 'index',width: 150, align:'left'})
                    let t_tN = this.$d_Global.c_top_tableValue
                    let t_tC = datatype.getLabelCascaer(this.$d_Global.c_top_cascaerVaule)
                    dataObj['index'] = t_tN + '的' + t_tC
                    this.tableList.push(dataObj)
                } else {
                    this.tableList = datatype.getQueryDataParse(data, this.query.param)
                    if (this.tableList){
                        let ot = []
                        let nn = datatype.getTopCascaerName(this.$d_Global.c_top_cascaerVaule)
                        let cn = datatype.getCountAlias(this.$d_Global.c_top_cascaerVaule)
                        Object.keys(this.tableList[0]).forEach(v => {
                            if (v !== 'count') {
                                if(v === 'date'){
                                    ot.push({title: v, key: v, minWidth: 60, maxWidth: 100, align:'right'})
                                } else {
                                    if (nn === 'count'){
                                        if (v.lastIndexOf('_count') !== -1)
                                            ot.push({title: cn, key: v, minWidth: 60, align:'right'})
                                        else
                                            ot.push({title: v, key: v, minWidth: 60, align:'right'})
                                    }else {
                                        if (nn === v)
                                            ot.push({title: cn, key: v, minWidth: 60, align:'right'})
                                        if (!datatype.getCountReSult(v))
                                            ot.push({title: v, key: v, minWidth: 60, align:'right'})
                                    }
                                }
                            }
                        })
                        ot = ot.filter(item => item.title != 'stat_count')
                        if (this.$d_Global.c_top_cascaerVaule[0] !== datatype.TOP_TABLE_DIST_A_1) {
                           ot = ot.filter(item => item.title.lastIndexOf('_count') === -1)
                        }
                        this.tableCloumns = ot
                    }

                }
                return this.tableList
            },

            getChartOptionData(rd, col, cType){
                let tempClo = col
                let data = rd
                let tableDa = this.tableList.map(taDa => {
                    let stri = ''
                    tempClo.forEach((clotVal, index) => {
                        if (index === 0) {
                            stri = taDa[clotVal.title]
                        }else {
                            stri += '-' + taDa[clotVal.title]
                        }
                    })
                    taDa['lable'] = stri
                    return taDa
                })
                let cData = data.x.map((val, index) =>{
                    return this.tableList.filter(item => item.date === val)
                })
                let series = []
                let legends = []
                let xAxis = data.x
                cData.forEach((item, index)=> {
                    item.forEach(serit => {
                        let seritem = {
                            name: serit.lable,
                            type: cType,
                            stack: '总量',
                            data: []
                        }
                        legends.push(serit.lable)
                        seritem.data = cData.map(serVal => {
                            let vStr = tempClo[tempClo.length -1].title + '_count'
                            if (serVal.length > 0 ){
                                return serVal[serVal.length - 1][vStr]
                            }
                            return 0
                        })
                        series.push(seritem)
                    })
                })
                let cOption = {series: series, legend: legends, xAxix: xAxis}
               return cOption
            },

            //导出 Csv
            onExportCsv(){
                // this.$refs.table.exportCsv({
                //     filename: 'csvname.csv'
                // })
                this.onExportExcel()
            },

            // 导出 excel
            onExportExcel(){
                // this.tableCloumns
                // this.tableList
                if (this.tableList.length) {
                    this.exportLoading = true
                    let tables = [], keys = []
                    this.tableCloumns.forEach(val => {
                        tables.push(val.title)
                        keys.push(val.key)
                    })
                    let t_tN = this.$d_Global.c_top_tableValue
                    let t_tC = datatype.getLabelCascaer(this.$d_Global.c_top_cascaerVaule)
                    const params = {
                        title: tables,
                        key: keys,
                        data: this.tableList,
                        autoWidth: true,
                        filename: t_tN + '的' + t_tC + '_' + (new Date().getTime()).toString().slice(9)
                    }
                    excel.export_array_to_excel(params)
                    this.exportLoading = false
                } else {
                    this.$Message.info('表格数据不能为空！')
                }
            }
        }
    }
</script>

<style scoped lang="less">
</style>
