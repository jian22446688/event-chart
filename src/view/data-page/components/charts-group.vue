<template>
    <section class="report-chart">
        <header>
            <div class="report-date-select d-float-left">
                <DatePicker
                    :open="dateOpen"
                    :value="dateValue"
                    :options="options2"
                    confirm
                    type="daterange"
                    placement="bottom-end"
                    placeholder="请选择日期"
                    @on-change="onDateChange"
                    @on-ok="onDateOk"
                    @on-clear="onDateClear">
                    <Button type="default"
                            size="large"
                            icon="ios-calendar-outline"
                            @click="dateOpen = !dateOpen">
                        <template v-if="dateValue[0] === ''">请选择时间</template>
                        <template v-else>{{dateValue[0] + '至' + dateValue[1]}}</template>
                    </Button>
                </DatePicker>
            </div>
            <div class="report-date-title">
                <p>{{titleValue}}</p>
            </div>
            <div class="report-date-btngroup d-float-right">
                <ButtonGroup size="large">
                    <Select v-model="chartsType" size="large" long style="width: 80px" @on-change="onChartChange">
                        <Option v-for="item in reportDataListSet"
                                :value="item.value"
                                :key="item.value">
                            <Icon :type="item.icon" />
                            {{ item.title }}
                        </Option>
                    </Select>
                    <Select v-model="modelDate" size="large" style="width: 65px" @on-change="onTimeChange">
                        <Option v-for="item in reportDataListDate" :value="item.value" :key="item.value">{{ item.title }}</Option>
                    </Select>
                </ButtonGroup>
            </div>
        </header>
        <div class="chare-container">
            <template v-if="!isEventData ">
                <div  class="report-no-data">
                    <div  class="report-no-data-msg">
                        <h5>没有查找到数据</h5>
                        <p>请尝试调整时间段或筛选条件</p>
                    </div>
                </div>
            </template>
            <template v-else>
                <Card shadow>
                    <div style="width: 100%; height: 420px" ref="chartDiv"></div>
                </Card>
            </template>
        </div>
    </section>
</template>

<script>
    import { ChartPie, ChartBar} from './charts'
    import * as dataType from '../data-base'
    import echarts from 'echarts'
    import tdTheme from './charts/chart-theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'charts-group',
        components: {
            ChartPie,
            ChartBar
        },
        props: {
            typeValue: {
                type: String,
                default: 'b'
            }
        },
        data () {
            return {
                titleValue: '用户触发数',
                dom: null,
                chartsData: null,
                chartsType: 'piller',
                chartTable: null,
                chartTable1: null,
                tableData: null,
                isEventData: true,
                modelDate: 'day',
                dateOpen: false,
                dateValue: ['2018-07-1','2018-7-31'],
                reportDataListSet: dataType.reportDataListSet,
                reportDataListDate: dataType.reportDataListDate,
                options2: {
                    shortcuts: [
                        {
                            text: '一星期',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '一个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '三个月',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                },
                inforCardData: [
                    { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
                    { title: '累计点击', icon: 'md-locate', count: 23432, color: '#19be6b' },
                    { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
                    { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
                    { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
                    { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
                ],
                pieData: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                ],

                barData: {"2018-07-01":300, "2018-07-02":500,}
            }
        },
        created(){
            this.$d_Global.c_date = this.modelDate
            this.$d_Global.c_chartType = this.chartsType
        },
        mounted(){
            this.$nextTick(()=>{
                this.dom = echarts.init(this.$refs.chartDiv, 'tdTheme')
                window.onresize = ()=> { this.chartResize() }
            })
            let locadata = localStorage.getItem('selectdate')
            if(locadata){
                this.dateValue = locadata.split(',')
            }
        },
        methods: {
            // 选择时间更换事件
            onDateChange(date){
                this.dateValue = date
                let d = '';
                if(date instanceof Array){
                    d += date[0] ? date[0]+ '至' : '';
                    d += date[1] ? date[1]: '';
                }else {
                    d = date;
                }
                localStorage.setItem('selectdate', this.dateValue)
                // this.dateValue = d;
            },

            // 更换图表
            onChartChange(value){
                this.$d_Global.c_chartType = value
                this.$emit('on-ChartsChange')
                this.initChartsData(value, this.modelDate)
            },

            // 更换时间
            onTimeChange(value){
                this.$d_Global.c_date = value
                this.$emit('on-ChartsChange')
                this.initChartsData(this.chartsType, value)
            },

            onDateOk(){
                this.dateOpen = !this.dateOpen
                let obj = {
                    name: dataType.CHARTS_GROUP_DATE,
                    data: this.dateValue
                }
                this.$emit('on-dateok', obj)
            },
            onDateClear(va){

            },

            setChartData(data, isloading = false){
                if(isloading){
                    this.dom.showLoading({
                        text: '数据读取中...',
                        effect: 'spin',
                        textStyle:{
                            fontSize: 20
                        },
                        animationEasing:"ExponentialOut",
                        animation:true,
                        addDataAnimation:true,
                    })
                    return
                }else {
                    this.dom.hideLoading()
                }
                this.chartsData = data
                let t_tN = this.$d_Global.c_top_tableValue
                let t_tC = dataType.getLabelCascaer(this.$d_Global.c_top_cascaerVaule)
                this.titleValue = t_tN + '的' + t_tC
                this.initChartsData(this.chartsType, this.modelDate)
            },
            // initChartsData(type, date) {
            //     let data = this.chartsData
            //     if (data == null) { return; }
            //     let option = dataType.getOptionType(data, type, date)
            //     this.chartDataInit(option)
            // },

            initChartsData(type, date) {
                console.log('initChar Data ')
                let data = this.chartsData
                if (data == null) { return; }
                let quer = this.$d_Global.c_query
                let option = null
                if(!(quer.param.group_by.length < 1)){
                    option = dataType.getTableOption(data[date], this.tableData, quer, type)
                }else {
                    option = dataType.getOptionType(data[date], type)
                }
                this.chartDataInit(option)
            },

            setOption(data, table, isloading = false){
                if(isloading){
                    this.dom.showLoading({
                        text: '数据读取中...',
                        effect: 'spin',
                        textStyle:{
                            fontSize: 20
                        },
                        animationEasing:"ExponentialOut",
                        animation:true,
                        addDataAnimation:true,
                    })
                    return
                }
                this.dom.hideLoading()
                this.chartsData = data
                this.tableData = table
                let t_tN = this.$d_Global.c_top_tableValue
                let t_tC = dataType.getLabelCascaer(this.$d_Global.c_top_cascaerVaule)
                this.titleValue = t_tN + '的' + t_tC
                this.initChartsData(this.chartsType, this.modelDate)
            },
            chartDataInit(option){
                if(option){
                    this.isEventData = true
                    this.$nextTick(()=>{
                        this.dom = echarts.init(this.$refs.chartDiv, 'tdTheme')
                        this.dom.clear()
                        this.dom.setOption(option)
                    })
                }else {
                    this.isEventData = false;
                }
            },
            chartResize(){
                if (this.dom != null){
                    this.dom.resize()
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .report-chart {
        padding: 20px 12px 10px;
        header {
            width: 100%;
            align-items: center;
            text-align: center;
        }
        .report-date-select {
            width: 210px;
            display: inline-block;
            cursor: pointer;
            font-size: 14px;
            text-align: left;
        }
        .report-date-title {
            text-align: center;
            font-size: 16px;
            color: #202742;
            line-height: 24px;
            display: inline-block;
            margin: 0 auto;
            vertical-align: bottom;
        }
        .report-date-btngroup {
            text-align: left;
        }

        .report-no-data {
            padding-top: 140px;
            background-color: #FDFDFE;
            width: 100%;
            height: 400px;
            position: relative;

            .report-no-data-msg {
                margin: 0 auto;
                width: 300px;
                min-height: 112px;
                border: 1px solid #C5C7E5;
                border-radius: 4px;
                padding: 26px 20px 20px 100px;
                background: url(../../../assets/no-data.png) 20px center no-repeat;
                background-color: #eff0f8;
            }

        }

    }
</style>
