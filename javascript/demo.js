// Tries your coffee shop. Run it with: node demo.js
import { CoffeeShop } from "./order-line.js";

const shop = new CoffeeShop();
for (const mug of ["red mug", "blue mug", "white mug"]) {
  shop.washMug(mug);
}
console.log("Washed: red mug, blue mug, white mug");
for (const order of ["oat latte", "cold brew", "chai tea", "mocha"]) {
  shop.placeOrder(order);
}
console.log("Orders: oat latte, cold brew, chai tea, mocha");
for (let i = 0; i < 4; i++) {
  const served = shop.serveNext();
  console.log(served === null ? `No clean mug: ${shop.ordersWaiting} order waiting` : `Served: ${served}`);
}
shop.washMug("green mug");
console.log("Washed: green mug");
console.log(`Served: ${shop.serveNext()}`);
console.log(`Orders waiting: ${shop.ordersWaiting}, mugs left: ${shop.mugsLeft}`);
