<template>
    <div class="middle">
        <div class="login-wrapper">
            <h3>欢迎使用 GoodTime</h3>
        </div>
        <div>
            <form>
                <h4 class="lables">用户</h4>
                <el-input v-model="userName" size="large" placeholder="请输入用户名"></el-input>
                <h4 class="lables">密码</h4>
                <el-input v-model="password" type='password' size="large" placeholder="请输入密码"></el-input>
                <el-button id="login" type="primary" size="large" @click='getList'>登录</el-button>
            </form>
        </div>
    </div>
</template>

<style>
    .login-wrapper {
        content: '';
        width: 300px;
        height: 50px;
        /*background: url(../assets/images/logo.ico)*/
    }
    
    .lables {
        text-align: left;
        margin-bottom: 0;
    }
    
    #login {
        margin-top: 20px;
    }
</style>

<script>
export default{
    data(){
        return {
            userName:'1',
            password:'',
            loginUrl:'http://localhost:8082/user/login',
        }
    },
    methods: {
        getList(){
            var vm = this;
            vm.$http.post(vm.loginUrl,{userId: vm.userName,password: vm.password})
            .then((response)=>{
                debugger;
                if(response.body.errorCode==0){
                    vm.$http.get('http://localhost:8082/task/todoList').then((response)=>{
                        debugger;
                        console.log(response.body);
                    })
                }else{
                    alert(response.body.errorMsg);
                }
            },(response)=>{
                console.log('error');
            });
        }
    }
}
</script>