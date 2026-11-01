// Tries your coffee shop. Run it with: java src/main/java/Demo.java
public class Demo {
    public static void main(String[] args) {
        CoffeeShop shop = new CoffeeShop();
        for (String mug : new String[] {"red mug", "blue mug", "white mug"}) {
            shop.washMug(mug);
        }
        System.out.println("Washed: red mug, blue mug, white mug");
        for (String order : new String[] {"oat latte", "cold brew", "chai tea", "mocha"}) {
            shop.placeOrder(order);
        }
        System.out.println("Orders: oat latte, cold brew, chai tea, mocha");
        for (int i = 0; i < 4; i++) {
            String served = shop.serveNext();
            System.out.println(served == null ? "No clean mug: " + shop.ordersWaiting() + " order waiting" : "Served: " + served);
        }
        shop.washMug("green mug");
        System.out.println("Washed: green mug");
        System.out.println("Served: " + shop.serveNext());
        System.out.println("Orders waiting: " + shop.ordersWaiting() + ", mugs left: " + shop.mugsLeft());
    }
}
