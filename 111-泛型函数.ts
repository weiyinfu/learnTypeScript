function sort<T>(a: T[]): T[] {
    for (let i = 0; i < a.length; i++) {
        for (let j: number = i; j < a.length; j++) {
            if (a[i] > a[j]) {
                [a[j], a[i]] = [a[i], a[j]]
            }
        }
    }
    return a
}

console.log(sort([1, 2, 4, 3, 2, 1]))