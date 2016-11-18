<template>
    <div>
        <side-nav></side-nav>
        <div id="links-container">
            {{content}}
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
    export default{
        data(){
            return {
                content: 'hello vue'
            }
        },
        components: {SideNav}
    }
</script>