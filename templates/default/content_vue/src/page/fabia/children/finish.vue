<template>
    <div>
        <div class="pagecontent">

            <div class="titletxt pb-1 text-center text-lg-left w-100">
                VN徵案資料

            </div>

            <div class="stepClass pb-2">
                <div class="row m-0 p-0">

                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">學校全名：</label><input type="text" id="school_name" name="school_name" size="36" class="input-text col-12 col-lg-12" v-model="school_name" placeholder="學校全名" disabled="true"></div>
                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系所全名：</label><input type="text" id="depart_name" name="depart_name" size="36" class="input-text col-12 col-lg-12" v-model="depart_name" placeholder="系所全名" disabled="true"></div>
                </div>

                <div class="row m-0 p-0">

                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系主任/所長：</label><input type="text" id="depart_boss" name="depart_boss" size="36" class="input-text col-12 col-lg-12" v-model="depart_boss" placeholder="系主任/所長" disabled="true"></div>
                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">系所聯絡人：</label><input type="text" id="depart_contect" name="depart_contect" size="36" class="input-text col-12 col-lg-12" v-model="depart_contect" placeholder="系所聯絡人" disabled="true"></div>
                </div>

                <div class="row m-0 p-0">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3 city-selector-set">
                        <label class="d-block">系所地址：</label>



                        <select id="address_city" name="address_city" class="col-6 col-lg-2 mb-lg-0 mb-md-1 mb-sm-1 mb-1 address_city" disabled="true">

                        </select>
                        <select id="address_country" name="address_country" class="col-6 col-lg-2 mb-lg-0 mb-md-1 mb-sm-1 mb-1 address_country" disabled="true">

                        </select>
                        <!--<div role="tw-city-selector" data-has-zipcode></div>-->
                        <input type="text" id="address_address" name="address_address" size="36" class="input-text col-10 col-lg-6" v-model="address_address" placeholder="系所地址/地址" disabled="true">
                        <input type="tel" id="address_code" name="address_code" size="36" class="input-text col-2 col-lg-2 mb-lg-0 mb-md-1 mb-sm-1 mb-1 address_code" placeholder="郵遞區號" disabled="true">

                    </div>

                </div>

                <div class="row m-0 p-0">
                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3">
                        <label class="d-block">系所電話：</label>

                        <div class="row m-0 p-0">
                            <input type="tel" id="depart_code" name="depart_code" size="36" class="input-text col-6 col-lg-2 order-0 order-lg-0 mb-md-1 mb-sm-1 mb-1 mb-lg-0" v-model="depart_code" placeholder="區碼" disabled="true">
                            <input type="tel" id="depart_tel" name="depart_tel" size="36" class="input-text col-12 col-lg-8 order-2 order-lg-1 mb-md-0 mb-sm-1 mb-1 mb-lg-0" v-model="depart_tel" placeholder="電話" disabled="true">
                            <input type="tel" id="depart_ext" name="depart_ext" size="36" class="input-text col-6 col-lg-2 order-1 order-lg-2 mb-md-1 mb-sm-1 mb-1 mb-lg-0" v-model="depart_ext" placeholder="分機" disabled="true">
                        </div>

                    </div>

                </div>

                <div class="row m-0 p-0">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 contactroot">
                        <label class="d-block">聯絡人：</label>

                        <div class="row m-0 p-1 bg-gray contactdiv" v-for="(infor,index,i) in addary">
                            <input type="text" id="add_name" name="add_name" size="36" class="input-text col-6 col-lg-3 mb-md-1 mb-sm-1 mb-1 mb-lg-0"  placeholder="姓名"  v-model="infor.name" disabled="true">
                            <input type="tel" id="add_tel" name="add_tel" size="36" class="input-text col-6 col-lg-3 mb-md-0 mb-sm-1 mb-1 mb-lg-0"  placeholder="電話" v-model="infor.tel" disabled="true">
                            <input type="text" id="add_email" name="add_email" size="36" class="input-text col-12 col-lg-6"  placeholder="email" v-model="infor.email" disabled="true">

                        </div>




                    </div>



                </div>


                <div class="row m-0 p-0 justify-content-center mt-2">
                    <div class="input col-lg-3 col-5   d-inline-block">
                        <input type="submit" name="dosubmit" id="dosubmit" value="編輯" @click="gotoAddress('/fabia/fabia_home')" class="w-100">
                    </div>
                </div>



            </div>




            <div class="stepClass pb-2 pt-2">


                <div class="row m-0 p-0">

                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">節目名稱：</label><input type="text" id="program_name" name="program_name" size="36" class="input-text col-12 col-lg-12" v-model="program_name" placeholder="節目名稱" disabled="true"></div>
                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">製作人：</label><input type="text" id="program_men" name="program_men" size="36" class="input-text col-12 col-lg-12" v-model="program_men" placeholder="製作人" disabled="true"></div>
                </div>

                <div class="row m-0 p-0">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">劇情簡介：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                        <textarea name="program_detail" id="program_detail" class="input-text col-12 col-lg-12" rows="5" cols="50" placeholder="(以 150 字為限，不含半形標點符號)" v-model="program_detail" disabled="true"></textarea>
                    </div>

                </div>
                <div class="row m-0 p-0">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">人物表：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                        <textarea name="program_people" id="program_people" class="input-text col-12 col-lg-12" rows="10" cols="50" placeholder="(以 1000 字為限，不含半形標點符號)" v-model="program_people" disabled="true"></textarea>
                    </div>

                </div>
                <div class="row m-0 p-0">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">故事大綱：<span style="color:red">請勿列出學校、編劇及工作人員名單。</span></label>
                        <textarea name="program_story" id="program_story" class="input-text col-12 col-lg-12" rows="10" cols="50" placeholder="(以 1000 字為限，不含半形標點符號)" v-model="program_story" disabled="true"></textarea>
                    </div>

                </div>


                <div class="row m-0 p-0">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label>作品屬於：</label>
                        <input type="radio" name="has_agree" value="0" v-model="has_agree" disabled="true"/><span class="normal_size">&nbsp;原創&nbsp;&nbsp;</span>
                        <input type="radio" name="has_agree" value="1" v-model="has_agree" disabled="true"/><span class="normal_size">&nbsp;原著改編</span>
                    </div>

                </div>


                <div class="row m-0 p-0" v-if="has_agree==1">

                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著名稱：</label><input type="text" id="has_name" name="has_name" size="36" class="input-text col-12 col-lg-12" v-model="has_name" placeholder="原著名稱"></div>
                    <!--<div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著應為經公開發表之著作，並請上傳原著改作同意書 (PDF/JPG)：</label><input type="file" id="has_file" name="has_file" size="36" class="input-text col-12 col-lg-12"></div>-->
                    <div class="input col-lg-6 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">原著應為經公開發表之著作，並請上傳原著改作同意書 (PDF/JPG)：</label>





                        <div class="row m-0 p-0" v-for="(infor,index,i) in has_file">
                            <footer-area :sendData="infor" :visible="false"></footer-area>
                        </div>





                    </div>



                </div>


                <div class="row m-0 p-0 justify-content-center mt-2">
                    <div class="input col-lg-3 col-5   d-inline-block">
                        <input type="submit" name="dosubmit" id="dosubmit" value="編輯" @click="gotoAddress('/fabia/fabia_case')" class="w-100">
                    </div>
                </div>




            </div>



            <div class="stepClass pb-2 pt-2">


                <div class="row m-0 p-0">

                    <div class="input col-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">學校系所出具證明書（需請指導老師簽名，並蓋系所章），電子檔一份 (PDF/JPG) ：</label>


                        <div class="row m-0 p-0" v-for="(infor,index,i) in sbook">
                            <footer-area :sendData="infor" :visible="false"></footer-area>
                        </div>



                    </div>



                </div>


                <div class="row m-0 p-0">


                    <div class="input col-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">導演、編劇基本資料及在學或休學證明書，電子檔各一份 (PDF/JPG)；若導演與編劇同一人，仍須分別上傳</label></div>


                </div>


                <div class="row m-0 p-0 mb-2">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 contactroot">
                        <label class="d-block">導演：</label>

                        <div class="row m-0 p-1 bg-gray contactdiv" v-for="(infor,index,i) in director">
                            <input type="text" id="director_name" name="director_name" size="36" class="input-text col-6 col-lg-3 mb-md-1 mb-sm-1 mb-1 mb-lg-0"  placeholder="姓名"  v-model="infor.name" disabled="true">
                            <input type="tel" id="director_tel" name="director_tel" size="36" class="input-text col-6 col-lg-3 mb-md-0 mb-sm-1 mb-1 mb-lg-0"  placeholder="電話" v-model="infor.tel" disabled="true">
                            <input type="text" id="director_email" name="director_email" size="36" class="input-text col-12 col-lg-6 mb-1"  placeholder="email" v-model="infor.email" disabled="true">
                            <div class="input col-12 m-0 p-0"><label class="d-block">在校或休學證明：</label>


                                <footer-area :sendData="infor" :visible="false"></footer-area>



                            </div>

                        </div>




                    </div>



                </div>

                <div class="row m-0 p-0 mb-2">

                    <div class="input col-lg-12 pl-lg-0 pr-lg-1 contactroot">
                        <label class="d-block">編劇：</label>

                        <div class="row m-0 p-1 bg-gray contactdiv" v-for="(infor,index,i) in screenwriter">
                            <input type="text" id="screenwriter_name" name="screenwriter_name" size="36" class="input-text col-6 col-lg-3 mb-md-1 mb-sm-1 mb-1 mb-lg-0"  placeholder="姓名"  v-model="infor.name" disabled="true">
                            <input type="tel" id="screenwriter_tel" name="screenwriter_tel" size="36" class="input-text col-6 col-lg-3 mb-md-0 mb-sm-1 mb-1 mb-lg-0"  placeholder="電話" v-model="infor.tel" disabled="true">
                            <input type="text" id="screenwriter_email" name="screenwriter_email" size="36" class="input-text col-12 col-lg-6 mb-1"  placeholder="email" v-model="infor.email" disabled="true">
                            <div class="input col-12 m-0 p-0"><label class="d-block">在校或休學證明：</label>


                                <footer-area :sendData="infor" :visible="false"></footer-area>



                            </div>

                        </div>




                    </div>



                </div>

                <div class="row m-0 p-0">

                    <div class="input col-12 pl-lg-0 pr-lg-1 mb-md-1 mb-sm-2 mb-3"><label class="d-block">分場大綱，PDF 檔一份，宜以 12-20 號字(pt)繕打（檔案建議壓浮水印）：</label>


                        <div class="row m-0 p-0" v-for="(infor,index,i) in opera">
                            <footer-area :sendData="infor" :visible="false"></footer-area>
                        </div>



                    </div>



                </div>

                <div class="row m-0 p-0 justify-content-center mt-2">
                    <div class="input col-lg-3 col-5   d-inline-block">
                        <input type="submit" name="dosubmit" id="dosubmit" value="編輯" @click="gotoAddress('/fabia/fabia_case2')" class="w-100">
                    </div>
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
    import footerArea from './uploadutil'
    export default {
        data(){
            return{


                showpath:'index.php?m=content&c=index&a=show&catid=6&id=3&webtype=fabric',
                loginpath:'index.php?m=member&c=index&a=userfinish',
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
                add_contact:'',
                addary:[{name:'',tel:'',email:''}],
                program_name:'',
                program_men:'',
                program_detail:'',
                program_people:'',
                program_story:'',
                has_agree:0,
                has_name:'',
                has_file:[{filepath:'',id:'has_file'}],
                director:[{name:'',tel:'',email:'',filepath:'',id:'director'}],
                screenwriter:[{name:'',tel:'',email:'',filepath:'',id:'screenwriter'}],
                sbook:[{filepath:'',id:'sbook'}],
                opera:[{filepath:'',id:'opera'}],
            }
        },

        mounted(){
            var self=this



            axios.get(this.showpath, {
            }).then(function (response) {
                var res=response.data;

                if(res.status==-1){

                }else if(res.status==1){
                    self.school_name=res.data.school_name
                    self.depart_name=res.data.depart_name
                    self.depart_boss=res.data.depart_boss
                    self.depart_contect=res.data.depart_contect
                    self.address_code=res.data.address_code
                    self.address_city=res.data.address_city
                    self.address_country=res.data.address_country
                    self.address_address=res.data.address_address
                    self.depart_code=res.data.depart_code
                    self.depart_tel=res.data.depart_tel
                    self.depart_ext=res.data.depart_ext
                    self.caseid=res.data.caseid
                    self.add_contact=res.data.add_contact
                    try {
                        self.addary=JSON.parse(self.add_contact)
                    }
                    catch(err) {

                    }


                    new TwCitySelector({
                        el: '.city-selector-set',
                        elCounty: '.address_city', // 在 el 裡查找 element
                        elDistrict: '.address_country', // 在 el 裡查找 element
                        elZipcode: '.address_code', // 在 el 裡查找 element
                        countyValue: self.address_city, // 注意此項為關聯參數
                        districtValue: self.address_country
                    });
                    self.program_name=res.data.program_name
                    self.program_men=res.data.program_men
                    self.program_detail=res.data.program_detail
                    self.program_people=res.data.program_people
                    self.program_story=res.data.program_story
                    self.has_agree=res.data.has_agree
                    self.has_name=res.data.has_name
                    self.has_file=[{filepath:res.data.has_file,id:'has_file'}]

                    self.sbook=[{filepath:res.data.sbook,id:'sbook'}]
                    var _director=res.data.director
                    try {

                        self.director=JSON.parse(_director)
                    }
                    catch(err) {

                    }
                    var _screenwriter=res.data.screenwriter
                    try {

                        self.screenwriter=JSON.parse(_screenwriter)
                    }
                    catch(err) {

                    }
                    self.opera=[{filepath:res.data.opera,id:'opera'}]

                    //self.userfinish()


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

            userfinish(){
                axios.get(this.loginpath, {
                }).then(function (response) {
                    var res=response.data;

                    if(res.status==-1){

                    }else if(res.status==1){



                    }


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
    .uploadbtn{
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

    .stepClass{
        border-bottom: 1px dashed #ccc;
    }


</style>
