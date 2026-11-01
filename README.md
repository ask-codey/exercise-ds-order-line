# Exercise: The Coffee Shop Order Line

Exercise code for the lesson **Exercise: The Coffee Shop Order Line** in the course *Data Structures and Big-O, Demystified* on [ask-codey.com](https://www.ask-codey.com).

A coffee shop serves orders in the order they're placed, in clean mugs taken from the top of a stack behind the counter. You'll build both structures and the counter that joins them:

- `OrderQueue`: the line of orders, first in, first out. Finish `enqueue`, `dequeue` and `peek` (`Enqueue`, `Dequeue` and `Peek` in C#), each in O(1).
- `CupStack`: the clean mugs, last in, first out. Finish `push`, `pop` and `peek` (`Push`, `Pop`, `Peek`).
- `CoffeeShop`: everything is done except `serveNext` (`ServeNext`, `serve_next` in Python), which serves the front order in the top mug.

## Pick your language

The same exercise is here in five languages. Work in the folder for the language you set up; you only need one.

| Folder | Your code | The tests |
|---|---|---|
| `csharp/` | `OrderLine/OrderQueue.cs`, `OrderLine/CupStack.cs`, `OrderLine/CoffeeShop.cs` | `OrderLine.Tests/OrderLineTests.cs` |
| `java/` | `src/main/java/OrderQueue.java`, `CupStack.java`, `CoffeeShop.java` | `src/test/java/OrderLineTest.java` |
| `python/` | `order_line.py` | `test_order_line.py` |
| `javascript/` | `order-line.js` | `order-line.test.js` |
| `typescript/` | `order-line.ts` | `order-line.test.ts` |

Each method does nothing, or returns null (`None` in Python), for now. The comment above it says what it should do, with examples. Replace its body with your own code, and write its Big-O on its **Big-O:** line.

Build the queue yourself, so that every operation is O(1): a linked list with a front and a back (an `OrderNode` class is there if you want it), or an array with a front index. Removing from the front of a list (`RemoveAt(0)`, `remove(0)`, `pop(0)`, `shift()`) is O(n), and your language's own queue would do the work for you.

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

At first every test fails: that is expected. Each method you finish turns its tests green. A failing test's message starts with **Not yet:** and says what it expected.

## Tips

- **Start with the stack.** It's a list used only at its end: push adds there, pop and peek read there.
- **Then the queue.** Enqueue couples a new node behind the back; dequeue moves the front along. When the line becomes empty, the back must become empty too, or the next order is lost.
- **`serveNext` is three lines of real work.** Check that there's an order and a mug; if so, dequeue one and pop the other. If either is missing, change nothing.
- **Rush hour** puts 10,000 orders through. With an O(1) queue it takes a blink.

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
