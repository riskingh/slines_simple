var Vector = function (x, y) {
    this.x = x;
    this.y = y;
}

var VectorBy2Points = function (p1, p2) {
    this.x = p2.x - p1.x;
    this.y = p2.y - p1.y;
}
var VBy2P = VectorBy2Points;

var crossProduct = function (v1, v2) {
    return v1.x * v2.y - v1.y * v2.x;
}
var cPr = crossProduct;

var dotProduct = function (v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
}
var dPr = dotProduct;

var turn = function (v, angle) {
    return new Vector(v.x * Math.cos(angle) - v.y * Math.sin(angle), v.x * Math.sin(angle) + v.y * Math.cos(angle));
}