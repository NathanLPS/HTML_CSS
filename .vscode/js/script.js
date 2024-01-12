let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')

nome.style.width = "70%"
email.style.width = "70%"

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 4){
        txt.innerHTML = "Nome Inválido"
    }
    else {
        txt.innerHTML = "Nome Válido"
        txt.style.color = "blue"
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
    }
    else {
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "blue"
    }
}