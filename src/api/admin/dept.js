import request from '@/utils/request'

export function getDeptTableList(queryParams) {
  return request({
    url: '/hft-admin-server/api/v1/depts/table',
    method: 'get',
    params: queryParams
  })
}


export function getDeptSelectList() {
  return request({
    url: '/hft-admin-server/api/v1/system/depts/select',
    method: 'get'
  })
}


export function detail(id) {
  return request({
    url: '/hft-admin-server/api/v1/system/depts/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/hft-admin-server/api/v1/system/depts',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/hft-admin-server/api/v1/system/depts/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/hft-admin-server/api/v1/system/depts/'+ids,
    method: 'delete',
  })
}

export function patch(id, data) {
  return request({
    url: '/hft-admin-server/api/v1/system/depts/' + id,
    method: 'patch',
    data: data
  })
}
