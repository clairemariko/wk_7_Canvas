//step1 set up a canvas but if you console log it will be to null. 
// var canvas = document.getElementById('main');
// console.log('canvas', canvas)

//step2 it has to be a function to be set to window.onload
window.onload = function(){
  var canvas = document.getElementById('main');
  console.log('canvas', canvas)


//drawing a rect
console.log('canvas', canvas);
var context = canvas.getContext('2d');
context.fillStyle = "green";
context.shadowColor = "black";
context.shadowOffsetX = 10;
context.shadowBlur = 10;
context.fillRect(10, 10, 50, 50);


//the 10 , 10 starts at the top left corner. black is a default colour


//draw a line
//you use a path from one point to another and it will draw it
context.beginPath();
context.moveTo(167,26);
context.lineTo(167,123);
context.stroke();


context.beginPath();
context.moveTo(157,26);
context.lineTo(157,123);
context.stroke();



//draw a circle
// void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
context.beginPath();
context.arc(170, 75, 50, 0, 2 * Math.PI);
context.stroke();

//when we want to do something when we click on the canvas we need to listen to that action. 
  canvas.onclick = function(event){
    // var context = canvas.getContext('2d');
    context.beginPath();
    context.arc(event.x, event.y, 50, 0, 2 * Math.PI);
    context.stroke();
    console.log('clicked', event);
    console.log('location', event.x, event.y);
    }

    //when it clicks it add a circle
}








