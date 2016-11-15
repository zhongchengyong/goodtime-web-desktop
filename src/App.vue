<template>
    <div id="app2">
        <header-nav></header-nav>
        <ul>
            <li>
                <router-link to="/first">点我跳转到第一页</router-link>
            </li>
            <li>
                <router-link to="/second">点我跳转到第二页</router-link>
            </li>
        </ul>
        <router-view class="view"></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import firstcomponent from './component/firstcomponent.vue'
import secondcomponent from './component/secondcomponent.vue'
import FooterNav from './component/footer.vue'
import HeaderNav from './component/header.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { firstcomponent, secondcomponent,HeaderNav,FooterNav}
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
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
