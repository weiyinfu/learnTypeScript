(function () {
    class Student {
        static cnt: number = 0;
        private _id: number;

        constructor() {
            this._id = Student.cnt++
        }

        tell() {
            console.log("我的学号是:" + this.id)
        }
//定义属性
        set id(id: number) {
            this.id = id
        }

        get id(): number {
            return this._id
        }
    }

    for (let i of[new Student(), new Student()]) {
        i.tell()
    }
})()