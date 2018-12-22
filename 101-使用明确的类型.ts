function add(a: number, b: number): number {
    return a + b
}

console.log(add(3, 3))

function concat(s: string, ss: string): string {
    return s + ss
}

console.log(concat("wei", "yinfu"))

function sum(a: Array<number>): number {
    let s: number = 0.0;
    for (let i of a) {
        s += i
    }
    return s
}

console.log(sum([1, 2, 3]))

console.log(`${concat('hello', 'world')}`)

let x: [string, number]
x = ['weidiao', 25]//x=[25,'weidiao']会报错
console.log(x)