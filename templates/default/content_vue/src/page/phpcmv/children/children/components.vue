<template>
    <div>
        <div class="container">




            <p>父组件的toCity{{toCity}}</p>
            <child-component @showCityName="updateCity" :sendData="toCity"></child-component>

            <my-checkbox></my-checkbox>
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
                infor:'',
                toCity:"北京",
            }
        },

        mounted(){



        },

        components:{
            'child-component': {
                props:['sendData'],
                // props with hyphens are auto-camelized
                template: '<div><h3>父组件传给子组件的toCity:{{sendData}}</h3><button @click=\'select(`大连`)\'>点击此处将‘大连’发射给父组件</button></div>',
                data: function () {
                    return {
                        response: ''
                    }
                },
                methods:{
                    select(val) {
                        let data = {
                            cityname: val
                        };
                        this.$emit('showCityName',data);//select事件触发后，自动触发showCityName事件
                    }
                },
                mounted(){

                },

            }
        },

        computed:{

        },

        methods:{
            updateCity(data){
                this.toCity = data.cityname;//改变了父组件的值
                console.log('toCity:'+this.toCity)
            },
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
