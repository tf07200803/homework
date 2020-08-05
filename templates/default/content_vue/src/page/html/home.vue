<template>
  	<div>
        <div class="container">
            <head-top signin-up='home' @headerfunction="getHeader"></head-top>

            <div class="content">

                {{token}}

                <button v-on:click="btnClick">改變token</button>
                <button @click = "gotoAddress('/page')">連結到page</button>

                <div>{{headerInfor}}</div>
                <div class="jquerybtn" @click="jquerybtn()">我是jquery觸發的按鈕</div>

            </div>
            <div class="footer">footer</div>
        </div>
    </div>
</template>

<script>

    import 'src/style/init.css'
    import global_ from 'src/components/global/global'
    import headTop from '../../components/header/header'
    import $ from "jquery";
    import axios from 'axios';
    import {cityGuess, hotcity, groupcity} from '../../service/getData';
export default {
    data(){
        return{
            imgpath:'url(' + require('../../../src/images/v5/navbar.png') + ')',
            token:global_.token,
            headerInfor:'',
        }
    },

	mounted(){
        //this.axios_get();
        //this.axios_post();

        /*groupcity().then(res => {
            console.log(res)
        })*/
        axios.post("/test.php", {


        }).then(function (response) {

            console.log(response);

        }).catch(function (err) {

            console.log(err);

        });

    },

    components:{
        headTop
    },

    computed:{

    },

    methods:{
        btnClick(){
            global_.token=this.token=5566889
        },
        gotoAddress(path){
            this.$router.push(path)
        },
        getHeader(data){
            this.headerInfor=data
        },
        jquerybtn(){
            $(".jquerybtn").hide()
        },
        axios_get(){
            /*axios
                .get('https://www.runoob.com/try/ajax/json_demo.json')
                .then(response => (this.info = response))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });*/
        },
        axios_post(){
            axios
                .post('../../php/test.php')
                .then(response => (this.info = response))
                .catch(function (error) { // 请求失败处理
                    console.log(error);
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



</style>
