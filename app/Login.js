function loginUser() {
    //Objekt med nødvendig user data. Den finder dataen fra det indtastede på siden.
    var userData = {
        username: document.getElementById("user").value,
        password: document.getElementById("password").value,
        admin: document.getElementById("admin").value,
    };
    console.log(userData);

}