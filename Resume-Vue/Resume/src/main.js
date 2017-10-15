// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 各种框架
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/js/jquery-1.9.1';
import './assets/js/bootstrap.min';
import './assets/css/animate.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
})


/**
 * jQuery 扩展插件
 */
$.fn.extend({
	animateCss: function (animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		this.addClass('animated ' + animationName).one(animationEnd, function () {
			$(this).removeClass('animated ' + animationName);
		});
		return this;
	}
});
