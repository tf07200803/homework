<template>
    <div>
        <div class="pagecontent">

            <div class="titletxt pb-1 text-center text-lg-left w-100">
                學生報名系統

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">學校全名：</label><input type="text" id="school_name" name="school_name" size="36" class="input-text" v-model="username" placeholder="學校全名"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系所全名：</label><input type="text" id="depart_name" name="depart_name" size="36" class="input-text" v-model="username" placeholder="系所全名"></div>
            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系主任/所長：</label><input type="text" id="depart_boss" name="depart_boss" size="36" class="input-text" v-model="username" placeholder="系主任/所長"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系所聯絡人：</label><input type="text" id="depart_contect" name="depart_contect" size="36" class="input-text" v-model="username" placeholder="系所聯絡人"></div>
            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                    <label class="d-block">系所地址：</label>

                    <div class="col-lg-12 col-12">
                        <input type="tel" id="address_code" name="address_code" size="36" class="input-text col-12 col-lg-4" v-model="username" placeholder="郵遞區號">
                        <select id="address_city" name="address_city" class="col-6 col-lg-2">
                            <option value="0">系所地址/縣市</option>
                        </select>
                        <select id="address_country" name="address_country" class="col-6 col-lg-2">
                            <option value="0">系所地址/區鎮</option>
                        </select>
                        <input type="tel" id="address_address" name="address_address" size="36" class="input-text col-12 col-lg-4" v-model="username" placeholder="系所地址/地址">
                    </div>

                </div>

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                    <label class="d-block">系所電話：</label>
                    <input type="tel" id="depart_code" name="depart_code" size="36" class="input-text" v-model="username" placeholder="區碼">
                    <input type="tel" id="depart_tel" name="depart_tel" size="36" class="input-text" v-model="username" placeholder="電話">
                    <input type="tel" id="depart_ext" name="depart_ext" size="36" class="input-text" v-model="username" placeholder="分機">
                </div>

            </div>


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

            var self=this
            axios.get(this.loginpath, {
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
            });

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


</style>
