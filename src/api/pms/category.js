import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/mall-pms/api/v1/categories',
    method: 'get',
    params: queryParams
  })
}

export function cascadeList(queryParams) {
  return request({
    url: '/mall-pms/api/v1/categories/cascade',
    method: 'get',
    params: queryParams
  })
}



export function detail(id) {
  return request({
    url: '/mall-pms/api/v1/categories/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/mall-pms/api/v1/categories',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/mall-pms/api/v1/categories/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/mall-pms/api/v1/categories/' + ids,
    method: 'delete'
  })
}

export function patch(id, data) {
  return request({
    url: '/mall-pms/api/v1/categories/' + id,
    method: 'patch',
    data: data
  })
}
