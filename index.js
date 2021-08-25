class Checkout {
    constructor(prices, specialOffers) {
        this.prices = prices;
        this.specialOffers = specialOffers;
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
            
            if (this.specialOffers[productIdentifier]) {
                
                const specialOfferUnits = Math.floor(this.basket[productIdentifier] / this.specialOffers[productIdentifier].numberInOffer);

                const specialOfferPrice = specialOfferUnits * this.specialOffers[productIdentifier].priceOfOffer;

                const singleUnits = this.basket[productIdentifier] - (specialOfferUnits * this.specialOffers[productIdentifier].numberInOffer);
                const singleUnitsPrice = singleUnits * this.prices[productIdentifier];

                totalPrice += (singleUnitsPrice + specialOfferPrice);
            };

            if (!this.specialOffers[productIdentifier]) {
                totalPrice += this.basket[productIdentifier] * this.prices[productIdentifier];
            };
        };
        return totalPrice;
    }
};

module.exports = Checkout;
