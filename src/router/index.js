import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/role'
  },
  {
    path: '/role',
    name: 'role',
    component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue'),
    meta: { title: '角色管理' }
  },
  {
    path: '/allocMenu',
    name: 'allocMenu',
    component: () => import(/* webpackChunkName: 'role-menu' */ '@/views/role/role-menu.vue'),
    meta: { title: '角色菜单管理' }
  },
  {
    path: '/allocResource',
    name: 'allocResource',
    component: () => import(/* webpackChunkName: 'role-resource' */ '@/views/role/role-resource.vue'),
    meta: { title: '角色资源管理' }
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue'),
    meta: { title: '菜单管理' }
  },
  {
    path: '/menu-create',
    name: 'menu-create',
    component: () => import(/* webpackChunkName: 'menu-create' */ '@/views/menu/create.vue'),
    meta: { title: '创建菜单' }
  },
  {
    path: '/menu-edit',
    name: 'menu-edit',
    component: () => import(/* webpackChunkName: 'menu-edit' */ '@/views/menu/edit.vue'),
    meta: { title: '编辑菜单' }
  },
  {
    path: '/resource',
    name: 'resource',
    component: () => import(/* webpackChunkName: 'resource' */ '@/views/resource/index.vue'),
    meta: { title: '资源管理' }
  },
  {
    path: '/resource-category',
    name: 'resource-category',
    component: () => import(/* webpackChunkName: 'resource-category' */ '@/views/resource/resource-category.vue'),
    meta: { title: '资源分类' }
  }
]


export default routes
