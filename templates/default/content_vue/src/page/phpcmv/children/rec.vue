<template>
    <div>
        <div class="newsClass">

            <div class="setimg" @click = "gotoAddress('/phpcmv_newsinside/'+data.aid)"><img v-bind:src="data.imgpath" v-if="data.imgpath!=''"/><img src="../../../images/empty.jpg" v-if="data.imgpath==''" /></div>

            <div class="wordtitle">{{data.title}}</div>
            <div class="word"><span v-html="stxt"></span><span @click = "gotoAddress('/phpcmv_newsinside/'+data.aid)">...more</span></div>


        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'

    export default {
        props:['data'],
        data(){
            return{
                stxt:'',
            }
        },

        mounted(){
            var self=this;
            this.stxt=this.data.content.substring(0,50);
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


    .newsClass{
        background-color: #fffacd;
        border:1px solid #cccccc;
        width: 200px;
        float: left;
        border-radius: 12px;
        padding: 10px;
        margin: 10px;
        .setimg{
            width: 100%;
            height: 150px;
            background-color: #000;

            img{
                width: 100%;
                height: 100%;
            }

        }
        .wordtitle{
            font-size: 16px;
            color:#0b3b8c;
            padding-top: 10px;
            padding-bottom: 10px;
        }
        .word{
            font-size: 13px;
            color:#888888;


        }
    }

</style>
