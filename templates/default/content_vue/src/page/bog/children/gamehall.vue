<template>
    <div>
        <div class="container">


            <div>彩票游戏 LOTTERY</div>
            <div class="hallmenu">

                <ul>

                    <li v-for="(infor,index,i) in userinfo.group"><div class="sprite hall_lotteryhallIcon" :class="checkball(i)" @click="groundid=i"></div><div class="halltext">{{infor}}</div></li>

                </ul>

            </div>


            <div class="lotmenu" v-for="(infor,index,i) in userinfo.menu" v-show="i==groundid">
                <ul>

                    <li v-for="(value,index) in infor">{{value.title}}</li>

                </ul>

            </div>



        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'

    export default {
        data(){
            return{
                userinfo:JSON.parse(localStorage.userinfo),
                groundid:0,
            }
        },

        mounted(){

            console.log(this.userinfo.menu)

        },

        components:{

        },

        computed:{

        },

        methods:{
            checkball:function(str){
                return "ball_"+str
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

    .hallmenu{
        li{
            float: left;
        }
        .hall_lotteryhallIcon{
            width: 96px;
            height: 96px;
            display: inline-block;
            background-color: #f7f7f7;
        }
        .halltext{
            font-size: 20px;
        }
        .ball_0{
            background-position: -367px -117px;
        }
        .ball_1{
            background-position: -15px -117px;
        }
        .ball_2{
            background-position: -249px -117px;
        }
        .ball_3{
            background-position: -132px -117px;
        }
        .ball_4{
            background-position: -600px -117px;
        }
        .ball_5{
            background-position: -484px -117px;
        }
    }
    .sprite{
        @include bis('../../../images/img/lottery_hall/allicon.png');
    }
    .lotmenu{
        width: 100%;
        display: inline-block;

        li{
            float: left;
            display: inline-block;
            margin: 10px;
        }
    }

</style>
