# Exercise: The Coffee Shop Order Line

Exercise code for the lesson **Exercise: The Coffee Shop Order Line** in the course *Data Structures and Big-O, Demystified* on [ask-codey.com](https://www.ask-codey.com).

## The ticket

> **From:** the owner, the coffee shop
>
> The order screen freezes every morning. From 8 to 9 a.m., orders arrive faster than we can make them, and the line on the screen gets long. The screen's line is a list: new orders go on the end, and the barista's screen takes the order at the front, index 0. It works on a quiet afternoon. At rush hour, each "next order" takes longer than the one before.
>
> 1. **First come, first served,** always, however long the line.
> 2. **Joining and serving each take the same moment** with 3 orders waiting or 400,000. A rush of 400,000 orders goes through in under 2 seconds.
> 3. **Each order goes in the clean mug on top** of the pile behind the counter: the last one washed.
> 4. **No order is lost** while it waits for a mug, and no mug while it waits for an order.

The code that's there has three classes:

- `OrderQueue`: the line of orders the shop runs today. It works, and it's the reason for the ticket. Make `enqueue`, `dequeue` and `peek` (`Enqueue`, `Dequeue` and `Peek` in C#) fast, keeping their names and what they return.
- `CupStack`: the clean mugs, kept in your language's list. Finish `push`, `pop` and `peek` (`Push`, `Pop`, `Peek`).
- `CoffeeShop`: everything is done except `serveNext` (`ServeNext`, `serve_next` in Python), which serves the front order in the top mug.

Eight tests check it, ending with the rush: 400,000 orders, served in order, in under 2 seconds.

## Pick your language

The same exercise is here in five languages. Work in the folder for the language you set up; you only need one.

| Folder | Your code | The tests |
|---|---|---|
| `csharp/` | `OrderLine/OrderQueue.cs`, `OrderLine/CupStack.cs`, `OrderLine/CoffeeShop.cs` | `OrderLine.Tests/OrderLineTests.cs` |
| `java/` | `src/main/java/OrderQueue.java`, `CupStack.java`, `CoffeeShop.java` | `src/test/java/OrderLineTest.java` |
| `python/` | `order_line.py` | `test_order_line.py` |
| `javascript/` | `order-line.js` | `order-line.test.js` |
| `typescript/` | `order-line.ts` | `order-line.test.ts` |

Each `CupStack` method and `serveNext` does nothing, or returns null (`None` in Python), for now; `OrderQueue`'s three methods work, slowly. The comment above each method says what it should do, with examples. Replace its body with your own code, and write its Big-O on its **Big-O:** line.

Make the faster line of orders yourself, with your own code: your language's ready-made line (`Queue<T>` in C#, `ArrayDeque` in Java, `collections.deque` in Python) would do the work for you.

Every folder also has a small demo program that runs the shop through a short morning. You don't need to change the tests or the demo.

## Run it and check your work

Open your language's folder in VS Code (**File > Open Folder**), then open its terminal (**Terminal > New Terminal**) and run these commands there.

**C#**

```bash
dotnet run --project OrderLine
dotnet test
```

**Java** (the Maven Wrapper downloads Maven the first time, so the first run takes a minute)

```bash
java src/main/java/Demo.java
./mvnw test
```

On Windows in PowerShell, write `.\mvnw test` instead of `./mvnw test`.

**Python** (once: make a virtual environment and install pytest into it)

```bash
python -m venv .venv
```

Then turn it on: `.venv\Scripts\Activate.ps1` in PowerShell on Windows, or `source .venv/bin/activate` on macOS (where the command is `python3`, not `python`). Then:

```bash
pip install -r requirements.txt
python demo.py
python -m pytest
```

**JavaScript**

```bash
node demo.js
npm test
```

**TypeScript** (once: `npm install`, which installs TypeScript)

```bash
node demo.ts
npm test
```

At first 5 of the 8 tests fail: that is expected. The 3 that pass check the line of orders, which works today; it is only slow. Each method you finish turns more tests green. A failing test's message starts with **Not yet:** and says what it expected.

<details>
<summary>Stuck?</summary>

- **Where to look:** the line of orders is what *First Come, First Served at Rush Hour: Queues* builds, a **queue** (first in, first out), on a linked list with a front and a back. The pile of mugs is *Undo the Last Thing First: Stacks*: a **stack** (last in, first out), the end of a list.
- **Why today's line is slow:** taking index 0 out of a list moves every order behind it one slot forward. Keep the methods, and replace what's inside them.
- **Start with the stack.** It's a list used only at its end: push adds there, pop and peek read there. Check for an empty stack first.
- **Then the line.** Make a small class for one order and the order behind it. Enqueue links a new one behind the back; dequeue moves the front along to the next one. When the line becomes empty, the back must become empty too, or the next order is linked behind one nobody can reach.
- **`serveNext` is three lines of real work.** Check that there's an order and a mug; if so, dequeue one and pop the other. If either is missing, change nothing.
- **At first, 3 tests already pass:** today's line is correct, only slow. The rush test stops once it passes 2 seconds and says how many orders were still waiting.

</details>

<details>
<summary>Why Should I Choose This?</summary>

Open this once your tests are green. The rush is 400,000 orders placed, then 400,000 served.

- **Today's list, served from index 0:** each serve moves every order behind it, O(n), about 80 billion moves for the rush. On the test's clock it was stopped at 2 to 4.5 seconds, with 320,000 to 390,000 orders still waiting.
- **The list the other way round, new orders put in at index 0 and served from the end:** serving is quick, but now every new order moves the whole line. The cost moves; it doesn't go away.
- **Never remove anything, and keep the number of the next order to serve:** both ends are O(1), but every order of the day stays in memory, served or not.
- **A line of linked orders with a front and a back:** joining and serving each change a reference or two, O(1), and the rush takes 0.1 to 0.6 seconds. The mugs need only one end, so the end of a list already is the right pile: O(1) push and pop.
- **What your language already has:** `Queue<T>` in C#, `ArrayDeque` in Java and `collections.deque` in Python are O(1) at both ends. JavaScript and TypeScript have none built in, which is why a line like yours is worth knowing how to build.

</details>

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
