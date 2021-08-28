import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/permissions',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/hft-admin-server/admin-api/v1/sytem/permissions/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/permissions',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/permissions/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/permissions/'+ids,
    method: 'delete'
  })
}

export function patch(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/permissions/' + id,
    method: 'patch',
    data: data
  })
}
