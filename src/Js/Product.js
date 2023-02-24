export default class Product {
  id;

  title;

  price;

  thumbnail;

  constructor(id, title, price, thumbnail) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getPrice() {
    return this.price;
  }

  getThumbnail() {
    return this.thumbnail;
  }

  setId(newId) {
    this.id = newId;
  }

  setTitle(newTitle) {
    this.title = newTitle;
  }

  setPrice(newPrice) {
    this.price = newPrice;
  }

  setThumbnail(newThumbnail) {
    this.thumbnail = newThumbnail;
  }

  setAll(newId, newTitle, newPrice, newThumbnail) {
    this.id = newId;
    this.title = newTitle;
    this.price = newPrice;
    this.thumbnail = newThumbnail;
  }
}
