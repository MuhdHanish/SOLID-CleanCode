class Store {
    constructor(user) {
        // this.stripe = new Stripe(user);
        this.user = user;
        this.paypal = new Paypal();
    }
    purchaseBike(quantity) {
        this.paypal.makePayment(this.user, 200 * quantity);
        // this.paypal.makePayment(user,200 * quantity * 100);
    }
    purchaseHelment(quantity) {
        this.paypal.makePayment(this.user, 15 * quantity);
        // this.stripe.makePayment(15 * quantity * 100);
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

class Paypal{
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of $${amountInDollars} with Paypal`);
    }
}

const store = new Store("Jhon");
store.purchaseBike(2);
store.purchaseHelment(2);

// In this case the store and payment integration directly connected and depended, it make more truble some time.