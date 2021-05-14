class Product {
  constructor(id, name, price, image, type) {
    this._id = id;
    this._name = name;
    this._price = price;
    this._image = image;
    this._quantity = 0;
    this._type = type;
  }
  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  get image() {
    return this._image;
  }

  set image(image) {
    this._image = image;
  }

  get quantity() {
    return this._quantity;
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }

  get type() {
    return this._type;
  }

  set type(type) {
    this._type = type;
  }

}
