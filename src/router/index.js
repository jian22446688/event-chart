import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import { getToken, getLockStatus, canTurnTo } from '@/libs/util'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  routes
})
const LOCK_PAGE_NAME = 'lock_page'
const LOGIN_PAGE_NAME = 'login'
const IS_LOCKED = getLockStatus()

router.beforeEach((to, from, next) => {

  next()
})

router.afterEach(to => {
  // 顶部进度条 加载完成
  // iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
