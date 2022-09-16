export function isValidUsername(username) {
    if (username.includes(" ")) {
        return false;
    }
    return true;
}

export function isTaken(username) {
    for(let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        if (key.includes("user-")) {
            let userInfo = JSON.parse(localStorage.getItem(key))
            if (userInfo.username === username) {
               return true
            }
        }
    }
    return false
}

export function isValidPassword(password) {
    var hasNumber = /\d/
    if (hasNumber.test(password)) {
        if (password.length >= 4) {
            return true
        }
    }
    return false
}

export function saveUserInfo(name, age, address, username, password) {
    localStorage.setItem('user-' + username, JSON.stringify({name: name, age: age, address: address, username: username, password: password}));
}


