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
        })
}
function storeUserLocal(){
    //Få items fra localStorage og læg dem i currentStorage, hvis der er brugere i localStorage
    if (localStorage.length > 0) {
        for (i = 0; i < localStorage.length; i++) {
            var currentStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }
    }
    else {
        //ikke noget
    }
    //merger userDataArray med currentStorage
    var storageUpdated = userDataArray.concat(currentStorage);
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
            if (array[counts].username = username){
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
                if (loginUserCheck){
                    console.log("Login Succesful");
                    break;
                }
                else {
                    console.log("Fuck off");
                }
            }
        }
    }
    else {
        alert("User not found");
    }
}

function loginUserCheck(array, username, password) {
    console.log(username);
    console.log(array);
    console.log(password);
    var usernameCheck = document.getElementById("userLogin");
    var passwordCheck = document.getElementById("passwordLogin");
    if (username != ""){
        for (count = 0; array.length > count; count++){
            if (username = usernameCheck){
                if (password = passwordCheck){
                    return true;
                }
                else {
                    alert("Wrong Password");
                }
            }
            else {
                console.log("ok")
            }
        }

        }
    else {
        console.log("We at that last stop")
        return false;
    }
}


