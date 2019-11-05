//userData og strJSON kan ikke defineres her nej...
//Fuck local storage...

//Laver et tomt array
var userDataArray = [{
    userID: 1,
    username: "abc",
    password: "1234",
    admin: true
}];

//Looper over alle usernames til de index der angives af y. Jeg er stuck fuck me
function checkUser(username, userDataArray){
    for (y = 0; y = userDataArray.length; y++) {
        if (userDataArray[y].username = username) {
            console.log("Found");
            var userExist = 0;
            break;
        }
        else {
            var userExist = 1;
        }
    }
};

function registerUser(){
    let i = userDataArray.length + 1;
    let username = document.getElementById("userRegister").value;
    if (userExist = 0) {
        userDataArray.push({
            userID: i,
            username: username,
            password: document.getElementById("passwordRegister").value,
            admin: document.getElementById("adminRegister").value
        });
    }
    else {
        alert("fuk bich")
    }
}
function loginUser() {

    var strJSON = JSON.stringify(userData);
    console.log(userData);
    if (loginUserCheck()) {
        alert("Alert");
    }
    else {
        localStorage.setItem(userData.username, strJSON);
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


