export function validLoginInfo(username, password) {
    try {
        var userInfo = JSON.parse(localStorage.getItem("user-" + username))
    }
    catch (e) {
        return "Exception"
    }
    if (userInfo === null) {
        return "Unknown username"
    }
    if (userInfo.password === password) {
        return "1"
    }
    return "Wrong password"
}