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
                content: 'hello vue'
            }
        },
        components: {SideNav,HeaderNav}
    }
</script>