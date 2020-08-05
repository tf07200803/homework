<template>
    <div>
        <div class="container">



                <div class="user-name clear">
                    <div class="loginInputClass">

                        <input id="username" name="username"   style="width:90%" type="text"  placeholder="用户名" class="loginInput" v-model="username"/>
                    </div>
                </div>
                <div class="password clear">
                    <div class="loginInputClass">

                        <input id="password" name="password" style="width:90%"  type="password"  placeholder="密码" class="loginInput" v-model="password"/>
                    </div>
                </div>
                <div class="pin clear">
                    <div class="loginInputClass">

                        <input id="checkcode" name="checkcode" type="number"  placeholder="验证码" style="width:90%" class="loginInput" v-model="checkcode"/>

                    </div>
                    <div id="validate-mask">

                    </div>
                </div>
                <div class="login-status"></div>
                <button  id="J-form-submit"   class="loginInput" @click="loginClick()" >立即登录</button>





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
                checkcode:'1234',
                vvcookie:'',
                loginpath:'/index.php?controller=ionapi&action=login',
                checkcodepath : "/index.php?controller=ionapi&action=checkcode",
                cmvpath:'index.php?m=tommy&c=index&a=lists'
            }
        },

        mounted(){
            /*var self=this
            axios.get(this.checkcodepath, {


            }).then(function (response) {

                self.vvcookie=response.data.data.vvccookie;


            }).catch(function (err) {

                console.log(err);

            });*/
        },

        components:{

        },

        computed:{

        },

        methods:{

            loginClick(){
                /*var self=this
                var data = {"username":this.username,"password":this.password,"checkcode":this.checkcode ,"vvccookie":this.vvcookie};
                console.log(data)
                axios.post(this.loginpath, data,{
                }).then(function (response) {
                    if(response.data.status==1){
                        localStorage.userinfo = JSON.stringify(response.data.data);
                        localStorage.methodinfo=JSON.stringify(response.data.extra);
                        self.$router.push('/bog/bog_home');
                    }

                }).catch(function (err) {
                    console.log(err);
                });*/
                var self=this
                axios.get(this.cmvpath, {


                }).then(function (response) {

                    console.log(response.data)


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



</style>
