class Shape {
    constructor(width, height, text, textX, textY, textSize, textAnchor, textFill, stroke, strokeWidth) {
        this.width = width;
        this.height = height;
        this.text = text;
        this.textX = textX;
        this.textY = textY;
        this.textSize = textSize;
        this.textAnchor = textAnchor;
        this.textFill = textFill;
        this.stroke = stroke;
        this.strokeWidth = strokeWidth;
    }
};

module.exports = Shape;