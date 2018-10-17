<template>
    <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
export default {
  data: function() {
    return {
      columns1: [
      ],
      data1: [
      ],
      real: JSON.parse(`{
        "day": {
            "2018-07-01": {
                "count": 3088,
                "area_term": [
                    {
                        "华东": {
                            "count": 3088,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 409,
                                        "stat_count": 409,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1227
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 279,
                                        "stat_count": 279,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 837
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 206,
                                        "stat_count": 206,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 618
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 179,
                                        "stat_count": 179,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 537
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 125,
                                        "stat_count": 125,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 375
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 109,
                                        "stat_count": 109,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 327
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 78,
                                        "stat_count": 78,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 234
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-02": {
                "count": 3411,
                "area_term": [
                    {
                        "华东": {
                            "count": 3411,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 434,
                                        "stat_count": 434,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1302
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 282,
                                        "stat_count": 282,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 846
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 227,
                                        "stat_count": 227,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 681
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 185,
                                        "stat_count": 185,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 555
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 137,
                                        "stat_count": 137,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 411
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 133,
                                        "stat_count": 133,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 399
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 109,
                                        "stat_count": 109,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 327
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-03": {
                "count": 3208,
                "area_term": [
                    {
                        "华东": {
                            "count": 3208,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 452,
                                        "stat_count": 452,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1356
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 228,
                                        "stat_count": 228,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 684
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 224,
                                        "stat_count": 224,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 672
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 180,
                                        "stat_count": 180,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 540
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 156,
                                        "stat_count": 156,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 468
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 137,
                                        "stat_count": 137,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 411
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 103,
                                        "stat_count": 103,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 309
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 103,
                                        "stat_count": 103,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 309
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 97,
                                        "stat_count": 97,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 291
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 85,
                                        "stat_count": 85,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 255
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-04": {
                "count": 2984,
                "area_term": [
                    {
                        "华东": {
                            "count": 2984,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 434,
                                        "stat_count": 434,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1302
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 222,
                                        "stat_count": 222,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 666
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 168,
                                        "stat_count": 168,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 504
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 126,
                                        "stat_count": 126,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 378
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 98,
                                        "stat_count": 98,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 294
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-05": {
                "count": 2957,
                "area_term": [
                    {
                        "华东": {
                            "count": 2957,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 397,
                                        "stat_count": 397,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1191
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 203,
                                        "stat_count": 203,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 609
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 200,
                                        "stat_count": 200,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 600
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 151,
                                        "stat_count": 151,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 453
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 140,
                                        "stat_count": 140,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 420
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 128,
                                        "stat_count": 128,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 384
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 119,
                                        "stat_count": 119,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 357
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-06": {
                "count": 2797,
                "area_term": [
                    {
                        "华东": {
                            "count": 2797,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 429,
                                        "stat_count": 429,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1287
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 199,
                                        "stat_count": 199,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 597
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 175,
                                        "stat_count": 175,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 525
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 161,
                                        "stat_count": 161,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 483
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 130,
                                        "stat_count": 130,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 390
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 114,
                                        "stat_count": 114,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 342
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 108,
                                        "stat_count": 108,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 324
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 105,
                                        "stat_count": 105,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 315
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 93,
                                        "stat_count": 93,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 279
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-07": {
                "count": 3086,
                "area_term": [
                    {
                        "华东": {
                            "count": 3086,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 447,
                                        "stat_count": 447,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1341
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 262,
                                        "stat_count": 262,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 786
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 253,
                                        "stat_count": 253,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 759
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 187,
                                        "stat_count": 187,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 561
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 126,
                                        "stat_count": 126,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 378
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 107,
                                        "stat_count": 107,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 321
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 96,
                                        "stat_count": 96,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 288
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 86,
                                        "stat_count": 86,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 258
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-08": {
                "count": 3015,
                "area_term": [
                    {
                        "华东": {
                            "count": 3015,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 471,
                                        "stat_count": 471,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1413
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 211,
                                        "stat_count": 211,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 633
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 209,
                                        "stat_count": 209,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 627
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 199,
                                        "stat_count": 199,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 597
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 99,
                                        "stat_count": 99,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 297
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 95,
                                        "stat_count": 95,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 285
                                    }
                                },
                                {
                                    "合肥市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-09": {
                "count": 2798,
                "area_term": [
                    {
                        "华东": {
                            "count": 2798,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 407,
                                        "stat_count": 407,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1221
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 200,
                                        "stat_count": 200,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 600
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 157,
                                        "stat_count": 157,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 471
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 154,
                                        "stat_count": 154,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 462
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                },
                                {
                                    "温州市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 78,
                                        "stat_count": 78,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 234
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-10": {
                "count": 2900,
                "area_term": [
                    {
                        "华东": {
                            "count": 2900,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 398,
                                        "stat_count": 398,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1194
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 265,
                                        "stat_count": 265,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 795
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 218,
                                        "stat_count": 218,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 654
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 186,
                                        "stat_count": 186,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 558
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 147,
                                        "stat_count": 147,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 441
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 100,
                                        "stat_count": 100,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 300
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-11": {
                "count": 2792,
                "area_term": [
                    {
                        "华东": {
                            "count": 2792,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 394,
                                        "stat_count": 394,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1182
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 223,
                                        "stat_count": 223,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 669
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 172,
                                        "stat_count": 172,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 516
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 170,
                                        "stat_count": 170,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 510
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 120,
                                        "stat_count": 120,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 360
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 115,
                                        "stat_count": 115,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 345
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-12": {
                "count": 3022,
                "area_term": [
                    {
                        "华东": {
                            "count": 3022,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 446,
                                        "stat_count": 446,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1338
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 221,
                                        "stat_count": 221,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 663
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 193,
                                        "stat_count": 193,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 579
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 139,
                                        "stat_count": 139,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 417
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 129,
                                        "stat_count": 129,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 387
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 126,
                                        "stat_count": 126,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 378
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 82,
                                        "stat_count": 82,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 246
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-13": {
                "count": 3118,
                "area_term": [
                    {
                        "华东": {
                            "count": 3118,
                            "city_term": [
                                {
                                    "厦门市": {
                                        "count": 401,
                                        "stat_count": 401,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1203
                                    }
                                },
                                {
                                    "上海市": {
                                        "count": 373,
                                        "stat_count": 373,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1119
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 178,
                                        "stat_count": 178,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 534
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 164,
                                        "stat_count": 164,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 492
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 150,
                                        "stat_count": 150,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 450
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 99,
                                        "stat_count": 99,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 297
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 95,
                                        "stat_count": 95,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 285
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-14": {
                "count": 2915,
                "area_term": [
                    {
                        "华东": {
                            "count": 2915,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 397,
                                        "stat_count": 397,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1191
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 216,
                                        "stat_count": 216,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 648
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 199,
                                        "stat_count": 199,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 597
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 192,
                                        "stat_count": 192,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 576
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 122,
                                        "stat_count": 122,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 366
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 105,
                                        "stat_count": 105,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 315
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 95,
                                        "stat_count": 95,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 285
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-15": {
                "count": 2905,
                "area_term": [
                    {
                        "华东": {
                            "count": 2905,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 449,
                                        "stat_count": 449,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1347
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 239,
                                        "stat_count": 239,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 717
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 227,
                                        "stat_count": 227,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 681
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 127,
                                        "stat_count": 127,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 381
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 112,
                                        "stat_count": 112,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 336
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 105,
                                        "stat_count": 105,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 315
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 98,
                                        "stat_count": 98,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 294
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 92,
                                        "stat_count": 92,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 276
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 90,
                                        "stat_count": 90,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 270
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-16": {
                "count": 2972,
                "area_term": [
                    {
                        "华东": {
                            "count": 2972,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 438,
                                        "stat_count": 438,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1314
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 246,
                                        "stat_count": 246,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 738
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 174,
                                        "stat_count": 174,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 522
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 144,
                                        "stat_count": 144,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 432
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 138,
                                        "stat_count": 138,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 414
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 98,
                                        "stat_count": 98,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 294
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 92,
                                        "stat_count": 92,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 276
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-17": {
                "count": 2857,
                "area_term": [
                    {
                        "华东": {
                            "count": 2857,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 396,
                                        "stat_count": 396,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1188
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 194,
                                        "stat_count": 194,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 582
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 149,
                                        "stat_count": 149,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 447
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 146,
                                        "stat_count": 146,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 438
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 126,
                                        "stat_count": 126,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 378
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 125,
                                        "stat_count": 125,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 375
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 120,
                                        "stat_count": 120,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 360
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 90,
                                        "stat_count": 90,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 270
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-18": {
                "count": 2792,
                "area_term": [
                    {
                        "华东": {
                            "count": 2792,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 346,
                                        "stat_count": 346,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1038
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 204,
                                        "stat_count": 204,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 612
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 144,
                                        "stat_count": 144,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 432
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 138,
                                        "stat_count": 138,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 414
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 134,
                                        "stat_count": 134,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 402
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 130,
                                        "stat_count": 130,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 390
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 121,
                                        "stat_count": 121,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 363
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-19": {
                "count": 2657,
                "area_term": [
                    {
                        "华东": {
                            "count": 2657,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 324,
                                        "stat_count": 324,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 972
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 207,
                                        "stat_count": 207,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 621
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 197,
                                        "stat_count": 197,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 591
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 145,
                                        "stat_count": 145,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 435
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 136,
                                        "stat_count": 136,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 408
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 116,
                                        "stat_count": 116,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 348
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 111,
                                        "stat_count": 111,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 333
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 103,
                                        "stat_count": 103,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 309
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 77,
                                        "stat_count": 77,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 231
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-20": {
                "count": 2616,
                "area_term": [
                    {
                        "华东": {
                            "count": 2616,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 319,
                                        "stat_count": 319,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 957
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 207,
                                        "stat_count": 207,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 621
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 153,
                                        "stat_count": 153,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 459
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 132,
                                        "stat_count": 132,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 396
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 122,
                                        "stat_count": 122,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 366
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 116,
                                        "stat_count": 116,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 348
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 98,
                                        "stat_count": 98,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 294
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 93,
                                        "stat_count": 93,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 279
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 90,
                                        "stat_count": 90,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 270
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-21": {
                "count": 3085,
                "area_term": [
                    {
                        "华东": {
                            "count": 3085,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 422,
                                        "stat_count": 422,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1266
                                    }
                                },
                                {
                                    "宜春市": {
                                        "count": 298,
                                        "stat_count": 298,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 894
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 244,
                                        "stat_count": 244,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 732
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 208,
                                        "stat_count": 208,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 624
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 178,
                                        "stat_count": 178,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 534
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 133,
                                        "stat_count": 133,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 399
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 98,
                                        "stat_count": 98,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 294
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 95,
                                        "stat_count": 95,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 285
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 75,
                                        "stat_count": 75,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 225
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-22": {
                "count": 2884,
                "area_term": [
                    {
                        "华东": {
                            "count": 2884,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 453,
                                        "stat_count": 453,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1359
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 250,
                                        "stat_count": 250,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 750
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 183,
                                        "stat_count": 183,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 549
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 167,
                                        "stat_count": 167,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 501
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 137,
                                        "stat_count": 137,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 411
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-23": {
                "count": 2691,
                "area_term": [
                    {
                        "华东": {
                            "count": 2691,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 383,
                                        "stat_count": 383,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1149
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 173,
                                        "stat_count": 173,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 519
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 150,
                                        "stat_count": 150,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 450
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 136,
                                        "stat_count": 136,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 408
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 129,
                                        "stat_count": 129,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 387
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 111,
                                        "stat_count": 111,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 333
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 109,
                                        "stat_count": 109,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 327
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 97,
                                        "stat_count": 97,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 291
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 97,
                                        "stat_count": 97,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 291
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-24": {
                "count": 2693,
                "area_term": [
                    {
                        "华东": {
                            "count": 2693,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 335,
                                        "stat_count": 335,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1005
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 200,
                                        "stat_count": 200,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 600
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 186,
                                        "stat_count": 186,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 558
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 137,
                                        "stat_count": 137,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 411
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 125,
                                        "stat_count": 125,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 375
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 90,
                                        "stat_count": 90,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 270
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 85,
                                        "stat_count": 85,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 255
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-25": {
                "count": 2625,
                "area_term": [
                    {
                        "华东": {
                            "count": 2625,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 394,
                                        "stat_count": 394,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1182
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 228,
                                        "stat_count": 228,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 684
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 160,
                                        "stat_count": 160,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 480
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 154,
                                        "stat_count": 154,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 462
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 87,
                                        "stat_count": 87,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 261
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 86,
                                        "stat_count": 86,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 258
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 85,
                                        "stat_count": 85,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 255
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 75,
                                        "stat_count": 75,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 225
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-26": {
                "count": 2653,
                "area_term": [
                    {
                        "华东": {
                            "count": 2653,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 362,
                                        "stat_count": 362,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1086
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 207,
                                        "stat_count": 207,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 621
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 179,
                                        "stat_count": 179,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 537
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 119,
                                        "stat_count": 119,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 357
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 115,
                                        "stat_count": 115,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 345
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 103,
                                        "stat_count": 103,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 309
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 92,
                                        "stat_count": 92,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 276
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-27": {
                "count": 2553,
                "area_term": [
                    {
                        "华东": {
                            "count": 2553,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 326,
                                        "stat_count": 326,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 978
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 211,
                                        "stat_count": 211,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 633
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 187,
                                        "stat_count": 187,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 561
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 159,
                                        "stat_count": 159,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 477
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 86,
                                        "stat_count": 86,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 258
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 82,
                                        "stat_count": 82,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 246
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 75,
                                        "stat_count": 75,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 225
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-28": {
                "count": 0,
                "area_term": []
            },
            "2018-07-29": {
                "count": 0,
                "area_term": []
            },
            "2018-07-30": {
                "count": 0,
                "area_term": []
            },
            "2018-07-31": {
                "count": 2101,
                "area_term": [
                    {
                        "华东": {
                            "count": 2101,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 205,
                                        "stat_count": 205,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 615
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 164,
                                        "stat_count": 164,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 492
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 134,
                                        "stat_count": 134,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 402
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 116,
                                        "stat_count": 116,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 348
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 63,
                                        "stat_count": 63,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 189
                                    }
                                },
                                {
                                    "温州市": {
                                        "count": 59,
                                        "stat_count": 59,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 177
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 59,
                                        "stat_count": 59,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 177
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 57,
                                        "stat_count": 57,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 171
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-01": {
                "count": 0,
                "area_term": []
            },
            "2018-08-02": {
                "count": 0,
                "area_term": []
            },
            "2018-08-03": {
                "count": 0,
                "area_term": []
            },
            "2018-08-04": {
                "count": 0,
                "area_term": []
            },
            "2018-08-05": {
                "count": 0,
                "area_term": []
            },
            "2018-08-06": {
                "count": 0,
                "area_term": []
            },
            "2018-08-07": {
                "count": 0,
                "area_term": []
            },
            "2018-08-08": {
                "count": 0,
                "area_term": []
            },
            "2018-08-09": {
                "count": 0,
                "area_term": []
            },
            "2018-08-10": {
                "count": 0,
                "area_term": []
            },
            "2018-08-11": {
                "count": 0,
                "area_term": []
            },
            "2018-08-12": {
                "count": 0,
                "area_term": []
            },
            "2018-08-13": {
                "count": 2422,
                "area_term": [
                    {
                        "华东": {
                            "count": 2422,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 272,
                                        "stat_count": 272,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 816
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 174,
                                        "stat_count": 174,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 522
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 129,
                                        "stat_count": 129,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 387
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 126,
                                        "stat_count": 126,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 378
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 85,
                                        "stat_count": 85,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 255
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 75,
                                        "stat_count": 75,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 225
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 74,
                                        "stat_count": 74,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 222
                                    }
                                },
                                {
                                    "盐城市": {
                                        "count": 72,
                                        "stat_count": 72,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 216
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-14": {
                "count": 2683,
                "area_term": [
                    {
                        "华东": {
                            "count": 2683,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 377,
                                        "stat_count": 377,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1131
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 241,
                                        "stat_count": 241,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 723
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 176,
                                        "stat_count": 176,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 528
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 131,
                                        "stat_count": 131,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 393
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 130,
                                        "stat_count": 130,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 390
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 124,
                                        "stat_count": 124,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 372
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 112,
                                        "stat_count": 112,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 336
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                },
                                {
                                    "湖州市": {
                                        "count": 74,
                                        "stat_count": 74,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 222
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-15": {
                "count": 2496,
                "area_term": [
                    {
                        "华东": {
                            "count": 2496,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 363,
                                        "stat_count": 363,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1089
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 181,
                                        "stat_count": 181,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 543
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 135,
                                        "stat_count": 135,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 405
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 118,
                                        "stat_count": 118,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 354
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 112,
                                        "stat_count": 112,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 336
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 97,
                                        "stat_count": 97,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 291
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 81,
                                        "stat_count": 81,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 243
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 70,
                                        "stat_count": 70,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 210
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-16": {
                "count": 2569,
                "area_term": [
                    {
                        "华东": {
                            "count": 2569,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 361,
                                        "stat_count": 361,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1083
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 202,
                                        "stat_count": 202,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 606
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 166,
                                        "stat_count": 166,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 498
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 124,
                                        "stat_count": 124,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 372
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 111,
                                        "stat_count": 111,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 333
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 108,
                                        "stat_count": 108,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 324
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 100,
                                        "stat_count": 100,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 300
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 97,
                                        "stat_count": 97,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 291
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                },
                                {
                                    "温州市": {
                                        "count": 77,
                                        "stat_count": 77,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 231
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-17": {
                "count": 2484,
                "area_term": [
                    {
                        "华东": {
                            "count": 2484,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 331,
                                        "stat_count": 331,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 993
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 188,
                                        "stat_count": 188,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 564
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 158,
                                        "stat_count": 158,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 474
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 129,
                                        "stat_count": 129,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 387
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 93,
                                        "stat_count": 93,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 279
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 78,
                                        "stat_count": 78,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 234
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 69,
                                        "stat_count": 69,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 207
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 68,
                                        "stat_count": 68,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 204
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-18": {
                "count": 2619,
                "area_term": [
                    {
                        "华东": {
                            "count": 2619,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 306,
                                        "stat_count": 306,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 918
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 214,
                                        "stat_count": 214,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 642
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 202,
                                        "stat_count": 202,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 606
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 172,
                                        "stat_count": 172,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 516
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 105,
                                        "stat_count": 105,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 315
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 98,
                                        "stat_count": 98,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 294
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 93,
                                        "stat_count": 93,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 279
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 92,
                                        "stat_count": 92,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 276
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 82,
                                        "stat_count": 82,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 246
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-19": {
                "count": 2578,
                "area_term": [
                    {
                        "华东": {
                            "count": 2578,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 432,
                                        "stat_count": 432,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1296
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 211,
                                        "stat_count": 211,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 633
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 192,
                                        "stat_count": 192,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 576
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 136,
                                        "stat_count": 136,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 408
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 122,
                                        "stat_count": 122,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 366
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 88,
                                        "stat_count": 88,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 264
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 84,
                                        "stat_count": 84,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 252
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 76,
                                        "stat_count": 76,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 228
                                    }
                                },
                                {
                                    "盐城市": {
                                        "count": 70,
                                        "stat_count": 70,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 210
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-20": {
                "count": 2397,
                "area_term": [
                    {
                        "华东": {
                            "count": 2397,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 331,
                                        "stat_count": 331,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 993
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 175,
                                        "stat_count": 175,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 525
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 145,
                                        "stat_count": 145,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 435
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 129,
                                        "stat_count": 129,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 387
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 123,
                                        "stat_count": 123,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 369
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 74,
                                        "stat_count": 74,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 222
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 70,
                                        "stat_count": 70,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 210
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 65,
                                        "stat_count": 65,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 195
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-21": {
                "count": 2525,
                "area_term": [
                    {
                        "华东": {
                            "count": 2525,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 409,
                                        "stat_count": 409,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1227
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 222,
                                        "stat_count": 222,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 666
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 143,
                                        "stat_count": 143,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 429
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 127,
                                        "stat_count": 127,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 381
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 127,
                                        "stat_count": 127,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 381
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 88,
                                        "stat_count": 88,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 264
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 70,
                                        "stat_count": 70,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 210
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-22": {
                "count": 2448,
                "area_term": [
                    {
                        "华东": {
                            "count": 2448,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 353,
                                        "stat_count": 353,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1059
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 187,
                                        "stat_count": 187,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 561
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 170,
                                        "stat_count": 170,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 510
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 131,
                                        "stat_count": 131,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 393
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 117,
                                        "stat_count": 117,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 351
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 102,
                                        "stat_count": 102,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 306
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 94,
                                        "stat_count": 94,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 282
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 85,
                                        "stat_count": 85,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 255
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 73,
                                        "stat_count": 73,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 219
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 72,
                                        "stat_count": 72,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 216
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-23": {
                "count": 2355,
                "area_term": [
                    {
                        "华东": {
                            "count": 2355,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 269,
                                        "stat_count": 269,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 807
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 195,
                                        "stat_count": 195,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 585
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 148,
                                        "stat_count": 148,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 444
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 137,
                                        "stat_count": 137,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 411
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 135,
                                        "stat_count": 135,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 405
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 63,
                                        "stat_count": 63,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 189
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-24": {
                "count": 2351,
                "area_term": [
                    {
                        "华东": {
                            "count": 2351,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 341,
                                        "stat_count": 341,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1023
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 184,
                                        "stat_count": 184,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 552
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 146,
                                        "stat_count": 146,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 438
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 144,
                                        "stat_count": 144,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 432
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 100,
                                        "stat_count": 100,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 300
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 76,
                                        "stat_count": 76,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 228
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 73,
                                        "stat_count": 73,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 219
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 73,
                                        "stat_count": 73,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 219
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 71,
                                        "stat_count": 71,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 213
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 70,
                                        "stat_count": 70,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 210
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-25": {
                "count": 2619,
                "area_term": [
                    {
                        "华东": {
                            "count": 2619,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 409,
                                        "stat_count": 409,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1227
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 195,
                                        "stat_count": 195,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 585
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 195,
                                        "stat_count": 195,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 585
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 125,
                                        "stat_count": 125,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 375
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 115,
                                        "stat_count": 115,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 345
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 92,
                                        "stat_count": 92,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 276
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 91,
                                        "stat_count": 91,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 273
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                },
                                {
                                    "扬州市": {
                                        "count": 71,
                                        "stat_count": 71,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 213
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-26": {
                "count": 2498,
                "area_term": [
                    {
                        "华东": {
                            "count": 2498,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 345,
                                        "stat_count": 345,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1035
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 235,
                                        "stat_count": 235,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 705
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 201,
                                        "stat_count": 201,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 603
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 181,
                                        "stat_count": 181,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 543
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 103,
                                        "stat_count": 103,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 309
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 93,
                                        "stat_count": 93,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 279
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 78,
                                        "stat_count": 78,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 234
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 67,
                                        "stat_count": 67,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 201
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 67,
                                        "stat_count": 67,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 201
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-27": {
                "count": 2475,
                "area_term": [
                    {
                        "华东": {
                            "count": 2475,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 326,
                                        "stat_count": 326,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 978
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 238,
                                        "stat_count": 238,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 714
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 224,
                                        "stat_count": 224,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 672
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 109,
                                        "stat_count": 109,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 327
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 100,
                                        "stat_count": 100,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 300
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 77,
                                        "stat_count": 77,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 231
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 76,
                                        "stat_count": 76,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 228
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 72,
                                        "stat_count": 72,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 216
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-28": {
                "count": 2365,
                "area_term": [
                    {
                        "华东": {
                            "count": 2365,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 389,
                                        "stat_count": 389,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1167
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 147,
                                        "stat_count": 147,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 441
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 144,
                                        "stat_count": 144,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 432
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 113,
                                        "stat_count": 113,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 339
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 110,
                                        "stat_count": 110,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 330
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 89,
                                        "stat_count": 89,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 267
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 76,
                                        "stat_count": 76,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 228
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 76,
                                        "stat_count": 76,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 228
                                    }
                                },
                                {
                                    "扬州市": {
                                        "count": 71,
                                        "stat_count": 71,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 213
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-29": {
                "count": 2491,
                "area_term": [
                    {
                        "华东": {
                            "count": 2491,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 375,
                                        "stat_count": 375,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1125
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 225,
                                        "stat_count": 225,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 675
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 161,
                                        "stat_count": 161,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 483
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 133,
                                        "stat_count": 133,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 399
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 123,
                                        "stat_count": 123,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 369
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 109,
                                        "stat_count": 109,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 327
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 92,
                                        "stat_count": 92,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 276
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 79,
                                        "stat_count": 79,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 237
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 78,
                                        "stat_count": 78,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 234
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 76,
                                        "stat_count": 76,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 228
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "x": [
                "2018-07-01",
                "2018-07-02",
                "2018-07-03",
                "2018-07-04",
                "2018-07-05",
                "2018-07-06",
                "2018-07-07",
                "2018-07-08",
                "2018-07-09",
                "2018-07-10",
                "2018-07-11",
                "2018-07-12",
                "2018-07-13",
                "2018-07-14",
                "2018-07-15",
                "2018-07-16",
                "2018-07-17",
                "2018-07-18",
                "2018-07-19",
                "2018-07-20",
                "2018-07-21",
                "2018-07-22",
                "2018-07-23",
                "2018-07-24",
                "2018-07-25",
                "2018-07-26",
                "2018-07-27",
                "2018-07-28",
                "2018-07-29",
                "2018-07-30",
                "2018-07-31",
                "2018-08-01",
                "2018-08-02",
                "2018-08-03",
                "2018-08-04",
                "2018-08-05",
                "2018-08-06",
                "2018-08-07",
                "2018-08-08",
                "2018-08-09",
                "2018-08-10",
                "2018-08-11",
                "2018-08-12",
                "2018-08-13",
                "2018-08-14",
                "2018-08-15",
                "2018-08-16",
                "2018-08-17",
                "2018-08-18",
                "2018-08-19",
                "2018-08-20",
                "2018-08-21",
                "2018-08-22",
                "2018-08-23",
                "2018-08-24",
                "2018-08-25",
                "2018-08-26",
                "2018-08-27",
                "2018-08-28",
                "2018-08-29"
            ],
            "y": [
                3088,
                3411,
                3208,
                2984,
                2957,
                2797,
                3086,
                3015,
                2798,
                2900,
                2792,
                3022,
                3118,
                2915,
                2905,
                2972,
                2857,
                2792,
                2657,
                2616,
                3085,
                2884,
                2691,
                2693,
                2625,
                2653,
                2553,
                0,
                0,
                0,
                2101,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                2422,
                2683,
                2496,
                2569,
                2484,
                2619,
                2578,
                2397,
                2525,
                2448,
                2355,
                2351,
                2619,
                2498,
                2475,
                2365,
                2491
            ]
        },
        "week": {
            "2018-06-25": {
                "count": 3088,
                "area_term": [
                    {
                        "华东": {
                            "count": 3088,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 409,
                                        "stat_count": 409,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1227
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 279,
                                        "stat_count": 279,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 837
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 206,
                                        "stat_count": 206,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 618
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 179,
                                        "stat_count": 179,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 537
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 125,
                                        "stat_count": 125,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 375
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 109,
                                        "stat_count": 109,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 327
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 104,
                                        "stat_count": 104,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 312
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 101,
                                        "stat_count": 101,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 303
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 83,
                                        "stat_count": 83,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 249
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 78,
                                        "stat_count": 78,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 234
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-02": {
                "count": 21458,
                "area_term": [
                    {
                        "华东": {
                            "count": 21458,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 3064,
                                        "stat_count": 3064,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 9192
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 1607,
                                        "stat_count": 1607,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4821
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 1407,
                                        "stat_count": 1407,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4221
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 1230,
                                        "stat_count": 1230,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3690
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 858,
                                        "stat_count": 858,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2574
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 794,
                                        "stat_count": 794,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2382
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 775,
                                        "stat_count": 775,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2325
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 674,
                                        "stat_count": 674,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2022
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 637,
                                        "stat_count": 637,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1911
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 604,
                                        "stat_count": 604,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1812
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-09": {
                "count": 20450,
                "area_term": [
                    {
                        "华东": {
                            "count": 20450,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 2864,
                                        "stat_count": 2864,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 8592
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 1443,
                                        "stat_count": 1443,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4329
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 1338,
                                        "stat_count": 1338,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4014
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 1209,
                                        "stat_count": 1209,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3627
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 831,
                                        "stat_count": 831,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2493
                                    }
                                },
                                {
                                    "厦门市": {
                                        "count": 752,
                                        "stat_count": 752,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2256
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 738,
                                        "stat_count": 738,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2214
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 655,
                                        "stat_count": 655,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1965
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 625,
                                        "stat_count": 625,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1875
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 576,
                                        "stat_count": 576,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1728
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-16": {
                "count": 19863,
                "area_term": [
                    {
                        "华东": {
                            "count": 19863,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 2698,
                                        "stat_count": 2698,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 8094
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 1542,
                                        "stat_count": 1542,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4626
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 1192,
                                        "stat_count": 1192,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3576
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 1062,
                                        "stat_count": 1062,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3186
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 926,
                                        "stat_count": 926,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2778
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 737,
                                        "stat_count": 737,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2211
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 726,
                                        "stat_count": 726,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2178
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 666,
                                        "stat_count": 666,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1998
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 561,
                                        "stat_count": 561,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1683
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 550,
                                        "stat_count": 550,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1650
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-23": {
                "count": 13215,
                "area_term": [
                    {
                        "华东": {
                            "count": 13215,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 1800,
                                        "stat_count": 1800,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 5400
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 1019,
                                        "stat_count": 1019,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3057
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 856,
                                        "stat_count": 856,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2568
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 702,
                                        "stat_count": 702,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2106
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 557,
                                        "stat_count": 557,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1671
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 512,
                                        "stat_count": 512,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1536
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 468,
                                        "stat_count": 468,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1404
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 449,
                                        "stat_count": 449,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1347
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 394,
                                        "stat_count": 394,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1182
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 384,
                                        "stat_count": 384,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1152
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-07-30": {
                "count": 2101,
                "area_term": [
                    {
                        "华东": {
                            "count": 2101,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 205,
                                        "stat_count": 205,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 615
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 164,
                                        "stat_count": 164,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 492
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 134,
                                        "stat_count": 134,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 402
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 116,
                                        "stat_count": 116,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 348
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 80,
                                        "stat_count": 80,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 240
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 63,
                                        "stat_count": 63,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 189
                                    }
                                },
                                {
                                    "温州市": {
                                        "count": 59,
                                        "stat_count": 59,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 177
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 59,
                                        "stat_count": 59,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 177
                                    }
                                },
                                {
                                    "台州市": {
                                        "count": 57,
                                        "stat_count": 57,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 171
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-06": {
                "count": 0,
                "area_term": []
            },
            "2018-08-13": {
                "count": 17851,
                "area_term": [
                    {
                        "华东": {
                            "count": 17851,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 2442,
                                        "stat_count": 2442,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 7326
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 1356,
                                        "stat_count": 1356,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4068
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 1131,
                                        "stat_count": 1131,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3393
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 953,
                                        "stat_count": 953,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2859
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 706,
                                        "stat_count": 706,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2118
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 697,
                                        "stat_count": 697,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2091
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 672,
                                        "stat_count": 672,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2016
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 609,
                                        "stat_count": 609,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1827
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 582,
                                        "stat_count": 582,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1746
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 472,
                                        "stat_count": 472,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1416
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-20": {
                "count": 17193,
                "area_term": [
                    {
                        "华东": {
                            "count": 17193,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 2457,
                                        "stat_count": 2457,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 7371
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 1393,
                                        "stat_count": 1393,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4179
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 1130,
                                        "stat_count": 1130,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3390
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 976,
                                        "stat_count": 976,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2928
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 741,
                                        "stat_count": 741,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2223
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 675,
                                        "stat_count": 675,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 2025
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 641,
                                        "stat_count": 641,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1923
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 555,
                                        "stat_count": 555,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1665
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 528,
                                        "stat_count": 528,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1584
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 472,
                                        "stat_count": 472,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1416
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-27": {
                "count": 7331,
                "area_term": [
                    {
                        "华东": {
                            "count": 7331,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 1090,
                                        "stat_count": 1090,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3270
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 596,
                                        "stat_count": 596,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1788
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 505,
                                        "stat_count": 505,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1515
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 348,
                                        "stat_count": 348,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 1044
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 322,
                                        "stat_count": 322,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 966
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 301,
                                        "stat_count": 301,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 903
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 265,
                                        "stat_count": 265,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 795
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 260,
                                        "stat_count": 260,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 780
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 230,
                                        "stat_count": 230,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 690
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 216,
                                        "stat_count": 216,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 648
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "x": [
                "2018-06-25",
                "2018-07-02",
                "2018-07-09",
                "2018-07-16",
                "2018-07-23",
                "2018-07-30",
                "2018-08-06",
                "2018-08-13",
                "2018-08-20",
                "2018-08-27"
            ],
            "y": [
                3088,
                21458,
                20450,
                19863,
                13215,
                2101,
                0,
                17851,
                17193,
                7331
            ]
        },
        "month": {
            "2018-07-01": {
                "count": 80175,
                "area_term": [
                    {
                        "华东": {
                            "count": 80175,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 11040,
                                        "stat_count": 11040,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 33120
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 6054,
                                        "stat_count": 6054,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 18162
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 5052,
                                        "stat_count": 5052,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 15156
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 4525,
                                        "stat_count": 4525,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 13575
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 3386,
                                        "stat_count": 3386,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 10158
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 2980,
                                        "stat_count": 2980,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 8940
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 2811,
                                        "stat_count": 2811,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 8433
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 2491,
                                        "stat_count": 2491,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 7473
                                    }
                                },
                                {
                                    "宁波市": {
                                        "count": 2270,
                                        "stat_count": 2270,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 6810
                                    }
                                },
                                {
                                    "常州市": {
                                        "count": 2268,
                                        "stat_count": 2268,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 6804
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "2018-08-01": {
                "count": 42375,
                "area_term": [
                    {
                        "华东": {
                            "count": 42375,
                            "city_term": [
                                {
                                    "上海市": {
                                        "count": 5989,
                                        "stat_count": 5989,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 17967
                                    }
                                },
                                {
                                    "杭州市": {
                                        "count": 3345,
                                        "stat_count": 3345,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 10035
                                    }
                                },
                                {
                                    "苏州市": {
                                        "count": 2766,
                                        "stat_count": 2766,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 8298
                                    }
                                },
                                {
                                    "南京市": {
                                        "count": 2277,
                                        "stat_count": 2277,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 6831
                                    }
                                },
                                {
                                    "无锡市": {
                                        "count": 1739,
                                        "stat_count": 1739,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 5217
                                    }
                                },
                                {
                                    "泉州市": {
                                        "count": 1669,
                                        "stat_count": 1669,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 5007
                                    }
                                },
                                {
                                    "漳州市": {
                                        "count": 1607,
                                        "stat_count": 1607,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4821
                                    }
                                },
                                {
                                    "福州市": {
                                        "count": 1429,
                                        "stat_count": 1429,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 4287
                                    }
                                },
                                {
                                    "南通市": {
                                        "count": 1251,
                                        "stat_count": 1251,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3753
                                    }
                                },
                                {
                                    "嘉兴市": {
                                        "count": 1169,
                                        "stat_count": 1169,
                                        "stat_min": 3,
                                        "stat_max": 3,
                                        "stat_avg": 3,
                                        "stat_sum": 3507
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "x": [
                "2018-07-01",
                "2018-08-01"
            ],
            "y": [
                80175,
                42375
            ]
        }
      }`)
    }
  },
  mounted: function(){
    var params = JSON.parse(`{
        "param":{
          "index_alias":"tv_log",
          "date_range":{"gte":"2018-07-01","lte":"2018-08-31"},
          "group_by":["area","city"],
          "condition":{
            "type":"",
            "must":[],
            "must_not":[],
            "range":[]
          },
          "stats":"anylst_ver"
        }
      }`)
    this.columns1 = this.parseHead(params.param)
    this.data1 = this.parseData({...this.real.day}, params.param)
  },
  methods: {
    parseHead: function(param){
        var head = [{
            title: "date",
            key: "date"
        },{
            title: "count",
            key: "count"
        }]

        for(var i of param.group_by){
            head = [...head, {
                title: i,
                key: i
            },{
                title: i + '_count',
                key: i + '_count'
            }]
        }

        if(param.distinct){
            head = [...head, {
                title: 'distinct',
                key: 'distinct'
            },{
                title: 'distinct_avg',
                key: 'distinct_avg'
            }]
        }

        if(param.stats) {
            head = [...head, {
                title: 'stat_min',
                key: 'stat_min'
            },{
                title: 'stat_max',
                key: 'stat_max'
            },{
                title: 'stat_avg',
                key: 'stat_avg'
            },{
                title: 'stat_sum',
                key: 'stat_sum'
            }]
        }
        return head
    },
    parseData: function(data, param){
        delete data.x
        delete data.y
        var result = [];
        // date	count	area  area_count	city	city_count	stat_min	stat_max	stat_avg	stat_sum
        if(param.group_by.length > 0) {
            for(var i in data){
                var item = {date: i, count: data[i].count}
                this.term({...item}, [...param.group_by], {...data[i]}, result);
            }
        } else {
            // 没有分组
            for(var i in data){
                result.push({...data[i], date: i})
            }
        }
        return result
    },
    getKey: function(data, index = 0){
        return Object.keys(data)[0]
    },
    term: function(base, group, data, result){
        var ng = group.shift()
        if(group.length > 0){
            // 有下一层
            for(var i in data[ng + "_term"]){
                var nb = {...base}
                var cd = data[ng + "_term"][i]
                nb[ng] = this.getKey(cd)
                nb[ng + '_count'] = cd[nb[ng]].count
                var nd = {...cd[nb[ng]]}
                this.term({...nb}, group, nd, result)
            }
        } else {
            // 最后一层
            for(var i in data[ng + "_term"]){
                var key = this.getKey(data[ng + "_term"][i])
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
  }
}
</script>
