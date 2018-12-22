(function () {
    class Shape {
        private name: string;
        area: number;
        shapeColor: string;
        width: number;
        height: number;

        constructor(name: string, width: number, height: number) {
            this.area = width * height;
            this.name = name
            this.shapeColor = "pink";
            this.width = width;
            this.height = height;
        };

        shoutout() {
            return "I'm " + this.shapeColor + " " + this.name + " with an area of " + this.area + " cm squared.";
        }
    }

    var square = new Shape("square", 30, 30);

    console.log(square.shoutout());
    console.log('Area of Shape: ' + square.area);
    // console.log('Name of Shape: ' + square.name);//name是私有的，无法访问
    console.log('shapeColor of Shape: ' + square.shapeColor);
    console.log('Width of Shape: ' + square.width);
    console.log('Height of Shape: ' + square.height);
})()
