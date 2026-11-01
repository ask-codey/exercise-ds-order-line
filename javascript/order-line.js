// The coffee shop's order line. Three classes: OrderQueue (the line of
// orders) and CupStack (the clean mugs) to finish, and CoffeeShop, where
// only serveNext is left. The comment above each method says what it
// should do, with examples. Replace each body with your own code, and
// write its Big-O in its comment.

/**
 * One order in a line, for building the queue as a linked list. You don't
 * have to use it: a front index into an array works too.
 */
export class OrderNode {
  constructor(order) {
    this.order = order;
    this.next = null;
  }
}

/**
 * The line of orders: first in, first out. Build it so every method is
 * O(1): a linked list with a front and a back, or an array with a front
 * index. Not an array emptied with shift(), which is O(n). (JavaScript has no
 * built-in queue.)
 */
export class OrderQueue {
  count = 0;

  /*
   * Add an order at the back of the line.
   *
   * enqueue("oat latte"), enqueue("cold brew") -> the line is oat latte, cold brew
   *
   * Big-O: (write it here)
   */
  enqueue(order) {
    // Your code here.
  }

  /*
   * Remove the order at the front of the line and return it, or return
   * null if no orders are waiting.
   *
   * With oat latte, cold brew: dequeue() -> "oat latte", and the line is cold brew
   *
   * Big-O: (write it here)
   */
  dequeue() {
    return null;
  }

  /*
   * Return the order at the front without removing it, or null if no
   * orders are waiting.
   *
   * Big-O: (write it here)
   */
  peek() {
    return null;
  }
}

/**
 * The stack of clean mugs behind the counter: last in, first out. The mugs
 * are kept in an array, with the top at the end.
 */
export class CupStack {
  #mugs = [];

  /** How many clean mugs are on the stack. */
  get count() {
    return this.#mugs.length;
  }

  /*
   * Put a clean mug on top of the stack.
   *
   * push("red mug"), push("blue mug") -> blue mug is on top
   *
   * Big-O: (write it here)
   */
  push(mug) {
    // Your code here.
  }

  /*
   * Take the mug on top off the stack and return it, or return null if the
   * stack is empty.
   *
   * With red mug, then blue mug pushed: pop() -> "blue mug"
   *
   * Big-O: (write it here)
   */
  pop() {
    return null;
  }

  /*
   * Return the mug on top without taking it off, or null if the stack is
   * empty.
   *
   * Big-O: (write it here)
   */
  peek() {
    return null;
  }
}

/** The coffee shop: a line of orders and a stack of clean mugs. Everything here is done except serveNext. */
export class CoffeeShop {
  #orders = new OrderQueue();
  #mugs = new CupStack();

  get ordersWaiting() {
    return this.#orders.count;
  }

  get mugsLeft() {
    return this.#mugs.count;
  }

  washMug(mug) {
    this.#mugs.push(mug);
  }

  placeOrder(order) {
    this.#orders.enqueue(order);
  }

  /*
   * Serve the order at the front of the line in the clean mug on top of the
   * stack, and return what was served as "<order> in the <mug>". If no order
   * is waiting, or there's no clean mug, serve nothing and return null: the
   * orders and mugs stay as they were.
   *
   * Mugs red, then blue washed; orders oat latte, mocha placed:
   * serveNext() -> "oat latte in the blue mug"
   * serveNext() -> "mocha in the red mug"
   * serveNext() -> null
   *
   * Big-O: (write it here)
   */
  serveNext() {
    return null;
  }
}
