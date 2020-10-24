<template>
	<div class="invite">
		<div class="header">
			<div class="mask mask-three"></div>
			<div class="logo-item">
				<p>招纳贤士</p>
				<p>我们提供具有市场竞争力的薪资、高速成长的机会及融洽并进的工作氛围；热爱技术、尽责工作的成员将拥有广宽的价值发挥空间，个人成长、技术成长、收入成长，都能达成。     </p>
			</div>
		</div>
		<div class="dev-mid-tit">
			<div>————</div>
			<div class="tit-text">企业概况</div>
			<div>————</div>
		</div>
		<div class="mid-des">
			<div class="mid-left">
				<div class="left-list" v-for="(x,y) in arr" :class="active == y?'list-active':''" @click="handleType(y)">{{x}}
					<div v-show="active == y"></div>
				</div>
				<div class="map-wrap">
					<div id="container"></div>
				</div>
				<ul class="msg">
					<li>8小时工作制，周末双休，节假日按法定放假；</li>
					<li>五险一金，年假，全勤奖，年终奖，加薪机会；</li>
					<li>不定期组织员工体检、员工旅游、聚餐活动、文体活动；具有市场竞争力的薪资、未来两年个人高速成长的机会。在这里你有足够多的机会和空间，体验专业 的工作氛围，充分发挥自我价值.</li>
					<li>地址：甘肃省兰州市城关区永昌路中信大厦19  05室</li>
					<li>传真：0931-8186173</li>
					<li>电话：400-970-0125</li>
				</ul>
			</div>
			<div class="mid-right">
				<div class="title-text">{{text}}</div>
				<div class="right-content">
					<ul v-for="x in post[active]">
						<span v-if="x.title" class="title-c">{{x.title}}</span>
						<li v-for="item in x.content">{{item}}</li>
					</ul>                        
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				arr:['WEB前端开发','软件实施','软件开发'],
				active:0,
				text:'WEB前端开发',
				post:[
					[
						{
							title:'WEB前端开发岗位职责：',
							content:[
								"1.负责网页界面前端的页面构建工作，及结构及样式层结构的设计、优化；",
								"2.能够完成各种数据交互、动态信息展现和用户的互动；",
								"3.负责给出合理的页面前端结构解决方案；",
								"4.能够利用HTML5相关技术开发网站、手机、平板电脑等多平台的前端应用。"
							]
						},{
							title:'任职要求：',
							content:[
								"1.2年以上前端开发相关经验；",
								"2.熟练掌握HTML/XHTML/HTML5、CSS等网页制作技术，熟悉页面架构和布局；",
								"3.熟练掌握vue、es6、element，以及sass或less中的一项；",
								"4.js基本功扎实；",
								"5.配合后端及美工调整前端页面；"
							]
						}
					],
					[
						{
							content:[
								"1.熟悉windows操作系统，能解决简单系统问题；",
								"2.有软件架构思想，可以对实施软件举一反三；",
								"3.可以独立思考解决问题，判断操作问题及软件bug，并及时反馈；",
								"4.主要负责公司产品软件的安装调试、日常维护、售后服务以及项目实施；",
								"5.能接受省内出差；",
								"6.有软件项目实施或开发经验，熟悉SQL数据库者优先考虑；"
							]
						}
					],
					[
						{
							title:'软件开发岗位职责：',
							content:[
								"1.熟悉JAVA 后端开发，能独立完成开发工作；",
								"2.熟练应用SQL数据库；",
								"3.熟悉项目文档归集整理；",
								"4.负责完善和维护现有系统，对软件使用进行培训；",
								"5.能做或修改现有WebServers通用接口，熟悉Tomcat等中间件"
							]
						},{
							title:'任职要求：',
							content:[
								"1.具有1年以上从事系统开发的工作经验，参加过大中型系统开发工作；",
								"2.熟练掌握专业的编程语言；",
								"3.能独立解决技术问题；",
								"4.熟悉数据库、JAVA语言、HTML设计、可以按需快速出   DEMO。",
								"5.面试请携带作品；",
								"6.满足上诉部分要求可面试。"
							]
						}
					]
				]
			}
		},
		mounted(){
			let map = new AMap.Map('container',{
				zoom:19,//级别
				center:[103.820695,36.058374],
				viewMode:'3D'//使用3D视图
			});
			let marker = new AMap.Marker({
				position:new AMap.LngLat(103.820695,36.058374),
				title:'中信大厦'
			})
			map.add(marker)
		},
		methods:{
			handleType(y){
				this.active = y;
				this.text = this.arr[this.active]
			}
		}
	}
</script>
<style scoped>
	.header{
		height: 700px;
		background-image: url('../../assets/images/head3.jpg');
		background-size: 100% 100%;
	}
	.logo-item{
		font-size: 16px;
		color: #FFFEFE;
		position: absolute;
		right: 15%;
		top: 150px;
		width: 600px;
		font-weight: bold;
		z-index: 99;
	}
	.logo-item>p:nth-child(1){
		font-size: 36px;
		text-align: right;
		margin-bottom: 40px;
	}
	.logo-item>p:nth-child(2){
		text-indent:30px;
	}
	.mask-three{
		background: rgba(68,138,202,.39);
	}
	.mid-tit{
		width: 26%;
		margin: auto;
		display: ;
	}
	.mid-des{
		display: flex;
		justify-content: space-between;
		width: 54%;
		margin: auto;
	}
	.mid-left{
		width: 40%;
	}
	.mid-right{
		width: 60%;
	}
	.left-list{
		background: #EEEEEE;
		width: 300px;
		height: 65px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		position: relative;
		cursor: pointer;
	}
	.left-list:nth-child(2){
		margin: 20px 0;
	}
	.list-active{
		background: #FFEB3B;
	}
	.left-list>div{
		width: 0;
		height: 0;
		border: 10px solid #ffeb3b;
		border-top: none;
		border-right-color: transparent;
		border-left-color: transparent;
		position: absolute;
		top: -1.5px;
		left: 293px;
		transform: rotate(-45deg);
	}
	.mid-right{
		width: 50%;
		background: #EEEEEE;
	}
	.map-wrap{
		margin: 20px 0;
	}
	#container{
		width: 300px;
		height: 200px;
	}
	.msg{
		width: 300px;
	}
	.msg>li{
		list-style-type:square;
		margin: 20px 0;
	}
	.msg>li::marker{
		color: #FFC300;
	}
	.title-text{
		font-size: 26px;
		font-weight: bold;
		padding: 30px;
	}
	.right-content{
		width: 90%;
		margin: auto;
	}
	.right-content>ul{
		margin-bottom: 50px;
	}
	.right-content li{
		list-style: none;
		margin: 20px 0;
	}
	.title-c{
		
	}
</style>