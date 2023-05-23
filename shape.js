const { default: inquirer } = require("inquirer");

class Shape {
    constructor(width, height, text, textFill, stroke, strokeWidth) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.textFill = textFill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
};

function getShape(){
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter 3 letters for your logo',
            name: 'company name',
            value: ''
        },
        {
            type: 'input',
            message: 'Please enter a color for your company name',
            name: 'text fill',
            value: ''
        },
        {
            type: 'list',
            message: 'Which shape would you like for your logo?',
            name: 'shapes',
            choices: [
                {
                    name: 'square',
                    value: square
                },
                {
                    name: 'circle',
                    value: circle
                },
                {
                    name: 'triangle',
                    value: triangle
                }
            ]
        }
    ])
}

getShape();

module.exports = Shape;