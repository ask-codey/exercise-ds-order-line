// The coffee shop's order line. Three classes: OrderQueue (the line of
// orders), which works today but freezes the order screen at rush hour,
// so make it fast; CupStack (the clean mugs) to finish; and CoffeeShop,
// where only serveNext is left. The comment above each method says what
// it should do, with examples. Replace each body with your own code, and
// write its Big-O in its comment.

/**
 * The line of orders: first in, first out. This is the queue the shop runs
 * today. It works, and it's why the order screen freezes at rush hour (the
 * ticket in README.md). Make enqueue, dequeue and peek fast, keeping their
 * names and what they return: the tests and CoffeeShop call them.
 */
export class OrderQueue {
  #orders: string[] = [];
  count = 0;

  /*
   * Add an order at the back of the line.
   *
   * enqueue("oat latte"), enqueue("cold brew") -> the line is oat latte, cold brew
   *
   * Big-O: (write it here)
   */
  enqueue(order: string): void {
    this.#orders.push(order);
    this.count++;
  }

  /*
   * Remove the order at the front of the line and return it, or return
   * null if no orders are waiting.
   *
   * With oat latte, cold brew: dequeue() -> "oat latte", and the line is cold brew
   *
   * Big-O: (write it here)
   */
  dequeue(): string | null {
    if (this.#orders.length === 0) {
      return null;
    }
    this.count--;
    return this.#orders.shift() ?? null;
  }

  /*
   * Return the order at the front without removing it, or null if no
   * orders are waiting.
   *
   * Big-O: (write it here)
   */
  peek(): string | null {
    return this.#orders.length === 0 ? null : this.#orders[0];
  }
}

/**
 * The stack of clean mugs behind the counter: last in, first out. The mugs
 * are kept in an array, with the top at the end.
 */
export class CupStack {
  #mugs: string[] = [];

  /** How many clean mugs are on the stack. */
  get count(): number {
    return this.#mugs.length;
  }

  /*
   * Put a clean mug on top of the stack.
   *
   * push("red mug"), push("blue mug") -> blue mug is on top
   *
   * Big-O: (write it here)
   */
  push(mug: string): void {
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
  pop(): string | null {
    return null;
  }

  /*
   * Return the mug on top without taking it off, or null if the stack is
   * empty.
   *
   * Big-O: (write it here)
   */
  peek(): string | null {
    return null;
  }
}

/** The coffee shop: a line of orders and a stack of clean mugs. Everything here is done except serveNext. */
export class CoffeeShop {
  #orders = new OrderQueue();
  #mugs = new CupStack();

  get ordersWaiting(): number {
    return this.#orders.count;
  }

  get mugsLeft(): number {
    return this.#mugs.count;
  }

  washMug(mug: string): void {
    this.#mugs.push(mug);
  }

  placeOrder(order: string): void {
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
  serveNext(): string | null {
    return null;
  }
}
