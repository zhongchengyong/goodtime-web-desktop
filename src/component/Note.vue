<template>
    <div>
        <header-nav></header-nav>
        <side-nav></side-nav>
        <div id="links-container">
            <div>
                <ul>
                    <li v-for="item in tasks">
                        <h3> {{item.taskName}}</h3>
                        <p>{{item.taskContent}}</p>
                    </li>
                </ul>
            </div>
            <div>
                <el-dialog title="新增任务" v-model="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="任务" :label-width="formLabelWidth">
                            <el-input v-model="form.name" auto-complete="off" placeholder="请输入任务"></el-input>
                        </el-form-item>
                        <el-form-item label="任务内容" :label-width="formLabelWidth">
                            <el-input type="textarea" v-model="form.content" placeholder="请输入任务内容">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="任务分数" :label-width="formLabelWidth">
                        <el-input-number v-model="form.taskScore" :min="1" :max="10"></el-input-number>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click.native="addTask()">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
            <div id="task-button">
                <el-button size="large" type="primary" icon="plus" @click="dialogFormVisible = true"></el-button>
            </div>
        </div>
    </div>
</template>
<style>
    .inline {
        display: inline-block;
    }
</style>
<script>
    import SideNav from './SideNav.vue'
    import HeaderNav from './Header.vue'
    export default{
        data(){
            return {
                taskUrl: '/goodtime/task',
                tasks:[],
                dialogFormVisible: false,
                form:{
                    name:'',
                    content:'',
                    taskScore:1,
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            query(){
                let vm = this;
                vm.$http.get(vm.taskUrl).then((response)=>{
                    vm.tasks=response.body.data;
                });
            },
            addTask(){
                let vm = this;
                vm.$http.post(vm.taskUrl,{taskName:vm.form.name,taskContent:vm.form.content,taskScore:vm.form.taskScore}).then((response)=>{
                    if(response.body.errorCode==0){
                        vm.form={};
                        vm.$message({
                            message: '添加任务成功',
                            type: 'success',
                        });
                        vm.dialogFormVisible = false;
                        vm.query();
                    }else{
                        vm.$message({
                            message: response.body.errorMsg,
                            type: 'error',
                            showClose: true,
                        })
                    }
                });
            },
        },
        mounted(){
            let vm = this;
            vm.query();
        },
        components: {SideNav,HeaderNav}
    }
</script>