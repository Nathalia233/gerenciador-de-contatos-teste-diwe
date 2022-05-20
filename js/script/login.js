function login() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    console.log(email.value + password.value);

    if(email.value == "user@diwe.com.br" && password.value == "password"){
        localStorage.setItem("acesso", true);
        window.location.href = "../login/listagem-de-usuarios/listagem.html"
    }else{
        alert("Usuario ou senha Invalidos");
    }
}   
