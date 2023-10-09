const logExceed = require("./logger");

class CaloriTracker {
    constructor(maxCalorie) {
        this.maxCalorie = maxCalorie;
        this.currentCalori = 0;
    }
    addCalorie(calorie) {
        this.currentCalori += calorie;
        if (this.currentCalori > this.maxCalorie) {
            logExceed("Max calories exceeded");
        }
    }
}

const tracker = new CaloriTracker(1000);

tracker.addCalorie(500);
tracker.addCalorie(501);