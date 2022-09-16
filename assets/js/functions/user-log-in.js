export function validLoginInfo(username, password) {
    var userInfo = JSON.parse(localStorage.getItem("user-" + username))
    if (userInfo.password === password) {
        return true
    }
    return false
}