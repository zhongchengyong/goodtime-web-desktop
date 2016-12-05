<template>
    <div>
        <header-nav></header-nav>
        <side-nav v-on:filterTag="queryByTag"></side-nav>
        <div id="diary-container">
            <div>
                <ul>
                    <li v-for="item in diaries.items">
                        <h3>
                            <a :href="'/diaryDetail?id='+item.id">{{item.title}}</a>
                        </h3>
                        <span class="light">{{item.modifyTime}}</span>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </div>
            <div>
                <el-dialog title="新增日志" v-model="dialogFormVisible">
                    <el-form :model="form">
                        <el-tooltip class="item" effect="dark" content="日志标题不能为空，且长度不能超过20个字" placement="bottom">
                            <el-form-item label="日志标题" :label-width="formLabelWidth">
                                <el-input v-model="form.title" auto-complete="off" placeholder="请输入日志标题"></el-input>
                            </el-form-item>
                        </el-tooltip>
                        <strong v-show="errorFlag">日志标题不能为空，且长度不能超过20个字</strong>
                        <el-form-item label="日志内容" :label-width="formLabelWidth">
                            <el-input type="textarea" rows="15" v-model="form.content" placeholder="请输入日志内容">
                            </el-input>
                        </el-form-item>
                        <el-form-item label="日志类别" :label-width="formLabelWidth">
                            <el-radio class="radio" v-model="form.groupRadio" label='1'>学习</el-radio>
                            <el-radio class="radio" v-model="form.groupRadio" label='2'>工作</el-radio>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click.native="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click.native="addDiary()">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
            <div id="task-button">
                <el-button size="large" type="info" icon="plus" @click="dialogFormVisible = true"></el-button>
            </div>
        </div>
    </div>
</template>

<style>
    .light {
        font-size: smaller;
    }

</style>

<script>
    import SideNav from './SideNav.vue'
    import HeaderNav from './Header.vue'
    export default{
        data(){
            return {
                diaryUrl:'/goodtime/diary',
                diaries:{
                    items:[],
                    pageCount:'',
                    totalCount:'',
                    currentPage:'',
                },
                dialogFormVisible: false,
                form:{
                    title:'',
                    content:'',
                    groupRadio:'1',
                },
                formLabelWidth: '120px',
                errorFlag:false,
            }
        },
        methods:{
            query(){
                let vm = this
                vm.$http.get(vm.diaryUrl).then((response)=>{
                    vm.diaries.items=response.body.data.items;
                });
            },
            addDiary(){
                let vm = this;
                if(!vm.valid_title()){
                    vm.errorFlag = true;
                    return;
                }
                vm.$http.post(vm.diaryUrl,{title:vm.form.title,content:vm.form.content,groupId:vm.form.groupRadio}).then((response)=>{
                    if(response.body.errorCode==0){
                        vm.form={
                            title:'',
                            content:'',
                            groupRadio: 1,
                        };
                        vm.$message({
                            message: '添加日志成功',
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
            valid_title(){
                let vm = this;
                if(vm.form.title.trim() && vm.form.title.trim().length<=20){
                    return true;
                }
                return false;
            },
            queryByTag(id){
                let vm = this;
                vm.$http.get('/goodtime/diary/group/'+id).then((response)=>{
                    if(response.body.errorCode==0){
                        vm.diaries.items=response.body.data;
                    }
                })
            }
        },
        mounted(){
            let vm = this;
            vm.query();
        },
        components:{SideNav,HeaderNav}
    }
</script>