
	  
	  
	  
	  function run1(){
		  var t=0;

setInterval(function(){
  var E = document.getElementById("2").value;
  var P = document.getElementById("1").value;
  var M = document.getElementById("5").value;
  var R = document.getElementById("4").value;
  var L = document.getElementById("3").value;
  var e = parseInt(E)
  var p = parseInt(P)
  var m = parseInt(M)
  var r = parseInt(R)
  var l = parseInt(L)
  
  var I = (Math.PI/4)*r**4;
 var a = Math.PI*r**2;
  var B = (2*m+1)*(Math.PI/(2*l));
  var z = -(Math.sinh(B*l)-Math.sin(B*l))/(Math.cosh(B*l)-Math.cos(B*l));
  var w = B**2*(e*I/(p*a))**(1/2);
  var q = Math.sin(w*t);
  var canvas = document.getElementById("Mycanvas");
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
  
  var y=z*(Math.cosh(B*x)-Math.cos(B*x))+Math.sinh(B*x)-Math.sin(B*x);
  context.lineTo(x,20*q*y+100);
  }
 
 
  context.stroke();
  context.closePath();
  t++;
},50)
  };
	  
	  