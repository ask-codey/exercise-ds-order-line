# The coffee shop's order line. Three classes: OrderQueue (the line of
# orders) and CupStack (the clean mugs) to finish, and CoffeeShop, where
# only serve_next is left. The comment inside each method says what it
# should do, with examples. Replace each body with your own code, and write
# its Big-O in its comment.


class OrderNode:
    """One order in a line, for building the queue as a linked list. You don't
    have to use it: a front index into a list works too."""

    def __init__(self, order):
        self.order = order
        self.next = None


class OrderQueue:
    """The line of orders: first in, first out. Build it so every method is
    O(1): a linked list with a front and a back, or a list with a front index.
    Not a list emptied with pop(0), which is O(n), and not collections.deque."""

    def __init__(self):
        self.count = 0

    def enqueue(self, order):
        """
        Add an order at the back of the line.

        enqueue("oat latte"), enqueue("cold brew") -> the line is oat latte, cold brew

        Big-O: (write it here)
        """
        pass  # your code here

    def dequeue(self):
        """
        Remove the order at the front of the line and return it, or return
        None if no orders are waiting.

        With oat latte, cold brew: dequeue() -> "oat latte", and the line is cold brew

        Big-O: (write it here)
        """
        return None

    def peek(self):
        """
        Return the order at the front without removing it, or None if no
        orders are waiting.

        Big-O: (write it here)
        """
        return None


class CupStack:
    """The stack of clean mugs behind the counter: last in, first out. The mugs
    are kept in a list, with the top at the end."""

    def __init__(self):
        self.mugs = []

    @property
    def count(self):
        """How many clean mugs are on the stack."""
        return len(self.mugs)

    def push(self, mug):
        """
        Put a clean mug on top of the stack.

        push("red mug"), push("blue mug") -> blue mug is on top

        Big-O: (write it here)
        """
        pass  # your code here

    def pop(self):
        """
        Take the mug on top off the stack and return it, or return None if
        the stack is empty.

        With red mug, then blue mug pushed: pop() -> "blue mug"

        Big-O: (write it here)
        """
        return None

    def peek(self):
        """
        Return the mug on top without taking it off, or None if the stack is
        empty.

        Big-O: (write it here)
        """
        return None


class CoffeeShop:
    """The coffee shop: a line of orders and a stack of clean mugs. Everything
    here is done except serve_next."""

    def __init__(self):
        self.orders = OrderQueue()
        self.mugs = CupStack()

    @property
    def orders_waiting(self):
        return self.orders.count

    @property
    def mugs_left(self):
        return self.mugs.count

    def wash_mug(self, mug):
        self.mugs.push(mug)

    def place_order(self, order):
        self.orders.enqueue(order)

    def serve_next(self):
        """
        Serve the order at the front of the line in the clean mug on top of
        the stack, and return what was served as "<order> in the <mug>". If no
        order is waiting, or there's no clean mug, serve nothing and return
        None: the orders and mugs stay as they were.

        Mugs red, then blue washed; orders oat latte, mocha placed:
        serve_next() -> "oat latte in the blue mug"
        serve_next() -> "mocha in the red mug"
        serve_next() -> None

        Big-O: (write it here)
        """
        return None
