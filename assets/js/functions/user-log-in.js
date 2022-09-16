export function validLoginInfo(username, password) {
    var userInfo = JSON.parse(localStorage.getItem("user-" + username))
    if (userInfo === null) {
        return "Unknown username"
    }
    if (userInfo.password === password) {
        return "1"
    }
    return "Wrong password"
}