const canvas = document.querySelector('#draw');
//2d or 3d
const  ctx = canvas.getContext('2d');
//get full W and H from page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//color, line initical and final
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = '"round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
//ctx.globalCompositeOperation = 'multiply'; //diferente blend modes

//only draw if you click and move
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction =  true;

function draw(e) {
  if(!isDrawing) return; // stop the function from running when they are not mouse down

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  //same, in one line, named distrocturing an array
  //[lastX, lastY] = [e.offsetX, e.offsetY]
  lastX = e.offsetX;
  lastY = e.offsetY;
  //incremet colors
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if(ctx.lineWidth >=100 || ctx.lineWidth <= 1) {
    direction = !direction
  }
  if(direction) {
  ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

} 
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

