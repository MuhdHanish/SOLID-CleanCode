class Bird {
    fly() {
        console.log('Bird is flying');
    }
}

class Sparrow extends Bird {
    fly() {
        console.log('Sparrow is flying');
    }
}

class Ostrich extends Bird {
    fly() {
        console.log('Ostrich cannot fly');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const sparrow = new Sparrow();
const ostrich = new Ostrich();

makeBirdFly(sparrow); 
makeBirdFly(ostrich); 
