import http from "@/utils/httpRequest"
import * as TS from '@/utils/defind'

export const codeApi = () => http.get(('/auth/code'))

export const loginAPI=(data:TS.Login)=>http.post(('/auth/login'),data)

export const buildAPI=()=>http.get(('/api/menus/build'))
//系统管理角色管理的数据
export const rolesAPI=(params:TS.rolesAPI)=>http.get((`/api/roles?page=${params.page}&size=${params.size}&sort=level%2Casc&blurry=${params.blurry}`))
//系统管理角色管理的添加
export const rolesaddAPI=(data:TS.rolesadd)=>http.post(('/api/roles'),data)
//系统管理角色管理的
export const lazyAPI=(params:TS.pid)=>http.get((`/api/menus/lazy`),params)
//系统管理角色管理的列表删除
export const roledelAP=(data:number[])=>http.delete(('/api/roles'),data)

export const lazygetAPI=(params:TS.pid)=>http.get((`/api/menus/lazy?pid=${params.pid}`))
// 系统管理角色管理的数据范围
export const deptAPI=()=>http.get((`/api/dept?enabled=true`))

export const deptidAPI=(params:TS.dept)=>http.get((`/api/dept?enabled=true&pid=${params.pid}`))

// 系统管理用户管理下拉框
export const sortAPI=()=>http.get((`/api/dept?sort=id,desc`))
// 系统管理用户管理下拉框2级
export const descAPI=(params:TS.pid)=>http.get((`/api/dept?sort=id,desc&pid=${params.pid}`))
// 系统管理用户管理列表删除
export const usersdelAP=(data:number[])=>http.delete(('/api/users'),data)


export const usersAPI=(params:TS.users)=>http.get((`/api/users?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))

// 系统管理菜单管理列表
export const menusAPI=(params:TS.menu)=>http.get((`/api/menus?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))

export const menusdelAPI=(data:number[])=>http.delete(('/api/menus'),data)

export const menuspidAPI=(params:TS.pid)=>http.get((`/api/menus?pid=${params.pid}`))


// 系统管理菜单管理任务调度列表数据
export const jobsAPI=(params:TS.users)=>http.get((`/api/jobs?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))



//系统管理字典管理列表数据
export const dictAPI=(params:TS.users)=>http.get((`/api/dict?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))


//系统管理岗位管理列表数据
export const jobAPI=(params:TS.users)=>http.get((`/api/job?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))

//系统管理部门管理列表数据

export const deptsAPI=(params:TS.users)=>http.get((`/api/dept?page=${params.page}&size=${params.size}&sort=id%2Cdesc`))
