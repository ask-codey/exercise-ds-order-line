// The coffee shop: a line of orders and a stack of clean mugs. Everything
// here is done except serveNext.
public class CoffeeShop {
    private OrderQueue orders = new OrderQueue();
    private CupStack mugs = new CupStack();

    public int ordersWaiting() {
        return orders.count();
    }

    public int mugsLeft() {
        return mugs.count();
    }

    public void washMug(String mug) {
        mugs.push(mug);
    }

    public void placeOrder(String order) {
        orders.enqueue(order);
    }

    /*
     * Serve the order at the front of the line in the clean mug on top of
     * the stack, and return what was served as "<order> in the <mug>". If no
     * order is waiting, or there's no clean mug, serve nothing and return
     * null: the orders and mugs stay as they were.
     *
     * Mugs red, then blue washed; orders oat latte, mocha placed:
     * serveNext() -> "oat latte in the blue mug"
     * serveNext() -> "mocha in the red mug"
     * serveNext() -> null
     *
     * Big-O: (write it here)
     */
    public String serveNext() {
        return null;
    }
}
