# Checkout with Special Offers 🛍️🛒

## Introduction

This was an exercise in test driven development using JavaScript, performed as part of my Foundation Developer onboarding at thinkmoney.

---

## Remit

Implement the code for a checkout system that handles pricing schemes such as "pineapples cost 50, three pineapples cost 130."

Implement the code for a supermarket checkout that calculates the total price of a number of items. In a normal supermarket, things are identified using Stock Keeping Units, or SKUs. In our store, we’ll use individual letters of the alphabet (A, B, C, and so on). Our goods are priced individually. In addition, some items are multi-priced: buy n of them, and they’ll cost you y pence. For example, item A might cost 50 individually, but this week we have a special offer: buy three As and they’ll cost you 130. In fact the prices are:

| SKU Unit | Unit Price | Special Offer |
|-|-|--|
| A        | 50         | 3 for 130     |
| B        | 30         | 2 for 45      |
| C        | 20         |               |
| D        | 15         |               |


The checkout accepts items in any order, so that if we scan a B, an A, and another B, we’ll recognize the two Bs and price them at 45 (for a total price so far of 95). The pricing changes frequently, so pricing should be independent of the checkout.

---

## Approach

The following approaches were used:
- Test driven development (TDD): The code was built incrementally, one small feature at a time. For each small feature, a test was first written, then a solution was implemented.
- Jest was used as the testing suite.
- Red, Green, Refactor: Each test initially failed (red). A solution was written so that the test passed (green). The solution was then refactored. As new tests were written previous ones sometimes became obsolete or stopped working; red/green/refactor was then performed on these. Once all tests were passing again, work began on the next feature.
- Arrange, Act, Assert (AAA): Each test was written as three parts, in this order:
  - Arrange: Data and other components required for the test were set up. Things like data to be passed in, expected results.
  - Act: The thing to be tested (usually a function) was invoked. The output was stored in a variable.
  - Assert: An assertion was written: expect(asserion)toBe(result), for example.
  - Setup and Teardown: Where appropriate, automated setup was used to arrange thigs before each test. BeforeEach was used to create a fresh instance of the checkout class before each test ran.

---