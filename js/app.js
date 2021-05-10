/*let age = prompt("Ingresa tu edad:");

function allowed(param) {
  if (param >= 18) {
    alert("Bienvenido a Bebidas Zeppelin!");
  } else {
    alert("Necesitas ser mayor de edad para realizar compras");
  }
}

allowed(age);*/

const beers = [];
/*Definicion de cervezas*/
const beer1 = new Product(0, "Grolsch 473ml x6", 874, "BEER");
const beer2 = new Product(1, "Heineken 473ml x6", 871, "BEER");
const beer3 = new Product(2, "Andes Lager 473ml x6", 617.5, "BEER");
const beer4 = new Product(3, "Andes Roja 473ml x6", 693.5, "BEER");
const beer5 = new Product(4, "Patagonia 24.7 473ml x6", 817, "BEER");
const beer6 = new Product(5, "Imperial Golden 473ml x6", 684, "BEER");
const beer7 = new Product(6, "Imperial Lager 473ml", 703, "BEER");
const beer8 = new Product(7, "Schneider 473ml x6", 560.5, "BEER");
beers.push(beer1);
beers.push(beer2);
beers.push(beer3);
beers.push(beer4);
beers.push(beer5);
beers.push(beer6);
beers.push(beer7);
beers.push(beer8);
/*Definicion de vinos*/
const wines = [];
const wine1 = new Product(8, "Norton Cosecha Tardía 750ml", 290, "WINE");
const wine2 = new Product(9, "Portillo Cabernet Suavignon 750ml", 290, "WINE");
const wine3 = new Product(
  10,
  "Norton Cosecha Tardía Rosado 750ml",
  240,
  "WINE"
);
const wine4 = new Product(11, "Portillo Chardonnay 750ml", 290, "WINE");
const wine5 = new Product(12, "Luigi Bosca de Sangre 750ml", 1440, "WINE");
const wine6 = new Product(13, "Salentein Reserve Rose 750ml", 670, "WINE");
wines.push(wine1);
wines.push(wine2);
wines.push(wine3);
wines.push(wine4);
wines.push(wine5);
wines.push(wine6);
/*Definicion de espumantes*/
const sparklingWines = [];
const sparklingWine1 = new Product(
  14,
  "Baron B Extra Brut 750ml",
  1564,
  "SPARKLING_WINE"
);
const sparklingWine2 = new Product(
  15,
  "Nieto Senetiner Brut Nature 750ml",
  612,
  "SPARKLING_WINE"
);
const sparklingWine3 = new Product(
  16,
  "Salentein Extra Brut 750ml",
  390,
  "SPARKLING_WINE"
);
const sparklingWine4 = new Product(
  17,
  "Sidra 1888 750ml",
  510,
  "SPARKLING_WINE"
);
const sparklingWine5 = new Product(
  18,
  "Salentein Blanc De Blancs 750ml",
  560,
  "SPARKLING_WINE"
);
const sparklingWine6 = new Product(
  19,
  "Veuve Clicquot Rose Couche 750ml",
  6540,
  "SPARKLING_WINE"
);
sparklingWines.push(sparklingWine1);
sparklingWines.push(sparklingWine2);
sparklingWines.push(sparklingWine3);
sparklingWines.push(sparklingWine4);
sparklingWines.push(sparklingWine5);
sparklingWines.push(sparklingWine6);
/*Definicion de destilados*/
const destillates = [];
const destillate1 = new Product(20, "Absolut Peppar 750ml", 2060, "DESTILLATE");
const destillate2 = new Product(21, "Fernet Branca 750ml", 578, "DESTILLATE");
const destillate3 = new Product(
  22,
  "Jack Daniels Honey 750ml",
  4726,
  "DESTILLATE"
);
const destillate4 = new Product(
  23,
  "Jagermeister Scharf 700ml",
  3130,
  "DESTILLATE"
);
const destillate5 = new Product(
  24,
  "Johnnie Walker Black Label 750ml",
  3111,
  "DESTILLATE"
);
const destillate6 = new Product(
  25,
  "Gin Restinga Edición Especial 700ml",
  1700,
  "DESTILLATE"
);
const destillate7 = new Product(
  26,
  "Vodka Sernova Fresh Citrus 750ml",
  490,
  "DESTILLATE"
);
const destillate8 = new Product(27, "Skyy Coconut 750ml", 700, "DESTILLATE");
destillates.push(destillate1);
destillates.push(destillate2);
destillates.push(destillate3);
destillates.push(destillate4);
destillates.push(destillate5);
destillates.push(destillate6);
destillates.push(destillate7);
destillates.push(destillate8);
/*Definicion de combos*/
const combos = [];
const combo1 = new Product(28, "Combo Fernet-Cola", 833, "COMBO");
const combo2 = new Product(29, "Combo Jager-Cola", 4167, "COMBO");
const combo3 = new Product(30, "Combo Mandarin", 2185, "COMBO");
const combo4 = new Product(31, "Combo Red Lime", 2508, "COMBO");
const combo5 = new Product(32, "Combo Vainilla Bull", 2508, "COMBO");
combos.push(combo1);
combos.push(combo2);
combos.push(combo3);
combos.push(combo4);
combos.push(combo5);

const getAllProducts = (beers, wines, sparklingWines, destillates, combos) => {
  return beers
    .concat(wines)
    .concat(sparklingWines)
    .concat(destillates)
    .concat(combos);
};
const products = getAllProducts(
  beers,
  wines,
  sparklingWines,
  destillates,
  combos
);

const getTotalPrice = (products) => {
  let total = 0;
  for (let prod of products) {
    total += prod.quantity * prod.price;
  }
  return total;
};

const productToString = (list) => {
  let str = "";
  str = "-1: Ninguno\n";
  for (let prod of list) {
    str += prod.id + ": " + prod.name + "\n";
  }
  return str;
};

let beerId = prompt(
  "Ingrese el id de la cerveza que desee:\n" + productToString(beers)
);
let wineId = prompt(
  "Ingrese el id del vino que desee:\n" + productToString(wines)
);
let sparklingWineId = prompt(
  "Ingrese el id del espumante que desee:\n" + productToString(sparklingWines)
);
let destillateId = prompt(
  "Ingrese el id del destilado que desee:\n" + productToString(destillates)
);
let comboId = prompt(
  "Ingrese el id del combo que desee:\n" + productToString(combos)
);
if (beerId >= 0 && beerId < 8) {
  products[beerId].quantity = products[beerId].quantity + 1;
}
if (wineId >= 8 && wineId < 14) {
  products[wineId].quantity = products[wineId].quantity + 1;
}
if (sparklingWineId >= 14 && sparklingWineId < 20) {
  products[sparklingWineId].quantity = products[sparklingWineId].quantity + 1;
}
if (destillateId >= 20 && destillateId < 28) {
  products[destillateId].quantity = products[destillateId].quantity + 1;
}
if (comboId >= 28 && comboId < 33) {
  products[comboId].quantity = products[comboId].quantity + 1;
}
console.log("Productos comprados:");
for (let prod of products) {
  if (prod.quantity > 0) {
    console.log("- " + prod.name + " ($" + prod.price + ")");
  }
}
console.log("Costo total: $" + getTotalPrice(products));
