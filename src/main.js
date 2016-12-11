import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


Vue.use(Element)

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.interceptors.push(function(request,next){
    //请求发送前
    next((response)=>{
        if(response.body.errorCode==500){
            // alert('系统错误');
            Vue.$message({
                type: 'error',
                message:'系统错误'
            })
        }else if(response.body.errorCode==401){
            window.location.href='/login';
        }
        return response;
    })
})


import NotFind from './component/404.vue'
import Note from './component/Note.vue'
import Login from './component/Login.vue'
import Diary from './component/Diary.vue'
import DiaryDetail from './component/DiaryDetail.vue'
import SysMessage from './component/SysMessage.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/404',
            component: NotFind
        },
        {
            path: '/note',
            component: Note
        },
        {
            path: '/login',
            component: Login
        },
        {
            path:'/diary',
            component: Diary
        },
        {
            path:'/diaryDetail',
            component: DiaryDetail
        },
        {
            path:'/sysMessage',
            component:SysMessage
        }
    ]
})

router.beforeEach((to,from,next)=>{
    if(to.path != '/login'){
        Vue.http.get('/goodtime/loginState').then((response)=>{
            console.log(response)
            if(response.body.errorCode==401){
                console.log(response)
                var redirect = encodeURIComponent(to.path);
                next.redirect('/login?redirect=' + redirect);
            }
        })
    }
    next()
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
// components: { firstcomponent, secondcomponent }
}).$mount('#app')
