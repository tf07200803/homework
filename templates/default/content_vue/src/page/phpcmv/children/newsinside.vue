<template>
    <div>
        <div class="container">

最新消息內頁

        <!--<ul>

            <li v-for="(infor,index,i) in infor"><img v-bind:src="infor.imgpath" />  {{infor.title}}</li>

        </ul>-->

            <div class="newstitle">{{infor.title}}</div>
            <div class="newsdetail">{{infor.content}}</div>

            <div class="newsimg"><img v-bind:src="infor.imgpath" v-if="infor.imgpath!=''"/></div>

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
                loginpath:'index.php?m=announce&c=index&a=show&webtype=vue&aid='+this.$route.params.aid,
                infor:'',
            }
        },

        mounted(){

            var self=this
            axios.get(this.loginpath, {
            }).then(function (response) {
                var res=response.data;
                if(res.status==1){
                    self.infor=res.data;
                    console.log(JSON.parse(JSON.stringify(self.infor)));
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

    li{
        border-bottom: 2px solid #0F0F0F;
    }

    .newstitle{
        padding: 20px;
        font-size: 24px;
        border-bottom: 1px solid #ccc;
    }
    .newsdetail{
        padding: 20px;
        font-size: 18px;
        color:#888888;
    }
</style>
