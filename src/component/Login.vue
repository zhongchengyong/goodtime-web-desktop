<template>
    <div class="middle">
        <div class="login-wrapper">
            <h3>欢迎使用 GoodTime</h3>
        </div>
        <div>
            <div v-show="toggleFlag">
                <div class="el-alert el-alert--error">
                    <div class="el-alert__content"><span class="el-alert__title is-bold">用户名或密码错误!</span>
                    <i class="el-alert__closebtn el-icon-close" @click='toggleState(false)'></i>
                    </div>
                </div>
            </div>
            <form>
                <h4 class="lables">用户</h4>
                <el-input v-model="userName" size="large" placeholder="请输入用户名"></el-input>
                <h4 class="lables">密码</h4>
                <input v-model="password" type="password" placeholder="请输入密码" autocomplete="off" class="el-input__inner" @keyup.enter='login'/>
                <el-button id="login" type="primary" size="large" @click='login'>登录</el-button>
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
            loginUrl:'/goodtime/login',
            toggleFlag: false,
        }
    },
    methods: {
        login(){
            let vm = this;
            vm.$http.post(vm.loginUrl,{userId: vm.userName,password: vm.password})
            .then((response)=>{
                if(response.body.errorCode==0){
                    window.location.href='/note';
                }else{
                    vm.toggleState(true);
                }
            },(response)=>{
                this.$message({
                showClose: true,
                message: '系统错误，请稍后再试！',
                type: 'error'
                });
            });
        },
        toggleState(flag){
            let vm = this;
            vm.toggleFlag = flag;
        },
    }
}
</script>