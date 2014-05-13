var eps = 0.00001;

var sign = function (x) {
    if (x < 0)
        return -1;
    else if (x > 0)
        return 1;
    else
        return 0;
}

var pointOnSegment = function (P, A, B) { //true if P is on AB
    return Math.abs(cPr(new VBy2P(P, A), new VBy2P(P, B))) < eps && dPr(new VBy2P(A, P), new VBy2P(A, B)) > 0 && dPr(new VBy2P(B, P), new VBy2P(B, A)) > 0;
}
var pOnS = pointOnSegment;

var intersect = function (A, B, C, D) { //true if AB intersects CD, else either
    if (Math.abs(cPr(new VBy2P(A, B), new VBy2P(C, D))) < eps) {
        return pOnS(A, C, D) || pOnS(B, C, D) || pOnS(C, A, B);
    }
    else {
        return sign(cPr(new VBy2P(A, B), new VBy2P(A, C))) * sign(cPr(new VBy2P(A, B), new VBy2P(A, D))) <= 0 && sign(cPr(new VBy2P(C, D), new VBy2P(C, A))) * sign(cPr(new VBy2P(C, D), new VBy2P(C, B))) <= 0;
    }
}
var inter = intersect;