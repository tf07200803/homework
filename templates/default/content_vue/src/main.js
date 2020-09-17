import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.use(VueRouter)
const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
		console.log(to)
		console.log(from)
        console.log(savedPosition)
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
})

new Vue({
	router,
	store,
}).$mount('#app')


Vue.prototype.Storage = function () {
    var version = "";
    return {
        set: function (key, data) {
            return window.localStorage.setItem(key, window.JSON.stringify(data));
        },
        get: function (key) {

            return window.JSON.parse(window.localStorage.getItem(key));
        },
        remove: function (key) {
            return window.localStorage.removeItem(key);
        },

        clear : function(){
            window.localStorage.clear();

        }

    };
}



Vue.prototype.blogName = '我是放在main.js 裡的Vue.prototype.blogName';
/*Vue.directive('focus', {
    inserted: function (el) {
        el.focus()
    }
})*/

Vue.component('my-checkbox', {
    template: '<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title">{{ checked }}</div></div>',
    data() {
        return { checked: false, title: 'Check me' }
    },
    methods: {
        check() { this.checked = !this.checked; }
    }
});
