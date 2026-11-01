using OrderLine;

// Tries your coffee shop. Run it with: dotnet run --project OrderLine
CoffeeShop shop = new CoffeeShop();
foreach (string mug in new string[] { "red mug", "blue mug", "white mug" })
{
    shop.WashMug(mug);
}
Console.WriteLine("Washed: red mug, blue mug, white mug");
foreach (string order in new string[] { "oat latte", "cold brew", "chai tea", "mocha" })
{
    shop.PlaceOrder(order);
}
Console.WriteLine("Orders: oat latte, cold brew, chai tea, mocha");
for (int i = 0; i < 4; i++)
{
    string? served = shop.ServeNext();
    Console.WriteLine(served == null ? "No clean mug: " + shop.OrdersWaiting + " order waiting" : "Served: " + served);
}
shop.WashMug("green mug");
Console.WriteLine("Washed: green mug");
Console.WriteLine("Served: " + shop.ServeNext());
Console.WriteLine("Orders waiting: " + shop.OrdersWaiting + ", mugs left: " + shop.MugsLeft);
