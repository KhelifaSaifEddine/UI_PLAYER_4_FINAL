
var canvas2 = document.querySelector(".canvas2");
var x = 600
var ctx2 = canvas2.getContext("2d");
var canvas3 = document.querySelector(".canvas3");
var ctx3 = canvas3.getContext("2d");

function draw(e){

  let z = 13.9609 - 1.2*e
  let pos_x = e.toString()+"%" ///y
  let h = 0
  let pos_y = "10%"
  let sizex = "120%"
  let sizey = "70%"
  /*
  h = 20
  sizey = "48%"
  pos_y = "29%"
  --------------------------------
   h = 10
   sizey = "60%"
   pos_y = "20%"
  -------------------------------
  h=0
  sizey = "70%"
  pos_y = "10%"
  */
  canvas2.style.backgroundPositionX = pos_x
  canvas2.style.backgroundPositionY = pos_y
  canvas2.style.backgroundSize = sizex + " " + sizey
  canvas2.width = x

  var grd2 = ctx2.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd2.addColorStop(0, "#febe7c");
  grd2.addColorStop(1, "#9c6e3f");
  ctx2.strokeStyle = grd2
  ctx2.lineWidth = 3


  w =   canvas2.width



  

  
  canvas3.width = x
  canvas3.style.backgroundPositionX = pos_x
  canvas3.style.backgroundPositionY = pos_y
  canvas3.style.backgroundSize = sizex + " " + sizey
  
  var grd2 = ctx3.createRadialGradient(75, 50, 5, 90, 60, 100);
  grd2.addColorStop(0, "#febe7c");
  grd2.addColorStop(1, "#9c6e3f");
  ctx3.strokeStyle = grd2
  ctx3.lineWidth = 3


  drawShape(ctx2,z,0,h)
  drawShape(ctx3,z,0,h)

}

draw(-250)


function drawShape(ctx, xoff, yoff,a) {
    
  ctx.beginPath();
  ctx.moveTo(w + xoff, a + 17 + yoff);
  ctx.bezierCurveTo(288 + xoff, a + 17 + yoff, 85 + xoff, a + 16 + yoff, 63 + xoff,  a + 17 + yoff);
  ctx.bezierCurveTo(65 + xoff,  a + 37 + yoff, 43 + xoff,  45 + yoff, -a/8 + 31 + xoff,  a/1.5 + 37 + yoff);
  ctx.bezierCurveTo(15 + xoff, a/2 + 50 + yoff,  5 + xoff,  a/3 + 70 + yoff, 2 + xoff,  - a/2 +78 + yoff);
  ctx.bezierCurveTo(-a + 13 +0 + xoff,  -a + 96 + yoff, 18 + xoff,  -a/3 + 106 + yoff, 30 + xoff, -a/2 + 118 + yoff);
  ctx.bezierCurveTo(47 + xoff,   109 + yoff,63 + xoff, -a + 120 + yoff, 64 + xoff, -a + 138 + yoff);
  ctx.bezierCurveTo(88 + xoff,  -a + 137 + yoff,255 + xoff,-a + 139 + yoff, w + xoff,  -a + 139 + yoff);
  ctx.stroke()

  ctx.closePath();
}

