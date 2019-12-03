//Laver et array med vores første bruger (admin)
var userDataArray = [{
    username: "admin",
    password: "1234",
    admin: true,
    tlfNumber: "",
    email: ""
}];
//Looper over alle usernames. Tjekker om username eksisterer i arrayet.
function checkUser(){
    var userExist = 0;
    for (y = 0; y < userDataArray.length; y++) {
        if (userDataArray[y].username == document.getElementById( "userRegister").value) {
            var userExist = true;
            break;
        }
        else {
            var userExist = false;
        }
    }
    //Bestemmer hvad der skal ske alt efter om usernamet eksisterer eller ej
    if (userExist) {
        alert('Username exists')
    }
    else {
        registerUser();
    }
}

function registerUser(){
    userDataArray.push({
        username: document.getElementById( "userRegister").value,
        password: document.getElementById("passwordRegister").value,
        admin: document.getElementById("adminRegister").value,
        tlfNumber: "",
        email: ""
        });
    storeUserLocal();
}
function storeUserLocal(){
    //Få items fra localStorage og læg dem i currentStorage, hvis der er brugere i localStorage
    if (localStorage.length > 0) {
        for (i = 0; i < localStorage.length; i++) {
            var currentStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
    }
    else {
        console.log("Nothing in localstorage");
        //ikke noget
    }
    //merger userDataArray med currentStorage
    var nonfilterstorageUpdated = userDataArray.concat(currentStorage);
    //Inspiration https://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
    var storageUpdated = nonfilterstorageUpdated.filter (function (el) {
        return el != null;
    });
    //Sorterer duplicates i forhold til deres userID.
    storageUpdated.sort(function (a,b) {
        if (a.username > b.username){
            return 1;
        }
        else if (a.username < b.username){
            return -1;
        }
        else {
            return 0;
        }
    });
    // Splice inspiration : https://www.viralpatel.net/javascript-array-remove-element-js-array-delete-element/
    function spliceStorageUpdated(array, username){
        for (counts = 0; counts < array.length; counts++){
            if (array[counts].username == username){
                array.splice(counts, 1);
                break;
            }
            else{
            }
        }
    }
    //Starter bagfra i arrayet. Hvis username med 1 index lavere er det samme som for indexet, så sendes data videre til spliceStorageUpdated functionen
    for (count = storageUpdated.length - 1; count > 0; count--){
        var a = storageUpdated[count].username;
        var b = storageUpdated[count - 1].username;
        if (a === b) {
            spliceStorageUpdated(storageUpdated, storageUpdated[count].username);
        }
        else {
        }
    }
    console.log(storageUpdated);
    //Gøres til en string og sendes til localstorage
    var strJSON = JSON.stringify(storageUpdated);
    localStorage.setItem(storageUpdated.userID, strJSON);

}

function loginUser() {
    if (localStorage.length > 0) {
        for (i = 0; i < localStorage.length; i++) {
            var currentUsers = JSON.parse(localStorage.getItem(localStorage.key(i)));
            for (counter = 0; currentUsers.length > counter; counter++){
                loginUserCheck(currentUsers, currentUsers[counter].username, currentUsers[counter].password);
                if (loginUserCheck == true){
                    console.log("Login Succesful");
                    break;
                }
                else {
                }
            }
        }
    }
    else {
    }
}

function loginUserCheck(array, username, password) {
    var usernameCheck = document.getElementById("userLogin").value;
    var passwordCheck = document.getElementById("passwordLogin").value;
    if (usernameCheck !== ""){
        for (count = 0; array.length > count; count++){
            if (username === usernameCheck){
                if (password === passwordCheck && passwordCheck !== "") {
                    checkSessionStorage(usernameCheck);
                    return true;
                }
                else {
                    document.getElementById("passText").innerHTML = "Wrong password";
                    return false;
                }
            }
            else {
                return false;
            }
        }
    }
    else {
        document.getElementById("passText").innerHTML = "Please enter a password";
        return false;
    }
}

// nu check sessionStorage og hvis ikke logged ind, så add brugernavnet til session storage
function checkSessionStorage(username) {
    console.log(username);
    if (sessionStorage.length > 0) {
        document.getElementById("passText").innerHTML = "Silly you. Du er allerede logged ind. <a href='../user/profil.html'>Klik her</a>";

    }
    else {
        sessionStorage.setItem(username, username);
    }
}

function logOut(){
    sessionStorage.clear();
}

function loggedInCheck() {
    if (sessionStorage.length > 0) {
        return true;
    }
    else {
        window.location.href = "../user/login.html";
    }
}


