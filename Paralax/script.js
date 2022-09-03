const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 15;

const backGroundLayer1 = new Image();
backGroundLayer1.src = "./assets/layer-1.png";
const backGroundLayer2 = new Image();
backGroundLayer2.src = "./assets/layer-2.png";
const backGroundLayer3 = new Image();
backGroundLayer3.src = "./assets/layer-3.png";
const backGroundLayer4 = new Image();
backGroundLayer4.src = "./assets/layer-4.png";
const backGroundLayer5 = new Image();
backGroundLayer5.src = "./assets/layer-5.png";

let x = 0;
let x2 = 2400;
const animate = () => {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backGroundLayer4, x, 0);
  ctx.drawImage(backGroundLayer4, x2, 0);
  if (x < -2400) {
    x = 2400;
  } else {
    x -= gameSpeed;
  }
  if (x2 < -2400) {
    x2 = 2400;
  } else {
    x2 -= gameSpeed;
  }
  requestAnimationFrame(animate);
};

animate();
