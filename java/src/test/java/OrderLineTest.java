import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

import org.junit.jupiter.api.Test;

// The tests for the order line. You don't need to change this file.
// Each message says what was expected, so a failing test tells you what to look at.
class OrderLineTest {
    @Test
    void theQueueIsFirstInFirstOut() {
        OrderQueue line = new OrderQueue();
        line.enqueue("oat latte");
        line.enqueue("cold brew");
        line.enqueue("chai tea");
        assertEquals(3, line.count(), "Not yet: three orders are waiting.");
        assertEquals("oat latte", line.dequeue(), "Not yet: the first order placed is the first served.");
        assertEquals("cold brew", line.dequeue(), "Not yet: cold brew was second in line.");
        assertEquals("chai tea", line.dequeue(), "Not yet: chai tea was last in line.");
        assertEquals(0, line.count(), "Not yet: the line is empty now.");
    }

    @Test
    void peekLooksWithoutServing() {
        OrderQueue line = new OrderQueue();
        line.enqueue("oat latte");
        line.enqueue("cold brew");
        assertEquals("oat latte", line.peek(), "Not yet: peek shows the order at the front.");
        assertEquals(2, line.count(), "Not yet: peek doesn't remove anything.");
        line.dequeue();
        line.dequeue();
        assertNull(line.peek(), "Not yet: an empty line has nothing to peek at.");
        assertNull(line.dequeue(), "Not yet: an empty line has nothing to serve.");
    }

    @Test
    void theQueueWorksAfterEmptyingAndRefilling() {
        OrderQueue line = new OrderQueue();
        line.enqueue("oat latte");
        line.dequeue();
        line.enqueue("cold brew");
        line.enqueue("chai tea");
        assertEquals("cold brew", line.dequeue(), "Not yet: after the line empties, the next order placed is at the front.");
        assertEquals("chai tea", line.dequeue(), "Not yet: chai tea follows cold brew. Is the back of the line reset when the line empties?");
    }

    @Test
    void theStackIsLastInFirstOut() {
        CupStack mugs = new CupStack();
        mugs.push("red mug");
        mugs.push("blue mug");
        mugs.push("white mug");
        assertEquals(3, mugs.count(), "Not yet: three mugs were pushed.");
        assertEquals("white mug", mugs.peek(), "Not yet: the last mug pushed is on top.");
        assertEquals("white mug", mugs.pop(), "Not yet: pop takes the top mug off.");
        assertEquals("blue mug", mugs.pop(), "Not yet: blue mug is next.");
        assertEquals("red mug", mugs.pop(), "Not yet: the first mug pushed comes off last.");
        assertNull(mugs.pop(), "Not yet: an empty stack has nothing to pop.");
        assertNull(mugs.peek(), "Not yet: an empty stack has nothing on top.");
    }

    @Test
    void theShopServesTheFrontOrderInTheTopMug() {
        CoffeeShop shop = new CoffeeShop();
        shop.washMug("red mug");
        shop.washMug("blue mug");
        shop.placeOrder("oat latte");
        shop.placeOrder("mocha");
        assertEquals("oat latte in the blue mug", shop.serveNext(), "Not yet: the first order goes in the mug on top, the last one washed.");
        assertEquals("mocha in the red mug", shop.serveNext(), "Not yet: the next order gets the next mug down.");
        assertNull(shop.serveNext(), "Not yet: with no orders and no mugs left, nothing is served.");
    }

    @Test
    void withNoCleanMugTheOrderWaits() {
        CoffeeShop shop = new CoffeeShop();
        shop.placeOrder("chai tea");
        assertNull(shop.serveNext(), "Not yet: with no clean mug, nothing is served.");
        assertEquals(1, shop.ordersWaiting(), "Not yet: the order keeps its place in line while it waits for a mug.");
        shop.washMug("green mug");
        assertEquals("chai tea in the green mug", shop.serveNext(), "Not yet: once a mug is washed, the waiting order is served.");
    }

    @Test
    void withNoOrderTheMugsStay() {
        CoffeeShop shop = new CoffeeShop();
        shop.washMug("red mug");
        assertNull(shop.serveNext(), "Not yet: with no order, nothing is served.");
        assertEquals(1, shop.mugsLeft(), "Not yet: an unused mug stays on the stack.");
        shop.placeOrder("cold brew");
        assertEquals("cold brew in the red mug", shop.serveNext(), "Not yet: the new order gets the mug that was waiting.");
    }

    @Test
    void rushHour() {
        CoffeeShop shop = new CoffeeShop();
        for (int i = 0; i < 10000; i++) {
            shop.washMug("mug " + i);
            shop.placeOrder("order " + i);
        }
        assertEquals("order 0 in the mug 9999", shop.serveNext(), "Not yet: the first order placed gets the last mug washed.");
        String last = null;
        for (int i = 1; i < 10000; i++) {
            last = shop.serveNext();
        }
        assertEquals("order 9999 in the mug 0", last, "Not yet: the last order placed gets the first mug washed.");
        assertEquals(0, shop.ordersWaiting(), "Not yet: every order was served.");
        assertEquals(0, shop.mugsLeft(), "Not yet: every mug was used.");
    }
}
