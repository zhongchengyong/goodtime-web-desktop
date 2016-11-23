<template>
    <div>
        <header-nav></header-nav>
        <side-nav></side-nav>
        <div id="links-container">
            {{content}}
            <div id="task-button">
                <el-button size="large" type="primary" icon="plus"></el-button>
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
                content: 'hello vue',
                taskUrl: '/goodtime/task',
                task:[],
            }
        },
        methods: {
            query(){
                let vm = this;
                vm.$http.get(vm.taskUrl)
                .then((response)=>{
                    vm.task=response.body.data;
                    console.log(vm.task);
                },(response)=>{
                });
            },
        },
        mounted(){
            debugger;
            let vm = this;
            vm.query();
        },
        components: {SideNav,HeaderNav}
    }
</script>