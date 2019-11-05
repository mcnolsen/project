const mysql = require('mysql');
const express = require('express');

var con = mysql.createConnection({
    host: "174.138.180.42",
    user: "blasfame_project",
    password: "OzItpkrlq[yv"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});