import request from '@/utils/request'

export function getMenuAll () {
  return request({
    method: 'GET',
    url: '/boss/menu/getAll'
  })
}

export function deleteMenu (id) {
  return request({
    method: 'DELETE',
    url: `/boss/menu/${id}`
  })
}

export function getMenu (id) {
  return request({
    method: 'GET',
    url: `/boss/menu/${id}`
  })
}

export function getEditMenuInfo (id) {
  return request({
    method: 'GET',
    url: '/boss/menu/getEditMenuInfo',
    params: { id }
  })
}

export function saveOrUpdateMenu (data) {
  return request({
    method: 'POST',
    url: '/boss/menu/saveOrUpdate',
    data
  })
}

export function allocateRoleMenus (data) {
  return request({
    method: 'POST',
    url: '/boss/menu/allocateRoleMenus',
    data
  })
}

export function getMenuNodeList () {
  return request({
    method: 'GET',
    url: '/boss/menu/getMenuNodeList'
  })
}

export function getRoleMenus (roleId) {
  return request({
    method: 'GET',
    url: '/boss/menu/getRoleMenus',
    params: { roleId }
  })
}
