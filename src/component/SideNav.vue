<template>
    <div>
        <el-row class="tac">
            <el-col :span="6">
                <el-menu default-active="1" class="el-menu-vertical-demo">
                    <div class="secondTitle">
                        标签<span class="distance"><el-button type="primary" icon="plus" @click='add'>添加</el-button></span>
                        <!-- 这样也是可以的，属性中使用@click
                            <el-button v-for="i in 2" @click='test'>添加</el-button></span>-->
                    </div>
<!--                    <ul>
                        <li v-for="(tag,index) in tags">
                            <el-menu-item>{{index}}:{{tag.name}}</el-menu-item>
                        </li>
                    </ul>-->
                    <!--使用:index来标识属性？ -->
                    <el-menu-item v-for="(tag,index) in tags" :index=String(index)>{{tag.name}}</el-menu-item>
<!--                    <el-menu-item index="1">导航一</el-menu-item>
                    <el-menu-item index="2">导航二</el-menu-item>
                    <el-menu-item index="3">导航三</el-menu-item>-->
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<style>
    @import '../css/style.css';

    .distance {
        padding-left: 50%;
    }

    .sideNav {
        max-width: 600px;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: 'hello vue',
                tags: [{name: '工作'}, {name: '运动'}]
            }
        },
        methods:{
            add(){
                this.tags.push({name: '学习'})
            }
        }
    }
</script>
