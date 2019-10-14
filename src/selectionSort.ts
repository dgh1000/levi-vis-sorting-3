let canv = document.getElementById('canv') as HTMLCanvasElement;
let ctx = canv.getContext('2d');

function bubblePass(xs: number[], n: number): void {
    if (n % 2 == 0) {
        for(let i = 0; i < xs.length - 1; i++) {
            if (xs[i] > xs[i + 1 ]) {
                swap(xs, i, i + 1);
          }
        }
    }   
    draw(xs);
    requestAnimationFrame(() => bubblePass(xs, n+1));
}

function selectionPass(xs: number[], i: number, n: number): void {
    if (n & 10) {
        let indx = i;
        for (let j = i+1; j < xs.length; j++) {
            if (xs[indx] > xs[j]) {
                indx = j;
           }
        }
        swap(xs, indx, i);
    }
    if (i < xs.length-1)
        i+1
    draw(xs);
    requestAnimationFrame(() => selectionPass(xs, i, n+1));
}

// func01
//
// requestAimationFrame(func01);



function main(): void {
    let out: number[] = []
    for(let i = 0; i < 600; i ++) {
        out.push(Math.floor(Math.random()*100));
    }
    console.log("test")
}

main();



