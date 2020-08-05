<template>
    <div>
        <div class="container">





                <input type="hidden" name="forward" id="forward" value="{$forward}">
                <h2>登入</h2>
                <div class="input">
                    <label>用戶名：</label><input type="text" id="username" name="username" size="22" class="input-text" v-model="username">
                </div>
                <div class="input">
                    <label>密碼：</label><input type="password" id="password" name="password" size="22" class="input-text" v-model="password">
                </div>
                <div class="input">
                    <label>驗證碼：</label><input type="text" id="code" name="code" size="8" class="input-text" v-model="code"><img v-bind:id="vvcc_id" :src="vvcc_src" @click="randomCode()">
                </div>
                <div class="take">
                    <input type="checkbox" name="cookietime" value="2592000" id="cookietime" v-model="cookietime"> 記住用戶名
                    <a href="index.php?m=member&c=index&a=public_get_password_type&siteid={$siteid}" class="blue">忘記密碼</a><br />
                    <div class="submit"><input type="submit" name="dosubmit" id="dosubmit" value="送出" @click="loginClick()"></div></div>
                <div class="hr"><hr /></div>
                <div class="reg">註冊會員<br />
                    <div class="submit"><input type="button" name="register" value="立即註冊" @click = "gotoAddress('/phpcmv/phpcmv_register')"></div></div>






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
                code:'',
                vvcc_codelen:'',
                vvcc_id:'',
                vvcc_src:'',
                cookietime:true,
                loginpath:'index.php?m=member&c=index&a=login'
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
                    bodyFormData.set('webtype', 'vue');
                    bodyFormData.set('username', self.username);
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
                                self.$router.push('/phpcmv/phpcmv_home');
                            }
                            console.log(res)
                        })
                        .catch(function (response) {
                            //handle error
                            console.log(response);
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



</style>
