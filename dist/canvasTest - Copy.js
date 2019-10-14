let canv = document.getElementById('canv');
let ctx = canv.getContext('2d');
function interp_3_2(x0, x1, x2, y0, y1) {
    if (x0 == x2)
        throw "error in interp_3_2";
    return y0 + (y1 - y0) * (x1 - x0) / (x2 - x0);
}
function swap(xs, i1, i2) {
    let b = xs[i1];
    xs[i1] = xs[i2];
    xs[i2] = b;
}
function shuffle(xs) {
    let out = xs;
    let j;
    for (let i = xs.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i);
        swap(out, i, j);
    }
    return out;
}
function bubblePass(xs, n) {
    if (n % 2 == 0) {
        for (let i = 0; i < xs.length - 1; i++) {
            if (xs[i] > xs[i + 1]) {
                swap(xs, i, i + 1);
            }
        }
    }
    draw(xs);
    requestAnimationFrame(() => bubblePass(xs, n + 1));
}
function selectionPass(xs, i, n) {
    if (n & 10) {
        let indx = i;
        for (let j = i + 1; j < xs.length; j++) {
            if (xs[indx] > xs[j]) {
                indx = j;
            }
        }
        swap(xs, indx, i);
    }
    if (i < xs.length - 1)
        i + 1;
    draw(xs);
    requestAnimationFrame(() => selectionPass(xs, i, n + 1));
}
// func01
//
// requestAimationFrame(func01);
function main() {
    let out = [];
    for (let i = 0; i < 600; i++) {
        out.push(Math.floor(Math.random() * 100));
    }
    bubblePass(out, 0);
}
function draw(xs) {
    ctx.clearRect(0, 0, 600, 600);
    for (let i = 0; i < xs.length; i++) {
        let xc = interp_3_2(0, i, xs.length, 0, 600);
        let w = 600 / xs.length;
        let yc = interp_3_2(0, xs[i], 600, 0, -600);
        let color = "hsl(" + interp_3_2(0, yc, -600, 0, 360) + ", 25%, 50%)";
        ctx.fillStyle = color;
        ctx.fillRect(xc, 600, w, yc);
    }
}
main();
//# sourceMappingURL=canvasTest - Copy.js.map