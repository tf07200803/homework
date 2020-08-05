<template>
    <div>
        <div class="container">






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
                inforurl:'',
                userinfo:JSON.parse(localStorage.userinfo),
                lotteryid:'',
                menuid:'',
                lottype:'',
                lotgroupid:'',
                gameinformation:'',//遊戲資料
                methodsMenu:[],//玩法菜單(標)
                methodsMenuList:[],//玩法菜單(內)
                methods : '',
                jscode : '',
                crowds : '',
                methodinfo:JSON.parse(localStorage.methodinfo),
                old_lotteryid:-1,
                methodsshow1:[],
                lastissue:{"issue":"","saleend":"","oldissue":""},//下期旗號END下期開獎時間
                methodsMenushow:true,
                touzhuInput:true,
                methodsshow2:'',
                methodsshow3:'',
                methodsshow4:'',
                prizearray:Object.values(prize),
                touzhuHelp:'',
                methodsTitle:'',
            }
        },

        mounted(){
            var self=this;
            this.lotteryid = this.$route.params.lotteryid;
            this.menuid=this.userinfo.allmenu[this.lotteryid].menuid;
            this.lottype = this.userinfo.allmenu[this.lotteryid].lotterytype;
            this.lotgroupid = this.userinfo.allmenu[this.lotteryid].groupid;
            this.inforurl="/index.php?controller=ionapi&action=selnumberpage&lotteryid="+this.lotteryid+"&menuid="+this.menuid;

            console.log(JSON.parse(JSON.stringify(self.methodinfo)));

            axios.get(this.inforurl,{headers:{'token': (self.userinfo==null ? '' : self.userinfo.token)}},{
            }).then(function (response) {

                self.gameinformation=response;

                //console.log(JSON.parse(JSON.stringify(self.gameinformation)));
                self.methods = self.methodinfo.methods[self.lotteryid].methods;
                self.jscode = self.methodinfo.methods[self.lotteryid].jscode;
                self.crowds = self.methodinfo.methods[self.lotteryid].crowds;




                self.gamemethods()

            }).catch(function (err) {
                console.log(err);
            });





        },

        components:{

        },

        computed:{

        },

        methods:{
            gamemethods:function(){

                var self=this;
                self.methodsMenushow=true
                self.methodsMenu.splice(0,self.methodsMenu.length)
                self.methodsMenuList.splice(0,self.methodsMenuList.length)
                if(self.gameinformation['data']){
                    if(self.methodsMenu.length<1){

                        if(self.crowds){
                            self.crowds.forEach(function(element,index){
                                self.methodsMenu.push({"title":element['name'],"id":element['id']})
                                if(index==0 && self.old_lotteryid!=self.lotteryid){
                                    self.methodsshow1=element['id']
                                }
                            })
                        }else{
                            self.gameinformation['data']['crowds'].forEach(function(element,index){
                                self.methodsMenu.push({"title":element['name'],"id":element['id']})
                                if(index==0 && self.old_lotteryid!=self.lotteryid){
                                    self.methodsshow1=element['id']
                                }
                            })
                        }





                    }
                }


                if(self.methodsMenuList.length<1){

                    if(self.methods){
                        self.methods.forEach(function(element,index){
                            var methods=[]
                            element['methods'].forEach(function(elm,id){
                                methods.push(elm)

                                if(index==0 && id==0 && self.old_lotteryid!=self.lotteryid){
                                    //$scope.methodsChangeCase(elm['methodid'],elm['type'],element['crowdname'],element['gtitle'],elm['title'],elm['layout'],elm['jscode'],elm['prize'],elm['methodhelp'])
                                }else{
                                    if(elm['methodid']==self.methodsshow2 && elm['type']==self.methodsshow3){
                                        //$scope.methodsChangeCase(elm['methodid'],elm['type'],element['crowdname'],element['gtitle'],elm['title'],elm['layout'],elm['jscode'],elm['prize'],elm['methodhelp'])
                                    }
                                }
                            })

                            self.methodsMenuList.push({"title":element['gtitle'],"list":methods,'id':element['crowdid'],'parent_title':element['crowdname'],'issuejson':element['issuejson']})
                        })
                    }else{
                        self.gameinformation['data']['gamemethods'].forEach(function(element,index){
                            var methods=[]
                            element['methods'].forEach(function(elm,id){
                                methods.push(elm)

                                if(index==0 && id==0 && self.old_lotteryid!=self.lotteryid){
                                    //$scope.methodsChangeCase(elm['methodid'],elm['type'],element['crowdname'],element['gtitle'],elm['title'],elm['layout'],elm['jscode'],elm['prize'],elm['methodhelp'])
                                }else{
                                    if(elm['methodid']==self.methodsshow2 && elm['type']==self.methodsshow3){
                                       // $scope.methodsChangeCase(elm['methodid'],elm['type'],element['crowdname'],element['gtitle'],elm['title'],elm['layout'],elm['jscode'],elm['prize'],elm['methodhelp'])
                                    }
                                }
                            })

                            self.methodsMenuList.push({"title":element['gtitle'],"list":methods,'id':element['crowdid'],'parent_title':element['crowdname'],'issuejson':element['issuejson']})
                        })
                    }
                    console.log(JSON.parse(JSON.stringify(self.methodsMenuList)));


                    self.old_lotteryid=self.lotteryid

                    if(self.gameinformation['data']['issuejson'] && self.gameinformation['data']['issuejson'].length>0){
                        //$scope.getTimeDiff()
                    }else{
                        self.lastissue['saleend']=''
                    }


                }


            },
            //這個切換玩法的function 很常用 (關鍵字sssss)
            methodsChangeCase:function(id,type,title1,title2,title3,layout,jscode,prize,help){
                var self=this;
            console.log(jscode)
            self.touzhuInput=true
            self.methodsshow2=id
            self.methodsshow3=type
            self.methodsshow4=jscode
            self.prizearray=Object.values(prize)
            self.touzhuHelp=help
            self.methodsMenushow=true
            self.methodsTitle=title2+" "+title3
            methodInputType=type
            //console.log(jscode)
            self.checkTouzhuPrize()
            self.ballArea.splice(0,self.ballArea.length)
            touzhu_one_order.splice(0,touzhu_one_order.length)

            if(self.methodsshow3=="input" && layout==null){
                self.touzhuInput=false
            }else{
                layout.forEach(function(element,index){
                    var model=element['no']
                    //判斷 注單是否中文 是的話要用方框樣式
                    var pattern = new RegExp("[\u4E00-\u9FA5]+");
                    if(pattern.test(model)){
                        self.ballStyle='cn';
                    }else{
                        self.ballStyle='';
                    }
                    //END


                    var arraytxt=model.split('|')
                    var arraynum=[]
                    for(i=0;i<arraytxt.length;i++){
                        arraynum.push(i)
                    }
                    self.ballArea.push({"value":element['title'],"ball":arraynum,"balltext":arraytxt,"jscode":self.methodsshow4,"prize":self.prizearray})




                })
            }
            self.lotteryNum=0;//注數
            self.buyprice=0;//投注單金額
            self.buyNormalprice=0
            self.input_area_div['value']='';


            if(rightControlArray.indexOf(self.methodsshow4)!=-1){
                self.rightControlshow=false
            }else{
                self.rightControlshow=true
            }

            if(self.ballStyle=='cn' || sixGameArray.indexOf(self.methodsshow4)!=-1){
                self.rightControlshowforch=false
            }else{
                self.rightControlshowforch=true
            }


            self.gametypeName=''


            if(self.methodsshow4=="K3HZ"){
                self.gametypeName='isk3hz'
                self.prizeShow=false;
            }else if(k3methodArray.indexOf(self.methodsshow4)!=-1){
                self.gametypeName='isk3'
                self.prizeShow=true;
            }else if(sixGameArray.indexOf(self.methodsshow4)!=-1){
                self.gametypeName='issix'
                self.prizeShow=true;
            }else if(sixGameArray_sp.indexOf(self.methodsshow4)!=-1){
                self.gametypeName='issix_sp'
                self.prizeShow=true;
            }else{
                self.gametypeName='isssc'
                self.prizeShow=true;
            }




            var keyarr=Object.keys(self.touzhuGameType)
            for(i=0;i<keyarr.length;i++){
                if(keyarr[i]==self.gametypeName){
                    self.touzhuGameType[keyarr[i]]=true
                }else{
                    self.touzhuGameType[keyarr[i]]=false
                }
            }



            if(self.methodsshow4=='SSCRX2ZXDS' || self.methodsshow4=='SSCRX2ZUFS' || self.methodsshow4=='SSCRX2ZUDS' || self.methodsshow4=='SSCRX2ZXHZ' || self.methodsshow4=='SSCRX2ZUHZ'){
                self.danxiCheckboxShow=true
                self.danxiCheckbox[4]['value']=true
                self.danxiCheckbox[3]['value']=true
                self.danxiCheckbox[2]['value']=false
                self.danxiCheckbox[1]['value']=false
                self.danxiCheckbox[0]['value']=false
            }else if(self.methodsshow4=='SSCRX3ZXDS' || self.methodsshow4=='SSCRX3ZS' || self.methodsshow4=='SSCRX3ZL' || self.methodsshow4=='SSCRX3ZXHZ' || self.methodsshow4=='SSCRX3ZUHZ'){
                self.danxiCheckboxShow=true
                self.danxiCheckbox[4]['value']=true
                self.danxiCheckbox[3]['value']=true
                self.danxiCheckbox[2]['value']=true
                self.danxiCheckbox[1]['value']=false
                self.danxiCheckbox[0]['value']=false
            }else if(self.methodsshow4=='SSCRX4ZXDS' || self.methodsshow4=='SSCRX4SXZU24' || self.methodsshow4=='SSCRX4SXZU12' || self.methodsshow4=='SSCRX4SXZU6' || self.methodsshow4=='SSCRX4SXZU4'){
                self.danxiCheckboxShow=true
                self.danxiCheckbox[4]['value']=true
                self.danxiCheckbox[3]['value']=true
                self.danxiCheckbox[2]['value']=true
                self.danxiCheckbox[1]['value']=true
                self.danxiCheckbox[0]['value']=false
            }else{
                self.danxiCheckboxShow=false
            }








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
