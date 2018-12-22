//使用泛型实现链表
(function () {
    class Node<T> {
        next: Node<T>;
        value: T;

        constructor(value?: T) {
            if (value) {
                this.value = value
            }
        }
    }

    class LinkedList<T> {
        root: Node<T>;
        tail: Node<T>;

        constructor() {
            this.root = new Node<T>()
            this.tail = this.root
        }

        add(node: T) {
            this.tail.next = new Node<T>(node)
            this.tail=this.tail.next
        }
    }
    class Student{
        name:string;
        constructor(name:string){
            this.name=name
        }
    }
    let list=new LinkedList<Student>()
    list.add(new Student("张飞"))
    list.add(new Student("赵云"))
    list.add(new Student("关羽"))
    for(let i=list.root.next;i!=null;i=i.next){
        console.log(i.value)
    }
})()