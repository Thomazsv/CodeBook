// VARIAVEL
const menu = document.getElementById("menu");
const mcgorila = new Audio("gorila.mp3");
const lista = document.querySelector(".listanav");
const lupa = document.querySelector(".procurar");
const caixa = document.querySelector("#caixaTexto");
//EVENTOS
menu.addEventListener("click", menuDown);

lupa.addEventListener("click", () => {
  if (lupa.style.animationPlayState == "running") {
    lupa.style.animationName = "barrareversa";
    lupa.style.animationPlayState = "running";
    caixa.style.animationName = "caixaDeTextoReversa";
    caixa.style.animationPlayState = "running";
    setTimeout(() => {
      lupa.style.animationPlayState = "paused";
      caixa.style.animationPlayState = "paused";
      caixa.style.display = "none";
    }, 1000);
  } else {
    lupa.style.animationName = "barra";
    lupa.style.animationPlayState = "running";
    caixa.style.animationName = "caixaDeTexto";
    caixa.style.animationPlayState = "running";
    caixa.style.display = "inline";
  }
  // lupa.style.animationPlayState = "running";
});

// FUNÇÕES
function menuDown() {
  // menu.classList.toggle("ativo");
  if (lista.style.visibility == "visible") {
    lista.style.visibility = "hidden";
    menu.style.backgroundColor = "";
  } else {
    lista.style.visibility = "visible";
  }

  // mcgorila.play();
}
