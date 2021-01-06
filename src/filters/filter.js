export function filterState(code) {
    var str = ''
    if (code === 'pass') {
        str = '通过'
    } else if (code === 'reject') {
        str = '拒绝'
    } else {
        str = '待审核'
    }
    return str
}