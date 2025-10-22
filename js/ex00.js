/*Exemplo 01 - document.getElementById*/
var elemento
elemento = document.getElementById("titulo")
alert(elemento)

/*Exemplo 02 - innerHTML*/
function mudartitulo(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.innerHTML="Alterando o título via JS"
}

/*Exemplo 03 - mudar estilo */
function mudarestilo(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.style.color="purple"
    titulo.style.backgroundColor="pink"
    titulo.style.fontSize="68px"
}

/*Exemplo 04 - add */
function destacar(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.classList.add("destacado")
}