//userData og strJSON kan ikke defineres her nej...
//Fuck local storage...
function registerUser() {
    //Objekt med nødvendig user data. Den finder dataen fra det indtastede på siden.
    var userData = {
        username: document.getElementById("user").value,
        password: document.getElementById("password").value,
        admin: document.getElementById("admin").value,
    };
    var strJSON = JSON.stringify(userData);
    console.log(userData);
    if (registerUserCheck()) {
        alert("Alert");
    }
    else {
        localStorage.setItem(userData.username, strJSON);
        console.log(strJSON);
    }
}

function registerUserCheck() {
    //Objekt med nødvendig user data. Den finder dataen fra det indtastede på siden.
    var userData = {
        username: document.getElementById("user").value,
        password: document.getElementById("password").value,
        admin: document.getElementById("admin").value,
    };

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

