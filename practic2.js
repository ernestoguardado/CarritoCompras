const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const footer = document.querySelector("#footer");
const templatefooter = document.querySelector("#templatefooter");
const fragment = document.createDocumentFragment();

//Delegacion de eventos
document.addEventListener("click", (e) => {
  //   console.log(e.target.matches(".card .btn-outline-primary"));

  if (e.target.matches(".card .btn-outline-primary")) {
    // console.log("ejecutar agregar al carro");
    agregarCarrito(e);
  }

  // console.log(e.target.matches(".list-group-item .btn-success"));
  if (e.target.matches("#carrito .list-group-item .btn-success")) {
    btnAumentar(e);
  }

  if (e.target.matches("#carrito .list-group-item .btn-danger")) {
    btnDisminuir(e);
  }
});

let carritoArray = [];

const agregarCarrito = (e) => {
  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
    precio: parseInt(e.target.dataset.precio),
  };
  // console.log(producto);

  // buscamos el indice
  const index = carritoArray.findIndex((item) => item.id === producto.id);

  // si no existe empujamos el nuevo elemento
  if (index === -1) {
    carritoArray.push(producto);
  } else {
    // en caso contrario aumentamos su cantidad
    carritoArray[index].cantidad++;
    // carritoArray[index].precio = carritoArray[index].cantidad * producto.precio;
  }

  // console.log(carritoArray);
  pintarCarrito(carritoArray);
};

const pintarCarrito = () => {
  carrito.textContent = "";

  // recorremos el carrito y pintamos elementos:
  carritoArray.forEach((item) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".lead").textContent = item.titulo;
    clone.querySelector(".rounded-pill").textContent = item.cantidad;
    clone.querySelector("div .lead span").textContent =
      item.precio * item.cantidad;
    clone.querySelector(".btn-danger").dataset.id = item.id;
    clone.querySelector(".btn-success").dataset.id = item.id;

    fragment.appendChild(clone);
  });
  carrito.appendChild(fragment);
};

const btnAumentar = (e) => {
  console.log("me diste click", e.target.dataset.id);
  carritoArray = carritoArray.map((item) => {
    if (item.id === e.target.dataset.id) {
      item.cantidad++;
    }
    return item;
  });
  pintarCarrito();
};

const btnDisminuir = (e) => {
  console.log("me diste click", e.target.dataset.id);

  carritoArray = carritoArray.filter((item) => {
    if (item.id === e.target.dataset.id) {
      if (item.cantidad > 0) {
        item.cantidad--;
        if (item.cantidad === 0) return;
        return item;
      }
    } else {
      return item;
    }
  });
  pintarCarrito();
};
