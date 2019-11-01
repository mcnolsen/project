function registerUserMysql() {
    var mysql = require("mysql");
    var con = mysql.createConnection({
        host: "174.138.180.42",
        user: "blasfame_project",
        password: "OzItpkrlq[yv",
        database: "blasfame_project"
    });
    con.connect( (err)=> {
        if(err) {
            throw err;
        }
        console.log("Mysql connected.")
    });

    con.query("INSERT INTO users (username, password, admin) VALUES (username, password, admin)", function (err, result) {
        if (err) throw err;
        console.log ("No Errors");
        });

    //Objekt med nødvendig user data. Den finder dataen fra det indtastede på siden.
    var userData = {
        username: document.getElementById("user").value,
        password: document.getElementById("password").value,
        admin: document.getElementById("admin").value,
    };


}

function registerUserCheckMysql() {
    //Objekt med nødvendig user data. Den finder dataen fra det indtastede på siden.
    var userData = {
        username: document.getElementById("user").value,
        password: document.getElementById("password").value,
        admin: document.getElementById("admin").value,
    };


}
