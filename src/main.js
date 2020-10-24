import Vue from 'vue'
import App from './App.vue'
import router from './router'
import swiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
Vue.config.productionTip = false
Vue.use(swiper)
Vue.use(router)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
