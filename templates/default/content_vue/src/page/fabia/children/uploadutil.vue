<template>
    <div class="row m-0 p-0 col-12">

                        <div class="col-9 pl-0 pr-0"><input type="text" :id="sendData.id+'_file'" name="sbook_file" size="36" class="input-text w-100" v-model="sendData.filepath" disabled="true"></div>
                        <div class="col-3 pl-0 pr-0 uploadiv" v-if="visible!=false">上傳<input type="file" accept="image/jpeg,application/pdf" id="sbook" name="sbook" @change="filechange" class="uploadbtn"></div>
                        <div class="col-3 pl-0 pr-0 uploadiv" v-if="visible==false" @click="openwindow(sendData.filepath)">預覽</div>

    </div>
</template>

<script>

    import 'src/style/init.css'
    import $ from "jquery";
    import axios from 'axios';


    export default {
        props:['sendData','visible'],
        data(){
            return{
                uploadpath:'index.php?m=content&c=index&a=upload',

            }
        },

        mounted(){
            var self=this


        },

        components:{

        },

        computed:{

        },

        methods:{

            openwindow:function(url){
                window.open(url)
            },


            filechange:function(e){

                var self=this
                //this.sendData.filepath="yayaya";
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
                            self.sendData.filepath=res.data;
                        }else{
                            alert(res.msg)
                        }
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
</style>
