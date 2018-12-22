/**
 * 使用any可以指代任意类型
 * */

function tos(a: any[]) {
    let s: string = ''
    for (let i of a) {
        s = s + " " + i
    }
    return s
}

console.log(tos(['one', 1, 2]))

function 解构数组() {
    //解构数组
    let [x, y] = ['one', 'two']
    console.log(x + " " + y)
}

解构数组()

function 剩余变量() {
    let [x, ...y] = ['one', 'two', 'three', 'four']
    console.log(x)
    console.log(y)
}

剩余变量()

function 对象解构({name, age}: { name: string, age: number }) {
    console.log(name, age)
}

对象解构({name: "weidiao", age: 26})