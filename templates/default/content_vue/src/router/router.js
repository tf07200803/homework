import App from '../App'


const city = r => require.ensure([], () => r(require('../page/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('../page/msite/msite')), 'msite')
const search = r => require.ensure([], () => r(require('../page/search/search')), 'search')
const shop = r => require.ensure([], () => r(require('../page/shop/shop')), 'shop')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const forget = r => require.ensure([], () => r(require('../page/forget/forget')), 'forget')
const order = r => require.ensure([], () => r(require('../page/order/order')), 'order')
const orderDetail = r => require.ensure([], () => r(require('../page/order/children/orderDetail')), 'orderDetail')
const vipcard = r => require.ensure([], () => r(require('../page/vipcard/vipcard')), 'vipcard')
const invoiceRecord = r => require.ensure([], () => r(require('../page/vipcard/children/invoiceRecord')), 'invoiceRecord')
const useCart = r => require.ensure([], () => r(require('../page/vipcard/children/useCart')), 'useCart')
const vipDescription = r => require.ensure([], () => r(require('../page/vipcard/children/vipDescription')), 'vipDescription')
const food = r => require.ensure([], () => r(require('../page/food/food')), 'food')
const confirmOrder = r => require.ensure([], () => r(require('../page/confirmOrder/confirmOrder')), 'confirmOrder')
const remark = r => require.ensure([], () => r(require('../page/confirmOrder/children/remark')), 'remark')
const payment = r => require.ensure([], () => r(require('../page/confirmOrder/children/payment')), 'payment')
const userValidation = r => require.ensure([], () => r(require('../page/confirmOrder/children/userValidation')), 'userValidation')
const invoice = r => require.ensure([], () => r(require('../page/confirmOrder/children/invoice')), 'invoice')
const chooseAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/chooseAddress')), 'chooseAddress')
const addAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/addAddress')), 'addAddress')
const searchAddress = r => require.ensure([], () => r(require('../page/confirmOrder/children/children/children/searchAddress')), 'searchAddress')
const foodDetail = r => require.ensure([], () => r(require('../page/shop/children/foodDetail')), 'foodDetail')
const shopDetail = r => require.ensure([], () => r(require('../page/shop/children/shopDetail')), 'shopDetail')
const shopSafe = r => require.ensure([], () => r(require('../page/shop/children/children/shopSafe')), 'shopSafe')
const info = r => require.ensure([], () => r(require('../page/profile/children/info')), 'info')
const setusername = r => require.ensure([], () => r(require('../page/profile/children/children/setusername')), 'setusername')
const address = r => require.ensure([], () => r(require('../page/profile/children/children/address')), 'address')
const add = r => require.ensure([], () => r(require('../page/profile/children/children/children/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('../page/profile/children/children/children/children/addDetail')), 'addDetail')
const balance = r => require.ensure([], () => r(require('../page/balance/balance')), 'balance')
const balanceDetail = r => require.ensure([], () => r(require('../page/balance/children/detail')), 'balanceDetail')
const benefit = r => require.ensure([], () => r(require('../page/benefit/benefit')), 'benefit')
const coupon = r => require.ensure([], () => r(require('../page/benefit/children/coupon')), 'coupon')
const hbDescription = r => require.ensure([], () => r(require('../page/benefit/children/hbDescription')), 'hbDescription')
const hbHistory = r => require.ensure([], () => r(require('../page/benefit/children/hbHistory')), 'hbHistory')
const exchange = r => require.ensure([], () => r(require('../page/benefit/children/exchange')), 'exchange')
const commend = r => require.ensure([], () => r(require('../page/benefit/children/commend')), 'commend')
const points = r => require.ensure([], () => r(require('../page/points/points')), 'points')
const pointsDetail = r => require.ensure([], () => r(require('../page/points/children/detail')), 'pointsDetail')
const service = r => require.ensure([], () => r(require('../page/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../page/service/children/questionDetail')), 'questionDetail')
const find = r => require.ensure([], () => r(require('../page/find/find')), 'find')
const download = r => require.ensure([], () => r(require('../page/download/download')), 'download')
const page = r => require.ensure([], () => r(require('../page/html/page')), 'page')






const phpcmv = r => require.ensure([], () => r(require('../page/phpcmv/index')), 'bog')
const phpcmv_login = r => require.ensure([], () => r(require('../page/phpcmv/children/login')), 'phpcmv_login')
const phpcmv_home = r => require.ensure([], () => r(require('../page/phpcmv/children/home')), 'phpcmv_home')
const phpcmv_register = r => require.ensure([], () => r(require('../page/phpcmv/children/register')), 'phpcmv_register')
const phpcmv_news = r => require.ensure([], () => r(require('../page/phpcmv/children/news')), 'phpcmv_news')
const phpcmv_newsinside = r => require.ensure([], () => r(require('../page/phpcmv/children/newsinside')), 'phpcmv_newsinside')
const phpcmv_skill = r => require.ensure([], () => r(require('../page/phpcmv/children/skill')), 'phpcmv_skill')
const phpcmv_storage = r => require.ensure([], () => r(require('../page/phpcmv/children/children/storage')), 'phpcmv_storage')
const phpcmv_direactives = r => require.ensure([], () => r(require('../page/phpcmv/children/children/direactives')), 'phpcmv_direactives')
const phpcmv_components = r => require.ensure([], () => r(require('../page/phpcmv/children/children/components')), 'phpcmv_components')
const phpcmv_normal = r => require.ensure([], () => r(require('../page/phpcmv/children/children/normal')), 'phpcmv_normal')



const fabia = r => require.ensure([], () => r(require('../page/fabia/index')), 'fabia')
const fabia_login = r => require.ensure([], () => r(require('../page/fabia/children/login')), 'fabia_login')
const fabia_register = r => require.ensure([], () => r(require('../page/fabia/children/register')), 'fabia_register')
const fabia_home = r => require.ensure([], () => r(require('../page/fabia/children/home')), 'fabia_home')
const fabia_gmail = r => require.ensure([], () => r(require('../page/fabia/children/gmail')), 'fabia_gmail')
const fabia_case = r => require.ensure([], () => r(require('../page/fabia/children/case')), 'fabia_case')
const fabia_case2 = r => require.ensure([], () => r(require('../page/fabia/children/case2')), 'fabia_case2')
const fabia_regmail = r => require.ensure([], () => r(require('../page/fabia/children/regmail')), 'fabia_regmail')
const fabia_finish = r => require.ensure([], () => r(require('../page/fabia/children/finish')), 'fabia_finish')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/fabia/fabia_login'
        },

        {
            path: '/fabia',
            component: fabia,
            children: [
                {
                    path: 'fabia_login', //登入頁
                    component: fabia_login,
                },
                {
                    path: 'fabia_register', //註冊
                    component: fabia_register,
                },
                {
                    path: 'fabia_home', //首頁
                    component: fabia_home,
                },
                {
                    path: '/fabia_gmail/:aid', //檢測GMAIL
                    component: fabia_gmail,
                },
                {
                    path: '/fabia_regmail/:aid', //補驗證信
                    component: fabia_regmail,
                },
                {
                    path: 'fabia_case', //案子內容
                    component: fabia_case,
                },
                {
                    path: 'fabia_case2', //案子內容
                    component: fabia_case2,
                },
                {
                    path: 'fabia_finish', //案子內容
                    component: fabia_finish,
                },

            ]
        },

        {
            path: '/phpcmv',
            component: phpcmv,
            children: [
                {
                    path: 'phpcmv_login', //登入頁
                    component: phpcmv_login,
                },
                {
                    path: 'phpcmv_home', //首頁
                    component: phpcmv_home,
                },
                {
                    path: 'phpcmv_register', //註冊頁
                    component: phpcmv_register,
                },
                {
                    path: 'phpcmv_news', //註冊頁
                    component: phpcmv_news,
                },
                {
                    path: '/phpcmv_newsinside/:aid', //註冊頁
                    component: phpcmv_newsinside,
                },
                {
                    path: 'phpcmv_skill', //技術頁
                    component: phpcmv_skill,
                    children: [
                        {
                        path: 'phpcmv_storage', //痊癒變數
                        component: phpcmv_storage,
                        },
                        {
                            path: 'phpcmv_direactives', //痊癒變數
                            component: phpcmv_direactives,
                        },
                        {
                            path: 'phpcmv_components', //痊癒變數
                            component: phpcmv_components,
                        },
                        {
                            path: 'phpcmv_normal', //痊癒變數
                            component: phpcmv_normal,
                        },

                        ]
                },

            ]
        },
        //首页城市列表页

        {
            path: '/page',
            component: page
        },
        //当前选择城市页
        {
            path: '/city/:cityid',
            component: city
        },
        //所有商铺列表页
        {
            path: '/msite',
            component: msite,
            meta: { keepAlive: true },
        },
        //特色商铺列表页
        {
            path: '/food',
            component: food
        },
        //搜索页
        {
            path: '/search/:geohash',
            component: search
        },
        //商铺详情页
        {
            path: '/shop',
            component: shop,
            children: [{
                path: 'foodDetail', //食品详情页
                component: foodDetail,
            }, {
                path: 'shopDetail', //商铺详情页
                component: shopDetail,
                children: [{
                    path: 'shopSafe', //商铺安全认证页
                    component: shopSafe,
                }, ]
            }]
        },
        //确认订单页
        {
            path: '/confirmOrder',
            component: confirmOrder,
            children: [{
                path: 'remark', //订单备注
                component: remark,
            }, {
                path: 'invoice', //发票抬头
                component: invoice,
            }, {
                path: 'payment', //付款页面
                component: payment,
            }, {
                path: 'userValidation', //用户验证
                component: userValidation,
            }, {
                path: 'chooseAddress', //选择地址
                component: chooseAddress,
                children: [{
                    path: 'addAddress', //添加地址
                    component: addAddress,
                    children: [{
                        path: 'searchAddress', //搜索地址
                        component: searchAddress,
                    }]
                }, ]
            }, ]
        },
        //登录注册页
        {
            path: '/login',
            component: login
        },
        //个人信息页
        {
            path: '/profile',
            component: profile,
            children: [{
                path: 'info', //个人信息详情页
                component: info,
                children: [{
                    path: 'setusername',
                    component: setusername,
                },{
                    path: 'address',
                    component: address,     //编辑地址
                    children:[{
                        path:'add',
                        component:add,
                        children:[{
                            path:'addDetail',
                            component:addDetail
                        }]
                    }]
                }]
            },
            {
                path: 'service', //服务中心
                component: service,
            },]
        },
        //修改密码页
        {
            path: '/forget',
            component: forget
        },
        //订单列表页
        {
            path: '/order',
            component: order,
            children: [{
                path: 'orderDetail', //订单详情页
                component: orderDetail,
            }, ]
        },
        //vip卡页
        {
            path: '/vipcard',
            component: vipcard,
            children: [{
                path: 'invoiceRecord', //开发票
                component: invoiceRecord,
            }, {
                path: 'useCart', //购买会员卡
                component: useCart,
            }, {
                path: 'vipDescription', //会员说明
                component: vipDescription,
            },]
        },
        //发现页
        {
            path: '/find',
            component: find
        },
        //下载页
        {
            path: '/download',
            component: download
        },
        //服务中心
        {
            path: '/service',
            component: service,
             children: [{
                path: 'questionDetail', //订单详情页
                component: questionDetail,
            }, ]
        },
        //余额
        {
            path: 'balance',
            component: balance,
            children: [{
                path: 'detail', //余额说明
                component: balanceDetail,
            }, ]
        },
        //我的优惠页
        {
            path: 'benefit',
            component: benefit,
            children: [{
                path: 'coupon', //代金券说明
                component: coupon,
            }, {
                path: 'hbDescription', //红包说明
                component: hbDescription,
            }, {
                path: 'hbHistory', //历史红包
                component: hbHistory,
            }, {
                path: 'exchange', //兑换红包
                component: exchange,
            }, {
                path: 'commend', //推荐有奖
                component: commend,
            },]
        },
        //我的积分页
        {
            path: 'points',
            component: points,
            children: [{
                path: 'detail', //积分说明
                component: pointsDetail,
            }, ]
        },
    ]
}]
