canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var lastPositionOfx,lastPositionOfy;

var color="red";
var lineWidth=12;

canvas.addEventListener("mouseDown",myMousedown);
function myMousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseUp",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseLeave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseMove",myMouseMove);
function myMouseMove(e){

    currentPositionOfMouseX=e.clientX - canvas.offsetLeft;
    currentPositionOfMouseY=e.clientY - canvas.offsetTop;

    if(mouseEvent=="mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;

        console.log("Last Position Of X and Y is:");
        console.log("x=" + lastPositionOfx + "y=" + lastPositionOfy);
        ctx.moveTo(lastPositionOfx,lastPositionOfy);


        console.log("Current Position Of X and Y is:");
        console.log("x=" + currentPositionOfMouseX + "y=" + currentPositionOfMouseY);
        ctx.moveTo(currentPositionOfMouseX,currentPositionOfMouseY);
        
        }
   
}