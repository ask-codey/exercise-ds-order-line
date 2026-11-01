// The line of orders: first in, first out. Build it so every method is
// O(1): a linked list with a front and a back, or an array with a front
// index. Not an ArrayList emptied with remove(0), which is O(n), and not
// Java's own ArrayDeque or LinkedList.
public class OrderQueue {
    // One order in a line, for building the queue as a linked list. You
    // don't have to use it: a front index into an array works too.
    static class OrderNode {
        String order;
        OrderNode next;

        OrderNode(String order) {
            this.order = order;
        }
    }

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
    public String dequeue() {
        return null;
    }

    /*
     * Return the order at the front without removing it, or null if no
     * orders are waiting.
     *
     * Big-O: (write it here)
     */
    public String peek() {
        return null;
    }
}
