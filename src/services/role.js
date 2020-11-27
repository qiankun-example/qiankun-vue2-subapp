import request from '@/utils/request'


export function getRoleAll () {
  return request({
    method: 'GET',
    url: '/boss/role/all'
  })
}

export function getRoleAllAndPermission (userId) {
  return request({
    method: 'GET',
    url: '/boss/role/getRolesWithUserPermission',
    params: { userId }
  })
}

export function getRolePages (data) {
  return request({
    method: 'POST',
    url: '/boss/role/getRolePages',
    data
  })
}

export function allocateRolesToUser (data) {
  return request({
    method: 'POST',
    url: '/boss/role/allocateUserRoles',
    data
  })
}

export function saveOrUpdateRole (data) {
  return request({
    method: 'POST',
    url: '/boss/role/saveOrUpdate',
    data
  })
}

export function deleteRole (id) {
  return request({
    method: 'DELETE',
    url: `/boss/role/${id}`
  })
}

export function getRole (id) {
  return request({
    method: 'GET',
    url: `/boss/role/${id}`
  })
}
export function getRolesByUser (userId) {
  return request({
    method: 'GET',
    url: `/boss/role/user/${userId}`
  })
}
