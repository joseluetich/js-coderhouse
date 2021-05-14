//CREAR CERVEZAS
const beers = [];
const beer1 = new Product(
  0,
  "Grolsch 473ml x6",
  874,
  "/images/beers/grolsch.jpg",
  "BEER"
);
const beer2 = new Product(
  1,
  "Heineken 473ml x6",
  871,
  "/images/beers/heineken.jpg",
  "BEER"
);
const beer3 = new Product(
  2,
  "Andes Lager 473ml x6",
  617.5,
  "/images/beers/andesRubia.jpg",
  "BEER"
);
const beer4 = new Product(
  3,
  "Andes Roja 473ml x6",
  693.5,
  "/images/beers/andesRoja.jpg",
  "BEER"
);
const beer5 = new Product(
  4,
  "Patagonia 24.7 473ml x6",
  817,
  "/images/beers/patagonia.jpg",
  "BEER"
);
const beer6 = new Product(
  5,
  "Imperial Golden 473ml x6",
  684,
  "/images/beers/imperialGolden.jpg",
  "BEER"
);
const beer7 = new Product(
  6,
  "Imperial Lager 473ml",
  703,
  "/images/beers/imperialLager.jpg",
  "BEER"
);
const beer8 = new Product(
  7,
  "Schneider 473ml x6",
  560.5,
  "/images/beers/schneider.jpg",
  "BEER"
);
beers.push(beer1);
beers.push(beer2);
beers.push(beer3);
beers.push(beer4);
beers.push(beer5);
beers.push(beer6);
beers.push(beer7);
beers.push(beer8);

//CREAR VINOS
const wines = [];
const wine1 = new Product(
  8,
  "Norton Cosecha Tardía 750ml",
  290,
  "/images/wines/norton.jpg",
  "WINE"
);
const wine2 = new Product(
  9,
  "Portillo Cabernet Suavignon 750ml",
  290,
  "/images/wines/portillo2.jpg",
  "WINE"
);
const wine3 = new Product(
  10,
  "Norton Cosecha Tardía Rosado 750ml",
  240,
  "/images/wines/norton2.jpg",
  "WINE"
);
const wine4 = new Product(
  11,
  "Portillo Chardonnay 750ml",
  290,
  "/images/wines/portillo1.jpg",
  "WINE"
);
const wine5 = new Product(
  12,
  "Luigi Bosca de Sangre 750ml",
  1440,
  "/images/wines/luigibosca.jpg",
  "WINE"
);
const wine6 = new Product(
  13,
  "Salentein Reserve Rose 750ml",
  670,
  "/images/wines/salentein.jpg",
  "WINE"
);
wines.push(wine1);
wines.push(wine2);
wines.push(wine3);
wines.push(wine4);
wines.push(wine5);
wines.push(wine6);

//CREAR ESPUMANTES
const sparklingWines = [];
const sparklingWine1 = new Product(
  14,
  "Baron B Extra Brut 750ml",
  1564,
  "/images/sparklingWine/baronb.jpg",
  "SPARKLING_WINE"
);
const sparklingWine2 = new Product(
  15,
  "Nieto Senetiner Brut Nature 750ml",
  612,
  "/images/sparklingWine/nieto.jpg",
  "SPARKLING_WINE"
);
const sparklingWine3 = new Product(
  16,
  "Salentein Extra Brut 750ml",
  390,
  "/images/sparklingWine/salentein.jpg",
  "SPARKLING_WINE"
);
const sparklingWine4 = new Product(
  17,
  "Sidra 1888 750ml",
  510,
  "/images/sparklingWine/sidra.jpg",
  "SPARKLING_WINE"
);
const sparklingWine5 = new Product(
  18,
  "Salentein Blanc De Blancs 750ml",
  560,
  "/images/sparklingWine/salenteinBlanc.jpg",
  "SPARKLING_WINE"
);
const sparklingWine6 = new Product(
  19,
  "Veuve Clicquot Rose Couche 750ml",
  6540,
  "/images/sparklingWine/veuve.jpg",
  "SPARKLING_WINE"
);
sparklingWines.push(sparklingWine1);
sparklingWines.push(sparklingWine2);
sparklingWines.push(sparklingWine3);
sparklingWines.push(sparklingWine4);
sparklingWines.push(sparklingWine5);
sparklingWines.push(sparklingWine5);

//CREAR DESTILADOS
const distillates = [];
const distillate1 = new Product(
  20,
  "Absolut Peppar 750ml",
  2060,
  "/images/distillates/absolut.jpg",
  "DISTILLATE"
);
const distillate2 = new Product(
  21,
  "Fernet Branca 750ml",
  578,
  "/images/distillates/fernet.jpg",
  "DISTILLATE"
);
const distillate3 = new Product(
  22,
  "Jack Daniels Honey 750ml",
  4726,
  "/images/distillates/jack.jpg",
  "DISTILLATE"
);
const distillate4 = new Product(
  23,
  "Jagermeister Scharf 700ml",
  3130,
  "/images/distillates/jager.jpg",
  "DISTILLATE"
);
const distillate5 = new Product(
  24,
  "Johnnie Walker Black Label 750ml",
  3111,
  "/images/distillates/johnnie.jpg",
  "DISTILLATE"
);
const distillate6 = new Product(
  25,
  "Gin Restinga Edición Especial 700ml",
  1700,
  "/images/distillates/restinga.jpg",
  "DISTILLATE"
);
const distillate7 = new Product(
  26,
  "Vodka Sernova Fresh Citrus 750ml",
  490,
  "/images/distillates/sernova.jpg",
  "DISTILLATE"
);
const distillate8 = new Product(
  27,
  "Skyy Coconut 750ml",
  700,
  "/images/distillates/skyy.jpg",
  "DISTILLATE"
);
distillates.push(distillate1);
distillates.push(distillate2);
distillates.push(distillate3);
distillates.push(distillate4);
distillates.push(distillate5);
distillates.push(distillate6);
distillates.push(distillate7);
distillates.push(distillate8);

//CREAR COMBOS
const combos = [];
const combo1 = new Product(
  28,
  "Combo Fernet-Cola",
  833,
  "/images/combos/combo1.jpg",
  "COMBO"
);
const combo2 = new Product(
  29,
  "Combo Jager-Cola",
  4167,
  "/images/combos/combo2.jpg",
  "COMBO"
);
const combo3 = new Product(
  30,
  "Combo Mandarin",
  2185,
  "/images/combos/combo3.jpg",
  "COMBO"
);
const combo4 = new Product(
  31,
  "Combo Red Lime",
  2508,
  "/images/combos/combo4.jpg",
  "COMBO"
);
const combo5 = new Product(
  32,
  "Combo Vainilla Bull",
  2508,
  "/images/combos/combo5.jpg",
  "COMBO"
);
combos.push(combo1);
combos.push(combo2);
combos.push(combo3);
combos.push(combo4);
combos.push(combo5);