function areaOfSquare(side) {
    return `Area of the sqaure is equal to ${side * side}`;
}

function areaOfCircle(radius) {
    return `Area of the circle is equal to ${2 * 3.142 *radius}`;

}

function areaOfRectangle(length, width) {
    return `Area of the rectangle is equal to ${length * width}`;

}

module.exports = {
   square : areaOfSquare,
   circle : areaOfCircle,
   rectangle : areaOfRectangle,
}