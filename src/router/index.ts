import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../layout/HomeView.vue'
import {getToken} from '@/utils/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
		redirect:'/dashboard',
		children:[
			{
				path: 'system/role',
				name: 'role',
				component: () =>
					import('../views/system/role/index.vue')
			},{
				path: 'system/user',
				name: 'user',
				component: () =>
					import('../views/system/user/index.vue')
			},{
				path: '/dashboard',
				name: 'dashboard',
				component: () =>
					import('../views/common/Dashboard/dashboard.vue')
			},{
				path: '/system/menu',
				name: 'menu',
				component: () =>
					import('../views/system/menu/index.vue')
			},{
				path: '/system/dept',
				name: 'dept',
				component: () =>
					import('../views/system/dept/index.vue')
			},{
				path: '/system/timing',
				name: 'timing',
				component: () =>
					import('../views/system/timing/index.vue')
			},{
				path: '/system/dict',
				name: 'dict',
				component: () =>
					import('../views/system/dict/index.vue')
			},{
				path: '/system/job',
				name: 'job',
				component: () =>
					import('../views/system/job/index.vue')
			},{
				path: '/components/tinymce',
				name: 'tinymce',
				component: () =>
					import('../views/components/tinymce/index.vue')
			}
		],
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import('../views/AboutView.vue')
  },
	{
    path: '/login',
    name: 'login',
    component: () =>
      import('../views/common/Login/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
		let token=getToken()
		if(to.path=='/login' && token){
			next('/')
		}else if(to.path!='/login' && !token){
			next ('login')
		}else{
			next()
		}

})

export default router
