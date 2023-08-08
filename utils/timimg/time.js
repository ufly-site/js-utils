// 定时器
const timer = {}

/**
 * 清除定时器
 * @param {Object} params
 * @param {String} params.name 定时器名称，必传参数
 */
function clearInter (name) {
    clearInterval(timer[name])
    timer[name] = false
}

/**
 * 添加定时器
 * @param {Object} params
 * @param {String} params.name 定时器名称，必传参数
 * @param {Number} params.time 定时器轮询时间间隔，默认值为5000毫秒
 */
export function addTimer (params = {}) {
    if (timer[params.name]) {
        clearInter(params.name)
    }
    timer[params.name] = setInterval(() => {
        if (params._this) {
            params._this[params.name] && params._this[params.name]()
        }
    }, params.time || 5000)
}

// 清除所有定时器
export function clearAllTimer () {
    for (const item in timer) {
        clearInter(item)
    }
}

/**
 * 是否有定时器
 * @param {String} name
 */
export function hasTimer (name) {
    return timer[name]
}
export { clearInter as clearTimer }
