<template>
    <div>
        <div class="pagecontent">

            <div class="titletxt pb-1 text-center text-lg-left w-100">
                徵案資料

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">節目名稱：</label><input type="text" id="program_name" name="program_name" size="36" class="input-text col-12 col-lg-12" v-model="program_name" placeholder="節目名稱"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">製作人：</label><input type="text" id="program_men" name="program_men" size="36" class="input-text col-12 col-lg-12" v-model="program_men" placeholder="製作人"></div>
            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">劇情簡介：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                    <textarea name="program_detail" id="program_detail" class="input-text col-12 col-lg-12" rows="5" cols="50" placeholder="(以 150 字為限，不含半形標點符號)"></textarea>
                </div>

            </div>
            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">人物表：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                    <textarea name="program_people" id="program_people" class="input-text col-12 col-lg-12" rows="10" cols="50" placeholder="(以 1000 字為限，不含半形標點符號)"></textarea>
                </div>

            </div>
            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">故事大綱：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                    <textarea name="program_story" id="program_story" class="input-text col-12 col-lg-12" rows="10" cols="50" placeholder="(以 1000 字為限，不含半形標點符號)"></textarea>
                </div>

            </div>


            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label>作品屬於：</label>
                    <input type="radio" name="program_has" value="0" checked/><span class="normal_size">&nbsp;原創&nbsp;&nbsp;</span>
                    <input type="radio" name="program_has" value="1"/><span class="normal_size">&nbsp;原著改編</span>
                </div>

            </div>


            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著名稱：</label><input type="text" id="has_men" name="has_men" size="36" class="input-text col-12 col-lg-12" v-model="program_name" placeholder="節目名稱"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著應為經公開發表之著作，並請上傳原著改作同意書 (PDF/JPG)：</label><input type="file" id="has_agree" name="has_agree" size="36" class="input-text col-12 col-lg-12"></div>

            </div>



            <div class="row m-0 p-0 justify-content-center">
                <div class="input col-lg-3 col-5   d-inline-block">
                    <input type="submit" name="dosubmit" id="dosubmit" value="上一步" @click="gotoAddress('/fabia/fabia_home')" class="w-100">
                </div>

                <div class="input col-lg-3 col-5   d-inline-block">
                    <input type="submit" name="dosubmit" id="dosubmit" value="下一步" @click="sendClick()" class="w-100">
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


                showpath:'index.php?m=content&c=index&a=show&catid=6&id=3&webtype=fabric',
                editpath:'index.php?m=content&c=index&a=edit',
                program_name:'',
                program_men:'',
                program_detail:'',
                program_people:'',
                program_story:'',
                program_has:'',
                has_men:'',
                has_agree:'',
                caseid:'',
                id:'',
            }
        },

        mounted(){
            var self=this


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
            axios.get(this.showpath, {
            }).then(function (response) {
                var res=response.data;

                if(res.status==-1){

                }else if(res.status==1){

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


            gotoAddress(path){
                this.$router.push(path)
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
                bodyFormData.set('info[caseid]', self.caseid);
                bodyFormData.set('id', self.id);
                bodyFormData.set('dosubmit', '登录');

                axios({
                    method: 'post',
                    url: self.editpath,
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
