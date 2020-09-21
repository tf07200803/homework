<template>
    <div>
        <div class="pagecontent">

            <div class="col-12 text-center  pb-1"><div class="fas fa-envelope-open-text fa-3x"></div></div>
            <div class="col-12 text-center  pb-1 size18">{{email}}</div>
            <div class="col-12 text-center  pb-1 size16">用戶您好 已送出驗證請至您的信箱驗證</div>



        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'
    import $ from "jquery";
    import axios from 'axios';

    export default {
        data(){
            return{
                loginpath:'index.php?m=member&c=index&a=init&webtype=vue',
                username:'',
                nickname:'',
                email:''
            }
        },

        mounted(){






            const plugin = document.createElement("script");
            plugin.setAttribute(
                "src",
                "https://kit.fontawesome.com/7e66c3158d.js"
            );
            plugin.crossorigin='anonymous';
            plugin.async = true;
            document.head.appendChild(plugin);


            var self=this
            if(this.$route.params.aid=='success'){
                /*axios.get(this.loginpath, {
                }).then(function (response) {
                    var res=response.data;
                    if(res.status==-1){
                        self.$router.push('/fabia/fabia_login');
                    }else if(res.status==1){
                        self.username=res.data.username;
                        self.nickname=res.data.nickname;
                        self.email=res.data.email;
                    }


                }).catch(function (err) {
                    console.log(err);
                });*/
            }



        },

        components:{

        },

        computed:{

        },

        methods:{

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

    .size16{
        font-size: 16px;
    }
    .size18{
        font-size: 18px;
        color:#0f6674;
    }

</style>
