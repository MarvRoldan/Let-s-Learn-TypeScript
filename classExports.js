"use strict";
exports.__esModule = true;
var Square = (function () {
    function Square(height, width) {
        this.height = height;
        this.width = width;
    }
    Square.prototype.getWidth = function () {
        return this.width;
    };
    Square.prototype.getHeight = function () {
        return this.height;
    };
    Square.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Square;
}());
exports.Square = Square;
;
//# sourceMappingURL=classExports.js.map