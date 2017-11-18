
/*
 * @Author: Hadwz 
 * @Date: 2017-11-07 19:18:18 
 * @Last Modified by: Hadwz
 * @Last Modified time: 2017-11-16 00:31:58
 */

var strategies = {
	//判断是否为空
	isNonEmpty: function(value, errorMsg){
		if (value === ''){
			return errorMsg;
		}
	},

	//输入最小长度
	minLength: function (value,length,errorMsg){
		if (value.length < length) {
			return errorMsg;
		}
	},

	//判断是否为手机格式
	isMobile: function(value,errorMsg){
		if ( !/(^1[3|5|8][0-9]{9}$)/.test( value ) ) {
			return errorMsg;
		}
	}
}

var Validator = function(){
	 //缓存对应规则的数组，每个都是一个函数
	this.cache = []; 
}

Validator.prototype.add = function (dom,rules){
	var that = this;

	for(var i = 0, rule; rule = rules [i++];) {
		(function(rule){

			//规则数组,把stragegy 和 参数分开
			var strategyAry = rule.strategy.split(':');

			//错误信息提示数组
			var errorMsg = rule.errorMsg; 

			that.cache.push(function (){
				//对应规则的名称
				var strategy = strategyAry.shift(); 

				 //插入dom的值.
				strategyAry.unshift(dom.value);
				
				//错误信息提示
				strategyAry.push( errorMsg ); 

				//console.log('strategyAry:',strategyAry);
				
				return strategies[strategy].apply(dom,strategyAry);
			});
		})(rule);
	}

	//console.log('cache:',this.cache);
};

Validator.prototype.start = function() {
	for (var i = 0, ValidatorFunc; ValidatorFunc = this.cache [i++];){

		//开始校验，并取得校验的返回信息
		var errorMsg = ValidatorFunc();

		//如果有确切的返回值，说明校验没有通过
		if ( errorMsg ) {
			return errorMsg;
		}
	}
};

export default Validator;