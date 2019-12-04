

function myFunction() {

    var board = document.getElementById("minSelectBoard").value;
    var dag = document.getElementById("minSelectDag").value;
    var month= document.getElementById("minSelectMonth").value;
    var year=document.getElementById("minSelectYear").value;

    alert("Du har booket " + board + " den " + dag + " " + month + " " + year);
}

var items = [{name:"board 1"}, {name:"board 2"}, {name: "board 3"}, {name: "board 4"}]


//window.localStorage.setItem("items", items)

function checkAvailability(){
    for (item in window.localStorage.getItem("items")){
        if (window.localStorage.getItem(item.name)){
            alert ("board is booked")}
        else {window.localStorage.setItem("items", items)}
        alert ("available")
    }
}
