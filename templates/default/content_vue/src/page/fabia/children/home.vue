<template>
    <div>
        <div class="pagecontent">

            <div class="titletxt pb-1 text-center text-lg-left w-100">
                學生報名系統

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">學校全名：</label><input type="text" id="school_name" name="school_name" size="36" class="input-text col-12 col-lg-12" v-model="school_name" placeholder="學校全名"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系所全名：</label><input type="text" id="depart_name" name="depart_name" size="36" class="input-text col-12 col-lg-12" v-model="depart_name" placeholder="系所全名"></div>
            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系主任/所長：</label><input type="text" id="depart_boss" name="depart_boss" size="36" class="input-text col-12 col-lg-12" v-model="depart_boss" placeholder="系主任/所長"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系所聯絡人：</label><input type="text" id="depart_contect" name="depart_contect" size="36" class="input-text col-12 col-lg-12" v-model="depart_contect" placeholder="系所聯絡人"></div>
            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3 city-selector-set">
                    <label class="d-block">系所地址：</label>



                        <select id="address_city" name="address_city" class="col-6 col-lg-2 mb-lg-0 mb-md-1 mb-sm-1 mb-1 address_city">

                        </select>
                        <select id="address_country" name="address_country" class="col-6 col-lg-2 mb-lg-0 mb-md-1 mb-sm-1 mb-1 address_country">

                        </select>
                    <!--<div role="tw-city-selector" data-has-zipcode></div>-->
                        <input type="text" id="address_address" name="address_address" size="36" class="input-text col-10 col-lg-6" v-model="address_address" placeholder="系所地址/地址">
                        <input type="tel" id="address_code" name="address_code" size="36" class="input-text col-2 col-lg-2 mb-lg-0 mb-md-1 mb-sm-1 mb-1 address_code" placeholder="郵遞區號">

                </div>

            </div>

            <div class="row m-0 p-0">
                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                    <label class="d-block">系所電話：</label>

                    <div class="row m-0 p-0">
                        <input type="tel" id="depart_code" name="depart_code" size="36" class="input-text col-6 col-lg-2 order-0 order-lg-0 mb-md-1 mb-sm-1 mb-1 mb-lg-0" v-model="depart_code" placeholder="區碼">
                        <input type="tel" id="depart_tel" name="depart_tel" size="36" class="input-text col-12 col-lg-8 order-2 order-lg-1 mb-md-0 mb-sm-1 mb-1 mb-lg-0" v-model="depart_tel" placeholder="電話">
                        <input type="tel" id="depart_ext" name="depart_ext" size="36" class="input-text col-6 col-lg-2 order-1 order-lg-2 mb-md-1 mb-sm-1 mb-1 mb-lg-0" v-model="depart_ext" placeholder="分機">
                    </div>

                </div>

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 contactroot">
                    <label class="d-block">聯絡人：</label>

                    <div class="row m-0 p-1 bg-gray contactdiv" v-for="(infor,index,i) in addary">
                        <input type="text" id="add_name" name="add_name" size="36" class="input-text col-6 col-lg-3 mb-md-1 mb-sm-1 mb-1 mb-lg-0"  placeholder="姓名"  v-model="infor.name">
                        <input type="tel" id="add_tel" name="add_tel" size="36" class="input-text col-6 col-lg-3 mb-md-0 mb-sm-1 mb-1 mb-lg-0"  placeholder="電話" v-model="infor.tel">
                        <input type="text" id="add_email" name="add_email" size="36" class="input-text col-12 col-lg-6"  placeholder="email" v-model="infor.email">
                        <div class="col-12 text-right m-0 p-0 delbtn" @click="delcase(index)" v-if="index>0">X移除</div>
                    </div>




                </div>
                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                    <label class="d-block text-right addbtn" @click="addcase()">新增</label>
                </div>


            </div>

            <div class="row m-0 p-0 justify-content-center">
                <div class="input col-lg-3 col-md-12  d-inline-block">
                    <input type="submit" name="dosubmit" id="dosubmit" value="下一步" @click="sendClick()" class="w-100">
                </div>

            </div>



            <div class="row m-0 p-0 justify-content-center">
                <div class="input col-lg-3 col-md-12  d-inline-block">
                    <input type="submit" name="dosubmit" id="dosubmit" value="檢測是否已開帳戶" @click="checkClick()" class="w-100">
                </div>

            </div>


        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'
    import $ from "jquery";
    import axios from 'axios';
    import TwCitySelector  from 'src/plugins/tw-city-selector.js';

    export default {
        data(){
            return{
                loginpath:'index.php?m=member&c=index&a=init&webtype=vue',
                getpath:'index.php?m=member&c=content&a=published&webtype=vue',
                sendpath:'index.php?m=member&c=content&a=publish',
                checkpath:'index.php?m=member&c=content&a=published&webtype=fabric',
                school_name:'',
                depart_name:'',
                depart_boss:'',
                depart_contect:'',
                address_code:'',
                address_city:'',
                address_country:'',
                address_address:'',
                depart_code:'',
                depart_tel:'',
                depart_ext:'',
                username:'',
                nickname:'',
                email:'',
                caseid:'',
                addary:[{name:'',tel:'',email:''}],
            }
        },

        mounted(){
            new TwCitySelector({
                el: '.city-selector-set',
                elCounty: '.address_city', // 在 el 裡查找 element
                elDistrict: '.address_country', // 在 el 裡查找 element
                elZipcode: '.address_code' // 在 el 裡查找 element
            });
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


            checkClick:function(){
                var self=this
                axios.get(this.checkpath, {
                }).then(function (response) {
                    var res=response.data;
                    console.log(res)
                    if(res.status==-1){

                    }else if(res.status==1){

                    }


                }).catch(function (err) {
                    console.log(err);
                });
            },

            addcase:function(){
                this.addary.push({name:'',tel:'',email:''})
            },

            delcase:function(num){
                this.addary.splice(num,1)
            },

            sendClick:function(){
                var self=this
                var bodyFormData = new FormData();


                bodyFormData.set('webtype', 'vue');
                bodyFormData.set('webname', 'fabia');
                bodyFormData.set('info[catid]', 6);
                bodyFormData.set('info[title]', 'fabia');
                bodyFormData.set('info[content]', 'fabia');
                bodyFormData.set('info[school_name]', self.school_name);
                bodyFormData.set('info[depart_name]', self.depart_name);
                bodyFormData.set('info[depart_boss]', self.depart_boss);
                bodyFormData.set('info[depart_contect]', self.depart_contect);
                bodyFormData.set('info[address_city]', $("#address_city").val());
                bodyFormData.set('info[address_country]', $("#address_country").val());
                bodyFormData.set('info[address_address]', self.address_address);
                bodyFormData.set('info[address_code]', $("#address_code").val());
                bodyFormData.set('info[depart_code]', self.depart_code);
                bodyFormData.set('info[depart_tel]', self.depart_tel);
                bodyFormData.set('info[depart_ext]', self.depart_ext);
                bodyFormData.set('info[add_contact]', JSON.stringify(self.addary));
                bodyFormData.set('dosubmit', '登录');

                axios({
                    method: 'post',
                    url: self.sendpath,
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data'}
                })
                    .then(function (response) {
                        var res=response.data;
                        if(res.status==-500){
                            //alert(res.msg)
                            if(res.msg=='school_name'){
                                alert('請填寫 學校全名')
                            }else if(res.msg=='depart_name'){
                                alert('請填寫 系所全名')
                            }else if(res.msg=='depart_boss'){
                                alert('請填寫 系主任/所長')
                            }else if(res.msg=='depart_contect'){
                                alert('請填寫 系所聯絡人')
                            }else if(res.msg=='address_city'){
                                alert('請填寫 系所縣市')
                            }else if(res.msg=='address_country'){
                                alert('請填寫 系所區域')
                            }else if(res.msg=='address_address'){
                                alert('請填寫 系所地址')
                            }else if(res.msg=='address_code' && res.data==''){
                                alert('請填寫 郵遞區號')
                            }else if(res.msg=='address_code' && res.data=='number'){
                                alert('郵遞區號 為數字型態')
                            }else if(res.msg=='depart_code' && res.data==''){
                                alert('請填寫 區碼')
                            }else if(res.msg=='depart_code' && res.data=='number'){
                                alert('區碼 為數字型態')
                            }else if(res.msg=='depart_tel' && res.data==''){
                                alert('請填寫 電話')
                            }else if(res.msg=='depart_tel' && res.data=='number'){
                                alert('電話 為數字型態')
                            }else if(res.msg=='add_name'){
                                alert('請填寫 聯絡人姓名')
                            }else if(res.msg=='add_tel'){
                                alert('請填寫 聯絡人電話 聯絡人電話 為數字型態')
                            }else if(res.msg=='add_email'){
                                alert('請填寫 聯絡人email 聯絡人email 請填寫正確格式')
                            }


                            if(!isNaN(res.data)){
                                $(".contactroot").find(".contactdiv:eq("+res.data+")").find("#"+res.msg).focus()

                            }else{
                                $("#"+res.msg).focus()
                            }





                        }else if(res.status==1){
                            alert(res.msg)
                        }else if(res.status==-1){
                            alert(res.msg)
                            self.$router.push('/fabia/fabia_login');
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
    .pagecontent{
        font-size: 0;
    }
    label{
        font-size: 13px;
    }
    .bg-gray{
        background-color: #cee3e7;
    }
    .addbtn{
        color:#0f6674;
        text-decoration: underline;
    }
    #dosubmit{
        font-size: 13px;
    }
    .delbtn{
        color:#0f6674;
        font-size: 13px;
    }
</style>
