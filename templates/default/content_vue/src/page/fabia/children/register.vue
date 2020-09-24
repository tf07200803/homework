<template>
    <div>
        <div class="pagecontent">


            <div class="titletxt pb-1 text-center text-lg-left w-100">
                会员注册

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-none d-lg-inline-block d-md-block">姓　　名：</label><input type="text" id="username" name="username" size="36" class="input-text" v-model="username" placeholder="姓　　名"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-none d-lg-inline-block d-md-block">電　　話：</label><input type="tel" id="mobile" name="mobile" size="36" class="input-text" v-model="mobile" placeholder="電　　話"></div>
            </div>
            <div class="row m-0 p-0">


                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-none d-lg-inline-block d-md-block">密　　码：</label><input type="password" id="password" name="password" size="36" class="input-text" v-model="password" placeholder="密　　码"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-none d-lg-inline-block d-md-block">确认密码：</label><input type="password" name="pwdconfirm" id="pwdconfirm" size="36" class="input-text" v-model="pwdconfirm" placeholder="确认密码"></div>

            </div>
            <div class="row m-0 p-0">


                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-none d-lg-inline-block d-md-block">邮　　箱：</label><input type="text" id="email" name="email" size="36" class="input-text" v-model="email" placeholder="邮　　箱"></div>


            </div>
            <div class="row m-0 p-0 w-100">


                <label class="d-none d-lg-inline-block d-md-block invisible">邮　　箱：</label><div class="input col-lg-4 col-md-12 col-sm-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><input type="submit" name="dosubmit" value="提交" @click="registerClick()" class="w-100"></div><br />
            </div>








            <!--<div class="submit"><input type="submit" name="checkusername" value="檢查用戶名稱" @click="checkusername()"></div><br />
            <div class="submit"><input type="submit" name="checkuseremail" value="檢查用戶EMAIL" @click="checkuseremail()"></div><br />-->



        </div>
    </div>
</template>

<script>

    import 'src/style/init.css';
    import $ from "jquery";
    import axios from 'axios';


    export default {
        data(){
            return{
                username:'',
                password:'',
                pwdconfirm:'',
                email:'',
                nickname:'',
                mobile:'',
                registerpath:'index.php?m=member&c=index&a=register',
                checkurl:'index.php?m=tommy&c=login&a=public_checkname_ajax',
                checkemail:'index.php?m=tommy&c=login&a=public_checkemail_ajax',
            }
        },

        mounted(){


        },

        components:{

        },

        computed:{

        },

        methods:{

            checkuseremail(){
                var self=this

                axios({
                    method: 'get',
                    url: self.checkemail,
                    params: {'email':$("#email").val()}
                })
                    .then(function (response) {
                        var res=response.data;
                        if(res.status==-1){
                            //alert(res.msg)
                            Swal.fire(res.msg)

                        }else if(res.status==1){

                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            },


            checkusername(){
                var self=this

                axios({
                    method: 'get',
                    url: self.checkurl,
                    params: {'username':$("#username").val()}
                })
                    .then(function (response) {
                        var res=response.data;
                        if(res.status==-1){
                            //alert(res.msg)
                            Swal.fire(res.msg)
                        }else if(res.status==1){

                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                    });







            },


            registerClick(){
                var self=this;
                var bodyFormData = new FormData();
                bodyFormData.set('webtype', 'vue');
                bodyFormData.set('webname', 'fabia');
                bodyFormData.set('username', self.username);
                bodyFormData.set('password', self.password);
                bodyFormData.set('pwdconfirm', self.pwdconfirm);
                bodyFormData.set('email', self.email);
                bodyFormData.set('nickname', self.nickname);
                bodyFormData.set('mobile', self.mobile);
                bodyFormData.set('dosubmit', '登录');

                axios({
                    method: 'post',
                    url: self.registerpath,
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data' }
                })
                    .then(function (response) {
                        var res=response.data;
                        if(res.status==-1){
                            alert(res.msg)
                        }else if(res.status==1){
                            self.$router.push('/fabia_gmail/'+self.email);
                        }
                        console.log(res)
                    })
                    .catch(function (response) {
                        //handle error
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

    input[type=text] {
        width: 100%;
    }
    input[type=tel] {
        width: 100%;
    }
    input[type=password] {
        width: 100%;
    }

    @media (min-width: 576px) {

    }
    @media (min-width: 768px) {

    }
    @media (min-width: 992px) {
        input[type=text] {
            width: auto;
        }
        input[type=tel] {
            width: auto;
        }
        input[type=password] {
            width: auto;
        }
    }
    @media (min-width: 1200px) {
        input[type=text] {
            width: auto;
        }
        input[type=tel] {
            width: auto;
        }
        input[type=password] {
            width: auto;
        }
    }
    .row>div{
        padding: 0;
    }
</style>
