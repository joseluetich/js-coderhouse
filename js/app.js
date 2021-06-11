function getStorageData() {
  dataCart = JSON.parse(localStorage.getItem("cart"));
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
  $(".buy-button").click(buy);
  //Agrego event listener a boton cancelar
  $("#cancel-button").click(clear);
  //Agrego event listener a boton confirmar
  $("#confirm-button").click(showForm);
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
  //Mustro el toast
  showToast();
  //Muestro la tabla del carrito
  showCart(cart);
}

function showToast() {
  let toast = document.getElementById("toast-div");
  toast.className = "show";
  //Muestro el toast durante 3 segundos
  setTimeout(function () {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}

function showCart(cart) {
  //Creo el cuerpo de la tabla
  let totalPrice = 0,
    i = 1;
  let body = document.getElementById("cart-body");
  body.textContent = "";

  //Valido si los botones deben deshabilitarse o no
  validateButtonsState(cart);

  if (cart != null) {
    for (let product of cart) {
      let row = createCartRow(i, product);
      body.appendChild(row);
      //Agrego precio total de producto al total de compra
      totalPrice += product.price * product.quantity;
      i++;
    }
  }
  //Muestro la fila del total
  let totalRow = showTotalRow(totalPrice);
  body.appendChild(totalRow);
  //Borro informacion del local storage
  localStorage.clear();
  //Almaceno en el localstorage
  localStorage.setItem("cart", JSON.stringify(cart));
}

function validateButtonsState(cart) {
  let confirmButton = document.getElementById("confirm-button");
  let cancelButton = document.getElementById("cancel-button");
  if (cart == null || cart.length === 0) {
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
  //Columna 5: Eliminar
  const col5 = document.createElement("td");
  col5.innerHTML = `<img id="${i}" src="/images/delete.svg"/>`;
  col5.className = "center";
  col5.addEventListener("click", deleteProduct);
  row.appendChild(col5);
  return row;
}

function deleteProduct(e) {
  //Hago referencia a la fila a eliminar
  $(e.target).parent().parent().fadeOut(1500);
  cart.splice(e.target.id - 1, 1);
  //Espero a que se relice la animacion
  setTimeout(function () {
    showCart(cart);
  }, 1400);
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
  const col5 = document.createElement("td");
  totalRow.appendChild(col5);
  return totalRow;
}

function clear(e) {
  e.preventDefault();
  localStorage.clear();
  cart = [];
  showCart(cart);
}

function showForm(e) {
  e.preventDefault();
  //Muestro popup con el formulario
  let registerForm = document.getElementById("register-form");
  registerForm.innerHTML = `
  <div class="modal fade bd-example-modal-lg" id="formModal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Datos de Envío</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="form-name">Nombre</label>
            <input id="form-name" type="text" class="form-control" required>
            <div class="valid-feedback">
              Se ve bien!
            </div>
            <div class="invalid-feedback">
              Ingrese su nombre, por favor.
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="form-lastname">Apellido</label>
            <input id="form-lastname" type="text" class="form-control" required>
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
            <label for="form-street">Calle</label>
            <input id="form-street" type="text" class="form-control" required>
            <div class="valid-feedback">
              Se ve bien!
            </div>
            <div class="invalid-feedback">
              Ingrese su calle, por favor.
            </div>
          </div>
          <div class="col-md-2 mb-3">
            <label for="form-street-number">Altura</label>
            <input id="form-street-number" type="number" class="form-control" required>
            <div class="valid-feedback">
              Se ve bien!
            </div>
            <div class="invalid-feedback">
              Ingrese la altura de su calle, por favor.
            </div>
          </div>
          <div class="col-md-2 mb-3">
            <label for="form-floor">Piso</label>
            <input id="form-floor" type="number" class="form-control">
          </div>
          <div class="col-md-2 mb-3">
            <label for="form-department">Dpto</label>
            <input id="form-department" type="number" class="form-control">
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="form-city">Ciudad</label>
            <input id="form-city" type="text" class="form-control" required>
            <div class="invalid-feedback">
              Ingrese su ciudad, por favor.
            </div>
            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="form-province">Provincia</label>
            <select id="form-province" class="custom-select" required>
              <option selected disabled value="">Seleccione</option>
            </select>
            <div class="invalid-feedback">
              Seleccione una provincia, por favor.
            </div>
            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
          <div class="col-md-2 mb-3">
            <label for="validationCustom05">Zip</label>
            <input type="number" class="form-control" id="form-zip" required>
            <div class="invalid-feedback">
              Ingrese un zip valido, por favor.
            </div>
            <div class="valid-feedback">
              Se ve bien!
            </div>
          </div>
        </div>
          </div>
          <div class="modal-footer">
            <button id="cancel-purchase-button" type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button id="confirm-purchase-button" type="submit" class="btn btn-primary">Realizar compra</button>
          </div>
        </div>
      </div>
    </div>`;

  //Obtengo las provincias
  const API_PROVINCES = "https://apis.datos.gob.ar/georef/api/provincias";
  $.get(API_PROVINCES, function (data, state) {
    //Obtengo los nombres de las provincias
    let provinces = [];
    for (const prov of data.provincias) {
      provinces.push(prov.nombre);
    }
    //Las ordeno alfabeticamente
    let sortProvinces = provinces.sort();
    //Las agrego al select
    $("#form-province").empty();
    for (const prov of sortProvinces) {
      $("#form-province").append(
        `<option value="${prov.toLowerCase()}">${prov}</option>`
      );
    }
  });

  registerForm.addEventListener("submit", function (e) {
    //Valido la informacion ingresada
    if (registerForm.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      //Realizo un post con la informacion ingresada
      postInformation();
    }
    registerForm.classList.add("was-validated");
  });
}

function postInformation() {
  //Obtengo los valores ingresados
  let shippingData = {
    name: document.getElementById("form-name").value,
    lastName: document.getElementById("form-lastname").value,
    street: document.getElementById("form-street").value,
    streetNumber: document.getElementById("form-street-number").value,
    floor: document.getElementById("form-floor").value,
    department: document.getElementById("form-department").value,
    city: document.getElementById("form-city").value,
    province: document.getElementById("form-province").value,
    zip: document.getElementById("form-zip").value,
  };
  //Realizo el post
  $.post(
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify(shippingData),
    function (data, status) {
      //Si la peticion se cumple
      if (status === "success") {
        //Muestro modal de compra exitosa
        showSuccessModal();
      }
    }
  );
}

function showSuccessModal() {
  $("#formModal").empty();
  $("#formModal").prepend(`
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-body" id="modal-content">
            <button id="close-button" type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <h3 id="success-message">Compra realizada con exito!</h3>
            <img id="success-image" src="/images/success.svg" />
            <h3 id="success-text">Gracias por confiar en Zeppelin</h3>
          </div>
        </div>
      </div>`);
  localStorage.clear();
  //Cuando cierro el popup, se refresca la pagina y se limpia el carrito
  $("#close-button").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 4000);
    cart = [];
    showCart(cart);
  });
}
