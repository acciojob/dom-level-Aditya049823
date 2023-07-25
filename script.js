//your JS code here. If required.
const element=document.getElementById("level");
let n=Number.MIN_VALUE;
if(element.style!==undefined){
	n=0;
}
else if(element.getAttribute!==undefined){
	n=1;
}
else if(element.addEventListener!==undefined){
	n=2;
}
else{
	n=3;
}
alert("The level of the element is: "+n);