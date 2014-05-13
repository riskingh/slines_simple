var mrand = function (a, b) {
    return Math.floor(Math.random() * (b - a) + a)
}

POS_MARGIN = 100

var Snake = function (canvas, color, ucolor) {
    this.canvas = canvas;
    this.color = color;
    this.ucolor = ucolor;
    this.pos = new Point(mrand(0 + POS_MARGIN, parseInt(canvas.prop("width")) - POS_MARGIN), mrand(0 + POS_MARGIN, parseInt(canvas.prop("height")) - POS_MARGIN));
    this.angle = Math.random() * Math.PI * 2;
    this.points = [this.pos];

    this.cangle = 0.1;
    this.cspeed = 3.5;
    this.choleprob = 0.08;
    this.chole = 0;
    this.cholebord = -10;
    this.choleminsize = 5;
    this.cholemaxsize = 10;

    this.update = function (dir) {
        this.chole--;

        prev = this.pos;
        this.angle += dir * this.cangle;
        if (this.angle < 0)
            this.angle += 2 * Math.PI;
        if (this.angle >= 2 * Math.PI)
            this.angle -= 2 * Math.PI;
        this.pos = move(this.pos, turn(new Vector(0, this.cspeed), this.angle));

        if (this.chole > 0 || (this.chole < this.cholebord && Math.random() < this.choleprob)) {
            this.points.push(new fakePoint());
            if (this.chole < this.cholebord)
                this.chole = mrand(this.choleminsize, this.cholemaxsize + 1);
            this.canvas.drawLine({
                strokeStyle: this.ucolor,
                strokeWidth: 5,
                rounded: true,
                x1: prev.x, y1: prev.y,
                x2: this.pos.x, y2: this.pos.y
            });
        }
        else {
            this.points.push(this.pos);
            this.canvas.drawLine({
                strokeStyle: this.color,
                strokeWidth: 5,
                rounded: true,
                x1: prev.x, y1: prev.y,
                x2: this.pos.x, y2: this.pos.y
            });
        }
    }
}