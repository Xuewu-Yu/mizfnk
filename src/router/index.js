import vueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(vueRouter)
import home from '@/components/home'
export default new vueRouter({
	routes:[
		{
			name:'home',
			path:'/',
			component:home
		},
		{
			name:'devlop',
			path:'/devlop',
			component:() => import('@/components/devlop')
		},
		{
			name:'about',
			path:'/about',
			component:() => import('@/components/about')
		},
		{
			name:'invite',
			path:'/invite',
			component:() => import('@/components/invite')
		}
	]
})