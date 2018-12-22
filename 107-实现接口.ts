(function () {
    interface Animal {
        shout();
    }

    class Dog implements Animal {
        shout() {
            console.log("汪汪汪")
        }
    }

    class Cat implements Animal {
        shout() {
            console.log("喵喵喵")
        }
    }

    for (let i of [new Dog(), new Cat()]) {
        i.shout()
    }
})()