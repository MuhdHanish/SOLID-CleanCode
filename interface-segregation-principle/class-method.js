class Entity{
    constructor(name, health, attackDamage) {
        this.name = name;
        this.health = health;
        this.attackDamage = attackDamage;
    }
    move() {
        console.log(`${this.name} moved`);
    }
    attack(targetEntity) {
        console.log(`${this.name} attacked -> ${targetEntity.name} for ${this.attackDamage} damage`);
        targetEntity.takeDamage(this.attackDamage);
    }
    takeDamage(amount) {
        this.health -= amount;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
}

class Charecter extends Entity{

}

class Wall extends Entity{
    constructor(name, health) {
        super(name, health, 0);
    }
    move() {
        return null;
    }
    attack() {
        return null;
    }
}

class Turret extends Entity{
    constructor(name, attackDamage) {
        super(name, -1, attackDamage);
    }
    move() {
        return null;
    }
    takeDamage() {
        return null;
    }
}


const turret = new Turret("Turret", 5);
const charecter = new Charecter("Charecter", 100, 3);
const wall = new Wall('Wall', 200);

turret.attack(charecter);
charecter.move();
charecter.attack(wall);

// In this case the wall and turret dont want the ath move method, functions have each depended use.