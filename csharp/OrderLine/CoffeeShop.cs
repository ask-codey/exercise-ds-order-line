namespace OrderLine;

// The coffee shop: a line of orders and a stack of clean mugs. Everything
// here is done except ServeNext.
public class CoffeeShop
{
    private OrderQueue orders = new OrderQueue();
    private CupStack mugs = new CupStack();

    public int OrdersWaiting => orders.Count;
    public int MugsLeft => mugs.Count;

    public void WashMug(string mug)
    {
        mugs.Push(mug);
    }

    public void PlaceOrder(string order)
    {
        orders.Enqueue(order);
    }

    /*
     * Serve the order at the front of the line in the clean mug on top of
     * the stack, and return what was served as "<order> in the <mug>". If no
     * order is waiting, or there's no clean mug, serve nothing and return
     * null: the orders and mugs stay as they were.
     *
     * Mugs red, then blue washed; orders oat latte, mocha placed:
     * ServeNext() -> "oat latte in the blue mug"
     * ServeNext() -> "mocha in the red mug"
     * ServeNext() -> null
     *
     * Big-O: (write it here)
     */
    public string? ServeNext()
    {
        return null;
    }
}
