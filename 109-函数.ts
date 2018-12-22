(function () {
    let add: (x: number, y: number) => number = function (x, y) {
        return x + y
    }
    let sub = function (x: number, y: number): number {
        return x - y
    }

    function sum(...a: number[]) {
        let s: number = 0
        a.forEach((i) => s += i)
        return s
    }

    console.log(add(3, 4))
    console.log(sub(3, 4))
    console.log(sum(1, 2, 3))
})()
