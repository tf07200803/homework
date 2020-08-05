<template>
    <div>
        <div class="container">

            <div class="header"><button @click="logout()">登出</button></div>



            <div class="content">
                <transition name="router-slid" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>


            <div class="footer"><footer-area></footer-area></div>


        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'
    import $ from "jquery";
    import axios from 'axios';
    import footerArea from '../../components/footer/bog_footer'

    export default {
        data(){
            return{
                logoutpath:'index.php?m=member&c=index&a=logout&webtype=vue'
            }
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
            footerArea,
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
        height: 10%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #0b5c5f;
    }
    .content{
        width: 100%;
        height: 80%;
        overflow: auto;
        position: absolute;
        top: 10%;
    }
    .footer{
        width: 100%;
        height: 10%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #0e3460;
    }
    .router-slid-enter-active, .router-slid-leave-active {
        transition: all .4s;
    }
    .router-slid-enter, .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }

</style>
