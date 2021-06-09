let DATA = [], //Almacena todos los productos
  beers = [], //Almacena los productos del tipo cerveza
  wines = [], //Almacena los productos del tipo vino
  sparklingWines = [], //Almacena los productos del tipo espumante
  distillates = [], //Almacena los productos del tipo destilado
  combos = [], //Almacena los productos del tipo combo
  cart = [], //Almacena los productos del carrito
  dataCart = []; //Almacena los productos del carrito en JSON
$(() => {
  $.getJSON("/data/data.json", (respuesta) => {
    DATA = respuesta;
    //Creo un arreglo para cada tipo de producto
    for (let product of DATA) {
      switch (product.type) {
        case "BEER":
          beers.push(product);
          break;
        case "WINE":
          wines.push(product);
          break;
        case "SPARKLING-WINE":
          sparklingWines.push(product);
          break;
        case "DISTILLATE":
          distillates.push(product);
          break;
        case "COMBO":
          combos.push(product);
          break;
      }
    }
    //Obtengo los productos del localstorage
    //Inicializo la pantalla
    setHomeText();
    setUsText();
    setContactText();
    createTable(beers, "beer");
    createTable(wines, "wine");
    createTable(sparklingWines, "sparkling-wine");
    createTable(distillates, "distillate");
    createTable(combos, "combo");
    setEventListeners();
    getStorageData();
  });
});

//Agrego pantalla responsive
window.addEventListener("resize", function () {
  let tableBeer = this.document.getElementById("table-beer");
  tableBeer.innerHTML = "";
  createTable(beers, "beer");
  let tableWine = this.document.getElementById("table-wine");
  tableWine.innerHTML = "";
  createTable(wines, "wine");
  let tableSparklingWine = this.document.getElementById("table-sparkling-wine");
  tableSparklingWine.innerHTML = "";
  createTable(sparklingWines, "sparkling-wine");
  let tableDistillate = this.document.getElementById("table-distillate");
  tableDistillate.innerHTML = "";
  createTable(distillates, "distillate");
  let tableCombo = this.document.getElementById("table-combo");
  tableCombo.innerHTML = "";
  createTable(combos, "combo");
});
