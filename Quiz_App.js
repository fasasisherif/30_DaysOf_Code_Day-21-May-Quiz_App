var ham = document.getElementsByClassName("ham");
var down = document.getElementsByClassName("down");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var e = document.getElementById("e");
var f = document.getElementById("f");
var g = document.getElementById("g");
var h = document.getElementById("h");
var i = document.getElementById("i");
var j = document.getElementById("j");
var k = document.getElementById("k");
var l = document.getElementById("l");
var m = document.getElementById("m");
var n = document.getElementById("n");
var o = document.getElementById("o");
var p = document.getElementById("p");
var q = document.getElementById("q");
var r = document.getElementById("r");
var s = document.getElementById("s");
var t = document.getElementById("t");
var u = document.getElementById("u");
var v = document.getElementById("v");
var w = document.getElementById("w");
var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");
var aa = document.getElementById("aa");
var bb = document.getElementById("bb");

var scores = document.getElementById("scores");


ham[0].addEventListener("click",myfunc1)
a.addEventListener("click",myfunc2)
b.addEventListener("click",myfunc3)
c.addEventListener("click",myfunc4)
d.addEventListener("click",myfunc5)
e.addEventListener("click",myfunc6)
f.addEventListener("click",myfunc7)
g.addEventListener("click",myfunc8)
h.addEventListener("click",myfunc9)
i.addEventListener("click",myfunc10)
j.addEventListener("click",myfunc11)
k.addEventListener("click",myfunc12)
l.addEventListener("click",myfunc13)
m.addEventListener("click",myfunc14)
n.addEventListener("click",myfunc15)
o.addEventListener("click",myfunc16)
p.addEventListener("click",myfunc17)
q.addEventListener("click",myfunc18)
r.addEventListener("click",myfunc19)
s.addEventListener("click",myfunc20)
t.addEventListener("click",myfunc21)
u.addEventListener("click",myfunc22)
v.addEventListener("click",myfunc23)
w.addEventListener("click",myfunc24)
x.addEventListener("click",myfunc25)
y.addEventListener("click",myfunc26)
z.addEventListener("click",myfunc27)
aa.addEventListener("click",myfunc28)
bb.addEventListener("click",myfunc29)





var navbar_counter = 0;
function myfunc1(){
down[0]	.style.height ="235px"
down[0]	.style.width ="auto"
ham[0].innerHTML ="X"
navbar_counter++;

if(navbar_counter%2 === 0){
down[0]	.style.height ="0px"
down[0]	.style.width ="auto"	
ham[0].innerHTML ="&#9776"	
		}
 }



var quiz_counter = 0;
var mine1 = 0


function myfunc2(){		
mine1++;
if(mine1 <= 1)	{		
a.style.backgroundColor ="hotpink"			
	}
}
function myfunc3(){
mine1++;
if(mine1 <= 1)	{
quiz_counter += 10;
b.style.backgroundColor ="#00cc00"		
scores.innerHTML = quiz_counter;
	}
}
function myfunc4(){
mine1++;
if(mine1 <= 1)	{
c.style.backgroundColor ="hotpink"			
	}
}
function myfunc5(){
mine1++;
if(mine1 <= 1)	{
d.style.backgroundColor ="hotpink"			
	}
}



var mine2 = 0;
function myfunc6(){	
mine2++;
if(mine2 <= 1)	{	
e.style.backgroundColor ="hotpink"			
	}
}
function myfunc7(){
mine2++;
if(mine2 <= 1)	{	
quiz_counter += 10;
f.style.backgroundColor ="#00cc00"			
scores.innerHTML = quiz_counter;
	}
}
function myfunc8(){
mine2++;
if(mine2 <= 1)	{	
g.style.backgroundColor ="hotpink"			
	}
}
function myfunc9(){
mine2++;
if(mine2 <= 1)	{	
h.style.backgroundColor ="hotpink"			
	}
}



var mine3 = 0;
function myfunc10(){		
mine3++;
if(mine3 <= 1)	{	
i.style.backgroundColor ="hotpink"			
	}
}
function myfunc11(){
mine3++;
if(mine3 <= 1)	{	
j.style.backgroundColor ="hotpink"		
	}
}
function myfunc12(){
mine3++;
if(mine3 <= 1)	{	
quiz_counter += 10;	
k.style.backgroundColor ="#00cc00"			
scores.innerHTML = quiz_counter;
	}
}
function myfunc13(){
mine3++;
if(mine3 <= 1)	{	
l.style.backgroundColor ="hotpink"			
	}
}



var mine4 = 0
function myfunc14(){		
mine4++;
if(mine4 <= 1)	{	
m.style.backgroundColor ="hotpink"			
	}
}
function myfunc15(){
mine4++;
if(mine4 <= 1)	{	
quiz_counter += 10;	
n.style.backgroundColor ="#00cc00"			
scores.innerHTML = quiz_counter;	
	}
}



function myfunc16(){
mine4++;
if(mine4 <= 1)	{	
o.style.backgroundColor ="hotpink"	
	}
}
function myfunc17(){
mine4++;
if(mine4 <= 1)	{	
p.style.backgroundColor ="hotpink"			
	}
}



var mine5 = 0;
function myfunc18(){		
mine5++;
if(mine5 <= 1)	{	
quiz_counter += 10;	
q.style.backgroundColor ="#00cc00"			
scores.innerHTML = quiz_counter;		
	}
}
function myfunc19(){
mine5++;
if(mine5 <= 1)	{	
r.style.backgroundColor ="hotpink"		
	}
}
function myfunc20(){
mine5++;
if(mine5 <= 1)	{	
s.style.backgroundColor ="hotpink"	
	}
}
function myfunc21(){
mine5++;
if(mine5 <= 1)	{	
t.style.backgroundColor ="hotpink"			
	}
}
	
	

var mine6 = 	0;
function myfunc22(){		
mine6++;
if(mine6 <= 1)	{	
u.style.backgroundColor ="hotpink"		
	}
}
function myfunc23(){
mine6++;
if(mine6 <= 1)	{	
v.style.backgroundColor ="hotpink"		
	}
}
function myfunc24(){
mine6++;
if(mine6 <= 1)	{	
w.style.backgroundColor ="hotpink"	
	}
}
function myfunc25(){
mine6++;
if(mine6 <= 1)	{	
quiz_counter += 10;	
x.style.backgroundColor ="#00cc00"			
scores.innerHTML = quiz_counter;					
	}
}

		
var mine7 = 0;	
function myfunc26(){	
mine7++;
if(mine7 <= 1)	{
y.style.backgroundColor ="hotpink"		
 }
}
function myfunc27(){
mine7++;
if(mine7 <= 1)	{		
z.style.backgroundColor ="hotpink"		
 }
}
function myfunc28(){
mine7++;
if(mine7 <= 1)	{		
quiz_counter += 10;	
aa.style.backgroundColor ="#00cc00"			
scores.innerHTML = quiz_counter;			
	}
}
function myfunc29(){
mine7++;
if(mine7 <= 1)	{
bb.style.backgroundColor ="hotpink"				
	}
}
