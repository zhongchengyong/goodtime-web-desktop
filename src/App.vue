<template>
    <div id="app2">
        <header-nav></header-nav>
        <router-view></router-view>
        <footer-nav></footer-nav>
    </div>
</template>

<script>
import FooterNav from './component/footer.vue'
import HeaderNav from './component/header.vue'

export default {
  data () {
    return {
      msg: 'Hello Vue!'
    }
  },
  components: { HeaderNav,FooterNav}
}





</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
#main{
    margin: 0 auto;
    width: 100%;
    min-width: 960px;
    max-width: 1920px;
    background-color: #ffffff;
    overflow: auto;
}

</style>
