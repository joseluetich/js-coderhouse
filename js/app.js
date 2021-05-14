function createTable(products, name) {
  let table = document.getElementById(`table-${name}`);
  let tableBody = document.createElement("tbody");

  //Creo un componente para cada producto del array
  let content = [];
  for (let product of products) {
    content.push(`<td>
                  <div>
                    <form>
                      <div><img src="${product.image}"/></div>
                      <div><p class="product-name">${product.name}</p><p>$${product.price}</p></div>
                      <div><button>COMPRAR</button></div>
                    </form>
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

createTable(beers, "beer");
createTable(wines, "wine");
createTable(sparklingWines, "sparkling-wine");
createTable(distillates, "distillate");
createTable(combos, "combo");
