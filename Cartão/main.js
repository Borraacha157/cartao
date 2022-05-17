var cartao = {
    credito : 4.30
}

var botaoParaChecagem = document.getElementById("btnChecagem");

function btnChecagem(credito) {

    if (credito < 4.40) {
        alert("Saldo Insuficiente!")
    } else {
        alert("Saldo Suficiente, Pode Passar!")
    }

}

botaoParaChecagem.addEventListener("click", function (){
    btnChecagem(cartao.credito)
})
