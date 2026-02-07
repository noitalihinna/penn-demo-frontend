import api from './index'

// 查询所有用户
export function getUserList() {
  return api.get('/user/list')
}

// 分页查询用户
export function getUserPage(params) {
  return api.get('/user/page', { params })
}

// 根据ID查询用户
export function getUserById(id) {
  return api.get(`/user/${id}`)
}

// 新增用户
export function addUser(data) {
  return api.post('/user/add', data)
}

// 修改用户
export function updateUser(data) {
  return api.put('/user/update', data)
}

// 删除用户
export function deleteUser(id) {
  return api.delete(`/user/${id}`)
}
