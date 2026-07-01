# ShopCart — Bug Report

## About the App

**ShopCart** is a product browsing and cart app. Users can:

- **Browse products** — 6 products in a grid, each with a name, category, and price
- **View product detail** — click anywhere on a product card (not the Add button) to see its description in a panel above the grid
- **Add to cart** — use the +/- buttons to set a quantity, then click Add on any product card
- **Remove items** — click the trash icon on any cart item to remove it
- **See cart count** — the header badge shows the total number of items currently in the cart
- **See order total** — the cart sidebar shows each item's line total and an order summary at the bottom

---

## Your Task

Three bugs have been reported. For each one:

1. Reproduce it in the browser following the steps described
2. Use DevTools to trace the data flow and identify the root cause
3. Fix the bug
4. Document your investigation in the Google Doc

---

**Bug 1.** "I click Add to Cart on a product and a completely different product appears in my cart. It doesn't happen every time — only when I've been clicking between products quickly."

*To reproduce:* Click any product card to view its detail. Then immediately click Add on a different product. Check the cart.

---

**Bug 2.** "The cart item count in the header goes up when I add things, but when I remove items from the cart, the count never goes back down."

*To reproduce:* Add any product. Note the header count. Click the trash icon to remove it. The cart empties but the count stays.

---

**Bug 3.** "When I add multiple of the same item, the order total is wrong — it looks like it's only charging me for one, no matter how many I add."

*To reproduce:* Use the + button to set quantity to 3 on any product, then click Add. Compare the line total shown in the cart row vs the Total in the order summary.
