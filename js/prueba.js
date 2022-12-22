function login(){
        var name, apellido, mail;

        name = document.getElementById("nombre").value;
        apellido = document.getElementById("apellido").value;
        mail = document.getElementById("mail").value;

        if(name == "a" && apellido == "b" && mail == "c"){
            window.location= "index.html";
        }
}