<template>
    <div>

        <div class="header menubg">

            <div class="logo sprite"></div>
            <div class="logotitle">{{signinUp}}</div>
            <button @click="sendFather()">傳值給父</button>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){


        },
        props: ['signinUp'],
        computed: {

        },
        methods: {
            sendFather(){
                this.$emit('headerfunction',"fatherIlove");
            }
        },

    }
</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    .header{
        width: 100%;
        height: 90px;
        position: fixed;
    }
    .menubg{
    @include bis('../../images/v5/navbar.png');
    }
    .sprite{
    @include bis('../../images/img/index/sprite.png');
    }
    .logo{
        background-position: -754px -153px;
        width: 150px;
        height: 74px;
        display: inline-block;
    }
    .logotitle{
        display: inline-block;
    }
</style>