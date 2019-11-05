 function run4(){var t = 0;
 
setInterval(function(){

  var E = document.getElementById("53").value;
  var P = document.getElementById("52").value;
  var M = document.getElementById("56").value;
  var R = document.getElementById("55").value;
  var L = document.getElementById("54").value;
  var e = parseInt(E)
  var p = parseInt(P)
  var m = parseInt(M)
  var r = parseInt(R)
  var l = parseInt(L)
  var a = Math.PI*r**2;
  var I = (Math.PI/4)*r**4;
 
  var B=m*Math.PI/l;
  var z = -(Math.sinh(B*l)-Math.sin(B*l))/(Math.cosh(B*l)-Math.cos(B*l));
  var w = B**2*(e*I/(p*a))**(1/2);
  var q = Math.sin(w*t);
  var canvas = document.getElementById("Mycanvas4");
  var context = canvas.getContext("2d")
  canvas.width=l;
  var grid_cols=10;
		var grid_rows=10;
		var cell_height=canvas.height/grid_rows;
		var cell_width=canvas.width/grid_cols;
		context.lineWidth=1;
		context.strokeStyle="#a0a0a0";
  
  context.beginPath()
  for(var col=0;col<=grid_cols;col++)
			{
				var x=col*cell_width;
				context.moveTo(x,0);
				context.lineTo(x,canvas.height);
			}
			for(var row=0;row<=grid_rows;row++)
				{
					var y=row*cell_height;
					context.moveTo(0,y);
					context.lineTo(canvas.width,y);
				}
				context.stroke();
  context.beginPath();
  context.moveTo(0,100);
  context.lineTo(l,100);
  context.strokeStyle = "blue";
  context.stroke();
  context.beginPath();
  context.moveTo(0,100);
  for(var i=0;i<200;i+=1){
  var x = i*5;
  
  y=Math.sin(B*x);
  context.lineTo(x,q*20*y+100);
  }
 
 
  context.stroke();
  context.closePath();
  t++;
  },100)
 };