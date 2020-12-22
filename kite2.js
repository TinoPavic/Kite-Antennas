var dbg=0;  
function dT(s, n) {
  if(dbg<1) return;
  if(n==1) document.getElementById("str1").innerHTML=s;
  if(n==2) document.getElementById("str2").innerHTML=s;
  if(n==3) document.getElementById("str3").innerHTML=s;
  if(n==4) document.getElementById("str4").innerHTML=s;
}

function selUpdate(kite) {    // selection has changed
  var sel;
  dT("selUpdate(1)",2);
  sel=document.getElementById("tension").value;    kite.tension=parseFloat(sel);
  sel=document.getElementById("elevation").value;  kite.elevation=parseFloat(sel);
  sel=document.getElementById("mass").value;       kite.weight=parseFloat(sel);
  sel=document.getElementById("height").value;     kite.height=parseFloat(sel);
  console.log("selChange(11) "+kite.tension+","+kite.elevation);
  console.log("selChange(12) "+kite.weight+","+kite.height);
  dT("selUpdate(4)", 2);
  kiteCheck(kite);
  dT("selUpdate(7)", 2);
  canvasUpdate1(kite);
  dT("selUpdate(9)", 2);
}

function canvasUpdate1(kite) {    // drawing on canvas
  console.log("canvasUpdate1(1)"); 
  kiteCheck(kite);
  recalcAll(kite); 
  var canvas = document.getElementById("myCanvas");  // find canvas element
  var ctx = canvas.getContext("2d");      // get drawing object
  ctx.clearRect(0, 0, 900, 1100);
  ctx.fillStyle = "#FF0000";      // set fill style to red color
  ctx.font = "35px Arial";        // draw text
  var i, y=0, s, li, ld, n;
  ctx.fillStyle= "blue"; 
  s= "Unloaded Kite Line (No Payload)"; ctx.fillText(s,1, y+=50);
  s= "     Line Tension Force    F = "+kite.tension.toFixed(2)+" kg"; ctx.fillText(s,1, y+=40);
  s= "     Line Elevation Angle  a ="+ kite.elevation.toFixed(2) + " deg"; ctx.fillText(s,1, y+=40);
  s= "     Lift Force  Fv ="+ kite.lift.toFixed(2)+ " kg"; ctx.fillText(s,1, y+=40);
  s= "     Drag Force  Fh ="+ kite.drag.toFixed(2)+ " kg"; ctx.fillText(s,1, y+=40);

  s= "Loaded Kite Line (Payload Attached)"; ctx.fillText(s,1, y+=60);
  s= "    Payload Mass   m = "+kite.weight.toFixed(2)+" kg"; ctx.fillText(s,1, y+=40);
  s= "    Payload Height h= "+ kite.height.toFixed(2)+" m"; ctx.fillText(s,1, y+=40);
  s= "    Loaded Lift    Fv= "+ kite.liftLoaded.toFixed(2)+" kg"; ctx.fillText(s,1, y+=40);
  s= "    Loaded Elev. Angle b = "+ kite.elevLoaded.toFixed(2)+" deg"; ctx.fillText(s,1, y+=40);
  s= "    Anchor Distance d = "+ kite.anchorDistance.toFixed(2)+ "m"; ctx.fillText(s,1, y+=40);
 
}


 

 