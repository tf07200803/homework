<template>
    <div>
        <div class="container">

技術頁
            <select v-model="selected" @change="onChange($event)">

                <option v-for="infor in selectArray" v-bind:value="infor.val">{{infor.text}}</option>

            </select>



            <transition name="router-slid">
                <router-view></router-view>
            </transition>

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
                selected:this.$route.path,
                selectArray:[{val:'/phpcmv/phpcmv_skill/phpcmv_storage',text:'全域變數'},
                    {val:'/phpcmv/phpcmv_skill/phpcmv_direactives',text:'direactives'},
                    {val:'/phpcmv/phpcmv_skill/phpcmv_components',text:'components'},
                    {val:'/phpcmv/phpcmv_skill/phpcmv_normal',text:'一般控制'},
                    {val:'',text:''},
                    {val:'',text:''},
                    {val:'',text:''}]

            }
        },

        mounted(){



        },

        components:{

        },

        computed:{

        },

        methods:{

            onChange(event) {
                this.gotoAddress(event.target.value)
            },
            gotoAddress(path){
                this.$router.push(path)
            }
        },
        directives: {

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
</style>
