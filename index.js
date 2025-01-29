var SetaDireita = window.document.getElementById("seta-direita")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var SetaEsquerda = window.document.getElementById("seta-esquerda")



function RolarParaDireita() {
    leonardo.style = "display:none"
    samantha.style = "display:flex"
    SetaEsquerda.style = "display:flex"
    SetaDireita.style = "display:none"
}

function RolarParaEsquerda() {
leonardo.style = "display:flex"
samantha.style = "display:none"
SetaDireita.style = "display:flex"
SetaEsquerda.style = "display:none"

}