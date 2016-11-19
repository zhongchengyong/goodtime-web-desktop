<template>
    <div id="app2">
        <div id="main">
            <router-view></router-view>
        </div>
<!--        <footer-nav></footer-nav>-->
    </div>
</template>

<script>
    import FooterNav from './component/Footer.vue'
    import HeaderNav from './component/Header.vue'
    import Note from './component/Note.vue'

    export default {
        data () {
            return {
                msg: 'Hello Vue!'
            }
        },
        components: {HeaderNav, FooterNav,Note}
    }

</script>

<style>
    body {
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    #main {
        margin: 0 auto;
        width: 100%;
        min-width: 960px;
        max-width: 1920px;
        background-color: #ffffff;
        overflow: auto;
    }
</style>
