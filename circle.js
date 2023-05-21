const Shape = require('../shape');

class Circle {
    constructor(circleCX, circleCY, circleR) {
        Shape.call(this, width, height, text, textX, textY, textSize, textAnchor, textFill, stroke, strokeWidth);
        this.circleCX = circleCX;
        this.circleCY = circleCY;
        this.circleR = circleR;
    }
};

module.exports = Circle;