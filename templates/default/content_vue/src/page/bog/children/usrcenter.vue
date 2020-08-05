<template>
    <div>
        <div class="container">



            <div>
                <table>
                    <tbody><tr>
                        <td rowspan="2">
                            <div class="userfaceicon sprite"></div>
                        </td>
                        <td colspan="3">
                            您好{{this.userinfo.username_unMask}}
                            余额：{{this.balance}}                 </td>
                    </tr>
                    <tr>
                        <td class="pr-40">
                            <a>
                                充值</a>
                        </td>
                        <td class="pr-40">
                            <a>
                                提款</a>
                        </td>

                    </tr>
                    </tbody></table>

                <div class="listmenu">
                    <a @click="changePage(0)">

                        <div>账户管理</div>
                    </a>
                    <a @click="changePage(1)">

                        <div>报表管理</div>
                    </a>

                    <a @click="changePage(2)">

                        <div>帮助中心</div>
                    </a>
                </div>

            </div>



            <div class="left-aside">
                <!--账户管理-->

                <div v-for="(infor,index) in setarray" class="linebottom">
                    <div>
                        <a>

                            {{infor.title}}

                        </a>
                    </div>
                </div><!--content end-->




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
                userinfo:JSON.parse(localStorage.userinfo),
                balance:0,
                balanceurl:'/index.php?controller=ionapi&action=balance',
                reportmanagement:[
                    {path:'/gamerec',title:'游戏记录',icon:"ic-bet"},
                    {path:'/report_threekindsreport',title:'盈亏查询',icon:"ic-3062"},
                    {path:'/report_bankreport',title:'充提记录',icon:"ic-582"},
                    {path:'/report_entertainmentbankreport',title:'转账记录',icon:"ic-7377"},
                    {path:'/report_orders',title:'账变记录',icon:"ic-16"},
                    {path:'/lottery_history',title:'开奖记录',icon:"ic-his"}
                ],
                accountcenter:[
                    {path:'/user_userlist',title:'用户列表',icon:"ic-599"},
                    {path:'/user_adduser',title:'添加用户',icon:"ic-602"},
                    {path:'/user_otheradduser',title:'推广注册',icon:"ic-tuiguan"},
                    {path:'/security_adduserbank',title:'卡号绑定',icon:"ic-577"},
                    {path:'/security_changepass',title:'密码修改',icon:"ic-474"},
                    {path:'/channels_userinfo',title:'彩种信息',icon:"ic-19"},
                    {path:'/user_changename',title:'修改昵称',icon:"ic-591"},
                    {path:'/messageslist',title:'消息管理',icon:"ic-598"},
                    {path:'/user_team',title:'团队统计',icon:"ic-600"},
                    {path:'/bindsequestion',title:'密保设定',icon:"ic-610"}
                ],
                help:[
                    {path:'/help_howtosaving',title:'如何存款',icon:"ic-609"},
                    {path:'/help_answer',title:'常见问题',icon:"ic-26"},
                    {path:'/help_playinfo',title:'玩法介绍',icon:"ic-25"},
                    {path:'/help_noticelist',title:'公告列表',icon:"ic-23"}
                ],
                setarray:[],
            }
        },

        mounted(){
            var self=this;
            this.setarray=this.reportmanagement;

            axios.get(this.balanceurl,{headers:{'token': (self.userinfo==null ? '' : self.userinfo.token)}},{
            }).then(function (response) {

                self.balance=response.data.data;

            }).catch(function (err) {
                console.log(err);
            });

        },

        components:{

        },

        computed:{

        },

        methods:{
            changePage(num){
                if(num==0){
                    this.setarray=this.reportmanagement;
                }else if(num==1){
                    this.setarray=this.accountcenter;
                }else{
                    this.setarray=this.help;
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

.left-aside{
    width: 100%;
    margin-top: 50px;

}
    .linebottom{
        border-top: 1px solid #ccc;
        padding-top: 15px;
        padding-bottom: 15px;
    }
    .listmenu a{
        display: inline-block;
        font-size: 18px;
        border: 1px solid #0a9dc7;
    }

</style>
