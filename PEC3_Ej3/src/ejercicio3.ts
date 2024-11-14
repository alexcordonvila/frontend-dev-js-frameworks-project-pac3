abstract class Animal {
    static population: number = 0;
    constructor() {
        Animal.population++; //Incrementem la propietat estàtica population 
    }
    public abstract sound(): void; //Metode abstacte sense implementació
}

class Dog extends Animal {
    color: string;

    constructor(color:string){
        super();
        this.color = color;
    }
    sound(): void {
        console.log("WOW");
    }

    public iamadog() {
        console.log('yes, this is a dog');
    }
}

class Cat extends Animal {
    gender: string;
    
    constructor(gender:string) {
        super();
        this.gender = gender;
    }
    sound(): void {
        console.log("MEOW");
    }
    public iamacat() {
        console.log('yes, this is a cat');
    }
}

let animals: Animal[] = [];
animals.push(new Cat('male'));
animals.push(new Dog('white'));
animals.push(new Cat('female'));
animals.push(new Dog('black'));

for(let animal of animals){
    animal.sound();
    if (animal instanceof Dog) {
        animal.iamadog(); // Si és un gos
    } else if (animal instanceof Cat) {
        animal.iamacat(); // Si és un gat
    } else {
        console.log("Unknown animal type"); // Si no és ni un gat ni un gos
    }
}

console.log(Animal.population); //4