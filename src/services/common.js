import request from '@/utils/request'

export function upload (data) {
  return request({
    method: 'POST',
    url: '/boss/course/upload',
    data
  })
}
