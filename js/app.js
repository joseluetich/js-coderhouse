//Inicializo la pantalla
function initialize() {
  setHomeText();
  setUsText();
  createTable(beers, "beer");
  createTable(wines, "wine");
  createTable(sparklingWines, "sparkling-wine");
  createTable(distillates, "distillate");
  createTable(combos, "combo");
  setEventListeners();
  setContactText();
}
initialize();

//Cargo texto home
function setHomeText() {
  let paragraph1 = "Elegi la bebida y nosotros te la llevamos!";
  let paragraph2 =
    "Cerveza, vinos y licores a la puerta de tu casa, en el menor tiempo.";
  let homeText = document.getElementById("home-text");
  homeText.innerHTML = `<p>${paragraph1}</p><p>${paragraph2}</p>`;
}

//Cargo texto us
function setUsText() {
  let paragraph1 =
    "Somos un grupo de amigos que descubrio la necesidad de una pagina web para poder comprar bebidas alcoholicas en todo momento.";
  let paragraph2 =
    " Nos enfocamos en un servicio personalizado, facilidad de compra y entregas inmediatas.";
  let paragraph3 =
    "Nuestro centro se ubica en la ciudad de Santa Fe, pero contamos con diferentes puntos de distribución que nos permiten entregar bebidas en todos los puntos del país.";
  let usText = document.getElementById("us-text");
  usText.innerHTML = `<p>${paragraph1}</p><p>${paragraph2}</p><p>${paragraph3}</p>`;
}

//Cargo texto contact
function setContactText() {
  let phone = "+54 342 6859144";
  let email = "bebidaszeppelin@gmail.com";
  let address = "San Martin 2817, 3000, Santa Fe";
  let contactInfo = document.getElementById("contact-info");
  contactInfo.innerHTML = `<p><b>Whats App:</b> ${phone}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Dirección:</b> ${address}</p>`;
}

//Cargo los elementos de cada categoria
function createTable(data, type) {
  let table = document.getElementById(`table-${type}`);
  let tableBody = document.createElement("tbody");

  //Creo un componente para cada producto del array
  let content = [];
  for (let product of data) {
    content.push(`<td>
                  <div id="product-card" class="card"">
                    <img src="${product.image}" class="card-img-top"/>
                    <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <p class="card-text">$${product.price}</p>
                      <a id=${product.id} href="#" class="btn btn-primary buy-button">Comprar</a>
                    </div>
                  </div>
                </td>`);
  }

  //Agrupo cuatro elementos por fila
  let count = 0;
  let row = null;
  for (let i = 0; i < content.length; i++) {
    if (count == 0) {
      //Cada cuatro elementos creo una nueva fila
      row = document.createElement("tr");
    }
    //Agrego elemento al html de la fila
    row.innerHTML += content[i];
    count++;
    /*Pruebo:
        - Si ya hay cuatro elementos en la lista
        - Para los ultimos elementos el contador no va a ser 4, por eso veo si el contador es igual al modulo de 4*/
    if (count == 4 || (content.length - i < 4 && count == content.length % 4)) {
      //Asocio al body cada fila
      tableBody.appendChild(row);
      count = 0;
    }
  }
  table.appendChild(tableBody);
}

//Seteo los listeners a cada boton
function setEventListeners() {
  //Agrego event listener a los botones
  let buttons = document.getElementsByClassName("buy-button");
  for (let btn of buttons) {
    btn.addEventListener("click", buy);
  }
}

//Agrego productos al carro
let cart = [];
function buy(e) {
  e.preventDefault();
  //Obtengo el producto
  let newProduct = new Product(DATA.find((obj) => obj.id == e.target.id));
  //Verifico si el producto ya existe en el carrito
  let existProduct = false;
  for (let product of cart) {
    if (newProduct.id === product.id) {
      //Si ya existe solo aumento la cantidad
      product.quantity = product.quantity + 1;
      existProduct = true;
    }
  }
  //Si no existe lo agrego al carrito
  if (!existProduct) {
    newProduct.quantity = newProduct.quantity + 1;
    cart.push(newProduct);
  }
  //Muestro la tabla del carrito
  showCart(cart);
}

function showCart(cart) {
  //Creo el cuerpo de la tabla
  let totalPrice = 0;
  let body = document.getElementById("cart-body");
  body.textContent = "";
  let i = 1;
  for (let product of cart) {
    //Creo una fila por cada producto
    const row = document.createElement("tr");
    row.classList.add("cart-item");
    /*Columna 1: Nro producto*/
    const col1 = document.createElement("th");
    col1.scope = "row";
    col1.className = "center";
    col1.textContent = i;
    row.appendChild(col1);
    /*Columna 2: Nombre producto*/
    const col2 = document.createElement("td");
    col2.textContent = `${product.quantity} x ${product.name}`;
    row.appendChild(col2);
    /*Columna 3: Precio unitario*/
    const col3 = document.createElement("td");
    col3.textContent = `$ ${product.price}`;
    col3.className = "center";
    row.appendChild(col3);
    /*Columna 4: Precio total producto*/
    let productTotalPrice = product.price * product.quantity;
    const col4 = document.createElement("td");
    col4.textContent = `$ ${productTotalPrice}`;
    col4.className = "center";
    row.appendChild(col4);
    body.appendChild(row);
    //Agrego precio total de producto al total de compra
    totalPrice += productTotalPrice;
    i++;
  }

  //Muestro el total
  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";
  //Columna 1: Nro producto
  const tot1 = document.createElement("th");
  tot1.scope = "row";
  tot1.textContent = `TOTAL`;
  tot1.className = "center";
  totalRow.appendChild(tot1);
  //Columna 2: Vacia
  const tot2 = document.createElement("td");
  totalRow.appendChild(tot2);
  //Columna 3: Vacia
  const tot3 = document.createElement("td");
  totalRow.appendChild(tot3);
  //Columna 4: Precio total producto
  const tot4 = document.createElement("th");
  tot4.textContent = `$ ${totalPrice}`;
  tot4.className = "center";
  totalRow.appendChild(tot4);
  body.appendChild(totalRow);
  //let totalPriceValue = document.getElementById("total-price");
  //totalPriceValue.textContent = `$ ${totalPrice}`;
}
