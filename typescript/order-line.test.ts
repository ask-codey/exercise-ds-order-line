// The tests for the order line. You don't need to change this file.
// Each message says what was expected, so a failing test tells you what to look at.
import assert from "node:assert/strict";
import { test } from "node:test";
import { CoffeeShop, CupStack, OrderQueue } from "./order-line.ts";

test("the queue is first in, first out", () => {
  const line = new OrderQueue();
  line.enqueue("oat latte");
  line.enqueue("cold brew");
  line.enqueue("chai tea");
  assert.equal(line.count, 3, "Not yet: three orders are waiting.");
  assert.equal(line.dequeue(), "oat latte", "Not yet: the first order placed is the first served.");
  assert.equal(line.dequeue(), "cold brew", "Not yet: cold brew was second in line.");
  assert.equal(line.dequeue(), "chai tea", "Not yet: chai tea was last in line.");
  assert.equal(line.count, 0, "Not yet: the line is empty now.");
});

test("peek looks without serving", () => {
  const line = new OrderQueue();
  line.enqueue("oat latte");
  line.enqueue("cold brew");
  assert.equal(line.peek(), "oat latte", "Not yet: peek shows the order at the front.");
  assert.equal(line.count, 2, "Not yet: peek doesn't remove anything.");
  line.dequeue();
  line.dequeue();
  assert.equal(line.peek(), null, "Not yet: an empty line has nothing to peek at.");
  assert.equal(line.dequeue(), null, "Not yet: an empty line has nothing to serve.");
});

test("the queue works after emptying and refilling", () => {
  const line = new OrderQueue();
  line.enqueue("oat latte");
  line.dequeue();
  line.enqueue("cold brew");
  line.enqueue("chai tea");
  assert.equal(line.dequeue(), "cold brew", "Not yet: after the line empties, the next order placed is at the front.");
  assert.equal(line.dequeue(), "chai tea", "Not yet: chai tea follows cold brew. Is the back of the line reset when the line empties?");
});

test("the stack is last in, first out", () => {
  const mugs = new CupStack();
  mugs.push("red mug");
  mugs.push("blue mug");
  mugs.push("white mug");
  assert.equal(mugs.count, 3, "Not yet: three mugs were pushed.");
  assert.equal(mugs.peek(), "white mug", "Not yet: the last mug pushed is on top.");
  assert.equal(mugs.pop(), "white mug", "Not yet: pop takes the top mug off.");
  assert.equal(mugs.pop(), "blue mug", "Not yet: blue mug is next.");
  assert.equal(mugs.pop(), "red mug", "Not yet: the first mug pushed comes off last.");
  assert.equal(mugs.pop(), null, "Not yet: an empty stack has nothing to pop.");
  assert.equal(mugs.peek(), null, "Not yet: an empty stack has nothing on top.");
});

test("the shop serves the front order in the top mug", () => {
  const shop = new CoffeeShop();
  shop.washMug("red mug");
  shop.washMug("blue mug");
  shop.placeOrder("oat latte");
  shop.placeOrder("mocha");
  assert.equal(shop.serveNext(), "oat latte in the blue mug", "Not yet: the first order goes in the mug on top, the last one washed.");
  assert.equal(shop.serveNext(), "mocha in the red mug", "Not yet: the next order gets the next mug down.");
  assert.equal(shop.serveNext(), null, "Not yet: with no orders and no mugs left, nothing is served.");
});

test("with no clean mug, the order waits", () => {
  const shop = new CoffeeShop();
  shop.placeOrder("chai tea");
  assert.equal(shop.serveNext(), null, "Not yet: with no clean mug, nothing is served.");
  assert.equal(shop.ordersWaiting, 1, "Not yet: the order keeps its place in line while it waits for a mug.");
  shop.washMug("green mug");
  assert.equal(shop.serveNext(), "chai tea in the green mug", "Not yet: once a mug is washed, the waiting order is served.");
});

test("with no order, the mugs stay", () => {
  const shop = new CoffeeShop();
  shop.washMug("red mug");
  assert.equal(shop.serveNext(), null, "Not yet: with no order, nothing is served.");
  assert.equal(shop.mugsLeft, 1, "Not yet: an unused mug stays on the stack.");
  shop.placeOrder("cold brew");
  assert.equal(shop.serveNext(), "cold brew in the red mug", "Not yet: the new order gets the mug that was waiting.");
});

test("the rush hour stays fast", () => {
  const shop = new CoffeeShop();
  const started = performance.now();
  for (let i = 0; i < 400000; i++) {
    shop.washMug(`mug ${i}`);
    shop.placeOrder(`order ${i}`);
  }
  assert.equal(shop.serveNext(), "order 0 in the mug 399999", "Not yet: the first order placed gets the last mug washed.");
  let last: string | null = null;
  for (let i = 1; i < 400000; i++) {
    last = shop.serveNext();
    if (i % 10000 === 0 && performance.now() - started > 2000) {
      break;
    }
  }
  const seconds = (performance.now() - started) / 1000;
  assert.ok(seconds < 2, `Not yet: the rush of 400,000 orders ran past 2 seconds: it was stopped at ${seconds.toFixed(1)} seconds, with ${shop.ordersWaiting} orders still waiting. When each order joins and leaves the line in one step, the whole rush takes well under one second.`);
  assert.equal(last, "order 399999 in the mug 0", "Not yet: the last order placed gets the first mug washed.");
  assert.equal(shop.ordersWaiting, 0, "Not yet: every order was served.");
  assert.equal(shop.mugsLeft, 0, "Not yet: every mug was used.");
});
