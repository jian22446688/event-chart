<template>
    <div class="container">
        <h1>Test</h1>

        <Card shadow>
            <div style="width: 100%; height: 420px" ref="chartDiv"></div>
        </Card>


    </div>

</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './components/charts/chart-theme.json'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'test',
        data () {
            return {
                visible: false,
                option: {
                    tooltip: {
                        trigger: 'item', // item axis none
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        },
                        formatter: '{b0} <br />{a0}: {c0}'
                    },
                    legend: {
                        orient: 'horizontal',
                        bottom:'bottom',
                        data: ['317ab1efc2d5095d-3', '运营商_2','运营商_3', '运营商_4','运营商_5']
                    },
                    grid: {
                        top: '3%',
                        left: '1.2%',
                        right: '1%',
                        bottom: '12%',
                        containLabel: true
                    },
                    xAxis: [{
                            type: 'category',
                            data: ["2018-08-16", "2018-08-17", "2018-08-18", "2018-08-19", "2018-08-20", "2018-08-21", "2018-08-22", "2018-08-23", "2018-08-24", "2018-08-25", "2018-08-26", "2018-08-27", "2018-08-28", "2018-08-29"]
                        }],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '317ab1efc2d5095d-3',
                            type: 'bar',
                            stack: '总量',
                            data: [182, 196, 184, 204, 179, 175, 192, 189, 193, 168, 197, 192, 173, 216]
                        },
                        {
                            name: '运营商_2',
                            type: 'bar',
                            stack: '总量',
                            data: [182, 196, 184, 204, 179, 175, 192, 189, 193, 168, 197, 192, 173, 216]
                        },
                        {
                            name: '运营商_3',
                            type: 'bar',
                            stack: '总量',
                            data: [182, 196, 184, 204, 179, 175, 192, 189, 193, 168, 197, 192, 173, 216]
                        },
                        {
                            name: '运营商_4',
                            type: 'bar',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name: '运营商_5',
                            type: 'bar',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210]
                        },
                    ]
                }

            }
        },
        mounted(){
            this.initChart()
        },
        methods: {

            initChart(){

                this.dom = echarts.init(this.$refs.chartDiv, 'tdTheme')
                this.dom.clear()
                this.dom.setOption(this.option)
            }

        }
    }
</script>

<style scoped>

</style>
