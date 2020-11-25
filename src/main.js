import './public-path' // 注入全局公共路径
import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import routes from './router'

Vue.config.productionTip = false

// 1. 单例
let instance = null  // 实例

// 2. 渲染
function render(props = {}) {
  const { container, routerBase } = props
  console.log(window.__POWERED_BY_QIANKUN__, routerBase, process.env.BASE_URL)
  const router = new VueRouter({
    base: '/qiankun-vue2-subapp',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}


// 3. 导出三个接口
export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}

export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}

export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
