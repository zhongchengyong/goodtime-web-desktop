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
                        <el-tooltip  class="item" effect="dark" content="任务不能为空，且长度不能超过20个字" placement="bottom">
                            <el-form-item label="任务" :label-width="formLabelWidth">
                                <el-input v-model="form.name" auto-complete="off" placeholder="请输入任务"></el-input>
                            </el-form-item>
                        </el-tooltip>
                        <strong v-show="errorFlag">任务不能为空，且长度不能超过20个字</strong>
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
#task-button{
    position: fixed;
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
                formLabelWidth: '120px',
                errorFlag:false,
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
                if(!vm.valid_name()){
                    vm.errorFlag = true;
                    return;
                }
                vm.$http.post(vm.taskUrl,{taskName:vm.form.name,taskContent:vm.form.content,taskScore:vm.form.taskScore}).then((response)=>{
                    if(response.body.errorCode==0){
                        vm.form={
                            name:'',
                            content:'',
                            taskScore: 1,
                        };
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
            valid_name(){
                var vm = this;
                if(vm.form.name.trim() && vm.form.name.trim()<=20){
                    return true;
                }
                return false;
            }
        },
        mounted(){
            let vm = this;
            vm.query();
        },
        components: {SideNav,HeaderNav}
    }
</script>