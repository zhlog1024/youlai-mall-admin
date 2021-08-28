import request from "@/utils/request";

export function listLoginRecord(queryParams) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/login-records',
    method: 'get',
    params: queryParams
  })
}


export function del(data) {
  return request({
    url: '/hft-admin-server/admin-api/v1/system/login-records',
    method: 'delete',
    data:data
  })
}
