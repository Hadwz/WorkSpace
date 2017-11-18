/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-09-28 23:49:26
 * @version $Id$
 */


	let log = console.log.bind(console);

	//角色列表
	let Role = {

			dog : {

				name:'汪星人',

				img: 'img/汪星人.jpg',

				say:'汪汪汪！！！',

				slogan:'嗷嗷嗷！！！',

				info:'二二二二 哈...',

				select: false,

			},

			cat : {

				name:'喵星人',

				img:'img/喵星人.jpg',

				say:'铲屎的，你们的皇帝回来啦！',

				info:'铲屎官的皇帝！',

				slogan:'你去铲屎，朕去灭敌',

				select: false,

			},

			codeMonkey: {

				name: '程序猿',

				img:'img/程序猿.jpg',

				say:'正在查找你的BUG....',

				slogan:'哈，我已经知道敌人的BUG了！',

				info:'最讨厌八阿哥！',

				select: false,

			},

			Wang:{

				name: '隔壁老王',

				img:'img/隔壁老王.jpg',

				say:'你放心去出差，弟妹我来照顾！',

				slogan:'我的大刀早已饥渴难耐！',

				info: '人民的邻居！',

				select: false,

			},

			Ultraman:{

				name: '奥特曼',

				img:'img/奥特曼.jpg',

				say:'xia!！',

				slogan:'动感光波！BIU!BIU!BIU!',

				info: 'From:M78星云',

				select: false,

			},

			Mars:{

				name: '火星人',

				img:'img/火星人.jpg',

				say:'←№愚惷魡地球仒~→☆',

				slogan:'ㄣㄚòひィ故齣了姃確的選蘀╰☆ぷ',

				info:'火星了!',

				select: false,

			},
	}


	/*全局变量*/
	let myScope = {


		startFlag:false,   //选择开始标志

		timer: 1,   //计时器

		num: 0,   //选中的数字

	}
