define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function draw(canv, ctx) {
        ctx.fillStyle = "red";
        ctx.clearRect(0, 0, canv.width, canv.height);
        ctx.fillRect(100, 100, 200, 200);
    }
    let canv = document.getElementById("canv");
    let ctx = canv.getContext("2d");
    draw(canv, ctx);
    let d = { x: 3, ys: [1, 2, 3] };
});
//# sourceMappingURL=test.js.map