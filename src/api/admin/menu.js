import request from '@/utils/request'

export function getMenuTableList(queryParams) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/table',
    method: 'get',
    params: queryParams
  })
}

export function getMenuSelectList() {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/select',
    method: 'get'
  })
}


export function getMenuRouteList() {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/route',
    method: 'get'
  })
}


export function detail(id) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/'+ids,
    method: 'delete'
  })
}

export function patch(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/menus/' + id,
    method: 'patch',
    data: data
  })
}
