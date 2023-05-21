const Shape = require('../logo-generator/shape.js');

class Square {
    constructor(squareX, squareY, squareWidth, squareHeight, squareXR, squareYR) {
        Shape.call(this, width, height, text, textX, textY, textSize, textAnchor, textFill, stroke, strokeWidth);
        this.squareX = squareX;
        this.squareY = squareY;
        this.squareWidth = squareWidth;
        this.squareHeight = squareHeight;
        this.squareXR = squareXR;
        this.squareYR = squareYR;
    }
};

module.exports = Square;