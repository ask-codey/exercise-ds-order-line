# The tests for the order line. You don't need to change this file.
# Each message says what was expected, so a failing test tells you what to look at.
from order_line import CoffeeShop, CupStack, OrderQueue


def test_the_queue_is_first_in_first_out():
    line = OrderQueue()
    line.enqueue("oat latte")
    line.enqueue("cold brew")
    line.enqueue("chai tea")
    assert line.count == 3, "Not yet: three orders are waiting."
    assert line.dequeue() == "oat latte", "Not yet: the first order placed is the first served."
    assert line.dequeue() == "cold brew", "Not yet: cold brew was second in line."
    assert line.dequeue() == "chai tea", "Not yet: chai tea was last in line."
    assert line.count == 0, "Not yet: the line is empty now."


def test_peek_looks_without_serving():
    line = OrderQueue()
    line.enqueue("oat latte")
    line.enqueue("cold brew")
    assert line.peek() == "oat latte", "Not yet: peek shows the order at the front."
    assert line.count == 2, "Not yet: peek doesn't remove anything."
    line.dequeue()
    line.dequeue()
    assert line.peek() is None, "Not yet: an empty line has nothing to peek at."
    assert line.dequeue() is None, "Not yet: an empty line has nothing to serve."


def test_the_queue_works_after_emptying_and_refilling():
    line = OrderQueue()
    line.enqueue("oat latte")
    line.dequeue()
    line.enqueue("cold brew")
    line.enqueue("chai tea")
    assert line.dequeue() == "cold brew", "Not yet: after the line empties, the next order placed is at the front."
    assert line.dequeue() == "chai tea", "Not yet: chai tea follows cold brew. Is the back of the line reset when the line empties?"


def test_the_stack_is_last_in_first_out():
    mugs = CupStack()
    mugs.push("red mug")
    mugs.push("blue mug")
    mugs.push("white mug")
    assert mugs.count == 3, "Not yet: three mugs were pushed."
    assert mugs.peek() == "white mug", "Not yet: the last mug pushed is on top."
    assert mugs.pop() == "white mug", "Not yet: pop takes the top mug off."
    assert mugs.pop() == "blue mug", "Not yet: blue mug is next."
    assert mugs.pop() == "red mug", "Not yet: the first mug pushed comes off last."
    assert mugs.pop() is None, "Not yet: an empty stack has nothing to pop."
    assert mugs.peek() is None, "Not yet: an empty stack has nothing on top."


def test_the_shop_serves_the_front_order_in_the_top_mug():
    shop = CoffeeShop()
    shop.wash_mug("red mug")
    shop.wash_mug("blue mug")
    shop.place_order("oat latte")
    shop.place_order("mocha")
    assert shop.serve_next() == "oat latte in the blue mug", "Not yet: the first order goes in the mug on top, the last one washed."
    assert shop.serve_next() == "mocha in the red mug", "Not yet: the next order gets the next mug down."
    assert shop.serve_next() is None, "Not yet: with no orders and no mugs left, nothing is served."


def test_with_no_clean_mug_the_order_waits():
    shop = CoffeeShop()
    shop.place_order("chai tea")
    assert shop.serve_next() is None, "Not yet: with no clean mug, nothing is served."
    assert shop.orders_waiting == 1, "Not yet: the order keeps its place in line while it waits for a mug."
    shop.wash_mug("green mug")
    assert shop.serve_next() == "chai tea in the green mug", "Not yet: once a mug is washed, the waiting order is served."


def test_with_no_order_the_mugs_stay():
    shop = CoffeeShop()
    shop.wash_mug("red mug")
    assert shop.serve_next() is None, "Not yet: with no order, nothing is served."
    assert shop.mugs_left == 1, "Not yet: an unused mug stays on the stack."
    shop.place_order("cold brew")
    assert shop.serve_next() == "cold brew in the red mug", "Not yet: the new order gets the mug that was waiting."


def test_rush_hour():
    shop = CoffeeShop()
    for i in range(10000):
        shop.wash_mug(f"mug {i}")
        shop.place_order(f"order {i}")
    assert shop.serve_next() == "order 0 in the mug 9999", "Not yet: the first order placed gets the last mug washed."
    last = None
    for i in range(1, 10000):
        last = shop.serve_next()
    assert last == "order 9999 in the mug 0", "Not yet: the last order placed gets the first mug washed."
    assert shop.orders_waiting == 0, "Not yet: every order was served."
    assert shop.mugs_left == 0, "Not yet: every mug was used."
