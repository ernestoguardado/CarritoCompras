//PRACTICA CON FRAGMENT AND FIRSTCHILD
/* const lista = document.querySelector("#lista");

const arrayPaises = ["peru", "Bolivia", "Ecuador"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
  const newNode = document.createElement("li");
  newNode.textContent = pais;

  const referenceNode = fragment.firstChild;

  fragment.insertBefore(newNode, referenceNode);
});

lista.appendChild(fragment);
 
*/

//PRACTICA CON CreateElement
/* const listaDinamica = document.querySelector("#listaDinamica");

const arrayElementos = ["Perú", "Bolivia", "Colombia"];

const fragment = new DocumentFragment();

arrayElementos.forEach((pais) => {
  const li = document.createElement("li");
  li.className = "list";

  const bold = document.createElement("b");
  bold.textContent = "País: ";

  const span = document.createElement("span");
  span.className = "text-primary";
  span.textContent = pais;

  li.appendChild(bold);
  li.appendChild(span);
  fragment.appendChild(li);
});

listaDinamica.appendChild(fragment);
 */

//PRACTICA CON TEMPLATE AND INNER_HTML
/* const listaDinamica = document.querySelector("#listaDinamica");

const ArrayPaises = ["Perú", "Bolivia", "Colombia", "Zuisa"];

const fragment = new DocumentFragment();

let template = "";
ArrayPaises.forEach((pais) => {
  template += `
    <li class="list">
    <b>País: </b>
    <span class="text-primary">${pais}</span>
    </li>
    `;
});
listaDinamica.innerHTML = template; */

// OTRO EJEMPLO CON TEMPLATE
const lista = document.querySelector("#lista");
const fragment = new DocumentFragment();
const liTemplate = document.querySelector("#liTemplate");

const arrayPaises = ["Perú", "Bolivia", "Colombia", "Zuisa"];

const clickPaises = () => console.log("me diste click ");

arrayPaises.forEach((pais) => {
  const clone = liTemplate.content.firstElementChild.cloneNode(true);
  clone.querySelector("span").textContent = pais;

  clone.addEventListener("click", clickPaises);

  fragment.appendChild(clone);
});
lista.appendChild(fragment);
