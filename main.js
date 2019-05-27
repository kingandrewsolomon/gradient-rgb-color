let r1 = 0,
    g1 = 0,
    b1 = 0;
let r2 = 0,
    g2 = 0,
    b2 = 0;
let rx1 = 1,
    gx1 = 2,
    bx1 = 4;
let rx2 = 5,
    gx2 = 3,
    bx2 = 2;

let s = 2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    if (localStorage.r1) {
        r1 = parseFloat(localStorage.r1);
        g1 = parseFloat(localStorage.g1);
        b1 = parseFloat(localStorage.b1);
        r2 = parseFloat(localStorage.r2);
        g2 = parseFloat(localStorage.g2);
        b2 = parseFloat(localStorage.b2);
    }
}

function draw() {
    own();
    c1 = color(r1, g1, b1);
    c2 = color(r2, g2, b2);
    setGradient(0, 0, width, height, c1, c2);
    // localStorage.setItem("r1", r1);
    // localStorage.setItem("g1", g1);
    // localStorage.setItem("b1", b1);
    // localStorage.setItem("r2", r2);
    // localStorage.setItem("g2", g2);
    // localStorage.setItem("b2", b2);
    // localStorage.setItem("rx1", rx1);
    // localStorage.setItem("gx1", gx1);
    // localStorage.setItem("bx1", bx1);
}

function own() {
    r1 += rx1 * s;
    g1 += gx1 * s;
    b1 += bx1 * s;
    r2 += rx2 * s;
    g2 += gx2 * s;
    b2 += bx2 * s;
    c1 = color(r1, g1, b1);
    c2 = color(r2, g2, b2);
    setGradient(0, 0, width, height, c1, c2);
    if (r1 > 255 || r1 < 1) rx1 = -gx1;
    if (g1 > 255 || g1 < 2) gx1 = -bx1;
    if (b1 > 255 || b1 < 4) bx1 = -rx1;
    if (r2 > 255 || r2 < 5) rx2 = -gx2;
    if (g2 > 255 || g2 < 3) gx2 = -bx2;
    if (b2 > 255 || b2 < 2) bx2 = -rx2;
    // localStorage.setItem("r1", r1);
    // localStorage.setItem("g1", g1);
    // localStorage.setItem("b1", b1);
    // localStorage.setItem("r2", r2);
    // localStorage.setItem("g2", g2);
    // localStorage.setItem("b2", b2);
    // localStorage.setItem("rx1", rx1);
    // localStorage.setItem("gx1", gx1);
    // localStorage.setItem("bx1", bx1);
}

function setGradient(x, y, w, h, c1, c2) {
    noFill();
    for (var i = x; i <= x + w; i++) {
        var inter = map(i, x, x + w, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
    }
}

function reset() {
    localStorage.removeItem("r1");
    localStorage.removeItem("g1");
    localStorage.removeItem("b1");
    localStorage.removeItem("r2");
    localStorage.removeItem("g2");
    localStorage.removeItem("b2");
    r1 = 0,
        g1 = 0,
        b1 = 0;
    r2 = 0,
        g2 = 0,
        b2 = 0;
    rx1 = 1,
        gx1 = 2,
        bx1 = 4;
    rx2 = 5,
        gx2 = 3,
        bx2 = 2;

}