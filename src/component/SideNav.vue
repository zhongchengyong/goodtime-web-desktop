<template>
    <div class="container">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <div class="sideNav">
                            标签<span class="distance"><el-button type="info" icon="plus" @click='addTag'>添加</el-button></span>
                        <!-- 这样也是可以的，属性中使用@click
                            <el-button v-for="i in 2" @click='test'>添加</el-button></span>-->
<!--                    <ul>
                        <li v-for="(tag,index) in tags">
                            <el-menu-item>{{index}}:{{tag.name}}</el-menu-item>
                        </li>
                    </ul>-->
                    <!--<li class="el-menu-item" v-for="tag in tags" @click="test(tag)" :index="tag.id">
                        <a href="javascript:;" @click.prevent="test(tag)">{{tag.groupName}}</a>
                    </li>-->
                        <el-menu-item v-for="(tag,index) in tags" :index="String(tag.id)">
                            <div @click="filterTag(tag.id)">
                                {{tag.groupName}}
                            </div>
                        </el-menu-item>
<!--                    <el-menu-item index="1">导航一</el-menu-item>
                    <el-menu-item index="2">导航二</el-menu-item>
                    <el-menu-item index="3">导航三</el-menu-item>-->
                        <input class="el-input__inner" placeholder="请输入标签" v-model="tag" v-show="adding" @keyup.enter="enterTag"></el-input>
                    </div>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    .distance {
        padding-left: 45%;
    }
    .sideNav{
        padding-left: 20px;
        height: 100vh;
        overflow-y: scroll;
    }

</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
                tags: [],
                adding:false,
                tag:'',
            }
        },
        methods:{
            addTag(){
                let vm = this;
                vm.adding = true;
            },
            enterTag(){
                let vm = this;
                vm.adding = false;
                vm.$http.post('/goodtime/diaryGroup',{groupName:vm.tag}).then((response)=>{
                    if(response.body.errorCode==0){
                        vm.queryTag();
                        vm.tag = '';
                    }
                })
            },
            queryTag(){
                let vm = this;
                vm.$http.get('/goodtime/diaryGroup').then((response)=>{
                    if(response.body.errorCode==0){
                        vm.tags = response.body.data;
                    }
                })
            },
            filterTag(id){
                let vm = this
                vm.$emit('filterTag',id)
            }
        },
        mounted(){
            let vm = this;
            vm.queryTag();
        }
    }
</script>
