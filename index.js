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

            let quantityOfProduct = this.basket[productIdentifier];
            
            if (this.specialOffers[productIdentifier]) {
                
                const specialOfferUnits = Math.floor(quantityOfProduct / this.specialOffers[productIdentifier].numberInOffer);

                const specialOfferPrice = specialOfferUnits * this.specialOffers[productIdentifier].priceOfOffer;

                totalPrice += specialOfferPrice;

                quantityOfProduct -= specialOfferUnits * this.specialOffers[productIdentifier].numberInOffer;
            };

            totalPrice += quantityOfProduct * this.prices[productIdentifier];
        };
        return totalPrice;
    }
};

module.exports = Checkout;
