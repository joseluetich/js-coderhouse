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