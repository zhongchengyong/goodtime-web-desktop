<template>
    <div>
        <span>日志编辑：</span>
        <div id="main-div">
            <el-form label-position="top" :model="form" class="demo-form-stacked">
                <el-form-item label="标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input type="textarea" :rows=15 v-model="form.content"></el-input>
                </el-form-item>
                <el-form-item label="日志类别">
                    <el-radio class="radio" v-model="form.groupId" label='1'>学习</el-radio>
                    <el-radio class="radio" v-model="form.groupId" label='2'>工作</el-radio>
                </el-form-item>
                <el-button type="primary" @click.native='saveDiary()'>保存</el-button>
            </el-form>
        </div>
    </div>
</template>

<style>
#main-div{
    width: 800px;
    margin: 0 auto;
}
</style>

<script>
import { getQueryString } from '../core/Utils';
    export default{
        data () {
            return {
                id : getQueryString('id'),
                formLabelWidth:'500px',
                form:{
                    title:'',
                    content:'',
                    modifyTime:'',
                    groupId:'1',
                },
                diaryDetailUrl:'/goodtime/diary/',
            }
        },
        methods:{
            saveDiary(){
                let vm = this;
                vm.$http.patch(vm.diaryDetailUrl+vm.id,
                {title:vm.form.title,content:vm.form.content,groupId:vm.form.groupId})
                .then((response)=>{
                    debugger;
                    console.log(response.headers)
                    if(response.body.errorCode==0){
                        vm.$message({
                            message: '修改日志成功',
                            type: 'success',
                        });
                    }
                }),(response)=>{
                    vm.$message({
                        message:'网络错误',
                        type:'error',
                    })
                }
            },
            query(){
                let vm = this;
                vm.$http.get(vm.diaryDetailUrl+vm.id).then((response)=>{
                    if(response.body.errorCode==0){
                        vm.form = response.body.data;
                        vm.form.groupId = response.body.data.groupId.toString();
                    }
                });
            }
        },
        mounted(){
            let vm = this;
            vm.$http.get('/goodtime/loginState').then((data)=>{
                if(data.body.errorCode==401){
                    window.location.href='/login';
                    return;
                }
            })
            vm.query();
        },
    }
</script>