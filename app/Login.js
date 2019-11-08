//userData og strJSON kan ikke defineres her nej...
//Fuck local storage...

//Laver et tomt array
var userDataArray = [{
    userID: 1,
    username: "abc",
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
    }
    else {
        registerUser();
    }
}

function registerUser(){
    var i = userDataArray.length + 1;
    userDataArray.push({
        userID: i,
        username: document.getElementById( "userRegister").value,
        password: document.getElementById("passwordRegister").value,
        admin: document.getElementById("adminRegister").value,
        tlfNumber: "",
        email: ""
        })
}




function loginUser() {

    var strJSON = JSON.stringify(userDataArray);
    console.log(userData);
    if (loginUserCheck()) {
        alert("Alert");
    }
    else {
        localStorage.setItem(userDataArray.username, strJSON);
        console.log(strJSON);
    }
}

function loginUserCheck() {
    //Konvertering af userData til en string i et nyt JSON objekt. Denne nye data er strJSON
    var strJSON = JSON.stringify(userData);
    console.log(userData);

    //For hver key i local storage, checker dem om username er er det samme
    for (var count = 0; count < localStorage.length; count++) {
        if (localStorage.key(count) === userData.username) {
            return true;
        }
        else {
        }
    }
}


