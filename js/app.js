let dataCart = [];
//Obtengo los productos del localstorage
dataCart = JSON.parse(localStorage.getItem("cart"));
let cart = [];

function getStorageData() {
  if (dataCart)
    for (const prod of dataCart) {
      /*Como en el constructor this.quantity = 0, hay que guardar
      el valor de la cantidad antes de sobreescribirlo*/
      let productQuantity = prod.quantity;
      let newProduct = new Product(prod);
      newProduct._quantity = productQuantity;
      cart.push(newProduct);
    }
  showCart(cart);
}

function setHomeText() {
  let paragraph1 = "Elegi la bebida y nosotros te la llevamos!";
  let paragraph2 =
    "Cerveza, vinos y licores a la puerta de tu casa, en el menor tiempo.";
  let homeText = document.getElementById("home-text");
  homeText.innerHTML = `<p>${paragraph1}</p><p>${paragraph2}</p>`;
}

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

function setContactText() {
  let phone = "+54 342 6859144";
  let email = "bebidaszeppelin@gmail.com";
  let address = "San Martin 2817, 3000, Santa Fe";
  let contactInfo = document.getElementById("contact-info");
  contactInfo.innerHTML = `<p><b>Whats App:</b> ${phone}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Dirección:</b> ${address}</p>`;
}

function createTable(data, type) {
  let table = document.getElementById(`table-${type}`);
  let tableBody = document.createElement("tbody");

  //Creo un componente para cada producto de la categoria "type"
  let content = [];
  for (let product of data) {
    content.push(`<td>
                  <div id="product-card" class="card"">
                    <img src="${product.image}" class="card-img-top"/>
                    <div class="card-body">
                      <h5 class="card-title">${product.name}</h5>
                      <div id="buy-container">
                        <p class="card-text">$${product.price}</p>
                        <a id=${product.id} href="#" class="btn btn-primary buy-button">Comprar</a>
                      </div>
                    </div>
                  </div>
                </td>`);
  }
  //Asigno un elemento por fila
  if (innerWidth < 680) {
    orderTable(tableBody, content, 1);
  }
  //Asigno dos elementos por fila
  else if (innerWidth >= 680 && innerWidth < 1020) {
    orderTable(tableBody, content, 2);
  }
  //Asigno tres elementos por fila
  else if (innerWidth >= 1020 && innerWidth < 1360) {
    orderTable(tableBody, content, 3);
  }
  //Asigno cuatro elementos por fila
  else {
    orderTable(tableBody, content, 4);
  }
  table.appendChild(tableBody);
}

function orderTable(tableBody, content, size) {
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
    if (
      count == size ||
      (content.length - i < size && count == content.length % size)
    ) {
      //Asocio al body cada fila
      tableBody.appendChild(row);
      count = 0;
    }
  }
}

function setEventListeners() {
  //Agrego event listener a los botones comprar
  let buttons = document.getElementsByClassName("buy-button");
  for (let btn of buttons) {
    btn.addEventListener("click", buy);
  }
  //Agrego event listener a boton cancelar
  let cancelButton = document.getElementById("cancel-button");
  cancelButton.addEventListener("click", clear);
}

function buy(e) {
  e.preventDefault();
  //Obtengo el producto
  let newProduct = new Product(DATA.find((obj) => obj.id == e.target.id));
  //Verifico si el producto ya existe en el carrito
  let existProduct = false;
  for (let product of cart) {
    if (newProduct.id === product.id) {
      //Si ya existe solo aumento la cantidad
      product._quantity = product._quantity + 1;
      existProduct = true;
    }
  }
  console.log(cart);
  //Si no existe lo agrego al carrito
  if (!existProduct) {
    newProduct._quantity = newProduct._quantity + 1;
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
    let row = createCartRow(i, product);
    body.appendChild(row);
    //Agrego precio total de producto al total de compra
    totalPrice += product.price * product.quantity;
    i++;
  }
  //Muestro la fila del total
  let totalRow = showTotalRow(totalPrice);
  body.appendChild(totalRow);
  //Borro informacion del local storage
  localStorage.clear();
  //Almaceno en el localstorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function createCartRow(i, product) {
  //Creo una fila por cada producto
  const row = document.createElement("tr");
  row.classList.add("cart-item");
  //Columna 1: Nro producto
  const col1 = document.createElement("th");
  col1.scope = "row";
  col1.className = "center";
  col1.textContent = i;
  row.appendChild(col1);
  //Columna 2: Nombre producto
  const col2 = document.createElement("td");
  col2.textContent = `${product.quantity} x ${product.name}`;
  row.appendChild(col2);
  //Columna 3: Precio unitario
  const col3 = document.createElement("td");
  col3.textContent = `$ ${product.price}`;
  col3.className = "center";
  row.appendChild(col3);
  //Columna 4: Precio total producto
  const col4 = document.createElement("td");
  col4.textContent = `$ ${product.price * product.quantity}`;
  col4.className = "center";
  row.appendChild(col4);
  return row;
}

function showTotalRow(totalPrice) {
  //Muestro el total
  const totalRow = document.createElement("tr");
  totalRow.className = "total-row";
  //Columna 1: Nro producto
  const col1 = document.createElement("th");
  col1.scope = "row";
  col1.textContent = `TOTAL`;
  col1.className = "center";
  totalRow.appendChild(col1);
  //Columna 2: Vacia
  const col2 = document.createElement("td");
  totalRow.appendChild(col2);
  //Columna 3: Vacia
  const col3 = document.createElement("td");
  totalRow.appendChild(col3);
  //Columna 4: Precio total producto
  const col4 = document.createElement("th");
  col4.textContent = `$ ${totalPrice}`;
  col4.className = "center";
  totalRow.appendChild(col4);
  return totalRow;
}

function clear() {
  location.reload();
  localStorage.clear();
}
