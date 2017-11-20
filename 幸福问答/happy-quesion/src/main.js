// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/HelloFromVux';
import iView from 'iview';
import VueLazyload from 'vue-lazyload';
import 'iview/dist/styles/iview.css';
import 'common/less/index.less';
import store from './store';
import Subscribe from './components/Subscribe.vue';
import questionPage from './components/questionPage.vue';
import gmvip from './components/gmvip.vue';
import Expert from './components/expert/expert.vue';
import mLogin from './components/mLogin.vue';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueLazyload,{
	loading: 'static/images/default.jpg',
	error: 'static/images/question_mark.png'
});

const routes = [{
	path: '/home',
	component: Home,
	children: [
		{
			path: '/expert',
			component: Expert,
		},
		{
			path: '/subscribe',
			component:  Subscribe
		},
		{
			//动态路径参数，以冒号开头
			path: '/questionPage/:id',
			component: questionPage
		},
		{
			path: '/gmvip',
			component: gmvip
		}
	]
},
{
	path: '/',
	component:  mLogin
}];

const router = new VueRouter({
	routes
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box');
