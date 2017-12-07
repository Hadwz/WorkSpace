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
import NotFound from './components/NotFound.vue';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueLazyload,{
	loading: 'static/images/default.jpg',
	error: 'static/images/question_mark.png'
});

const routes = [{
	path: '/home',
	component: Home,
	hidden: true,
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
	path: '/login',
	component:  mLogin
},
{
	path: '/404',
	component: NotFound,
	name: '',
	hidden: true
},
{
	path: '*',
	hidden: true,
	redirect: { path: '/404' }
},];

const router = new VueRouter({
	routes
});

//全局前置守卫来跳转或取消的方式来守卫导航
// router.beforeEach((to, from, next) => {
// 	//NProgress.start();
// 	if (to.path === '/login') {
// 		sessionStorage.removeItem('user');
// 	}
// 	let user = JSON.parse(sessionStorage.getItem('user'));
// 	if (!user && to.path !== '/login') {
// 		next({ path: '/login' });
// 	} else if (to.path === '/home') {
// 		next({path: '/expert'});
// 	}	else {
// 		next();
// 	}
// });

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app-box');
