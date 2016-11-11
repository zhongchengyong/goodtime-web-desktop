<template>
    <div>
        <el-row class="tac">
            <el-col :span="8">
                <h3>任务看板</h3>
                <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark">
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>我的任务</template>
                        <el-menu-item-group title="分组一">
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="分组2">
                            <el-menu-item index="1-3">选项3</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2"><i class="el-icon-menu"></i>项目</el-menu-item>
                    <el-menu-item index="3"><i class="el-icon-date"></i>GoodTime项目</el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        },
    }

</script>
