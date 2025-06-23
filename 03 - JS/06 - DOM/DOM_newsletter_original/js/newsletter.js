const txtEmail = document.getElementById('txtEmail')
function cadastrarEmail(){
    console.log(txtEmail.textContent) //textContent pega os dados
}

function editarEmail(){
    txtEmail.disabled = true
}