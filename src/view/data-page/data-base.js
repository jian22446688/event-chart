export const CHARTS_GROUP_DATE          = 'select_charts_date'
export const CONDITION_GROUP_BY_ARRAY   = 'add_group_by_array'

export const NAME_FILTER_GROUP_MUST     = 'filter_must'

// 筛选条件中 是等于
export const FILTER_GROUP_K_1           = 'k_1'

// 筛选条件中 long 是等于
export const FILTER_GROUP_K_D_1         = 'l_d_1'
export const FILTER_GROUP_K_D_2         = 'l_d_2'
export const FILTER_GROUP_L_D_5         = 'l_d_5' // 区间

export const TOP_TABLE_DIST_A_2         = 'a_2' // 触发用户数
export const TOP_TABLE_DIST_A_3         = 'a_3' // 人均数
export const TOP_TABLE_DIST_Q_5         = 'q_5' // 去重
export const TOP_TABLE_STATS_N_1        = 'n_1' // 最大值 stats
export const TOP_TABLE_STATS_N_2        = 'n_2' // 最小值 stats
export const TOP_TABLE_STATS_N_3        = 'n_3' // 总和 stats
export const TOP_TABLE_STATS_N_4        = 'n_4' // 平均 stats

// 筛选条件中 是不等于
export const FILTER_GROUP_K_2           = 'k_2'


export const defaultType = [
    {value: 'a_2', label: '触发用户数'},
    {value: 'a_3', label: '人均次数'}
]

export const longDateType = [
    {
        value: 'l_d_1',
        label: '等于'
    },
    {
        value: 'l_d_2',
        label: '不等于'
    },
    {
        value: 'l_d_3',
        label: '大于'
    },
    {
        value: 'l_d_4',
        label: '小于'
    },
    {
        value: 'l_d_5',
        label: '区间'
    }
]

export const keywordType = [
    {
        value: 'k_1',
        label: '等于'
    },
    {
        value: 'k_2',
        label: '不等于'
    },
    // {
    //     value: 'k_3',
    //     label: '为空'
    // },
    // {
    //     value: 'k_4',
    //     label: '不为空'
    // },
]

export const booleanType = [
    // {
    //     value: 'b_1',
    //     label: '为真'
    // },
    // {
    //     value: 'b_2',
    //     label: '为假'
    // },

]

export const noValueType = [
    // {
    //     value: 'number',
    //     label: '有值'
    // },
    // {
    //     value: 'nonumber',
    //     label: '没值'
    // }
]

export const numberType = [
    {
        value: 'n_1',
        label: '最大值'
    },
    {
        value: 'n_2',
        label: '最小值'
    },
    {
        value: 'n_3',
        label: '总和'
    },
    {
        value: 'n_4',
        label: '平均'
    },
    // {
    //     value: 'n_5',
    //     label: '人均值'
    // }
]

export const reNumberType = {
    value: 'q_5',
    label: '去重数'
}

export const reportDataListSet = [
    {
        title: '线图',
        value: 'line',
        icon: 'close'
    },
    {
        title: '柱图',
        value: 'piller',
        icon: 'close'
    },
    {
        title: '饼图',
        value: 'cake',
        icon: 'ios-calendar-outline'
    },
]

export const  reportDataListDate = [
    {
        title: '按天',
        value: 'day',
    },
    {
        title: '按周',
        value: 'week',
    },
    {
        title: '按月',
        value: 'month',
    },
]

// 请求参数
export const param = {
    "param":{
        "index_alias":"tv_log",
        "date_range": {"gte": "2018-07-01","lte":"2018-08-01"},
        "distinct":"eth0_mac",
        "stats":"cpucount",
        "group_by":["city","isp"] ,
        "condition":{
            "type":"AND",
            "must":[{"term":{"city":"上海市"}}],
            "must_not":[],
            "range": [{"cpucount":{"gte":4}}]
        }
    }
}

export const getTypeArray = (key)=> {
    let arr = [];
    switch (key) {
        case 'long':
            arr = arr.concat(numberType)
            arr.push(reNumberType)
            break;
        case 'date':
            arr.push(reNumberType)
            break;
        default:
            arr.push(reNumberType)
            break;
    }
    return arr;
}

export const getFiledTypeArray = (key)=> {
    let arr = [];
    switch (key) {
        case 'long':
            arr = arr.concat(longDateType)
            break;
        case 'date':
            arr = arr.concat(longDateType)
            break;
        case 'keyword':
            arr = arr.concat(keywordType)
            break;
        case 'boolean':
            arr = arr.concat(booleanType)
            break;
    }
    arr = arr.concat(noValueType)
    return arr;
}

export const getEventParam = (data) =>{
    let param = {
        param:{
            index_alias:"tv_log",
            date_range: {"gte": data[0],"lte":data[1]},
            distinct:"eth0_mac",
            stats:"cpucount",
            group_by: this.$refs.condition.condData,
            condition:{
                type:"AND",
                must:[{"term":{"city":"上海市"}}],
                must_not:[],
                range: [{"cpucount":{"gte":4}}]
            }
        }
    }

    switch (data.name) {
        case CHARTS_GROUP_DATE:

            break;
    }

    return param
}

/**
 * 获取 top 字段的选择昵称
 * @param val
 * @returns {string}
 */
export const getLabelCascaer = val => {
    let label = ''
    if (val.length > 1) {
        label = val[0] + '的'
        switch (val[1]) {
            case 'q_5': label += '去重数'; break;
            case 'n_1': label += '最大值'; break;
            case 'n_2': label += '最小值'; break;
            case 'n_3': label += '总和'; break;
            case 'n_4': label += '平均'; break;
        }
    }
    if(val.length === 1){
        switch (val[0]) {
            case 'a_1': label = '总次数'; break;
            case 'a_2': label = '触发用户数'; break;
            case 'a_3': label = '人均数'; break;
        }
    }
    return label
}

/**
 * 获取 top 字段的key 值名称 用于获取统计数据
     android_id: "317ab1efc2d5095d"
     android_id_count: 182
     count: 19996
     date: "2018-08-16"
     distinct: 103
     distinct_avg: 1.766990291262136
     lable: "317ab1efc2d5095d"
 * @param val
 */
export const getTopCascaerName = val => {
    let name = 'count'
    if(val.length > 1){
        switch (val[1]) {
            case 'q_5': name = 'distinct'; break;
            case 'n_1': name = 'stat_max'; break;
            case 'n_2': name = 'stat_min'; break;
            case 'n_3': name = 'stat_sum'; break;
            case 'n_4': name = 'stat_avg'; break;
        }
       return name
    }
    if(val.length === 1){
        switch (val[0]) {
            case 'a_1': name = 'count'; break;
            case 'a_2': name = 'distinct_avg'; break;
            case 'a_3': name = 'distinct'; break;
        }
    }
    return name
}


/**
 * 获取 Table Option
 */
export const getTableOption = (data, tablist, col, type='line', count='count') => {
    let option = null;
    let dataObj = data;
    switch (type) {
        case 'line': // 线状图
            let clline = getChartOptionData(data, tablist, col, 'line', count)
            console.log(clline)
            let opbline = {
                tooltip: {trigger: 'item', // item axis none
                    axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                    formatter: '{b0} <br />{a0}: {c0}'
                },
                legend: {orient: 'horizontal', bottom:'bottom', itemHeight: '10', data: clline.legend},
                grid: {top: '3%', left: '1.2%', right: '1%', bottom: '15%', itemGap:0, containLabel: true},
                xAxis: [{type: 'category', data: clline.xAxix}], yAxis: [{type: 'value'}], series: clline.series
            }
            option = opbline
            break;
        case 'piller': // 柱状图
            let clData = getChartOptionData(data, tablist, col, 'bar', count)
            console.log('ccccccccccccccccccccccccccccccccccccccccccccccccccccccc')
            console.log(clData)
            let opb = {
                tooltip: {trigger: 'item', // item axis none
                    axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                    formatter: '{b0} <br />{a0}: {c0}'
                },
                legend: {orient: 'horizontal', bottom:'bottom', data: clData.legend},
                grid: {top: '3%', left: '1.2%', right: '1%', bottom: '15%', containLabel: true},
                xAxis: [{type: 'category', data: clData.xAxix}], yAxis: [{type: 'value'}], series: clData.series
            }
            option = opb
            break;
        case 'cake': // 饼状图
            let obj = []
            let tabs = dataObj.x.map(dv => {
                return tablist.filter(itt => itt.date === dv)
            })
            let tempClo = col.param.group_by.map(val => {return {title: val, key: val}})
            tabs.forEach(tabitem => {
                let oob = {name: '', value: 335}
                let vStr = tempClo[tempClo.length -1].title + '_count'
                if (tabitem.length > 0 ){
                    oob.name = tabitem[tabitem.length - 1]['lable']
                    oob.value = tabitem[tabitem.length - 1][vStr]
                    obj.push(oob)
                }
            })
            let legend = obj.map(_ => _.name)
            let opcake = {tooltip: {trigger: 'item', formatter: '{b} : {c}'},
                legend: {orient: 'vertical', left: 'left', data: legend},
                series: [{
                    type: 'pie', radius: '55%', center: ['50%', '60%'], data: obj,
                    itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'}}}
                ]
            }
            option = opcake
            break;
    }

    return option
}

/**
 * 获取图标的 option
 * @param data
 * @param type
 * @returns Object
 */
export const getOptionType = (data, type = 'line') => {

    return option
}

/**
 * 获取图表数据
 * @param rd
 * @param col
 * @param cType
 * @returns {{series: Array, legend: Array, xAxix: *}}
 */
export const  getChartOptionData = (rdata, tblist, col, cType, count='count') =>{
    console.log('ddddddddddddddddddddddddddddddddddddddddd')
    console.log(tblist)
    let tempClo = col.param.group_by.map(val => {return {title: val, key: val}})
    let data = rdata
    if (!tblist) return
    let tableDa = tblist.map(taDa => {
        let stri = ''
        tempClo.forEach((clotVal, index) => {
            if (index === 0) {stri = taDa[clotVal.title]}
            else {stri += '-' + taDa[clotVal.title]}
        })
        taDa['lable'] = stri
        return taDa
    })
    let cData = data.x.map((val, index) =>{
        return tblist.filter(item => item.date === val)
    })
    let series = []
    let legends = []
    let xAxis = data.x
    cData.forEach((item, index)=> {
        item.forEach(serit => {
            let seritem = {name: serit.lable, type: cType, stack: '总量', data: []}
            seritem.data = cData.map(serVal => {
                // let vStr = tempClo[tempClo.length -1].title + '_count'
                // if (serVal.length > 0 ){return serVal[serVal.length - 1][vStr]}
                if (serVal.length > 0) {
                    return serVal[serVal.length - 1][count]
                }
                return 0
            })
            if (index === 0) {
                legends.push(serit.lable)
                series.push(seritem)
            }

        })
    })
    let cOption = {series: series, legend: legends, xAxix: xAxis}
    return cOption
}

export const getOptionData = (obj, data, tableData, type, countName) => {
    let optionTemp = null
    let dataObj = data;
    let tempClo = obj.$d_Global.c_query.param.group_by.map(val => {return {title: val, key: val}})
    if (!tableData || tableData.length <= 0) return
    let isone = tableData[0]['index']
    if (isone) {
        let cd = {}
        let legend = [tableData[0]['index']]
        Object.keys(tableData[0]).forEach(_t => {
            if (_t !== 'index') cd[_t] = tableData[0][_t]
        })
        let _ctype = ''
        switch (type) {
            case 'line':
                optionTemp = _typeOp(legend, cd,'line')
                break
            case 'piller':
                optionTemp = _typeOp(legend, cd, 'bar')
                break
            case 'cake':
                let _ser = []
                for (let _oit in cd){_ser.push({name: _oit, value: cd[_oit]})}
                let _leg = _ser.map(_ => _.name)
                let opcake = {
                    tooltip: {trigger: 'item', formatter: '{b} : {c}'},
                    legend: {orient: 'vertical', left: 'left', data: _leg},
                    series: [{
                        type: 'pie', radius: '55%', center: ['50%', '60%'], data: _ser,
                        itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'}}}
                    ]
                }
                optionTemp = opcake
                break
        }
    }else {
        // series: series, legend: legends, xAxix: xAxis
        let cData = data.x.map((val, index) =>{
            return tableData.filter(item => item.date === val)
        })

        let tableDa = tableData.map(taDa => {
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
        let series = []
        let legends = []
        let xAxis = data.x
        let cType = 'bar'
        if (type === 'piller')cType = 'bar'
        else if (type === 'line') cType = 'line'
        else if(type === 'cake') cType = 'pie'
        cData.forEach((item, index)=> {
            item.forEach((serit, serindex) => {
                let seritem = {
                    name: serit.lable,
                    type: cType,
                    stack: '总量'
                }
                if (serindex == item.length - 1) {
                    seritem['data'] = cData.map(serVal => {
                        let vStr = 'count'
                        if (countName === 'count'){
                            vStr = tempClo[tempClo.length -1].title + '_count'
                        }else {
                            vStr = countName
                        }
                        if (serVal.length > 0) return serVal[serVal.length - 1][vStr]
                        return 0
                    })
                    legends.push(serit.lable)
                    series.push(seritem)
                }
            })
        })
        // console.log('ggggggggggggggggggggggggggggggggggggggggggggggg')
        // console.log(cData)

        let cOption = {series: series, legend: legends, xAxix: xAxis}
        switch (type) {
            case 'line': // 线状图
                let clline = cOption
                console.log(clline)
                let opblinea = {
                    tooltip: {trigger: 'axis', // item axis none
                        axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                        formatter: '{b0} <br />{a0}: {c0}'
                    },
                    legend: {orient: 'horizontal', bottom:'bottom', itemHeight: '10', data: clline.legend},
                    grid: {top: '3%', left: '1.2%', right: '1%', bottom: '15%', itemGap:0, containLabel: true},
                    xAxis: [{type: 'category', data: clline.xAxix}], yAxis: [{type: 'value'}], series: clline.series
                }
                optionTemp = opblinea
                break;
            case 'piller': // 柱状图
                let clData = cOption

                let opba = {
                    tooltip: {trigger: 'item', // item axis none
                        axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                        formatter: '{b0} <br />{a0}: {c0}'
                    },
                    legend: {orient: 'horizontal', bottom:'bottom', data: clData.legend},
                    grid: {top: '3%', left: '1.2%', right: '1%', bottom: '15%', containLabel: true},
                    xAxis: [{type: 'category', data: clData.xAxix}], yAxis: [{type: 'value'}], series: clData.series
                }
                optionTemp = opba
                break;
            case 'cake': // 饼状图
                let obj = []
                let tabs = dataObj.x.map(dv => {
                    return tableData.filter(itt => itt.date === dv)
                })
                tabs.forEach(tabitem => {
                    let oob = {name: '', value: 335}
                    let vStr = 'count'
                    if (countName === 'count'){
                        vStr = tempClo[tempClo.length -1].title + '_count'
                    }else {
                        vStr = countName
                    }
                    if (tabitem.length > 0 ){
                        oob.name = tabitem[tabitem.length - 1]['lable']
                        oob.value = tabitem[tabitem.length - 1][vStr]
                        obj.push(oob)
                    }
                })
                let legend = obj.map(_ => _.name)
                let opcakeb = {tooltip: {trigger: 'item', formatter: '{b} : {c}'},
                    legend: {orient: 'vertical', left: 'left', data: legend},
                    series: [{
                        type: 'pie', radius: '55%', center: ['50%', '60%'], data: obj,
                        itemStyle: {emphasis: {shadowBlur: 10, shadowOffsetX: 0, shadowColor: 'rgba(0, 0, 0, 0.5)'}}}
                    ]
                }
                optionTemp = opcakeb
                break;
        }
    }

    //获取通用的 option
    function _typeOp(legend, cd, _tstr){
        return {
            tooltip: {trigger: 'item', // item axis none
                axisPointer: {type: 'cross', label: {backgroundColor: '#6a7985'}},
                formatter: '{b0} <br />{a0}: {c0}'
            },
            legend: {orient: 'horizontal', bottom:'bottom', data: legend},
            grid: {top: '3%', left: '1.2%', right: '1%', bottom: '15%', containLabel: true},
            xAxis: [{type: 'category', data: Object.keys(cd)}], yAxis: [{type: 'value'}],
            series: [{name: legend[0], type: _tstr, stack: '总量', data: Object.values(cd)},
            ]
        }
    }
    return optionTemp
}

/**
 * 服务器返回数据解析
 * @param data
 * @param param
 * @returns {Array}
 */
export const getQueryDataParse = (tardata, param) => {
    let data = Object.assign({}, tardata)
    if (!data || !data.x || !data.y) return []
    delete data.x
    delete data.y
    var result = [];
    // date	count	area  area_count	city	city_count	stat_min	stat_max	stat_avg	stat_sum
    if(param.group_by.length > 0) {
        for(var i in data){
            var item = {date: i, count: data[i].count}
            getTerm({...item}, [...param.group_by], {...data[i]}, result);
        }
    } else {
        // 没有分组
        for(var i in data){
            result.push({...data[i], date: i})
        }
    }
    return result
}
const getkey = (data, index = 0)=>{
    return Object.keys(data)[0]
}
const getTerm = (base, group, data, result) => {
    var ng = group.shift()
    if(group.length > 0){
        // 有下一层
        for(var i in data[ng + "_term"]){
            var nb = {...base}
            var cd = {...data[ng + "_term"][i]}
            nb[ng] = getkey(cd) || ""
            var nd = cd[nb[ng]]
            getTerm({...nb}, group.concat(), nd, result)
        }
    } else {
        // 最后一层
        for(var i in data[ng + "_term"]){
            var key = getkey(data[ng + "_term"][i])
            var nb = {...base}
            var d = {...data[ng + "_term"][i][key]}
            nb[ng] = key
            nb[ng + '_count'] = d.count
            delete d.count
            nb = {...nb, ...d}
            result.push(nb)
        }
    }
}

export const chartTableTest = {
    "day": {
        "2018-07-01": {
            "count": 144,
            "area_term": [
                {
                    "华东": {
                        "count": 144,
                        "city_term": [
                            {
                                "上海市": {
                                    "count": 144,
                                    "isp_term": [
                                        {
                                            "电信": {
                                                "count": 80,
                                                "distinct": 46,
                                                "distinct_avg": 1.7391304347826086,
                                                "stat_count": 80,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 320
                                            }
                                        },
                                        {
                                            "移动": {
                                                "count": 32,
                                                "distinct": 19,
                                                "distinct_avg": 1.6842105263157894,
                                                "stat_count": 32,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 128
                                            }
                                        },
                                        {
                                            "鹏博士": {
                                                "count": 21,
                                                "distinct": 8,
                                                "distinct_avg": 2.625,
                                                "stat_count": 21,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 84
                                            }
                                        },
                                        {
                                            "有线通": {
                                                "count": 5,
                                                "distinct": 3,
                                                "distinct_avg": 1.6666666666666667,
                                                "stat_count": 5,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 20
                                            }
                                        },
                                        {
                                            "联通": {
                                                "count": 5,
                                                "distinct": 2,
                                                "distinct_avg": 2.5,
                                                "stat_count": 5,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 20
                                            }
                                        },
                                        {
                                            "阿里巴巴": {
                                                "count": 1,
                                                "distinct": 1,
                                                "distinct_avg": 1,
                                                "stat_count": 1,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 4
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "x": [
            "2018-07-01"
        ],
        "y": [
            144
        ]
    },
    "week": {
        "2018-06-25": {
            "count": 144,
            "area_term": [
                {
                    "华东": {
                        "count": 144,
                        "city_term": [
                            {
                                "上海市": {
                                    "count": 144,
                                    "isp_term": [
                                        {
                                            "电信": {
                                                "count": 80,
                                                "distinct": 46,
                                                "distinct_avg": 1.7391304347826086,
                                                "stat_count": 80,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 320
                                            }
                                        },
                                        {
                                            "移动": {
                                                "count": 32,
                                                "distinct": 19,
                                                "distinct_avg": 1.6842105263157894,
                                                "stat_count": 32,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 128
                                            }
                                        },
                                        {
                                            "鹏博士": {
                                                "count": 21,
                                                "distinct": 8,
                                                "distinct_avg": 2.625,
                                                "stat_count": 21,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 84
                                            }
                                        },
                                        {
                                            "有线通": {
                                                "count": 5,
                                                "distinct": 3,
                                                "distinct_avg": 1.6666666666666667,
                                                "stat_count": 5,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 20
                                            }
                                        },
                                        {
                                            "联通": {
                                                "count": 5,
                                                "distinct": 2,
                                                "distinct_avg": 2.5,
                                                "stat_count": 5,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 20
                                            }
                                        },
                                        {
                                            "阿里巴巴": {
                                                "count": 1,
                                                "distinct": 1,
                                                "distinct_avg": 1,
                                                "stat_count": 1,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 4
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "x": [
            "2018-06-25"
        ],
        "y": [
            144
        ]
    },
    "month": {
        "2018-07-01": {
            "count": 144,
            "area_term": [
                {
                    "华东": {
                        "count": 144,
                        "city_term": [
                            {
                                "上海市": {
                                    "count": 144,
                                    "isp_term": [
                                        {
                                            "电信": {
                                                "count": 80,
                                                "distinct": 46,
                                                "distinct_avg": 1.7391304347826086,
                                                "stat_count": 80,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 320
                                            }
                                        },
                                        {
                                            "移动": {
                                                "count": 32,
                                                "distinct": 19,
                                                "distinct_avg": 1.6842105263157894,
                                                "stat_count": 32,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 128
                                            }
                                        },
                                        {
                                            "鹏博士": {
                                                "count": 21,
                                                "distinct": 8,
                                                "distinct_avg": 2.625,
                                                "stat_count": 21,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 84
                                            }
                                        },
                                        {
                                            "有线通": {
                                                "count": 5,
                                                "distinct": 3,
                                                "distinct_avg": 1.6666666666666667,
                                                "stat_count": 5,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 20
                                            }
                                        },
                                        {
                                            "联通": {
                                                "count": 5,
                                                "distinct": 2,
                                                "distinct_avg": 2.5,
                                                "stat_count": 5,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 20
                                            }
                                        },
                                        {
                                            "阿里巴巴": {
                                                "count": 1,
                                                "distinct": 1,
                                                "distinct_avg": 1,
                                                "stat_count": 1,
                                                "stat_min": 4,
                                                "stat_max": 4,
                                                "stat_avg": 4,
                                                "stat_sum": 4
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        },
        "x": [
            "2018-07-01"
        ],
        "y": [
            144
        ]
    }
}

export const bookTest = {
    "title": "第一个标签",
    "description": "标签简介",
    "data": {
        "top_dataBaseValue": "tv_log",
        "top_cascaderValue": ["a_1"],
        "filter_selectList": [{
            "fieldValue": "android_id",
            "condData": [{
                "value": "k_1",
                "label": "等于"
            }, {
                "value": "k_2",
                "label": "不等于"
            }],
            "condValue": "k_1",
            "inputValue": "",
            "is_enum": false,
            "enumList": null,
            "is_section": false,
            "section_1": 0,
            "section_2": 0
        }, {
            "fieldValue": "android_id",
            "condData": [{
                "value": "k_1",
                "label": "等于"
            }, {
                "value": "k_2",
                "label": "不等于"
            }],
            "condValue": "k_1",
            "inputValue": "",
            "is_enum": false,
            "enumList": null,
            "is_section": false,
            "section_1": 0,
            "section_2": 0
        }, {
            "fieldValue": "area",
            "condData": [{
                "value": "k_1",
                "label": "等于"
            }, {
                "value": "k_2",
                "label": "不等于"
            }],
            "condValue": "k_1",
            "inputValue": "",
            "is_enum": true,
            "enumList": null,
            "is_section": false,
            "section_1": 0,
            "section_2": 0
        }],
        "filter_andOrValue": "and",
        "condi_selectList": [{
            "value": "all",
            "label": "总体",
            "selectValue": "all",
            "selectData": null,
            "selectName": "总体"
        }, {
            "value": "all",
            "label": "总体",
            "selectValue": 1,
            "selectName": "android_id",
            "selectData": null
        }, {
            "value": "all",
            "label": "总体",
            "selectValue": 2,
            "selectName": "anylst_ver",
            "selectData": null
        }],
        "charts_dateValue": ["2018-07-01", "2018-08-31"],
        "charts_chartsType": "piller",
        "charts_modelDate": "day"
    }
}

export const bookMarkStr = {
    "detail_result": {
        "by_fields": ["event.$Anything.$country", "event.$Anything.$os"],
        "series": ["2018-09-16 00:00:00", "2018-09-17 00:00:00", "2018-09-18 00:00:00", "2018-09-19 00:00:00", "2018-09-20 00:00:00", "2018-09-21 00:00:00", "2018-09-22 00:00:00", "2018-09-23 00:00:00", "2018-09-24 00:00:00", "2018-09-25 00:00:00", "2018-09-26 00:00:00", "2018-09-27 00:00:00", "2018-09-28 00:00:00", "2018-09-29 00:00:00", "2018-09-30 00:00:00", "2018-10-01 00:00:00", "2018-10-02 00:00:00", "2018-10-03 00:00:00", "2018-10-04 00:00:00", "2018-10-05 00:00:00", "2018-10-06 00:00:00", "2018-10-07 00:00:00", "2018-10-08 00:00:00", "2018-10-09 00:00:00", "2018-10-10 00:00:00", "2018-10-11 00:00:00", "2018-10-12 00:00:00", "2018-10-13 00:00:00", "2018-10-14 00:00:00", "2018-10-15 00:00:00"],
        "rows": [{
            "values": [
                [6513920],
                [6762408],
                [6548512],
                [6592288],
                [6580592],
                [6660216],
                [6659120],
                [6791208],
                [6821256],
                [6864448],
                [6872520],
                [6705280],
                [6919488],
                [6865856],
                [7013104],
                [7248536],
                [6976400],
                [6918032],
                [7083008],
                [6958880],
                [6894600],
                [6966152],
                [6978552],
                [6964160],
                [7064904],
                [7436072],
                [7359320],
                [7337600],
                [7687672],
                [5864360]
            ],
            "by_values": ["中国", "iOS"]
        }, {
            "values": [
                [6070440],
                [6349776],
                [6225024],
                [6227824],
                [6378632],
                [6416344],
                [6460728],
                [6440600],
                [6493088],
                [6550112],
                [6447216],
                [6401624],
                [6332736],
                [6565440],
                [6754336],
                [6685144],
                [6738928],
                [6592152],
                [6852056],
                [6551656],
                [6807288],
                [6756360],
                [6666384],
                [6682456],
                [6935336],
                [7166488],
                [6803984],
                [6779888],
                [7082184],
                [5464264]
            ],
            "by_values": ["中国", "Android"]
        }, {
            "values": [
                [2207160],
                [2283256],
                [2143656],
                [2058352],
                [2228688],
                [2195632],
                [2104208],
                [2257784],
                [2285408],
                [2383272],
                [2348992],
                [2298760],
                [2326616],
                [2356000],
                [2285472],
                [2248736],
                [2392680],
                [2341072],
                [2334344],
                [2195976],
                [2234256],
                [2417256],
                [2209472],
                [2341680],
                [2369120],
                [2452168],
                [2523536],
                [2405256],
                [2474656],
                [1856096]
            ],
            "by_values": ["美国", "iOS"]
        }, {
            "values": [
                [2082688],
                [1985696],
                [2046872],
                [2054792],
                [2015568],
                [2036392],
                [2132360],
                [2266048],
                [2198816],
                [2311368],
                [2320000],
                [2229800],
                [2204432],
                [2164360],
                [2199144],
                [2203400],
                [2222576],
                [2190024],
                [2194256],
                [2119328],
                [2282936],
                [2183840],
                [2190440],
                [2177632],
                [2295352],
                [2312104],
                [2366552],
                [2308816],
                [2320952],
                [1742536]
            ],
            "by_values": ["美国", "Android"]
        }, {
            "values": [
                [1443576],
                [1470208],
                [1364616],
                [1408496],
                [1482232],
                [1513792],
                [1421640],
                [1498816],
                [1531256],
                [1541456],
                [1424048],
                [1387488],
                [1454048],
                [1516568],
                [1535496],
                [1525688],
                [1559672],
                [1463984],
                [1526728],
                [1492792],
                [1538208],
                [1502032],
                [1510888],
                [1538288],
                [1549728],
                [1632824],
                [1650768],
                [1625616],
                [1673016],
                [1290840]
            ],
            "by_values": ["中国", "Windows"]
        }, {
            "values": [
                [1089344],
                [1009272],
                [1085584],
                [1115640],
                [1139000],
                [1171744],
                [1070832],
                [1152456],
                [1152720],
                [1161568],
                [1107544],
                [1154096],
                [1113912],
                [1071752],
                [1134152],
                [1134224],
                [1098600],
                [1173464],
                [1194440],
                [1206120],
                [1259464],
                [1216168],
                [1170288],
                [1189944],
                [1243960],
                [1262024],
                [1171456],
                [1135312],
                [1278048],
                [999136]
            ],
            "by_values": ["韩国", "iOS"]
        }, {
            "values": [
                [1257304],
                [1115064],
                [1070296],
                [1112336],
                [1088184],
                [1177344],
                [1189176],
                [1116080],
                [1074600],
                [1228352],
                [1136872],
                [1182088],
                [1159144],
                [1197736],
                [1215696],
                [1219136],
                [1319440],
                [1159024],
                [1215408],
                [1162024],
                [1242280],
                [1180968],
                [1207944],
                [1229400],
                [1242064],
                [1234960],
                [1180840],
                [1281816],
                [1341840],
                [968976]
            ],
            "by_values": ["日本", "iOS"]
        }, {
            "values": [
                [984232],
                [1060424],
                [1016512],
                [1057880],
                [1228152],
                [1155800],
                [1043424],
                [1084432],
                [1126808],
                [1104440],
                [1068520],
                [1120232],
                [1124232],
                [1042816],
                [1145096],
                [1124704],
                [1100976],
                [1080016],
                [1157936],
                [1143064],
                [1158272],
                [1147232],
                [1080688],
                [1137368],
                [1156984],
                [1188736],
                [1077296],
                [1129352],
                [1253568],
                [945048]
            ],
            "by_values": ["韩国", "Android"]
        }, {
            "values": [
                [1048816],
                [1079024],
                [1001136],
                [1045480],
                [1102592],
                [1103048],
                [1062552],
                [1083232],
                [1050128],
                [1108920],
                [1109600],
                [1156968],
                [1109360],
                [1114040],
                [1155328],
                [1121440],
                [1207656],
                [1131800],
                [1118760],
                [1141120],
                [1186688],
                [1090400],
                [1102176],
                [1184784],
                [1171296],
                [1223976],
                [1081704],
                [1196600],
                [1278680],
                [888064]
            ],
            "by_values": ["日本", "Android"]
        }, {
            "values": [
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [0],
                [97536],
                [473856],
                [471552]
            ],
            "by_values": ["局域网", "GNU/Linux"]
        }, {
            "values": [
                [426736],
                [445264],
                [461352],
                [449120],
                [460824],
                [480256],
                [497712],
                [488520],
                [513144],
                [520184],
                [514696],
                [492600],
                [483192],
                [484632],
                [517280],
                [514512],
                [548256],
                [552168],
                [525280],
                [462160],
                [472952],
                [559832],
                [524064],
                [531240],
                [524104],
                [543616],
                [545552],
                [499216],
                [567368],
                [418032]
            ],
            "by_values": ["美国", "Windows"]
        }, {
            "values": [
                [283952],
                [233912],
                [220800],
                [244920],
                [247552],
                [252576],
                [233520],
                [274544],
                [243640],
                [241960],
                [246224],
                [280736],
                [243856],
                [273056],
                [238992],
                [256720],
                [244688],
                [230376],
                [277288],
                [243936],
                [251312],
                [231392],
                [273560],
                [285504],
                [265416],
                [281768],
                [279120],
                [257920],
                [248544],
                [244664]
            ],
            "by_values": ["日本", "Windows"]
        }, {
            "values": [
                [248776],
                [230552],
                [231504],
                [219416],
                [275504],
                [264312],
                [250368],
                [256304],
                [256096],
                [223232],
                [233904],
                [256120],
                [281288],
                [227184],
                [242808],
                [257480],
                [256928],
                [238216],
                [259304],
                [262448],
                [277024],
                [305600],
                [269688],
                [304152],
                [302480],
                [299304],
                [278832],
                [251880],
                [292264],
                [220888]
            ],
            "by_values": ["韩国", "Windows"]
        }],
        "num_rows": 13,
        "total_rows": 13,
        "approx": false,
        "truncated": false
    },
    "rollup_result": {
        "by_fields": ["event.$Anything.$country", "event.$Anything.$os"],
        "series": ["2018-09-16 00:00:00"],
        "rows": [{
            "values": [
                [206908464]
            ],
            "by_values": ["中国", "iOS"]
        }, {
            "values": [
                [196678488]
            ],
            "by_values": ["中国", "Android"]
        }, {
            "values": [
                [68559560]
            ],
            "by_values": ["美国", "iOS"]
        }, {
            "values": [
                [65359080]
            ],
            "by_values": ["美国", "Android"]
        }, {
            "values": [
                [45074808]
            ],
            "by_values": ["中国", "Windows"]
        }, {
            "values": [
                [35506392]
            ],
            "by_values": ["日本", "iOS"]
        }, {
            "values": [
                [34462264]
            ],
            "by_values": ["韩国", "iOS"]
        }, {
            "values": [
                [33455368]
            ],
            "by_values": ["日本", "Android"]
        }, {
            "values": [
                [33244240]
            ],
            "by_values": ["韩国", "Android"]
        }, {
            "values": [
                [15023864]
            ],
            "by_values": ["美国", "Windows"]
        }, {
            "values": [
                [7773856]
            ],
            "by_values": ["韩国", "Windows"]
        }, {
            "values": [
                [7632448]
            ],
            "by_values": ["日本", "Windows"]
        }, {
            "values": [
                [1042944]
            ],
            "by_values": ["局域网", "GNU/Linux"]
        }],
        "num_rows": 13,
        "total_rows": 13,
        "approx": false,
        "truncated": false
    },
    "report_update_time": "2018-10-17 08:02:13.025",
    "data_update_time": "2018-10-16 00:00:44.000",
    "data_sufficient_update_time": "2018-10-16 02:00:00.000",
    "truncated": false,
    "sampling_factor": 64
}



// 添加书签:
//     Method: POST form
// URL: http://10.134.163.46/admin/condition_bookmark
//     请求参数:
//         name: 书签名称
// conditions: 书签内容(json字符串)
// 获取书签列表:
//     Method: GET
// URL: http://10.134.163.46/admin/condition_bookmark
//
//     获取指定书签:
//         Method: GET
// URL: http://10.134.163.46/admin/condition_bookmark/{id}
//
//     删除书签:
//         Method: DELETE
// URL: http://10.134.163.46/admin/condition_bookmark/{id}
//
//     更新书签:
//         Method: PUT form
// URL: http://10.134.163.46/admin/condition_bookmark/{id}
//     请求参数:
//         name: 书签名称
// conditions: 书签内容(json字符串)

