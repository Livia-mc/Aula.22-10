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

/*Exemplo 05 - remover */
function remover(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.classList.remove("destacado")
}

/*Exemplo 06 - alternar */
function alternar(){
    var titulo
    titulo = document.getElementById("titulo")
    titulo.classList.toggle("destacado")
}


/*Exemplo 07 - criar */
function adicionartexto(){
    var novo, div

    novo = document.createElement("p")
    novo.id="paragrafo"
    novo.innerText="Novo parágrafo criado com JS"

    div=document.getElementById("container")
    div.appendChild(novo)
}

/*Exemplo 08 - remover */
function removertexto(){
    var p

    p=document.getElementById("paragrafo")
    if(p){
        p.remove()
    }
    else{
        alert("Não há texto para remover")
    }
}
