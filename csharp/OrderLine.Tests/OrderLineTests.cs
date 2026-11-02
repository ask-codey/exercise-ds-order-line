using System.Diagnostics;
using OrderLine;

namespace OrderLine.Tests;

// The tests for the order line. You don't need to change this file.
// Each message says what was expected, so a failing test tells you what to look at.

[TestClass]
public class OrderLineTests
{
    [TestMethod]
    public void TheQueueIsFirstInFirstOut()
    {
        OrderQueue line = new OrderQueue();
        line.Enqueue("oat latte");
        line.Enqueue("cold brew");
        line.Enqueue("chai tea");
        Assert.AreEqual(3, line.Count, "Not yet: three orders are waiting.");
        Assert.AreEqual("oat latte", line.Dequeue(), "Not yet: the first order placed is the first served.");
        Assert.AreEqual("cold brew", line.Dequeue(), "Not yet: cold brew was second in line.");
        Assert.AreEqual("chai tea", line.Dequeue(), "Not yet: chai tea was last in line.");
        Assert.AreEqual(0, line.Count, "Not yet: the line is empty now.");
    }

    [TestMethod]
    public void PeekLooksWithoutServing()
    {
        OrderQueue line = new OrderQueue();
        line.Enqueue("oat latte");
        line.Enqueue("cold brew");
        Assert.AreEqual("oat latte", line.Peek(), "Not yet: Peek shows the order at the front.");
        Assert.AreEqual(2, line.Count, "Not yet: Peek doesn't remove anything.");
        line.Dequeue();
        line.Dequeue();
        Assert.IsNull(line.Peek(), "Not yet: an empty line has nothing to peek at.");
        Assert.IsNull(line.Dequeue(), "Not yet: an empty line has nothing to serve.");
    }

    [TestMethod]
    public void TheQueueWorksAfterEmptyingAndRefilling()
    {
        OrderQueue line = new OrderQueue();
        line.Enqueue("oat latte");
        line.Dequeue();
        line.Enqueue("cold brew");
        line.Enqueue("chai tea");
        Assert.AreEqual("cold brew", line.Dequeue(), "Not yet: after the line empties, the next order placed is at the front.");
        Assert.AreEqual("chai tea", line.Dequeue(), "Not yet: chai tea follows cold brew. Is the back of the line reset when the line empties?");
    }

    [TestMethod]
    public void TheStackIsLastInFirstOut()
    {
        CupStack mugs = new CupStack();
        mugs.Push("red mug");
        mugs.Push("blue mug");
        mugs.Push("white mug");
        Assert.AreEqual(3, mugs.Count, "Not yet: three mugs were pushed.");
        Assert.AreEqual("white mug", mugs.Peek(), "Not yet: the last mug pushed is on top.");
        Assert.AreEqual("white mug", mugs.Pop(), "Not yet: Pop takes the top mug off.");
        Assert.AreEqual("blue mug", mugs.Pop(), "Not yet: blue mug is next.");
        Assert.AreEqual("red mug", mugs.Pop(), "Not yet: the first mug pushed comes off last.");
        Assert.IsNull(mugs.Pop(), "Not yet: an empty stack has nothing to pop.");
        Assert.IsNull(mugs.Peek(), "Not yet: an empty stack has nothing on top.");
    }

    [TestMethod]
    public void TheShopServesTheFrontOrderInTheTopMug()
    {
        CoffeeShop shop = new CoffeeShop();
        shop.WashMug("red mug");
        shop.WashMug("blue mug");
        shop.PlaceOrder("oat latte");
        shop.PlaceOrder("mocha");
        Assert.AreEqual("oat latte in the blue mug", shop.ServeNext(), "Not yet: the first order goes in the mug on top, the last one washed.");
        Assert.AreEqual("mocha in the red mug", shop.ServeNext(), "Not yet: the next order gets the next mug down.");
        Assert.IsNull(shop.ServeNext(), "Not yet: with no orders and no mugs left, nothing is served.");
    }

    [TestMethod]
    public void WithNoCleanMugTheOrderWaits()
    {
        CoffeeShop shop = new CoffeeShop();
        shop.PlaceOrder("chai tea");
        Assert.IsNull(shop.ServeNext(), "Not yet: with no clean mug, nothing is served.");
        Assert.AreEqual(1, shop.OrdersWaiting, "Not yet: the order keeps its place in line while it waits for a mug.");
        shop.WashMug("green mug");
        Assert.AreEqual("chai tea in the green mug", shop.ServeNext(), "Not yet: once a mug is washed, the waiting order is served.");
    }

    [TestMethod]
    public void WithNoOrderTheMugsStay()
    {
        CoffeeShop shop = new CoffeeShop();
        shop.WashMug("red mug");
        Assert.IsNull(shop.ServeNext(), "Not yet: with no order, nothing is served.");
        Assert.AreEqual(1, shop.MugsLeft, "Not yet: an unused mug stays on the stack.");
        shop.PlaceOrder("cold brew");
        Assert.AreEqual("cold brew in the red mug", shop.ServeNext(), "Not yet: the new order gets the mug that was waiting.");
    }

    [TestMethod]
    public void TheRushHourStaysFast()
    {
        CoffeeShop shop = new CoffeeShop();
        Stopwatch watch = Stopwatch.StartNew();
        for (int i = 0; i < 400000; i++)
        {
            shop.WashMug("mug " + i);
            shop.PlaceOrder("order " + i);
        }
        Assert.AreEqual("order 0 in the mug 399999", shop.ServeNext(), "Not yet: the first order placed gets the last mug washed.");
        string? last = null;
        for (int i = 1; i < 400000; i++)
        {
            last = shop.ServeNext();
            if (i % 10000 == 0 && watch.Elapsed.TotalSeconds > 2)
            {
                break;
            }
        }
        watch.Stop();
        Assert.IsTrue(watch.Elapsed.TotalSeconds < 2, "Not yet: the rush of 400,000 orders ran past 2 seconds: it was stopped at " + watch.Elapsed.TotalSeconds.ToString("0.0") + " seconds, with " + shop.OrdersWaiting + " orders still waiting. When each order joins and leaves the line in one step, the whole rush takes well under one second.");
        Assert.AreEqual("order 399999 in the mug 0", last, "Not yet: the last order placed gets the first mug washed.");
        Assert.AreEqual(0, shop.OrdersWaiting, "Not yet: every order was served.");
        Assert.AreEqual(0, shop.MugsLeft, "Not yet: every mug was used.");
    }
}
