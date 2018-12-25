(function () {
    //布尔值
    let isDone: boolean = false;

//数字
    let decLiteral: number = 6;
    let hexLiteral: number = 0xf00d;
    let binaryLiteral: number = 0b1010;
    let octalLiteral: number = 0o74

//字符串
    let myage: string = `my age is ${decLiteral}`

//数组
    let intList: number[] = [1, 2, 3,]
    let floatList: Array<number> = [1, 2, 3]

//元组 tuple
    let xx: [string, number]
    xx = ['one', 2]
// xx=['one','two']//error

//枚举
    enum Color {
        green, red, yellow
    }

    let c = Color.green
    let red: Color = Color.red

    enum Days {
        monday = 1, tuesday = 2, wenednesday = 3, thursday = 4, friday = 5, saturday = 6, sunday
    }


//任意值
    let a: any = 3
    a = "three"

//空值void
    function haha(): void {
        console.log("haha")
    }


})()
