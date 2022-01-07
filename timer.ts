const timer = (callback: () => void, deadline: number, interval = 1000) => {
    let i = 0
    const initAt = Date.now()
    const itv = setInterval(() => {
        i = ~~((initAt - deadline) / interval)
        if (i >= deadline) {
            clearInterval(itv)
            callback()
        }
    }, interval)
}
export default timer