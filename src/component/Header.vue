<style scoped>
    #header {
        margin: 0 auto;
        width: 100%;
        min-width: 960px;
        max-width: 1920px;
        background-color: #ffffff;
        height: 60px;
    }
    .logout{
        position: absolute;
        /*padding-left: 75%;*/
        left: 75%;
        height: 60px;
    }
</style>
<template>
    <div id="header">
        <el-menu  default-active="note" class="el-menu-demo" mode="horizontal" router=true>
            <el-menu-item index="note">笔记中心</el-menu-item>
            <el-submenu index="work">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="diary">日志管理</el-menu-item>
            <a class=" logout el-menu-item" @click.prevent="logout" title="退出">退出</a>
        </el-menu>
        <div class="line"></div>
    </div>
</template>
<script>
    export default{
        methods:{
            logout(){
                window.location.href = '/login'
            }
        }
    }
</script>
