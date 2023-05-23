const { default: inquirer } = require('inquirer');
const Shape = require('../logo-generator/shape.js');

class Square {
    constructor(squareFill) {
        Shape.call(this,text, textFill);
        this.squareFill = squareFill;
    }
};

function getSquare() {
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

getSquare();

module.exports = Square;