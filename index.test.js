const Checkout = require("./index");
const prices = require("./prices");

describe("Checkout", () => {

    let testCheckout;

    beforeEach(() => {
        testCheckout = new Checkout(prices);
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
});
