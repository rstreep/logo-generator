const { default: inquirer } = require('inquirer');
const Shape = require('../shape');

class Circle {
    constructor(circleFill) {
        Shape.call(this, text, textFill);
        this.circleFill = circleFill;
    }
};

function circleify(){
    fs.writeFile('circle.svg', userInput, (err) => 
    err ? console.error(err) : console.log('Complete')
    );
}

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