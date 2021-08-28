import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login',
    url: '/hft-auth-server/oauth/token',
    method: 'post',
    params: data,
    headers: {
      'Authorization': 'Basic aGZ0LWFkbWluOjEyMzQ1Ng==' // 客户端信息加密摘要认证，明文：youlai-admin:123456
    }
  })
}

export function getUserInfo() {
  return request({
    // url: '/vue-element-admin/user/info',
    url: '/hft-admin-server/admin-api/v1/system/users/me',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/hft-auth-server/oauth/logout',
    method: 'delete'
  })
}

