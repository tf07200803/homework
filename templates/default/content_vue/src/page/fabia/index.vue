<template>
    <div>
        <div class="_container">
            <div class="header">

                    <div class="headerbody text-center text-lg-left"><div class="logo" @click = "gotoAddress('/fabia/fabia_login')"><img src="../../images/logo.png" class="ml-1 ml-lg-0"></div></div>





            </div>



            <div class="content">
                <transition name="router-slid" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>



        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'
    import $ from "jquery";
    import axios from 'axios';
    import {imgBaseUrl} from 'src/config/env';

    export default {
        data(){
            return{
                image_path: '../',
                imgBaseUrl,
                logoutpath:'index.php?m=member&c=index&a=logout&webtype=vue'
            }
        },
        created(){
            this.image_path = this.$route.query.image_path;

        },
        mounted(){
            const plugin = document.createElement("script");
            plugin.setAttribute(
                "src",
                "https://cdn.jsdelivr.net/npm/sweetalert2@9"
            );
            plugin.async = true;
            document.head.appendChild(plugin);

        },

        components:{
        },

        computed:{

        },

        methods:{
            gotoAddress(path){
                this.$router.push(path)
            },


            logout(){

                var self=this
                axios.get(this.logoutpath, {
                }).then(function (response) {
                    var res=response.data;
                    if(res.status==-1){
                        alert(res.msg)
                    }else if(res.status==1){
                        alert(res.msg)
                        self.$router.push('/phpcmv/phpcmv_login');
                    }

                }).catch(function (err) {
                    console.log(err);
                });
            }
        },
        /*created时，可用data和prop中的数据。
    computed的属性，当在mounted或者dom中使用到时，才会属性的执行代码。
    最后是mouted，可使用前面的数据，并且此时才可以操作dom。
    watch不会再创建阶段自动执行，除了添加立即执行这个配置项。

    作者：Mr_Ma
    链接：https://juejin.im/post/5d4299156fb9a06af92b82ff
    来源：掘金
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。*/
    }

</script>

<style lang="scss" scoped>
    @import 'src/style/mixin';


    .header{
        width: 100%;
        background-color: #000;
        box-shadow: 0px 2px 5px #000;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .headerbody{
        width: 100%;
        position: relative;
        margin: auto;

        max-width: 1000px;
    }
    .content{
        width: 90%;
        position: relative;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .logo {
        display: inline-block;
        width: 20%;
        min-width: 150px;
    }
    .logo>img{
        width: 100%;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .1s;
    }
    .router-slid-enter, .router-slid-leave-active {

        opacity: 0;
    }



</style>
