<template>
    <div id="app">
        <!--<diary></diary>-->
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
    import Diary from './component/Diary.vue'
    import DiaryDetail from './component/DiaryDetail.vue'
    import SysMessage from './component/SysMessage.vue'

    export default {
        data () {
            return {
                msg: 'Hello Vue!'
            }
        },
        components: {HeaderNav, FooterNav,Note,Diary,DiaryDetail,SysMessage}
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
