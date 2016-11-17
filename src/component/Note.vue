<template>
    <div>
        <side-nav></side-nav>
    </div>
</template>
<style>
</style>
<script>
    import SideNav from './SideNav.vue'
    export default{
        data(){
            return {
                msg: 'hello vue'
            }
        },
        components: {SideNav}
    }
</script>
