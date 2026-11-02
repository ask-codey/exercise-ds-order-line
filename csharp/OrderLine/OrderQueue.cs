namespace OrderLine;

// The line of orders: first in, first out. This is the queue the shop runs
// today. It works, and it's why the order screen freezes at rush hour (the
// ticket in README.md). Make Enqueue, Dequeue and Peek fast, keeping their
// names and what they return: the tests and CoffeeShop call them.
public class OrderQueue
{
    private readonly List<string> orders = new List<string>();

    // How many orders are waiting.
    public int Count { get; private set; }

    /*
     * Add an order at the back of the line.
     *
     * Enqueue("oat latte"), Enqueue("cold brew") -> the line is oat latte, cold brew
     *
     * Big-O: (write it here)
     */
    public void Enqueue(string order)
    {
        orders.Add(order);
        Count++;
    }

    /*
     * Remove the order at the front of the line and return it, or return
     * null if no orders are waiting.
     *
     * With oat latte, cold brew: Dequeue() -> "oat latte", and the line is cold brew
     *
     * Big-O: (write it here)
     */
    public string? Dequeue()
    {
        if (orders.Count == 0)
        {
            return null;
        }
        string order = orders[0];
        orders.RemoveAt(0);
        Count--;
        return order;
    }

    /*
     * Return the order at the front without removing it, or null if no
     * orders are waiting.
     *
     * Big-O: (write it here)
     */
    public string? Peek()
    {
        return orders.Count == 0 ? null : orders[0];
    }
}
