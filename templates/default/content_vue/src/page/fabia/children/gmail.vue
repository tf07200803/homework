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
                gmailpath:'index.php?m=member&c=index&a=checkgmail&gid='+this.$route.params.aid,
                sendpath:'index.php?m=member&c=content&a=publish',
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
            if(this.$route.params.aid.indexOf('@')!=-1){

                this.email=this.$route.params.aid;

            }else{
                axios.get(this.gmailpath, {
                }).then(function (response) {
                    var res=response.data;
                    console.log(res)


                    if(res.status==-1){
                        alert(res.msg)
                        self.$router.push('/fabia/fabia_login');
                    }
                    if(res.status==1){
                        alert(res.msg)
                        self.sendClick()
                    }





                }).catch(function (err) {
                    console.log(err);
                });
            }



        },

        components:{

        },

        computed:{

        },

        methods:{
            sendClick:function(){
                var self=this
                var bodyFormData = new FormData();


                bodyFormData.set('webtype', 'vue');
                bodyFormData.set('webname', 'fabia');
                bodyFormData.set('info[catid]', 6);
                bodyFormData.set('info[title]', 'XXX');
                bodyFormData.set('info[content]', 'XXX');
                bodyFormData.set('info[school_name]', '學校姓名');
                bodyFormData.set('info[depart_name]', '老闆名稱');
                bodyFormData.set('info[depart_boss]', '');
                bodyFormData.set('info[depart_contect]', '');
                bodyFormData.set('info[address_city]', '');
                bodyFormData.set('info[address_country]', '');
                bodyFormData.set('info[address_address]', '');
                bodyFormData.set('info[address_code]', '');
                bodyFormData.set('info[depart_code]', '');
                bodyFormData.set('info[depart_tel]', '');
                bodyFormData.set('info[depart_ext]', '');
                bodyFormData.set('info[add_contact]', '');
                bodyFormData.set('dosubmit', '登录');

                axios({
                    method: 'post',
                    url: self.sendpath,
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                    .then(function (response) {
                        var res=response.data;

                        if(res.status==1){
                            alert(res.msg)
                            self.$router.push('/fabia/fabia_home');

                        }else if(res.status==-1){

                            alert(res.msg)
                            self.$router.push('/fabia/fabia_login');

                        }
                        if(res.status==-2){
                            alert(res.msg)
                            self.$router.push('/fabia/fabia_home');
                        }

                        console.log(res)
                    })
                    .catch(function (response) {
                        console.log(response);
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

    .size16{
        font-size: 16px;
    }
    .size18{
        font-size: 18px;
        color:#0f6674;
    }

</style>
