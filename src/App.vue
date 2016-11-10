<template>
    <div id="app">
        <el-row>
            <el-col :span='4'>
                <div class="grid-content bg-purple-dark"></div>
            </el-col>
            <el-col :span='20'>
                <div class="grid-content bg-purple-light"></div>
            </el-col>
        </el-row>
<!--        <top></top>
        <img src="./assets/logo.png">
        <h1>Hello App!</h1>
        <firstcomponent></firstcomponent>
        <ul>
            <li>
                <router-link to="/first">点我跳转到第一页</router-link>
            </li>
            <li>
                <router-link to="/second">点我跳转到第二页</router-link>
            </li>
        </ul>
        <router-view class="view"></router-view>
        <bottom></bottom>-->
    </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import top from './component/top.vue'
import bottom from './component/bottom.vue'
export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstcomponent, secondcomponent,bottom,top }
}



</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
