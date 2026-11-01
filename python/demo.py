# Tries your coffee shop. Run it with: python demo.py
from order_line import CoffeeShop

shop = CoffeeShop()
for mug in ["red mug", "blue mug", "white mug"]:
    shop.wash_mug(mug)
print("Washed: red mug, blue mug, white mug")
for order in ["oat latte", "cold brew", "chai tea", "mocha"]:
    shop.place_order(order)
print("Orders: oat latte, cold brew, chai tea, mocha")
for i in range(4):
    served = shop.serve_next()
    print(f"No clean mug: {shop.orders_waiting} order waiting" if served is None else f"Served: {served}")
shop.wash_mug("green mug")
print("Washed: green mug")
print(f"Served: {shop.serve_next()}")
print(f"Orders waiting: {shop.orders_waiting}, mugs left: {shop.mugs_left}")
