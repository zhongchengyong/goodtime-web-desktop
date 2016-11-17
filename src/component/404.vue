<template>
    <div>
        <div class="center">{{msg}}</div>
    </div>
</template>
<style>
    .center {
        text-align: center;
        width: auto;
        height: 500px;
        margin-top: 300px;
    }
</style>
<script>
    export default{
        data(){
            return {
                msg: '404 not find'
            }
        },
    }
</script>
