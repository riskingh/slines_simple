var Point = function (x, y) {
    this.x = x;
    this.y = y;
}

var move = function (p, v) {
    return new Point(p.x + v.x, p.y + v.y);
}