<template>
    <div class="container">
        <h1>Test</h1>

        <Button type="primary" @click="onCharts">测试</Button>

        <Card shadow>
            <div style="width: 100%; height: 420px" ref="chartDiv"></div>
        </Card>


    </div>

</template>

<script>
    import echarts from 'echarts'
    import tdTheme from './components/charts/chart-theme.json'
    import * as dataType from './data-base'
    echarts.registerTheme('tdTheme', tdTheme)
    export default {
        name: 'test',
        data () {
            return {
                visible: false,
                option: {
                    tooltip: {
                        trigger: 'item', // item axis none
                        axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                        formatter: '{b0} <br />{a0}: {c0}'
                    },
                    legend: {orient: 'horizontal', bottom:'bottom',
                        data: ['317ab1efc2d5095d-3', '运营商_2','运营商_3', '运营商_4','运营商_5']
                    },
                    grid: {top: '3%', left: '1.2%', right: '1%', bottom: '12%', containLabel: true},
                    xAxis: [{type: 'category',
                            data: []
                        }],
                    yAxis: [{type: 'value'}],
                    series: [
                        {
                            name: '运营商_4',
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
            },

            onCharts(){
                let series = []
                let xAxis = []
                let legend = []
                let data = dataType.testTableData
                console.log(data)

                data[0].forEach(item => {
                    let ser = {
                        name: item.lable,
                        type: 'pie',
                        stack: '总量',
                        data: []
                    }
                    legend.push(item.lable)
                    series.push(ser)
                })

                data.forEach((item, index) => {
                    item.forEach((t, i) =>{
                        series[i].data.push(t['android_id_count'])
                    })
                    xAxis.push(item[0].date)
                })

                let option = {
                    tooltip: {
                        trigger: 'item', // item axis none
                            axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                        formatter: '{b0} <br />{a0}: {c0}'
                    },
                    legend: {orient: 'horizontal', bottom:'bottom',
                        data: legend
                    },
                    grid: {top: '3%', left: '1.2%', right: '1%', bottom: '12%', containLabel: true},
                    xAxis: [{type: 'category',
                        data: xAxis
                    }],
                        yAxis: [{type: 'value'}],
                        series: series
                }
                console.log(option)
                this.dom = echarts.init(this.$refs.chartDiv, 'tdTheme')
                this.dom.clear()
                this.dom.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>
