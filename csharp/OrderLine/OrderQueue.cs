namespace OrderLine;

// One order in a line, for building the queue as a linked list. You don't
// have to use it: a front index into an array works too.
public class OrderNode
{
    public string Order;
    public OrderNode? Next;

    public OrderNode(string order)
    {
        Order = order;
    }
}

// The line of orders: first in, first out. Build it so every method is
// O(1): a linked list with a front and a back, or an array with a front
// index. Not a List<string> emptied with RemoveAt(0), which is O(n), and
// not C#'s own Queue<T>.
public class OrderQueue
{

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
        // Your code here.
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
        return null;
    }

    /*
     * Return the order at the front without removing it, or null if no
     * orders are waiting.
     *
     * Big-O: (write it here)
     */
    public string? Peek()
    {
        return null;
    }
}
