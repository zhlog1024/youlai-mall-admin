import request from '@/utils/request'

export function del(path) {
  return request({
    url: '/hft-admin-server/api/v1/files',
    method: 'delete',
    params: { path: path}
  })
}
