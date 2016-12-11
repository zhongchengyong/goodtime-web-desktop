<template>
    <div>
        <header-nav></header-nav>
        <h4 v-show="sysMessages.length==0" v-bind="tip"></h4>
        <div id="links-container">
            <div v-show="sysMessages.length>0">
                <ul>
                    <li v-for="item in sysMessages">
                        <h3> {{item.title}}</h3>
                        <p>{{item.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>

</style>

<script>
    import HeaderNav from './Header.vue'
    
    export default{
        data(){
            return {
                messageUrl:'/goodtime/sysMessage',
                sysMessages:[],
                tip:'暂无系统消息',
            }
        },
        methods:{
            query(){
                let vm = this;
                vm.$http.get(vm.messageUrl).then((response)=>{
                    if(response.body.errorCode==0){
                        if(response.body.data && response.body.data.length>0){
                            vm.sysMessages = response.body.data;
                        }
                    }
                })
            }
        },
        mounted(){
            let vm = this
            vm.query()
        },
        components:{HeaderNav}
    }
</script>