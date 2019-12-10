function adminCheck() {
    var userNow = sessionStorage.key(0);
    for (i = 0; i < localStorage.length; i++) {
        var currentStorage = JSON.parse(localStorage.getItem(localStorage.key(i)));
    }
    for (count = 0; count < currentStorage.length; count++){
        var userIsAdmin = false;
        if (currentStorage[count].username === userNow && currentStorage[count].admin === true){
            userIsAdmin = true;
            break;
        }
        else {

        }
    }
    if (userIsAdmin === true){
        tableDraw();
    }
    else {
        alert("You are not an admin, so you do not have access.");
        window.location.replace("../user/profil.html")
    }
}

function tableDraw(){
    var table = document.createElement("table");
    var userData = storeUserLocal();
    for(count = 0; count < userData.length; count++){
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(0);
        var cell3 = row.insertCell(0);
        var cell4 = row.insertCell(0);
        var cell5 = row.insertCell(0);
        cell5.innerHTML = userData[count].username;
        cell4.innerHTML = userData[count].password;
        cell3.innerHTML = userData[count].admin;
        cell2.innerHTML = userData[count].tlfNumber;
        cell1.innerHTML = userData[count].email;

    }
    var header = table.createTHead();
    var rowHeader = header.insertRow(0);
    var cellHeader1 = rowHeader.insertCell(0);
    var cellHeader2 = rowHeader.insertCell(0);
    var cellHeader3 = rowHeader.insertCell(0);
    var cellHeader4 = rowHeader.insertCell(0);
    var cellHeader5 = rowHeader.insertCell(0);
    cellHeader1.innerHTML = "Email";
    cellHeader2.innerHTML = "Telefon nummer";
    cellHeader3.innerHTML = "Admin?";
    cellHeader4.innerHTML = "Password";
    cellHeader5.innerHTML = "Brugernavn";
    document.getElementById("userTable").appendChild(table);
}