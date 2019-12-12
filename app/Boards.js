function localstorage(id) {
    if (localStorage.getItem(id) == null) {//skjekker om id'en ikke eksisterer i localStorage
        localStorage.setItem(id, 1); //.setItem legger til id i localstorage

        alert("Du har booket " + id);
    }//gir ut en alert som skal informere brukeren om at boardet er booket
    else {
        alert("Beklager! Bordet er allerede booket") ;
    } //else gjør at hvis id'en eksiterer i localstorage er det ikke mulig å legge til
}

function clearLocalStorage1 (){
    localStorage.removeItem("board-1");
    alert("Du har nå avbrutt din booking");
}
function clearLocalStorage2 (){
    localStorage.removeItem("board-2");
    alert("Du har nå avbrutt din booking");
}

function clearLocalStorage3 () {
    localStorage.removeItem("board-3");
    alert("Du har nå avbrutt din booking");
}
function clearLocalStorage4 () {
    localStorage.removeItem("board-4");
    alert("Du har nå avbrutt din booking");
}


/*
function myFunction() {

    var board = document.getElementById("minSelectBoard").value;
    var dag = document.getElementById("minSelectDag").value;
    var month= document.getElementById("minSelectMonth").value;
    var year=document.getElementById("minSelectYear").value;

    alert("Du har booket " + board + " den " + dag + " " + month + " " + year);
}

var items = [{name:"board 1"}, {name:"board 2"}, {name: "board 3"}, {name: "board 4"}]


// window.localStorage.setItem("items", items)

function checkAvailability(){
    for (item in window.localStorage.getItem("items")){
        if (window.localStorage.getItem(item.name)){
            alert ("board is booked")}
        else {window.localStorage.setItem("items", items)}
        alert ("available")
    }
}

function localstorage (id) {
    if (!window.localStorage.getItem(id)) {
        window.localStorage.setItem(id)
    } else {
        window.localStorage.setItem(id, 1 + parseInt(window.localStorage.getItem(id)))
    }
}
 */


/*
function clearLocalStorage(id){
    window.localStorage.removeItem(id);
}
*/
