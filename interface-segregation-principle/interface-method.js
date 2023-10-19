// In this case we break all the function in to multipule smaller interfaces.

class Entity {
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDamage = attackDamage;
    }
}

const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
}

const attacker = {
    attack(targetEntity) {
        console.log(`${this.name} attacked -> ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
}

const hasHealth = {
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

class Charecter extends Entity{
    constructor(name,health,attackDamage) {
        super(name);
        this.health = health;
        this.attackDamage = attackDamage;
    }
}

Object.assign(Charecter.prototype, mover);
Object.assign(Charecter.prototype, attacker);
Object.assign(Charecter.prototype, hasHealth);

class Wall extends Entity{
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}

Object.assign(Wall.prototype, hasHealth);

class Turret extends Entity{
    constructor(name, attackDamage) {
        super(name);
        this.attackDamage = attackDamage;
    }
}

Object.assign(Turret.prototype, attacker);

const turret = new Turret("Turret", 5);
const charecter = new Charecter("Charecter", 100, 3);
const wall = new Wall('Wall', 200);

turret.attack(charecter);
charecter.move();
charecter.attack(wall);
