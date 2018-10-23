<template>
    <div id="d-top-navbar" class="report-control-bar fixed-top-bar">
        <div class="d-tool-bar">
            <div class="inline-block">
                <span class="d-title">事件分析</span>
            </div>
            <span class="sa-h-split"></span>

            <!--<div class="inline-block">-->
                <!--<Dropdown trigger="click" >-->
                    <!--<a href="javascript:void(0)" class="title-color">-->
                        <!--事件-->
                        <!--<Icon type="arrow-down-b"></Icon>-->
                    <!--</a>-->
                    <!--<DropdownMenu slot="list">-->
                        <!--<DropdownItem>事件</DropdownItem>-->
                        <!--<DropdownItem>Session</DropdownItem>-->
                    <!--</DropdownMenu>-->
                <!--</Dropdown>-->
            <!--</div>-->

            <div class="d-float-right d-tool-bar-right">

                <!--<div class="inline-block">-->
                    <!--<a href="javascript:void(0)" @click="onNavSave">-->
                        <!--测试保存-->
                    <!--</a>-->
                <!--</div>-->
                <!--<span class="sa-h-split"></span>-->

                <div class="inline-block">
                    <a href="javascript:void(0)" @click="onAddBookMark">
                        <Icon type="ios-book"></Icon>
                        新增书签
                    </a>
                </div>
                <span class="sa-h-split"></span>
                <div class="inline-block">
                    <Dropdown trigger="click" :visible="bookmarkPlane">

                        <a href="javascript:void(0)" class="title-color">书签列表
                            <Icon type="arrow-down-b"></Icon>
                        </a>
                        <DropdownMenu slot="list" >
                            <DropdownItem
                                v-for="item in getBookmarkList"
                                @click.native="onDropdownItem(item)"
                                :key="item.id">
                                <Tooltip style="white-space: normal" :content="item.conditions.description || '暂无简介'"  max-width="200" placement="left">
                                    <p class="book-title">{{item.conditions.title}}</p>
                                </Tooltip>
                                <span style="float: right">
                                    <!--<span style="color:#ccc; margin-left: 26px;margin-right: 6px; max-width: 200px">{{item.description}}</span>-->
                                    <template v-if="getBookmar_cur_item && getBookmar_cur_item === item.id">
                                        <a href="javascript:void(0)" style="margin-left: 6px"
                                           @click.stop="onNativeIconRefresh(item)">
                                           <font-awesome-icon icon="save" style="font-size: 15px" />
                                        </a>
                                    </template>
                                    <a href="javascript:void(0)" style="margin-left: 6px"
                                       @click.stop="onNativeIconDel(item)">
                                        <Icon size="18" type="trash-a" />
                                    </a>
                                </span>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>

                <span class="sa-h-split"></span>

                <!--<div class="inline-block">-->
                    <!--<Dropdown trigger="click" >-->
                        <!--<a href="javascript:void(0)" class="title-color">-->
                            <!--精确计算-->
                            <!--<Icon type="arrow-down-b"></Icon>-->
                        <!--</a>-->
                        <!--<DropdownMenu slot="list">-->
                            <!--<DropdownItem>精确计算</DropdownItem>-->
                            <!--<DropdownItem>近似计算</DropdownItem>-->
                        <!--</DropdownMenu>-->
                    <!--</Dropdown>-->
                <!--</div>-->
                <!--<span class="sa-h-split"></span>-->

                <div class="inline-block">
                    <a href="javascript:void(0)" @click="onNavRefresh">
                        <Icon type="refresh"></Icon>
                        强制刷新
                    </a>
                </div>

                <!--<span class="sa-h-split"></span>-->

                <!--<div id="d_download" class="inline-block">-->
                    <!--<Tooltip  placement="bottom-start" offset="-16">-->
                        <!--<a href="javascript:void(0)" @click="onNavDownload"><Icon size="18" type="ios-download-outline"/></a>-->
                        <!--<div slot="content">-->
                            <!--<p>下载</p>-->
                            <!--<p>csv</p>-->
                        <!--</div>-->
                    <!--</Tooltip>-->
                <!--</div>-->

            </div>
        </div>

        <Modal
            v-model="is_bookmarkBox"
            title="添加保存查询-请填写保存的名称"
            :mask-closable="false"
            :closable="false"
            width="360">
            <span slot="close"></span>
            <Form label-position="top">
                <FormItem label="名称">
                    <Input v-model="bookmar_titel" size="large" placeholder="请填写名称..." />
                </FormItem>
                <FormItem label="简介">
                    <Input v-model="bookmar_description" size="large" placeholder="请填写简介..." />
                </FormItem>
            </Form>
            <div slot="footer">
                <Button type="primary" size="large" @click="onBoxCancel">取消</Button>
                <Button type="primary" size="large" :disabled="bookmar_titel === ''" @click="onBoxOk">确定</Button>
            </div>
        </Modal>

    </div>
</template>

<script>
    export default {
        name: 'nav-controll',
        data () {
            return {
                sliderVal: '1/64',
                sliderCount: 0,
                sliderNum: 6,
                sliderStep: 1,
                bookmarkPlane: false,
                is_bookmarkBox: false,
                is_bookmarUpdate: false,
                bookmar_titel: '',
                bookmar_description: '',
                bookmar_cur_item: null,
                bookmarkList: [
                    {
                        id: 1001,
                        conditions: {
                            title: '书签第一个书签第一个书签第一个书签第一个',
                            description: '第一个书签简第第一个书签简第一个书签简介介第一个书签简第一个书签简介介一个书签简介介'
                        }
                    },
                    {
                        id: 1002,
                        conditions: {
                            title: '书签第二个',
                            description: ''
                        }
                    },
                    {
                        id: 1003,
                        conditions: {
                            title: '书签第三个',
                            description: '第一个书签简介'
                        }
                    },
                    {
                        id: 1004,
                        conditions: {
                            title: '书签第四个',
                            description: '第一个书签简介'
                        }
                    }

                ]
            }
        },
        computed: {
            getBookmarkList(){
                this.bookmarkList.map(item => {
                    if(item.conditions){
                        if (typeof item.conditions != 'object'){
                            item.conditions =  JSON.parse(item.conditions)
                        }
                    }
                })
                return this.bookmarkList
            },
            getBookmar_cur_item(){
                if(!this.bookmar_cur_item){ return false }
                return this.bookmar_cur_item.id
            }
        },
        mounted(){
            this.init()
        },
        methods: {
            // 初始化 收藏查询 列表
            init(){
                this.$http.get('/admin/condition_bookmark').then(res =>{
                    let data = res.data
                    if(res.status === 200){
                        if(data.code === 0){
                            this.bookmarkList = data.conditions
                        }else {
                            this.$Message.info(data.message)
                        }
                    }
                }).catch(err => {
                    console.log(err)
                })
            },

            onNavSave () {
                this.$emit('on-save')
            },

            onAddBookMark(){
                this.is_bookmarkBox = !this.is_bookmarkBox
                //this.$emit('on-Addbook')
            },

            onNavDownload () {
                console.log('download')
            },

            onNavRefresh () {
                this.$emit('on-refresh');
            },

            onDropdownItem(item){
                this.bookmar_cur_item = item
                this.$emit('on-bookmarkItem', item.conditions)
            },

            onNativeIconRefresh(item){
                this.is_bookmarkBox = true
                this.is_bookmarUpdate = true
                this.bookmar_titel = item.conditions.title
                this.bookmar_description = item.conditions.title
            },

            // 保存查询列表 item 点击事件
            onNativeIconDel(item){
                this.$Modal.confirm({
                    title: '删除提示',
                    content: '<p>是否确定删除</p>',
                    okText: '确定',
                    cancelText: '取消',
                    loading:true,
                    onOk: () => {
                        this.$http.delete('/admin/condition_bookmark/'+ item.id).then(res => {
                            this.bookmarkList.map((obj, index)=>{
                                if (obj === item){this.bookmarkList.splice(index, 1)}
                            })
                            this.$Message.info('删除成功');
                            this.$Modal.remove()
                        }).catch(err => {
                            console.log(err)
                            this.$Modal.remove()
                            this.$Message.error('删除出错');
                        })
                    },
                    onCancel: () => {

                    }
                });
            },

            onBoxOk(){
                if (this.bookmar_titel === '') {
                    return false
                }
                let obj_add = {
                    title: this.bookmar_titel,
                    description: this.bookmar_description,
                    is_update: false
                }
                if (this.is_bookmarUpdate && this.bookmar_cur_item) {
                    let obj_update = {
                        id: this.bookmar_cur_item.id,
                        title: this.bookmar_titel,
                        description: this.bookmar_description,
                        is_update: true
                    }
                    this.$emit('on-Addbook', obj_update)
                } else {
                    this.$emit('on-Addbook', obj_add)
                }
                this.bookmar_titel = ''
                this.bookmar_description = ''
                this.is_bookmarkBox = false
                this.is_bookmarUpdate = false
            },

            onBoxCancel(){
                this.is_bookmarkBox = false
                this.bookmar_titel = ''
                this.bookmar_description = ''
            },

            onSliderChange (vlaue) {
                this.sliderVal = '1/' + vlaue
            }
        }
    }
</script>

<style scoped lang="less">
    .report-control-bar {
        background-color: #348EED;
        width: 100%;
        height: 35px;
        padding: 8px;
        border-bottom: 1px solid rgba(0, 0, 0, .12);
    }

    .fixed-top-bar {
        /*position: fixed;*/
        z-index: 99;
        top: 0px;
        background-color: #fff;
    }

    .d-tool-bar {
        width: 100%;
        color: #475669;
        margin-left: 5px;
        margin-right: 5px;
        &-right {
            margin-right: 16px;
        }
        .inline-block {
            display: inline-block;
            .title-color {
                color: #475669;
            }
        }
    }

    .book-title{
        width: 160px;
        margin-bottom: 0 !important;
        word-break:keep-all;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .book-tip{
        width: 120px;
        overflow: hidden;
    }

    #d_download {
        p {
            margin-bottom: 0 !important;
        }
    }

    .sa-h-split {
        margin-left: 12px;
        margin-right: 12px;
        border-right: 1px solid rgba(0,0,0, .12);
    }

    .d-inline-block-slider {
        width: 100px;
    }



</style>
