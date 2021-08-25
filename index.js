class Checkout {
    constructor(productIndex) {
        this.productIndex = productIndex;
        this.basket = {};
    }

    scan (productIdentifier) {
        this.basket[productIdentifier]
        ? this.basket[productIdentifier] += 1
        : this.basket[productIdentifier] = 1;
    }

    checkout () {
        let totalPrice = 0;
        for (const productIdentifier in this.basket) {
            totalPrice += this.productIndex[productIdentifier] * this.basket[productIdentifier];
        };
        return totalPrice;
    }
};

module.exports = Checkout;
