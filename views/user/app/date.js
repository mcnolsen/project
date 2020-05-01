//Tager søge parametrerne og giver boardnavn og dato værdierne fra søge parametrerne
const urlParameters = () => {
    const query = window.location.search;
    const urlParams = new URLSearchParams(query);
    const boardID = urlParams.get('id');
    const date = urlParams.get('date');
    const today = new Date();
    const month = (today.getMonth() + 1);
    //Skal laves om så der er 0 foran måneden hvis den er under 10
    if (month < 10){
        var realMonth = '0' + month;
    }
    else {
        var realMonth = month;
    }
    if (today.getDate() < 10){
        var todayDate = `0${today.getDate()}`;
    }
    else {
        todayDate = today.getDate();
    }
    const dateMin = `${today.getFullYear()}-${realMonth}-${todayDate}`;
    document.getElementById('date').min = dateMin;
    if (date == undefined){
        //Nothing. Tvinger dem til at vælge en dato så ny get request genereres
    }
    else {
        document.getElementById('date').value = date;
    }
    if (boardID == undefined){
        document.getElementById('board').value = document.getElementById('board')[0].value
    }
    else {
        document.getElementById('board').value = boardID;
    }

}
//Tilføjer søge parametre til siden
const changeUrl = () =>{
    window.document.location= location.pathname + `?id=${document.getElementById('board').value}&date=${document.getElementById('date').value}`;

}