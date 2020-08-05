<template>
    <div>
        <div class="container">
            <head-top signin-up='page'></head-top>

            <div class="content">

                {{token}}

                <br>
                我是內頁
            </div>
            <div class="footer">footer</div>
        </div>
    </div>
</template>

<script>
    import global_ from 'src/components/global/global'
    import headTop from '../../components/header/header'
    export default {
        data(){
            return{
                token:global_.token
            }
        },
        components:{
            headTop
        }
    }
</script>

<style scoped>

</style>