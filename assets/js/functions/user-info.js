
var userObj = null
function getUserInfo(username) {
    if (userObj !== null) {
        return userObj
    }
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.startsWith("user-")) {
            try {
                userObj = JSON.parse(localStorage.getItem(key))
            }
            catch (e) {
                console.log(e)
            }
            if (userObj.username === username) {
                return userObj
            }
        }
    }
    throw "Problem while looking for username: " + username
}

export function getName(username) {
    getUserInfo(username)
    return userObj.name
}

export function getAge(username) {
    getUserInfo(username)
    return userObj.age
}

export function getAddress(username) {
    getUserInfo(username)
    return userObj.address
}

export function getPassword(username) {
    getUserInfo(username)
    return userObj.password
}