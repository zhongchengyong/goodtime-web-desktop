<template>
    <div>
        <el-row class="tac">
            <el-col :span="6">
                <el-menu default-active="2" class="el-menu-vertical-demo">
                    <div class="secondTitle">
                        标签<span class="distance"><el-button type="primary" icon="plus">添加</el-button></span>
                    </div>
                    <el-submenu index="1">
                        <template slot="title">导航一</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">导航二</el-menu-item>
                    <el-menu-item index="3">导航三</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    @import '../css/style.css';

    .distance{
        padding-left: 300px;
    }
    .sideNav {
        max-width: 600px;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        }
    }
</script>
