const { default: inquirer } = require('inquirer');
const Shape = require('../logo-generator/shape.js');

class Triangle {
    constructor(triangleFill) {
        Shape.call(this, text, textFill);
        this.triangleFill = triangleFill;
    }
};

function triangleify(){
    fs.writeFile('triangle.svg', userInput, (err) => 
    err ? console.error(err) : console.log('Complete')
    );
}

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