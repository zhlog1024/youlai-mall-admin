/**
 * OAuth客户端管理
 */
import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/oauth-clients',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/oauth-clients/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/oauth-clients',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/oauth-clients/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/oauth-clients/'+ids,
    method: 'delete'
  })
}

export function patch(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/oauth-clients/' + id,
    method: 'patch',
    data: data
  })
}
