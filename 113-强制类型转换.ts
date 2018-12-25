(function () {
    let x: string = "haha";
    let y = (<string>x).length
    let z = (x as string).length
    console.log(y)
    console.log(z)
})()
