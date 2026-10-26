window.onload = function (e) {
    e.preventDefault();

    var txtEmail = document.getElementById("txtEmail");

    var btnRec = document.getElementById("btnRec");

    txtEmail.focus();

    btnRec.onclick = function (e) {
        var email = txtEmail.value;

        if(email == "") {
            exibirMensagemErro("Campo e-mail obrigatório.")
        }
        else{
            envioAutorizado(email);
        }
    }

    function exibirMensagemErro(mensagem) {

        var spnErro = document.getElementById("spnErro");
        
        spnErro.innerText = mensagem;

        spnErro.style.display = "block";
        
        setTimeout (function() {
            spnErro.style.display = "none";
        }, 5000);

    }

        function envioAutorizado(email) {
            alert("Um email para alteração de senha foi enviado para: " + email);
        }

}
        





    