let marcacoesEl = document.querySelectorAll('.marcacao');
let balaozinhoEl = document.querySelector('#balaozinho');
const Definir = document.querySelector('#definir-marcacao');
Definir.addEventListener("click", definir);
marcacoesEl.forEach(clicado =>{
    clicado.addEventListener('mouseover', alterar)
    clicado.addEventListener('mouseout', Remover)
    clicado.addEventListener('mousemove', posicao)
});
function alterar(e){
    let marcacaoEl = e.currentTarget;
    balaozinhoEl.innerHTML = "<h2>" + marcacaoEl.dataset.titulo + "</h2><p>" + marcacaoEl.dataset.conteudo + "</p>";
    balaozinhoEl.style.display = "";
    balaozinhoEl.style = $;{marcacaoEl.dataset.style};
}
function Remover(){
    balaozinhoEl.innerHTML = '';
    balaozinhoEl.style.display = "none";
}
function posicao(e){
    balaozinhoEl.style.left = `${e.pageX}px`;
    balaozinhoEl.style.top = `${e.pageY}px`;
}
function definir(){
    let X = document.querySelector('#marcacao-x');
    let Y = document.querySelector('#marcacao-y');
    let Largura = document.querySelector('#marcacao-largura');
    let Altura = document.querySelector('#marcacao-altura');
    marcacoesEl[0].style.left = `${X.value}px`;
    marcacoesEl[0].style.top = `${Y.value}px`;
    marcacoesEl[0].style.width = `${Largura.value}px`;
    marcacoesEl[0].style.height = `${Altura.value}px`;
    marcacoesEl[0].style.transition = "all 200ms ease";
}
