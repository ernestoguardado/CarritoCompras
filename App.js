/* document.addEventListener("DOMContentLoader", () => {
  console.log(document.querySelector("tituloWeb"));
  console.log(document.getElementById("tituloWeb").textContent);
}); */
//-----------------------------------------------------------------------------------

/* ejem con getElemntById y querySelectorAll

console.log(document.getElementById("tituloWeb"));
// console.log(document.getElementById("tituloWeb").textContent);

console.log(document.querySelectorAll(".container .text-danger")); */
//-------------------------------------------------------------------------------------

//ejemp
/* const h1 = document.getElementById("tituloWeb");

const boton = document.querySelector(".btn-primary");

boton.addEventListener("click", () => {
  console.log("me diste click");
  h1.textContent = "texto desde js";
}); */
//------------------------------------------------------------------------------------------

/////////////////////ejeplo de color pick
/* const inputColor = document.getElementById("inputColor");
const btnVisualizar = document.getElementById("btnVisualizar");
const parrafoExa = document.getElementById("parrafoExa");
const cardColor = document.getElementById("cardColor");

console.log(inputColor.value);
btnVisualizar.addEventListener("click", () => {
  console.log("me diste clixk");
  console.log(inputColor.value);
  parrafoExa.textContent = inputColor.value;
  cardColor.style.backgroundColor = inputColor.value;
  navigator.clipboard
    .writeText(inputColor.value)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
});
 */
