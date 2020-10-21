<template>
    <div>
        <div class="pagecontent">


            <input type="hidden" name="forward" id="forward" value="{$forward}">

            <div class="row m-0 p-0">

                <div class="titletxt pb-1 text-center text-lg-left w-100">
                    VN登入平台

                </div>

            </div>

            <div class="row m-0 p-0">
                <div class="input col-lg-4 col-md-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-1 mb-3 mb-lg-0">
                    <input type="text" id="email" name="email" size="22" class="input-text col-lg-12" v-model="email" placeholder="email">
                </div>
                <div class="input col-lg-4 col-md-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-1 mb-3 mb-lg-0">
                    <input type="password" id="password" name="password" size="22" class="input-text col-lg-12" v-model="password" placeholder="password">
                </div>
                <div class="input col-lg-2 col-md-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-1 mb-3 mb-lg-0 text-center text-lg-left">
                    <input type="submit" name="dosubmit" id="dosubmit" value="送出" @click="loginClick()" class="w-100">
                </div>

            </div>

            <div class="row m-0 p-0  justify-content-end text-right">


                    <a class="col-lg-4 col-md-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-1 mb-3 mb-lg-0" href="javascript:void(0)" @click = "gotoAddress('/fabia/fabia_register')">立即註冊</a>


            </div>

            <!--<div class="regbtn mt-2 text-right">


                <a href="javascript:void(0)" @click = "sendClick()">寄送MAIL</a>


            </div>-->


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
                username:'',
                password:'',
                email:'',
                code:'',
                vvcc_codelen:'',
                vvcc_id:'',
                vvcc_src:'',
                cookietime:true,
                loginpath:'index.php?m=member&c=index&a=login',
                sendpath:'index.php?m=member&c=index&a=sendgmail'
            }
        },

        mounted(){
            /*var self=this
            axios.get(this.loginpath, {
            }).then(function (response) {
                var res=response.data;
                self.vvcc_codelen=res.code_len;
                self.vvcc_id=res.id;
                self.vvcc_src=res.src+'api.php?op=checkcode&code_len='+res.code_len;

            }).catch(function (err) {
                console.log(err);
            });*/
        },

        components:{

        },

        computed:{

        },

        methods:{
            gotoAddress(path){
                this.$router.push(path)
            },
            loginClick(){
                var self=this

                    var bodyFormData = new FormData();
                    bodyFormData.set('webname', 'fabia');
                    bodyFormData.set('webtype', 'vue');
                    bodyFormData.set('username', self.username);
                    bodyFormData.set('email', self.email);
                    bodyFormData.set('password', self.password);
                    bodyFormData.set('code', '12345');
                    bodyFormData.set('dosubmit', '登录');


                    axios({
                        method: 'post',
                        url: self.loginpath,
                        data: bodyFormData,
                        headers: {'Content-Type': 'multipart/form-data' }
                    })
                        .then(function (response) {
                            var res=response.data;
                            if(res.status==-1){
                                alert(res.msg)
                            }else if(res.status==1){
                                self.$router.push('/fabia/fabia_home');
                            }else if(res.status==-2){
                                alert(res.msg)
                                self.$router.push('/fabia_regmail/'+self.email);
                            }
                            console.log(res)
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
                        });



            },
            sendClick(){
                var self=this
                axios.get(this.sendpath, {


                }).then(function (response) {

                    console.log(response.data)


                }).catch(function (err) {

                    console.log(err);

                });
            },

            randomCode(){
                var self=this
                self.vvcc_src=self.vvcc_src+'api.php?op=checkcode&code_len='+self.vvcc_codelen+'&'+Math.random();
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




    @media (min-width: 576px) {

    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {

    }
    @media (min-width: 1200px) {

    }

</style>
