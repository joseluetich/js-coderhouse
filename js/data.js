//Genero JSON de productos
const DATA = [
  {
    id: 0,
    name: "Grolsch 473ml x6",
    price: 874,
    image: "/images/beers/grolsch.jpg",
    type: "BEER",
  },
  {
    id: 1,
    name: "Heineken 473ml x6",
    price: 871,
    image: "/images/beers/heineken.jpg",
    type: "BEER",
  },
  {
    id: 2,
    name: "Andes Lager 473ml x6",
    price: 617.5,
    image: "/images/beers/andesRubia.jpg",
    type: "BEER",
  },
  {
    id: 3,
    name: "Andes Roja 473ml x6",
    price: 693.5,
    image: "/images/beers/andesRoja.jpg",
    type: "BEER",
  },
  {
    id: 4,
    name: "Patagonia 24.7 473ml x6",
    price: 817,
    image: "/images/beers/patagonia.jpg",
    type: "BEER",
  },
  {
    id: 5,
    name: "Imperial Golden 473ml x6",
    price: 684,
    image: "/images/beers/imperialGolden.jpg",
    type: "BEER",
  },
  {
    id: 6,
    name: "Imperial Lager 473ml",
    price: 703,
    image: "/images/beers/imperialLager.jpg",
    type: "BEER",
  },
  {
    id: 7,
    name: "Schneider 473ml x6",
    price: 560.5,
    image: "/images/beers/schneider.jpg",
    type: "BEER",
  },
  {
    id: 8,
    name: "Norton Cosecha Tardía 750ml",
    price: 290,
    image: "/images/wines/norton.jpg",
    type: "WINE",
  },
  {
    id: 9,
    name: "Portillo Cabernet Suavignon 750ml",
    price: 290,
    image: "/images/wines/portillo2.jpg",
    type: "WINE",
  },
  {
    id: 10,
    name: "Norton Cosecha Tardía Rosado 750ml",
    price: 240,
    image: "/images/wines/norton2.jpg",
    type: "WINE",
  },
  {
    id: 11,
    name: "Portillo Chardonnay 750ml",
    price: 290,
    image: "/images/wines/portillo1.jpg",
    type: "WINE",
  },
  {
    id: 12,
    name: "Luigi Bosca de Sangre 750ml",
    price: 1440,
    image: "/images/wines/luigibosca.jpg",
    type: "WINE",
  },
  {
    id: 13,
    name: "Salentein Reserve Rose 750ml",
    price: 670,
    image: "/images/wines/salentein.jpg",
    type: "WINE",
  },
  {
    id: 14,
    name: "Baron B Extra Brut 750ml",
    price: 1564,
    image: "/images/sparklingWine/baronb.jpg",
    type: "SPARKLING-WINE",
  },
  {
    id: 15,
    name: "Nieto Senetiner Brut Nature 750ml",
    price: 612,
    image: "/images/sparklingWine/nieto.jpg",
    type: "SPARKLING-WINE",
  },
  {
    id: 16,
    name: "Salentein Extra Brut 750ml",
    price: 390,
    image: "/images/sparklingWine/salentein.jpg",
    type: "SPARKLING-WINE",
  },
  {
    id: 17,
    name: "Sidra 1888 750ml",
    price: 510,
    image: "/images/sparklingWine/sidra.jpg",
    type: "SPARKLING-WINE",
  },
  {
    id: 18,
    name: "Salentein Blanc De Blancs 750ml",
    price: 560,
    image: "/images/sparklingWine/salenteinBlanc.jpg",
    type: "SPARKLING-WINE",
  },
  {
    id: 19,
    name: "Veuve Clicquot Rose Couche 750ml",
    price: 6540,
    image: "/images/sparklingWine/veuve.jpg",
    type: "SPARKLING-WINE",
  },
  {
    id: 20,
    name: "Absolut Peppar 750ml",
    price: 2060,
    image: "/images/distillates/absolut.jpg",
    type: "DISTILLATE",
  },
  {
    id: 21,
    name: "Fernet Branca 750ml",
    price: 578,
    image: "/images/distillates/fernet.jpg",
    type: "DISTILLATE",
  },
  {
    id: 22,
    name: "Jack Daniels Honey 750ml",
    price: 4726,
    image: "/images/distillates/jack.jpg",
    type: "DISTILLATE",
  },
  {
    id: 23,
    name: "Jagermeister Scharf 700ml",
    price: 3130,
    image: "/images/distillates/jager.jpg",
    type: "DISTILLATE",
  },
  {
    id: 24,
    name: "Johnnie Walker Black Label 750ml",
    price: 3111,
    image: "/images/distillates/johnnie.jpg",
    type: "DISTILLATE",
  },
  {
    id: 25,
    name: "Gin Restinga Edición Especial 700ml",
    price: 1700,
    image: "/images/distillates/restinga.jpg",
    type: "DISTILLATE",
  },
  {
    id: 26,
    name: "Vodka Sernova Fresh Citrus 750ml",
    price: 490,
    image: "/images/distillates/sernova.jpg",
    type: "DISTILLATE",
  },
  {
    id: 27,
    name: "Skyy Coconut 750ml",
    price: 700,
    image: "/images/distillates/skyy.jpg",
    type: "DISTILLATE",
  },
  {
    id: 28,
    name: "Combo Fernet-Cola",
    price: 833,
    image: "/images/combos/combo1.jpg",
    type: "COMBO",
  },
  {
    id: 29,
    name: "Combo Jager-Cola",
    price: 4167,
    image: "/images/combos/combo2.jpg",
    type: "COMBO",
  },
  {
    id: 30,
    name: "Combo Mandarin",
    price: 2185,
    image: "/images/combos/combo3.jpg",
    type: "COMBO",
  },
  {
    id: 31,
    name: "Combo Red Lime",
    price: 2508,
    image: "/images/combos/combo4.jpg",
    type: "COMBO",
  },
  {
    id: 32,
    name: "Combo Vainilla Bull",
    price: 2508,
    image: "/images/combos/combo5.jpg",
    type: "COMBO",
  },
];

//Creo un arreglo para cada tipo de producto
let beers = [],
  wines = [],
  sparklingWines = [],
  distillates = [],
  combos = [];

for (let prod of DATA) {
  switch (prod.type) {
    case "BEER":
      beers.push(prod);
      break;
    case "WINE":
      wines.push(prod);
      break;
    case "SPARKLING-WINE":
      sparklingWines.push(prod);
      break;
    case "DISTILLATE":
      distillates.push(prod);
      break;
    case "COMBO":
      combos.push(prod);
      break;
  }
}
