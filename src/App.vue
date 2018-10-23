<template>
    <div id="app">
        <!--<router-view/>-->
        <Home />
    </div>
</template>

<script>
    import Home from './view/data-page/index'
export default {
  name: 'App',
    components: {
        Home,
    }
}
</script>

<style lang="less">
    .size{
        width: 100%;
        height: 100%;
    }
    html,body {
        .size;
        margin: 0;
        padding: 0;
        font-size: 14px;
    }
    #app {
        .size;
    }
    ul {
        margin-bottom: 0px !important;
    }

    /*修改了拖动条的样式*/
    .ivu-slider .ivu-slider-wrap{
      margin: 4px 0 !important;
      .ivu-slider-button-wrap{
        top: -7px !important;
      }
    }

    /* 修改 iview 全局样式 */
    .ivu-tooltip .ivu-tooltip-inner{
        white-space: normal !important;
    }

    .ivu-select-group-title {
        color: #000 !important;
        font-size: 16px !important;
    }

</style>
