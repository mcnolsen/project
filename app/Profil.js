function changePassword () {
    var password = document.getElementById("newPassword").value;
    //Hiver localstorage ned i et array
    for (i = 0; i < localStorage.length; i++) {
        var currentStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    var userLoggedIn = sessionStorage.key(0);

    //Finder den user der har samme username som den der er logged ind
    var findUser = currentStorage.find(function (user) {
        return user.username === userLoggedIn;
    });
    findUser.password = password;
    var string = JSON.stringify(currentStorage);
    localStorage.setItem(currentStorage.userID, string);
}

function changeEmail () {
    var email = document.getElementById("newEmail").value;
    //Hiver localstorage ned i et array
    for (i = 0; i < localStorage.length; i++) {
        var currentStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    var userLoggedIn = sessionStorage.key(0);

    //Finder den user der har samme username som den der er logged ind
    var findUser = currentStorage.find(function (user) {
        return user.username === userLoggedIn;
    });
    findUser.email = email;
    var string = JSON.stringify(currentStorage);
    localStorage.setItem(currentStorage.userID, string);
}
