class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    shout() {
    }
}

class Dog extends Animal {
    name: string

    constructor(name: string) {
        super(name)
    }

    shout() {
        console.log("汪汪汪，我叫" + this.name)
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name)
    }

    shout() {
        console.log("喵喵喵，我叫" + this.name)
    }
}

var zoo = [new Dog("dogi"), new Cat("cati")];
zoo.forEach((ani: Animal) => {
        ani.shout()
    }
)