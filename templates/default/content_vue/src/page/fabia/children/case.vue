<template>
    <div>
        <div class="pagecontent">

            <div class="titletxt pb-1 text-center text-lg-left w-100">
                VN徵案資料

            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">節目名稱：</label><input type="text" id="program_name" name="program_name" size="36" class="input-text col-12 col-lg-12" v-model="program_name" placeholder="節目名稱"></div>
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">製作人：</label><input type="text" id="program_men" name="program_men" size="36" class="input-text col-12 col-lg-12" v-model="program_men" placeholder="製作人"></div>
            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">劇情簡介：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                    <textarea name="program_detail" id="program_detail" class="input-text col-12 col-lg-12" rows="5" cols="50" placeholder="(以 150 字為限，不含半形標點符號)" v-model="program_detail"></textarea>
                </div>

            </div>
            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">人物表：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                    <textarea name="program_people" id="program_people" class="input-text col-12 col-lg-12" rows="10" cols="50" placeholder="(以 1000 字為限，不含半形標點符號)" v-model="program_people"></textarea>
                </div>

            </div>
            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">故事大綱：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                    <textarea name="program_story" id="program_story" class="input-text col-12 col-lg-12" rows="10" cols="50" placeholder="(以 1000 字為限，不含半形標點符號)" v-model="program_story"></textarea>
                </div>

            </div>


            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label>作品屬於：</label>
                    <input type="radio" name="has_agree" value="0" v-model="has_agree"/><span class="normal_size">&nbsp;原創&nbsp;&nbsp;</span>
                    <input type="radio" name="has_agree" value="1" v-model="has_agree"/><span class="normal_size">&nbsp;原著改編</span>
                </div>

            </div>


            <div class="row m-0 p-0" v-if="has_agree==1">

                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著名稱：</label><input type="text" id="has_name" name="has_name" size="36" class="input-text col-12 col-lg-12" v-model="has_name" placeholder="原著名稱"></div>
                <!--<div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著應為經公開發表之著作，並請上傳原著改作同意書 (PDF/JPG)：</label><input type="file" id="has_file" name="has_file" size="36" class="input-text col-12 col-lg-12"></div>-->
                <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著應為經公開發表之著作，並請上傳原著改作同意書 (PDF/JPG)：</label>


                    <div class="row m-0 p-0" v-for="(infor,index,i) in has_file">
                        <footer-area :sendData="infor"></footer-area>
                    </div>



                </div>



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
    import footerArea from './uploadutil'

    export default {
        data(){
            return{


                showpath:'index.php?m=content&c=index&a=show&catid=6&id=3&webtype=fabric',
                editpath:'index.php?m=content&c=index&a=edit',
                uploadpath:'index.php?m=content&c=index&a=upload',
                program_name:'',
                program_men:'',
                program_detail:'',
                program_people:'',
                program_story:'',
                has_agree:0,
                has_name:'',
                has_file:[{filepath:'',id:'has_file'}],
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
                    self.program_name=res.data.program_name
                    self.program_men=res.data.program_men
                    self.program_detail=res.data.program_detail
                    self.program_people=res.data.program_people
                    self.program_story=res.data.program_story
                    self.has_agree=res.data.has_agree
                    self.has_name=res.data.has_name
                    self.has_file=[{filepath:res.data.has_file,id:'has_file'}]
                    self.id=res.data.id
                    self.caseid=res.data.caseid
                }


            }).catch(function (err) {
                console.log(err);
            });

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

            filechange:function(e){

                var self=this

                var bodyFormData = new FormData();
                bodyFormData.append('uploads',e.target.files[0])

                axios({
                    method: 'post',
                    url: self.uploadpath,
                    data: bodyFormData,
                    headers: {'Content-Type': 'multipart/form-data'}
                }).then(function (response) {
                        var res=response.data;
                        if(res.status==1){
                            alert(res.msg)
                            self.has_file.filepath=res.data;
                        }else{
                            alert(res.msg)
                        }
                    })
                    .catch(function (response) {
                        console.log(response);
                    });
            },

            sendClick:function(){
                var self=this
                var bodyFormData = new FormData();


                bodyFormData.set('webtype', 'vue');
                bodyFormData.set('webname', 'fabia');
                bodyFormData.set('info[catid]', 6);
                bodyFormData.set('info[title]', 'fabia');
                bodyFormData.set('info[content]', 'case');
                bodyFormData.set('info[program_name]', self.program_name);
                bodyFormData.set('info[program_men]', self.program_men);
                bodyFormData.set('info[program_detail]', self.program_detail);
                bodyFormData.set('info[program_people]', self.program_people);
                bodyFormData.set('info[program_story]', self.program_story);
                bodyFormData.set('info[has_agree]', self.has_agree);
                bodyFormData.set('info[has_name]', self.has_agree==1 ? self.has_name : '');
                bodyFormData.set('info[has_file]', self.has_agree==1 ? self.has_file[0].filepath : '');
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
                            if(res.msg=='program_name'){
                                alert('請填寫 節目名稱')
                            }else if(res.msg=='program_men'){
                                alert('請填寫 製作人')
                            }else if(res.msg=='program_detail'){
                                alert('請填寫 劇情簡介')
                            }else if(res.msg=='program_people'){
                                alert('請填寫 人物表')
                            }else if(res.msg=='program_story'){
                                alert('請填寫 故事大綱')
                            }else if(res.msg=='has_name' && self.has_agree==1){
                                alert('請填寫 原著名稱')
                            }else if(res.msg=='has_file' && self.has_agree==1){
                                alert('請上傳 PDF/JPG')
                            }



                            $("#"+res.msg).focus()






                        }else if(res.status==1){
                            alert(res.msg)
                            self.$router.push('/fabia/fabia_case2');
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
    #uploadbtn{
        position: absolute;
        left:0;
        top: 0;
        opacity: 0;
    }

    .uploadiv{

        background-color: #990000;
        font-size: 13px;
        color:#fff;
        text-align: center;
        line-height: 36px;
        height: 36px;
        overflow: hidden;

    }
</style>
