import request from '@/utils/request'

export function getResourcePages (data) {
  return request({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data
  })
}

export function getCateGoryAll () {
  return request({
    method: 'GET',
    url: '/boss/resource/category/getAll'
  })
}

export function saveOrUpdateResource (data) {
  return request({
    method: 'POST',
    url: '/boss/resource/saveOrUpdate',
    data
  })
}

export function deleteResource (id) {
  return request({
    method: 'DELETE',
    url: `/boss/resource/${id}`
  })
}

export function getResource (id) {
  return request({
    method: 'GET',
    url: `/boss/resource/${id}`
  })
}
