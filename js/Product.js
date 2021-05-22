class Product {
  constructor(data) {
    this.id = parseInt(data.id);
    this.name = data.name;
    this.price = parseFloat(data.price);
    this.image = data.image;
    this.quantity = 0;
    this.type = data.type;
  }

  get _quantity() {
    return this.quantity;
  }

  set _quantity(quantity) {
    this.quantity = quantity;
  }
}
