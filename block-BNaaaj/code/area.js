function areaOfSquare(side) {
    return `Area of the sqaure is equal to ${side * side}`;
}
areaOfSquare(4);

function areaOfCircle(radius) {
    return `Area of the circle is equal to ${3.142 * radius * radius}`;

}
areaOfCircle(10);

function areaOfRectangle(length, width) {
    return `Area of the rectangle is equal to ${length * width}`;

}
areaOfRectangle(10);

module.exports = {
    "areaOfRectangle": areaOfRectangle,
    "areaOfSquare": areaOfSquare,
    "areaOfCircle": areaOfCircle
}