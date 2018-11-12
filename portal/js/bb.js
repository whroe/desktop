var oBtnLeft=document.querySelector('.btn_left');
var oBtnRight=document.querySelector('.btn_right');
var aLittle=document.querySelectorAll('.little span');
var aImg=document.querySelectorAll('.swipers img');
console.log(aLittle);
console.log(aImg);


var index=0;
auto();
function auto(){
	setInterval(change,5000)
}

oBtnRight.onclick=function (){
	change(false);
}
oBtnLeft.onclick=function (){
	change(true);
};
function change(bool){
	aImg[index].style.opacity=0;
	aLittle[index].className='';
	if(bool){
	index++	
	index %=4;
}else{
	index--
	if(index<0) index=3;
}
	aImg[index].style.opacity=1;
console.log(aImg[index]);
	aLittle[index].className="in";
}