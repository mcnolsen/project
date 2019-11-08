//userData og strJSON kan ikke defineres her nej...
//Fuck local storage...

//Laver et tomt array
var userDataArray = [{
    userID: 1,
    username: "abc",
    password: "1234",
    tlfNumber: "",
    email: "",
    admin: true
}];
function userUpdate(){
    var usernameUpdate = document.getElementById( "userRegister").value;
    console.log(usernameUpdate);
}
//Looper over alle usernames til de index der angives af y. Jeg er stuck fuck me
//Lorte kode som jeg ikke kan få til at virke med at tjekke om brugeren allerede er der
function checkUser(){
    userUpdate();
    for (y = 0; y == userDataArray.length; y = y + 1) {
        console.log(y);
        if (y = userDataArray.length){
            console.log("works")
        }
        /*if (userDataArray[y].username == document.getElementById( "userRegister").value) {
            console.log(userDataArray[y].username);
            return registerUser();
        }
        */
        else {
            console.log("XD");
        }
    }
}

function registerUser(){
    checkUser();
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


