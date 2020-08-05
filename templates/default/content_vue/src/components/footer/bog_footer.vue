<template>
    <div style="height: 100%;">
        <div class="container">



            <ul>

                <li @click = "gotoAddress('/bog/bog_home')">首頁</li>
                <li @click = "gotoAddress('/bog/bog_gamehall')">遊戲大廳</li>
                <li @click = "gotoAddress('/bog/bog_gamerec')">遊戲紀錄</li>
                <li @click = "gotoAddress('/bog/bog_usrcenter')">帳戶中心</li>

            </ul>





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

            }
        },

        mounted(){

        },

        components:{

        },

        computed:{

        },

        methods:{
            gotoAddress(path){
                this.$router.push(path)
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
    ul{
        height: 100%;
    }
    li{
        color:#fff;
        width: 25%;
        float: left;
        text-align: center;
        font-size: 18px;
        display: flex;
        min-height: 100%;
        align-items: center;
        justify-content: center;
    }


</style>
