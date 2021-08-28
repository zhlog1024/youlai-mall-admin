import request from '@/utils/request'

export function list(queryParams) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/roles',
    method: 'get',
    params: queryParams
  })
}

export function detail(id) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/roles/' + id,
    method: 'get'
  })
}

export function add(data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/roles',
    method: 'post',
    data: data
  })
}

export function update(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/roles/' + id,
    method: 'put',
    data: data
  })
}

export function del(ids) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/roles/' + ids,
    method: 'delete'
  })
}

export function patch(id, data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/roles/' + id,
    method: 'patch',
    data: data
  })
}


export function listRoleMenu(id) {
  return request({
    url: '/hft-admin-server/admin-api/v1/roles/' + id + '/menus',
    method: 'get'
  })
}


export function listRolePermission(id, params) {
  return request({
    url: '/hft-admin-server/admin-api/v1/roles/' + id + '/permissions',
    method: 'get',
    params: params
  })
}

export function updateRoleMenu(id, menuIds) {
  return request({
    url: '/hft-admin-server/admin-api/v1/roles/' + id + '/menus',
    method: 'put',
    data: {menuIds: menuIds}
  })
}

export function updateRolePermission(menuId, roleId, permissionIds) {
  return request({
    url: '/hft-admin-server/admin-api/v1/roles/' + roleId + '/permissions',
    method: 'put',
    data: {menuId: menuId, permissionIds: permissionIds}
  })
}
