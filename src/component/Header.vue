<style scoped>
    #header {
        margin: 0 auto;
        width: 100%;
        min-width: 960px;
        max-width: 1920px;
        background-color: #ffffff;
        height: 60px;
    }
</style>
<template>
    <div id="header">
        <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" router=true>
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">订单管理</el-menu-item>
        </el-menu>
        <div class="line"></div>
    </div>
</template>
<script>
</script>
