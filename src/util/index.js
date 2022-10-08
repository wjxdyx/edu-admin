import path from 'path-browserify'
export const clear = info => {
    const keys = Object.keys(info)
    let obj = {}
    keys.forEach(item => {
        obj[item] = ''
    })
    Object.assign(info, obj)
}
// 判断是否是数组
export  function isArray(obj) {
    if (Array.isArray) {
        return Array.isArray(obj)
    } else {
        return Object.prototype.toString.call(obj) === '[object Array]'
    }
}
export function deepClone(target) {
    // 定义一个变量
    let result
    // 如果当前需要深拷贝的是一个对象的话
    if (typeof target === 'object') {
        // 如果是一个数组的话
        if (Array.isArray(target)) {
            result = [] // 将result赋值为一个数组，并且执行遍历
            for (let i in target) {
                // 递归克隆数组中的每一项
                result.push(deepClone(target[i]))
            }
            // 判断如果当前的值是null的话；直接赋值为null
        } else if (target === null) {
            result = null
            // 判断如果当前的值是一个RegExp对象的话，直接赋值
        } else if (target.constructor === RegExp) {
            result = target
        } else {
            // 否则是普通对象，直接for in循环，递归赋值对象的所有值
            result = {}
            for (let i in target) {
                result[i] = deepClone(target[i])
            }
        }
        // 如果不是对象的话，就是基本数据类型，那么直接赋值
    } else {
        result = target
    }
    // 返回最终结果
    return result
}

export function isExternalLink(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
export const tree_to_list = (list, newArr = []) => {
    list.forEach(item => {
        const { children } = item
        if (children) {
            delete item.children
            if (children.length) {
                newArr.push(item)
                return tree_to_list(children, newArr)
            }
        }
        newArr.push(item)
    })
    return newArr
}
export function resolveRoutePath(basePath, routePath) {
    if (isExternalLink(routePath)) {
        return routePath
    }
    if (isExternalLink(basePath)) {
        return basePath
    }
    return basePath ? path.resolve(basePath, routePath) : routePath
}
