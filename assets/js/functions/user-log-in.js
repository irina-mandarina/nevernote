export function validLoginInfo(username, password) {
    try {
        var userInfo = JSON.parse(localStorage.getItem("user-" + username))
    }
    catch (e) {
        return "Exception during trying to parse " + username + ": " + e
    }
    if (userInfo === null) {
        throw "Unknown username"
    }
    if (userInfo.password === password) {
        return
    }
    throw "Wrong password"
}