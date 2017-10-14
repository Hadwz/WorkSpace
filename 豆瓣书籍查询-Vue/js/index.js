/*
 * @Author: Hadwz 
 * @Date: 2017-10-14 00:02:14 
 * @Last Modified by: Hadwz
 * @Last Modified time: 2017-10-14 16:50:09
 */




const log = console.log.bind(console);


/**
 * 判断用户输入的字符串是否是中文和非空
 * 
 * @param {string} 用户输入的字符串
 * @returns  {boolean} true or false
 */
const inputJudge = str => {

	// const reg = /^[\u4e00-\u9fa5]{0,}$/;

	if (str === "") {

		return false;

	}

	return true;

};




$(function () {

	 const Book = new Vue({

		el: '#booker',

		data:{

			th:{

				title:'书名',

				author:'作者',

				date:'日期',

				mark:'平均分',

				price:'价格',

			},

			warningMsg: '',

			input:'',

			warning:false,

			bookData: [],

			Listpage:[],

			tableShow:false,

		},

		computed:{

			showWarning: function () {

				this.warning = true;

				if(this.input ===''){
					this.warningMsg = `输入内容不能为空哦！`;
				} else {
					this.warningMsg = `您输入的 ${this.input} 不是一本书哦！`;
				}

			}

		},

		methods: {

			clickHandler: function () {

				if(this.bookData.length!=0){
					this.bookData=[];
				}

				inputJudge(this.input) ? this.ajaxRequest(this.input) : this.showWarning ;

			},

			ajaxRequest: function (input) {

				let Url = `https://api.douban.com/v2/book/search?q=${input}&fields=title,author,pubdate,rating,price`;

				const request = $.ajax({

					url:Url,

					dataType:'JSONP',

					JSONP:'onBack',

					success:data => {

						let books = data.books;

						let bookLen = Math.floor(data.books.length/4);

						for (let i in books) {

							this.bookData.push(books[i]);

						}

						for(let i =0;i<bookLen;i++){
							this.Listpage.push(i);
						}

						this.tableShow =true;

					}

				});
			}

			
			

		}


	 });

});
