const { default: inquirer } = require('inquirer');
const Shape = require('../shape');

class Circle {
    constructor(circleCX, circleCY, circleR) {
        Shape.call(this, width, height, text, textX, textY, textSize, textAnchor, textFill, stroke, strokeWidth);
        this.circleCX = circleCX;
        this.circleCY = circleCY;
        this.circleR = circleR;
    }
};

function getCircle() {
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

getCircle();

module.exports = Circle;