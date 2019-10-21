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

function selectionSort(xs: number[]): void {
    for(let i = 0; i < xs.length-1; i++) {
        let idx = i;
        for(let j = i; j < xs.length; j++) {
            if(xs[idx] > xs[j])
                idx = j;
        }
        if (idx == i)
            swap(xs, i, idx)
    }
}
// func01
//
// requestAimationFrame(func01);



function main(): void {
    let out: number[] = []
    for(let i = 0; i < 10; i ++) {
        out.push(Math.floor(Math.random()*100));
    }
    let out2 = [3, 5, 1, 2];
    selectionSort(out2);
    console.log(out2);
}

main();



