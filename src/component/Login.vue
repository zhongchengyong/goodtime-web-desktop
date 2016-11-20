<template>
<div class="middle">
    <div class="login-wrapper">
        <h3>欢迎使用 GoodTime</h3>
    </div>
    <div>
    <form>
        <h4 class="lables">用户</h4>
        <el-input name='userName' size="large" placeholder="请输入用户名"></el-input>
        <h4 class="lables">密码</h4>
        <el-input name='password' type='password' size="large" placeholder="请输入密码"></el-input>
        <el-button id="login" type="primary" size="large" @click='getList'>登录</el-button>
    </form>
    </div>
</div>
</template>

<style>
.login-wrapper{
    content: '';
    width: 300px;
    height: 50px;
    /*background: url(../assets/images/logo.ico)*/
}
.lables{
    text-align: left;
    margin-bottom: 0;
}
#login{
    margin-top: 20px;
}
</style>

<script>
export default{
    data(){
        return {

        }
    },
    methods: {
        getList(){
            this.$http.get('http://localhost:8082/task/todoList').then((response)=>{
                console.log('success');
                console.log(response.body);
            },(response)=>{
                console.log('error');
            });
        }
    }
}
</script>
