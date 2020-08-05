<template>
    <div v-if="allgames!=null">
        <div class="container">


            <div class="input_ones _rows">

                <div class="w-100">
                    <label class="input_oneline _rows">
                        <span class="input_oneline_title w-20">查询纪录：</span>
                        <select id="onekeypoint"  class="w-80">
                            <option value="rec" selected>彩票投注</option>
                            <option value="task">彩票追号</option>
                            <option value="ky">开元棋牌</option>
                            <option value="bti">BTi体育</option>
                            <option value="casino">真人娱乐</option>
                            <option value="ttg">TTG电子</option>
                            <option value="gpi">GPI电子</option>
                            <option value="kmg">KMG电子</option>
                            <option value="saba">沙巴体育</option>
                            <option value="pt">PT电子</option>

                        </select>
                    </label>
                </div>
            </div>





            <div class="input_ones _rows"><!--只有投注記錄有-->
                <div class="w-100">
                    <div class="checkbox_oneline _rows w-100">
                        <span class="input_oneline_title w-24">投注时间：</span>
                        <div class="w-38">
                            <label class="checkbox_oneline">
                                <input type="checkbox" class="graycheckbox" id="todayqry" v-model="todaysearch">
                                <span class="input_oneline_span">当日查询</span>
                            </label>
                        </div>
                        <div class="w-38">
                            <label class="checkbox_oneline">
                                <input type="checkbox" class="graycheckbox"  id="hisqry" v-model="historyseach">
                                <span class="input_oneline_span">历史查询</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="input_ones _rows">
                <div class="w-100">
                    <div class="input_oneline _rows">
                        <span class="input_oneline_title w-22">投注时间：</span>

                        <select v-model="begindate">
                            <option v-for="day in allgames.data.days">
                                {{ day }}
                            </option>
                        </select>

                        <span class="input_oneline_span w-16">至</span>
                        <select v-model="enddate">
                            <option v-for="day in allgames.data.days1">
                                {{ day }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="input_ones _rows">
                <div class="w-50">
                    <div class="input_oneline _rows">
                        <span class="input_oneline_title w-40">彩种：</span>
                        <!--<select name="lotteryid" class="w-60" id="lotteryid">
                            <option value="0">所有游戏</option>
                            <option></option>
                        </select>-->

                        <select v-model="lotid">
                            <option v-for="(key,value) in allgames.data.lottery" v-bind:value=value>
                                {{ key }}
                            </option>
                        </select>

                    </div>
                </div>

                <div class="w-50">
                    <label class="input_oneline _rows">
                        <span class="input_oneline_title w-40">用户名：</span>
                        <input type="text" class="custom_input w-60" id="username" name="username" v-model="usrname">
                    </label>
                </div>
            </div>


            <div class="input_ones _rows">



                <div class="w-50" >
                    <label class="checkbox_oneline">
                        <input type="checkbox" id="include" name="include" v-model="incunder">
                        <span class="input_oneline_span">包含下级</span>
                    </label>
                </div>

            </div>
            <div class="input_ones _rows">
                <div class="w-100">
                    <button id="gameInfoBtn" class="btn btn_blue w-100">
                        <i class="ic__center ic-btn ic-search"></i>搜索
                    </button>
                </div>
            </div>


            <div>


                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="font-size: 12px">
                    <tbody>
                    <tr  v-for="project in allgames.data.aProject">
                        <td>{{project.cnname}}</td>
                        <td>{{project.modes}}</td>
                        <td>{{project.totalprice}}</td>
                        <td>{{project.methodname}}</td>
                        <td>{{project.kcode}}</td>
                        <td>{{project.username}}</td>
                        <td>{{project.issue}}</td>
                        <td>{{project.projectid}}</td>
                        <td>{{project.writetime}}</td>

                    </tr>

                    </tbody>
                </table>



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
                axiosurl:'/index.php?controller=ionreportapi&action=gamelist&p=1',
                allgames:null,
                todaysearch:'',
                historyseach:'',
                begindate:'',
                enddate:'',
                lotid:'',
                usrname:'',
                incunder:''
            }
        },



        mounted(){

            var self=this

            $.ajax({
                url: self.axiosurl,
                type: 'GET',
                headers: {
                    'token': (self.userinfo==null ? '' : self.userinfo.token)
                },
                error: function(xhr) {
                    alert('Ajax request 發生錯誤');
                },
                success: function(response) {
                    self.allgames=JSON.parse(response)
                    console.log(self.allgames.data.lottery)
                }
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
