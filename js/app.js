let dataCart = [];
//Obtengo los productos del localstorage
dataCart = JSON.parse(localStorage.getItem("cart"));
let cart = [];

function getStorageData() {
  if (dataCart) {
    for (const prod of dataCart) {
      /*Como en el constructor this.quantity = 0, hay que guardar
      el valor de la cantidad antes de sobreescribirlo*/
      let productQuantity = prod.quantity;
      let newProduct = new Product(prod);
      newProduct._quantity = productQuantity;
      cart.push(newProduct);
    }
  }
  validateButtonsState(dataCart);
  showCart(cart);
}

function setHomeText() {
  let paragraph1 = "Elegi la bebida y nosotros te la llevamos!";
  let paragraph2 =
    "Cerveza, vinos y licores a la puerta de tu casa, en el menor tiempo.";
  $("#home-text").append(`<p>${paragraph1}</p><p>${paragraph2}</p>`);
}

function setUsText() {
  let paragraph1 =
    "Somos un grupo de amigos que descubrio la necesidad de una pagina web para poder comprar bebidas alcoholicas en todo momento.";
  let paragraph2 =
    " Nos enfocamos en un servicio personalizado, facilidad de compra y entregas inmediatas.";
  let paragraph3 =
    "Nuestro centro se ubica en la ciudad de Santa Fe, pero contamos con diferentes puntos de distribución que nos permiten entregar bebidas en todos los puntos del país.";
  $("#us-text").append(
    `<p>${paragraph1}</p><p>${paragraph2}</p><p>${paragraph3}</p>`
  );
}

function setContactText() {
  let phone = "+54 342 6859144";
  let email = "bebidaszeppelin@gmail.com";
  let address = "San Martin 2817, 3000, Santa Fe";
  $("#contact-info").append(`<p><b>Whats App:</b> ${phone}</p>
  <p><b>Email:</b> ${email}</p>
  <p><b>Dirección:</b> ${address}</p>`);
}

function createTable(data, type) {
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
                        <p class="card-text">$ ${product.price}</p>
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

  $(`#table-${type}`).append(tableBody);
}

function orderTable(tableBody, content, size) {
  //Agrupo 'size' elementos por fila
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
  //Agrego event listener a boton confirmar
  let confirmButton = document.getElementById("confirm-button");
  confirmButton.addEventListener("click", showForm);
}

function validateButtonsState(cart) {
  let confirmButton = document.getElementById("confirm-button");
  let cancelButton = document.getElementById("cancel-button");
  if (cart == null || cart.length == 0) {
    confirmButton.disabled = true;
    cancelButton.disabled = true;
    //Si no hay nada en el carrito pongo fila vacia
    addEmptyRow();
  } else {
    confirmButton.disabled = false;
    cancelButton.disabled = false;
  }
}

function addEmptyRow() {
  $("#cart-body").prepend(`<tr>
  <td class="center">-</td>
  <td class="center">-</td>
  <td class="center">-</td>
  <td class="center">-</td>
</tr>`);
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
  //Si no existe lo agrego al carrito
  if (!existProduct) {
    newProduct._quantity = newProduct._quantity + 1;
    cart.push(newProduct);
  }
  //Muestro la tabla del carrito
  showCart(cart);
  validateButtonsState(cart);
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
  //Si no hay nada en el carrito pongo fila vacia
  if(body.textContent == "") {
    addEmptyRow();
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

function clear(e) {
  e.preventDefault();
  location.reload();
  localStorage.clear();
}

function showForm(e) {
  e.preventDefault();
  let registerForm = document.getElementById("register-form");
  registerForm.innerHTML = `
  <h3 id="ship-data-title">Datos de Envío</h3><br/>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Nombre</label>
      <input type="text" class="form-control" id="form-name" required>
      <div class="valid-feedback">
        Se ve bien!
      </div>
      <div class="invalid-feedback">
        Ingrese su nombre, por favor.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="validationCustom02">Apellido</label>
      <input type="text" class="form-control" id="form-lastname" required>
      <div class="valid-feedback">
        Se ve bien!
      </div>
      <div class="invalid-feedback">
        Ingrese su apellido, por favor.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom01">Calle</label>
      <input type="text" class="form-control" id="form-street" required>
      <div class="valid-feedback">
        Se ve bien!
      </div>
      <div class="invalid-feedback">
        Ingrese su calle, por favor.
      </div>
    </div>
    <div class="col-md-2 mb-3">
      <label for="validationCustom02">Altura</label>
      <input type="number" class="form-control" id="form-street-number" required>
      <div class="valid-feedback">
        Se ve bien!
      </div>
      <div class="invalid-feedback">
        Ingrese la altura de su calle, por favor.
      </div>
    </div>
    <div class="col-md-2 mb-3">
      <label for="validationCustom02">Piso</label>
      <input type="number" class="form-control" id="form-floor">
    </div>
    <div class="col-md-2 mb-3">
      <label for="validationCustom02">Dpto</label>
      <input type="number" class="form-control" id="form-department">
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label for="validationCustom03">Ciudad</label>
      <input type="text" class="form-control" id="form-city" required>
      <div class="invalid-feedback">
        Ingrese su ciudad, por favor.
      </div>
      <div class="valid-feedback">
        Se ve bien!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="validationCustom04">Provincia</label>
      <select class="custom-select" id="form-province" required>
        <option selected disabled value="">Choose...</option>
        <option>...</option>
      </select>
      <div class="invalid-feedback">
        Seleccione una provincia, por favor.
      </div>
      <div class="valid-feedback">
        Se ve bien!
      </div>
    </div>
    <div class="col-md-2 mb-3">
      <label for="validationCustom05">Codigo Zip</label>
      <input type="text" class="form-control" id="form-zip" required>
      <div class="invalid-feedback">
        Ingrese un zip valido, por favor.
      </div>
      <div class="valid-feedback">
        Se ve bien!
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="form-terms" required>
      <label class="form-check-label" for="invalidCheck">
        Acepto los terminos y condiciones.
      </label>
    </div>
  </div>
  <button id="confirm-purchase-button" class="btn btn-primary" type="submit">Realizar compra</button>`;

  registerForm.addEventListener("submit", function (e) {
    if (registerForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    registerForm.classList.add("was-validated");
  });

  let confirmButton = document.getElementById("confirm-button");
  confirmButton.href = "#ship-data-title";
}
