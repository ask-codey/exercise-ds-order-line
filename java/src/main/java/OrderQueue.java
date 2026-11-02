import java.util.ArrayList;
import java.util.List;

// The line of orders: first in, first out. This is the queue the shop runs
// today. It works, and it's why the order screen freezes at rush hour (the
// ticket in README.md). Make enqueue, dequeue and peek fast, keeping their
// names and what they return: the tests and CoffeeShop call them.
public class OrderQueue {
    private final List<String> orders = new ArrayList<>();
    private int count;

    // How many orders are waiting.
    public int count() {
        return count;
    }

    /*
     * Add an order at the back of the line.
     *
     * enqueue("oat latte"), enqueue("cold brew") -> the line is oat latte, cold brew
     *
     * Big-O: (write it here)
     */
    public void enqueue(String order) {
        orders.add(order);
        count++;
    }

    /*
     * Remove the order at the front of the line and return it, or return
     * null if no orders are waiting.
     *
     * With oat latte, cold brew: dequeue() -> "oat latte", and the line is cold brew
     *
     * Big-O: (write it here)
     */
    public String dequeue() {
        if (orders.isEmpty()) {
            return null;
        }
        count--;
        return orders.remove(0);
    }

    /*
     * Return the order at the front without removing it, or null if no
     * orders are waiting.
     *
     * Big-O: (write it here)
     */
    public String peek() {
        return orders.isEmpty() ? null : orders.get(0);
    }
}
