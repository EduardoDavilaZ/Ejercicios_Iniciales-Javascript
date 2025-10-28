export class Personaje {
    name;
    energy;

    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }

    get status() {
        return '⭐'.repeat(this.energy);
    }

    set status(stars) {
        this.energy = stars;
    }
}
