function _import(view) {
    return () =>
        import (`@/${view}`)
}

export function assembleRouter(dataList) {
    return dataList.map(item => {
        item.component = _import(item.component)
        if (item.children) {
            item.children = assembleRouter(item.children)
        }
        return item
    })
}
export function filterRouter(dataList, roleName) {
    var newArr = []
    dataList.forEach(item => {
        if (!item.meta || !item.meta.roles) {
            newArr.push(item)
        } else {
            if (item.meta.roles.indexOf(roleName) !== -1) {
                newArr.push(item)
            }
        }
        if (item.children) {
            item.children = filterRouter(item.children, roleName)
        }
    });
    return newArr
}