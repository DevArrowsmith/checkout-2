const Checkout = require("./Checkout");
const prices = require("./lookups/prices");
const specialOffers = require("./lookups/specialOffers");

describe("Checkout", () => {

    let testCheckout;

    beforeEach(() => {
        testCheckout = new Checkout(prices, specialOffers);
    })

    it("Takes a product identifier and returns that product's value", () => {
        //Arrange
        const productIdentifier = "A";
        const valueOfProductA = 50

        //Act
        testCheckout.scan(productIdentifier);
        const result = testCheckout.checkout();

        //Assert
        expect(result).toBe(valueOfProductA);
    })

    it("Scans a product twice and returns the total price", () => {
        //Arrange
        const productIdentifier = "A";
        const expectedPrice = 100;

        //Act
        testCheckout.scan(productIdentifier);
        testCheckout.scan(productIdentifier);
        const result = testCheckout.checkout();

        //Assert
        expect(result).toBe(expectedPrice);
    })

    it("Scans different products and returns the total price", () => {
        //Arrange
        const productIdentifierA = "A";
        const productIdentifierB = "B";
        const productIdentifierC = "C";
        const productIdentifierD = "D";
        const expectedPrice = 115;

        //Act
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierB);
        testCheckout.scan(productIdentifierC);
        testCheckout.scan(productIdentifierD);
        const result = testCheckout.checkout();

        //Assert
        expect(result).toBe(expectedPrice);
    })

    it("Scans three of product A and returns the correct sale price", () => {
        //Arrange
        const productIdentifierA = "A";
        const expectedPrice = 130;

        //Act
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        const result = testCheckout.checkout();

        //Assert
        expect(result).toBe(expectedPrice);
    })

    it("Scans four of product A and returns the correct total price", () => {
        //Arrange
        const productIdentifierA = "A";
        const expectedPrice = 180;

        //Act
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        const result = testCheckout.checkout();

        //Assert
        expect(result).toBe(expectedPrice);
    })

    it("Scans seven of product A, five of product B, five of product C and five of product D, and returns the correct sale price.", () => {
        //Arrange
        const productIdentifierA = "A";
        const productIdentifierB = "B";
        const productIdentifierC = "C";
        const productIdentifierD = "D";
        const expectedPrice = 605;

        //Act
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);
        testCheckout.scan(productIdentifierA);

        testCheckout.scan(productIdentifierB);
        testCheckout.scan(productIdentifierB);
        testCheckout.scan(productIdentifierB);
        testCheckout.scan(productIdentifierB);
        testCheckout.scan(productIdentifierB);

        testCheckout.scan(productIdentifierC);
        testCheckout.scan(productIdentifierC);
        testCheckout.scan(productIdentifierC);
        testCheckout.scan(productIdentifierC);
        testCheckout.scan(productIdentifierC);

        testCheckout.scan(productIdentifierD);
        testCheckout.scan(productIdentifierD);
        testCheckout.scan(productIdentifierD);
        testCheckout.scan(productIdentifierD);
        testCheckout.scan(productIdentifierD);

        const result = testCheckout.checkout();

        //Assert
        expect(result).toBe(expectedPrice);
    })
});
