<template>
	<div class="wrap">
		<div class="menu-wrap">
			<div class="logo">
				<img src="../assets/images/logo2.png">
			</div>
			<div class="menu" :class="active == y?'active':''" v-for="(x,y) in menu" :key="x.path" @click="handlePage(x.path,y)">
				<div class="menu-text">{{x.name}}</div>
			</div>
		</div>
		<div class="content">
				<router-view></router-view>
			<div class="foot-wrap">
				<div class="foot">
					<div>
						<p>甘肃费而隐软件有限公司</p>
						<p>microinfinity.cn</p>
						<p>拢ICP备19003235号-4</p>
					</div>
					<div>
						<p>拢ICP备19003235号-4</p>
						<p>传真：0931-8186173</p>
						<p>地址：甘肃省兰州市城关区永昌路中信大厦1905室</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	// import 
	export default{
		data(){
			return {
				menu:[
					{name:'首页',path:'/'},
					{name:'定制研发',path:'/devlop'},
					{name:'关于我们',path:'/about'},
					{name:'招贤纳士',path:'/invite'}
				],
				active:0,
				// midHead:['预算绩效管理系统','国库账户管理系统','银企互联管理系统','大数据分析','管理系统定向开发'],
				// imgs:[require('../assets/images/logo.jpg'),require('../assets/images/b7.png'),require('../assets/images/b2.png'),require('../assets/images/a3.png'),require('../assets/images/b1.png'),require('../assets/images/b3.png'),require('../assets/images/a4.jpg'),require('../assets/images/a5.png'),require('../assets/images/a2.png')],
				// bigImgs:[require('../assets/images/a6.png'),require('../assets/images/b6.jpg'),require('../assets/images/b5.png'),require('../assets/images/b4.png')]
			}
		},
		mounted(){
			
		},
		methods:{
			handlePage(x,y){
				this.active = y;
				this.$router.push(x)
			}
		}
	}
	
</script>

<style>
	*{
		padding:0;
		margin:0;
	}
	.logo{
		width:80%;
		height:40px;
		margin:10px auto;
	}
	.mask{
		width: 100%;
		height: 700px;
		background: rgba(68,138,202,.3);
		position: absolute;
		z-index: 1;
	}
	.logo>img{
		width:100%;
		height:100%;
	}
	.menu-wrap{
		width: 150px;
		position: absolute;
		left: 15%;
		background: rgba(255,255,255,.28);
		user-select: none;
		z-index: 99;
	}
	.menu{
		width:100%;
		text-align:center;
		font-size:18px;
		padding:8px 0;
		cursor:pointer;
		user-select: none;
		font-weight: bold;
	}
	.menu-text{
		width:50%;
		text-align: left;
		margin: 0 auto;
	}
	.active{
		background:rgba(255,255,255,.5);
	}
	.foot-wrap{
		background: #434242;
	}
	.foot{
		width: 54%;
		display:flex;
		justify-content: space-between;
		align-items: center;
		background: #434242;
		color: #fff;
		padding: 40px 0;
		font-size: 16px;
		margin: auto;
	}
	.foot p{
		margin: 10px 0;
	}
</style>
