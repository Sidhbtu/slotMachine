let value1=document.getElementById('value1');
let value2=document.getElementById('value2');
let value3=document.getElementById('value3');

let inpSpeed=document.getElementById('inpSpeed');


let values=[
' 🤩 ','😀 ',' 😇 ',' 🤪 ',' 😴 ',' 🤡 ',' 🤓 ',' 👻 '
]


function getRandom(){

	return values[Math.floor(Math.random()*8)]
}
setInterval(()=>{
	value1.innerText=getRandom();
value2.innerText=getRandom();
value3.innerText=getRandom();
},100)

let animationId;

function updateAnimation(newSpeed){
    if(animationId) clearInterval(animationId);

    animationId=setInterval(()=>{
	value1.innerText=getRandom();
value2.innerText=getRandom();
value3.innerText=getRandom();
},1000/newSpeed)

}



inpSpeed.onchange =function(event){
//document.documentElement==root of css
	document.documentElement.style.setProperty('--speed',event.target.value);
	updateAnimation(event.target.value)
}
function SpinAndStop(){
	//slotspin.pause();
	if(value1==value2){
	window.alert("Win");}
	else {
		window.alert("Loose");
	}
}