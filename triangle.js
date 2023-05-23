const { default: inquirer } = require('inquirer');
const Shape = require('../logo-generator/shape.js');

class Triangle {
    constructor(point1, point2, point3) {
        Shape.call(this, width, height, text, textX, textY, textSize, textAnchor, textFill, stroke, strokeWidth);
        this.point1 = point1;
        this.point2 = point2;
        this.point3 = point3;
    }
};

function getTriangle() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What color would you like for your shape?',
            name: 'shape color',
            value: ''
        }
    ])
}

getTriangle();

module.exports = Triangle;