<style scoped>
    #header {
        margin: 0 auto;
        width: 100%;
        min-width: 960px;
        max-width: 1920px;
        background-color: #ffffff;
        height: 60px;
    }
    .message,.logout{
        position: absolute;
        left: 50%;
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
            <el-menu-item index="task">我的任务</el-menu-item>
            <!--<el-badge value="new" class="item">
                <el-button size="small">消息</el-button>
            </el-badge>-->
            <div class="el-badge item">
                <button type="button" class="el-button el-button--default el-button--small">
                    <span>评论</span></button>
                    <sup class="el-badge__content is-fixed">12</sup>
            </div>
            <a class=" logout el-menu-item" @click.prevent="logout" title="退出">退出</a>
        </el-menu>
        <div class="line"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
            }
        },

        methods:{
            logout(){
                let vm =this;
                vm.$http.post('goodtime/logout').then((response)=>{
                    if(response.body.errorCode==0){
                        window.location.href = '/login';
                    }
                })
            }
        }
    }
</script>
