class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }
    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }
    purchaseHelment(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

class StripePaymentProcessor{
    constructor(user) {
        this.stripe = new Stripe(user);
    }
    pay(amountInDollars) {
        this.stripe.makePayment(amountInDollars * 100);
    }
}

class Stripe{
    constructor(user) {
        this.user = user;
    }
    makePayment(amountInCents) {
        console.log(`${this.user} made payment of $${amountInCents/100} with with Stripe`)
    }
}

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }
    pay(amountInDollars) {
        this.paypal.makePayment(this.user, amountInDollars);
    }
}

class Paypal{
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

const store = new Store(new PaypalPaymentProcessor("Jhon"));
store.purchaseBike(2);
store.purchaseHelment(2);

// In this case the store not depended the integration so we only need to change the proccer when need and we can use the all methods of the processer.