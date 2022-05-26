////PRIMER EJEMPLO DE CARRITO UTILIZANDO ARRAY
/* const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoArray = [];

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  // buscamos el indice
  const index = carritoArray.findIndex((item) => item.id === producto.id);

  // si no existe empujamos el nuevo elemento
  if (index === -1) {
    carritoArray.push(producto);
  } else {
    // en caso contrario aumentamos su cantidad
    carritoArray[index].cantidad++;
  }

  console.log(carritoArray);

  pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

const pintarCarrito = () => {
  carrito.textContent = "";

  // recorremos el carrito y pintamos elementos:
  carritoArray.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".rounded-pill").textContent = item.cantidad;
    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};
 */

///SEGUNDO EJEMPLO CON EVENTOS
/* const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");

const cajitas = document.querySelectorAll(".border");

cajitas.forEach((caja) => {
  caja.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("me diste click");
  });
}); */

//TERCER EJEMPLO DE EVENTO CON preventDefault
/* const formulario = document.querySelector("form");

formulario.addEventListener("submit", (e) => {
  console.log("me diste un click");
  e.preventDefault();
});

-----------OTRO EJEMPLO
const ancla = document.querySelector("a");
ancla.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("me diste click");
}); */

// UTILIZNDO EL id---matches---dataset.div
/* const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  // console.log(e.target.id);
  if (e.target.id === "padre") {
    console.log("diste click al padre");
  }
}); */

const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
  // console.log(e.target.id);

  if (e.target.id === "padre") {
    console.log("diste click al padre");
  }

  // console.log(e.target.matches(".border-secondary"));

  if (e.target.matches(".border-secondary")) {
    console.log("diste click al hijo");
  }

  // console.log(e.target.dataset.div);
  if (e.target.dataset.div === "divNieto") {
    console.log("diste click al nieto");
  }
});
