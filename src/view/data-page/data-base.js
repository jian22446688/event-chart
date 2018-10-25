export const CHARTS_GROUP_DATE          = 'select_charts_date'
export const CONDITION_GROUP_BY_ARRAY   = 'add_group_by_array'

export const NAME_FILTER_GROUP_MUST     = 'filter_must'

// 筛选条件中 是等于
export const FILTER_GROUP_K_1           = 'k_1'

// 筛选条件中 long 是等于
export const FILTER_GROUP_K_D_1         = 'l_d_1'
export const FILTER_GROUP_K_D_2         = 'l_d_2'
export const FILTER_GROUP_L_D_5         = 'l_d_5' // 区间

export const TOP_TABLE_DIST_A_1         = 'a_1' // 总数
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

export const equalDateType = [
    {
        value: 'l_d_1',
        label: '等于'
    },
    {
        value: 'l_d_2',
        label: '不等于'
    },
]

export const longDateType = [
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
    arr = arr.concat(equalDateType)
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
            case 'a_2': name = 'distinct'; break;
            case 'a_3': name = 'distinct_avg'; break;
        }
    }
    return name
}

/**
 * 获取 字段统计的别名
 * @param n
 * @returns {string}
 */
export const getCountAlias = n => {
    let name = ''
    console.log('tab', n)
    if (n.length > 1){
        switch (n[1]) {
            case 'q_5': name = '去重数'; break;
            case 'n_1': name = '最大值'; break;
            case 'n_2': name = '最小值'; break;
            case 'n_3': name = '总和'; break;
            case 'n_4': name = '平均'; break;
        }
        return name
    }
    if (n.length === 1) {
        switch (n[0]) {
            case 'a_1': name = '总次数'; break;
            case 'a_2': name = '触发用户数'; break;
            case 'a_3': name = '人均数'; break;
        }
        return name
    }
}

export const getCountReSult = (val) =>{
    return val === 'distinct' || val === 'stat_max'
        || val === 'stat_min' || val === 'stat_sum'
        || val === 'stat_avg' || val === 'distinct_avg'
        || val === 'count'

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
        // let xAxis = data.x
        let xAxis = []
        let cType = 'bar'
        if (type === 'piller')cType = 'bar'
        else if (type === 'line') cType = 'line'
        else if(type === 'cake') cType = 'pie'
        cData[0].forEach(item => {
            let ser = {
                name: item.lable,
                type: cType,
                stack: '总量',
                data: []
            }
            legends.push(item.lable)
            series.push(ser)
        })
        cData.forEach((item, index) => {
            item.forEach((t, i) =>{
                let vStr = 'count'
                if (countName === 'count'){
                    vStr = tempClo[tempClo.length -1].title + '_count'
                }else {
                    vStr = countName
                }
                if (series[i]) {
                    series[i].data.push(t[vStr] || 0)
                }
            })
            if (item[0]){
                xAxis.push(item[0].date)
            }
        })
        let cOption = {series: series, legend: legends, xAxix: xAxis}
        switch (type) {
            case 'line': // 线状图
                let clline = cOption
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

/**
 * 保存书签 实例
 * @type {{title: string, description: string, data: {top_dataBaseValue: string, top_cascaderValue: string[], filter_selectList: *[], filter_andOrValue: string, condi_selectList: *[], charts_dateValue: string[], charts_chartsType: string, charts_modelDate: string}}}
 */
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

export const testTableData = [
    [{
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "bbb23534fcb0f5a7",
        "android_id_count": 210,
        "lable": "bbb23534fcb0f5a7"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "317ab1efc2d5095d",
        "android_id_count": 176,
        "lable": "317ab1efc2d5095d"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "d9a22acf99575932",
        "android_id_count": 162,
        "lable": "d9a22acf99575932"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "182d18a2f2602467",
        "android_id_count": 160,
        "lable": "182d18a2f2602467"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "6148020828c0cdee",
        "android_id_count": 139,
        "lable": "6148020828c0cdee"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "4ff179165f41cccf",
        "android_id_count": 126,
        "lable": "4ff179165f41cccf"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "5e846b1d55cff18e",
        "android_id_count": 110,
        "lable": "5e846b1d55cff18e"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "578631cd7e3e9ccb",
        "android_id_count": 102,
        "lable": "578631cd7e3e9ccb"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "10099583a816acef",
        "android_id_count": 85,
        "lable": "10099583a816acef"
    }, {
        "date": "2018-07-01",
        "count": 19979,
        "android_id": "40a3c18604853acd",
        "android_id_count": 85,
        "lable": "40a3c18604853acd"
    }],
    [{
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "182d18a2f2602467",
        "android_id_count": 208,
        "lable": "182d18a2f2602467"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "317ab1efc2d5095d",
        "android_id_count": 204,
        "lable": "317ab1efc2d5095d"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "24fcd286378f790b",
        "android_id_count": 177,
        "lable": "24fcd286378f790b"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "bbb23534fcb0f5a7",
        "android_id_count": 176,
        "lable": "bbb23534fcb0f5a7"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "d9a22acf99575932",
        "android_id_count": 128,
        "lable": "d9a22acf99575932"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "254e6598096fac8e",
        "android_id_count": 120,
        "lable": "254e6598096fac8e"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "578631cd7e3e9ccb",
        "android_id_count": 114,
        "lable": "578631cd7e3e9ccb"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "5e846b1d55cff18e",
        "android_id_count": 111,
        "lable": "5e846b1d55cff18e"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "1bfe692a7fb45210",
        "android_id_count": 107,
        "lable": "1bfe692a7fb45210"
    }, {
        "date": "2018-07-02",
        "count": 19994,
        "android_id": "e75520ca005701af",
        "android_id_count": 107,
        "lable": "e75520ca005701af"
    }],
    [{
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "317ab1efc2d5095d",
        "android_id_count": 166,
        "lable": "317ab1efc2d5095d"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "d9a22acf99575932",
        "android_id_count": 160,
        "lable": "d9a22acf99575932"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "5e846b1d55cff18e",
        "android_id_count": 150,
        "lable": "5e846b1d55cff18e"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "182d18a2f2602467",
        "android_id_count": 149,
        "lable": "182d18a2f2602467"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "bbb23534fcb0f5a7",
        "android_id_count": 143,
        "lable": "bbb23534fcb0f5a7"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "75f0cf697a7ed88b",
        "android_id_count": 142,
        "lable": "75f0cf697a7ed88b"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "4ff179165f41cccf",
        "android_id_count": 125,
        "lable": "4ff179165f41cccf"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "578631cd7e3e9ccb",
        "android_id_count": 101,
        "lable": "578631cd7e3e9ccb"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "10099583a816acef",
        "android_id_count": 100,
        "lable": "10099583a816acef"
    }, {
        "date": "2018-07-03",
        "count": 19997,
        "android_id": "a1817e914551e5b2",
        "android_id_count": 99,
        "lable": "a1817e914551e5b2"
    }],
    [{
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "182d18a2f2602467",
        "android_id_count": 180,
        "lable": "182d18a2f2602467"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "d9a22acf99575932",
        "android_id_count": 176,
        "lable": "d9a22acf99575932"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "bbb23534fcb0f5a7",
        "android_id_count": 164,
        "lable": "bbb23534fcb0f5a7"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "317ab1efc2d5095d",
        "android_id_count": 162,
        "lable": "317ab1efc2d5095d"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "5e846b1d55cff18e",
        "android_id_count": 129,
        "lable": "5e846b1d55cff18e"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "4ff179165f41cccf",
        "android_id_count": 117,
        "lable": "4ff179165f41cccf"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "1c910ab51fe526e8",
        "android_id_count": 114,
        "lable": "1c910ab51fe526e8"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "40a3c18604853acd",
        "android_id_count": 105,
        "lable": "40a3c18604853acd"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "b25d95f503eb18b",
        "android_id_count": 93,
        "lable": "b25d95f503eb18b"
    }, {
        "date": "2018-07-04",
        "count": 19998,
        "android_id": "10099583a816acef",
        "android_id_count": 90,
        "lable": "10099583a816acef"
    }],
    [{
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "317ab1efc2d5095d",
        "android_id_count": 288,
        "lable": "317ab1efc2d5095d"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "182d18a2f2602467",
        "android_id_count": 225,
        "lable": "182d18a2f2602467"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "bbb23534fcb0f5a7",
        "android_id_count": 183,
        "lable": "bbb23534fcb0f5a7"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "d9a22acf99575932",
        "android_id_count": 156,
        "lable": "d9a22acf99575932"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "4ff179165f41cccf",
        "android_id_count": 146,
        "lable": "4ff179165f41cccf"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "5e846b1d55cff18e",
        "android_id_count": 109,
        "lable": "5e846b1d55cff18e"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "1c910ab51fe526e8",
        "android_id_count": 104,
        "lable": "1c910ab51fe526e8"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "578631cd7e3e9ccb",
        "android_id_count": 103,
        "lable": "578631cd7e3e9ccb"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "40a3c18604853acd",
        "android_id_count": 92,
        "lable": "40a3c18604853acd"
    }, {
        "date": "2018-07-05",
        "count": 19987,
        "android_id": "a1817e914551e5b2",
        "android_id_count": 91,
        "lable": "a1817e914551e5b2"
    }]
]

// 接口
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

