import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import FastClick from 'fastclick'

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

