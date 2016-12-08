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
        left: 50%;
        height: 60px;
    }
    .sup-message{
        transform: translateY(-30%) translateX(60%);
        background-color: #ff4949;
        border-radius: 10px;
        color: #fff;
        font-size: 12px;
        white-space: nowrap;
        height: 18px;
        line-height: 18px;
        padding: 0 6px;
        text-align: center;
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
            <a class="el-menu-item" @click.prevent="getMessage" title="消息">
                消息
                <sup class="sup-message" v-show="newMsg">new</sup>
            </a>
            <a class=" logout el-menu-item" @click.prevent="logout" title="退出">退出</a>
        </el-menu>
        <div class="line"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                newMsg:true,
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
            },
            getMessage(){
                let vm = this;
                vm.$http.get('goodtime/syssup-Message').then((response)=>{
                    console.log(response.body.data);
                })
            }
        }
    }
</script>
