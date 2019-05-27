let cols = rows = 600;
let pixelGrid;

function setup() {
    createCanvas(cols, rows);
    pixelDensity(1);
    loadPixels();
    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            let index = (x + y * width) * 4;
            pixels[index+0] = 100;
            pixels[index+1] = 100;
            pixels[index+2] = 100;
            pixels[index+3] = 100;
        }
    }

    pixelGrid = pixels;
    updatePixels();

}

function draw() {
    // background(10);
    loadPixels()
    for(let i = 0; i < cols - 1; i++) {
        for(let j = 0; j < rows - 1; j++) {
            let index = (i + j * width) * 4
            pixels[index+0] = perlin(i, j);
            pixels[index+1] = perlin(i, j);
            pixels[index+2] = perlin(i, j);
            pixels[index+3] = perlin(i, j);
            console.log(perlin(i,j))
        }
    }

    updatePixels();
}

function lerpol(a0, a1, w){
    return a0 + w*(a1 - a0);
}

function dotGridGradient(ix, iy, x, y){
    let dx = x - ix;
    let dy = y - iy;

    return dx*pixelGrid[(ix + iy * width)*4] + dy*pixelGrid[(ix + iy * width)*4]
}

function clamp(x, lowerLimit, upperLimit) {
    if(x < lowerLimit)
        x = lowerLimit
    if(x > upperLimit)
        x = upperLimit
    return x
}

function smoothstep(edge0, edge1, x) {
    x = clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0)
    return x * x * (3 - 2 * x)
}

function perlin(x, y){
    let x0 = Math.floor(x);
    let x1 = x0 + 1;
    let y0 = Math.floor(y);
    let y1 = y0 + 1;

    let sx = smoothstep(x0, x1, x0)
    let sy = smoothstep(y0, y1, y0)

    let n0, n1, ix0, ix1, value;
    n0 = dotGridGradient(x0, y0, x, y);
    n1 = dotGridGradient(x1, y0, x, y);
    ix0 = lerpol(n0, n1, sx);
    n0 = dotGridGradient(x0, y1, x, y);
    n1 = dotGridGradient(x1, y1, x, y);
    ix1 = lerpol(n0, n1, sx);
    value = lerpol(ix0, ix1, sy);
    
    return value;
}