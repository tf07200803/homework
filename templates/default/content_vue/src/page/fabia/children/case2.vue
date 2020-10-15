<template>
    <div>
        <div class="pagecontent">

            <div class="titletxt pb-1 text-center text-lg-left w-100">
                VN徵案資料

            </div>


            <div class="row m-0 p-0">

                <div class="input col-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">學校系所出具證明書（需請指導老師簽名，並蓋系所章），電子檔一份 (PDF/JPG) ：</label>


                    <div class="row m-0 p-0">
                        <div class="col-9 pl-0 pr-0"><input type="text" id="has_file" name="has_file" size="36" class="input-text w-100" v-model="sbook" readonly></div>
                        <div class="col-3 pl-0 pr-0 uploadiv">上傳<input type="file" accept="image/jpeg,application/pdf" id="sbook" name="sbook" @change="sbookchange"></div>
                    </div>



                </div>



            </div>


            <div class="row m-0 p-0">


                <div class="input col-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">導演、編劇基本資料及在學或休學證明書，電子檔各一份 (PDF/JPG)；若導演與編劇同一人，仍須分別上傳</label></div>


            </div>


            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 contactroot">
                    <label class="d-block">導演：</label>

                    <div class="row m-0 p-1 bg-gray contactdiv" v-for="(infor,index,i) in director">
                        <input type="text" id="add_name" name="add_name" size="36" class="input-text col-6 col-lg-3 mb-md-1 mb-sm-1 mb-1 mb-lg-0"  placeholder="姓名"  v-model="infor.name">
                        <input type="tel" id="add_tel" name="add_tel" size="36" class="input-text col-6 col-lg-3 mb-md-0 mb-sm-1 mb-1 mb-lg-0"  placeholder="電話" v-model="infor.tel">
                        <input type="text" id="add_email" name="add_email" size="36" class="input-text col-12 col-lg-6 mb-1"  placeholder="email" v-model="infor.email">
                        <div class="input col-12 m-0 p-0"><label class="d-block">在校或休學證明：</label>


                            <div class="row m-0 p-0">
                                <div class="col-9 pl-0 pr-0"><input type="text" id="has_file" name="has_file" size="36" class="input-text w-100" v-model="filepath" readonly></div>
                                <div class="col-3 pl-0 pr-0 uploadiv">上傳<input type="file" accept="image/jpeg,application/pdf" id="uploadbtn" name="uploadbtn" @change="filechange"></div>
                            </div>



                        </div>
                        <div class="col-12 text-right m-0 p-0 delbtn" @click="delcase(index)" v-if="index>0">X移除</div>
                    </div>




                </div>
                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                    <label class="d-block text-right addbtn" @click="addcase()">新增</label>
                </div>


            </div>

            <div class="row m-0 p-0">

                <div class="input col-lg-12 pl-lg-0 pr-lg-1 contactroot">
                    <label class="d-block">編劇：</label>

                    <div class="row m-0 p-1 bg-gray contactdiv" v-for="(infor,index,i) in screenwriter">
                        <input type="text" id="add_name" name="add_name" size="36" class="input-text col-6 col-lg-3 mb-md-1 mb-sm-1 mb-1 mb-lg-0"  placeholder="姓名"  v-model="infor.name">
                        <input type="tel" id="add_tel" name="add_tel" size="36" class="input-text col-6 col-lg-3 mb-md-0 mb-sm-1 mb-1 mb-lg-0"  placeholder="電話" v-model="infor.tel">
                        <input type="text" id="add_email" name="add_email" size="36" class="input-text col-12 col-lg-6 mb-1"  placeholder="email" v-model="infor.email">
                        <div class="input col-12 m-0 p-0"><label class="d-block">在校或休學證明：</label>


                            <div class="row m-0 p-0">
                                <div class="col-9 pl-0 pr-0"><input type="text" id="has_file" name="has_file" size="36" class="input-text w-100" v-model="filepath" readonly></div>
                                <div class="col-3 pl-0 pr-0 uploadiv">上傳<input type="file" accept="image/jpeg,application/pdf" id="uploadbtn" name="uploadbtn" @change="filechange"></div>
                            </div>



                        </div>
                        <div class="col-12 text-right m-0 p-0 delbtn" @click="delcase(index)" v-if="index>0">X移除</div>
                    </div>




                </div>
                <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                    <label class="d-block text-right addbtn" @click="addcase()">新增</label>
                </div>


            </div>

            <div class="row m-0 p-0">

                <div class="input col-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">分場大綱，PDF 檔一份，宜以 12-20 號字(pt)繕打（檔案建議壓浮水印）：</label>


                    <div class="row m-0 p-0">
                        <div class="col-9 pl-0 pr-0"><input type="text" id="has_file" name="has_file" size="36" class="input-text w-100" v-model="opera" readonly></div>
                        <div class="col-3 pl-0 pr-0 uploadiv">上傳<input type="file" accept="image/jpeg,application/pdf" id="opera" name="opera" @change="operachange"></div>
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


    export default {
        data(){
            return{


                showpath:'index.php?m=content&c=index&a=show&catid=6&id=3&webtype=fabric',
                editpath:'index.php?m=content&c=index&a=edit',
                uploadpath:'index.php?m=content&c=index&a=upload',
                director:[{name:'',tel:'',email:'',filepath:''}],
                screenwriter:[{name:'',tel:'',email:'',filepath:''}],
                sbook:'',
                opera:'',
                caseid:'',
                id:'',
            }
        },

        mounted(){
            var self=this



            /*axios.get(this.showpath, {
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
                    self.has_file=res.data.has_file
                    self.id=res.data.id
                    self.caseid=res.data.caseid
                }


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
            schoolchange:function(e){

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
                            self.has_file=res.data;
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
                bodyFormData.set('info[has_file]', self.has_agree==1 ? self.has_file : '');
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
