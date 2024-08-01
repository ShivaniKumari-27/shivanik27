score=0;
cross=true;
document.onkeydown=function(e){
    console.log("Key code is",e.keycode);
    if(e.keyCode===38){
        puppy=document.querySelector(".puppy");
        puppy.classList.add('animatePuppy');
        setTimeout(() =>{
          puppy.classList.remove('animatePuppy')
        },700);
    }
    if(e.keyCode===39){
      puppy=document.querySelector(".puppy");
      puppyX=parseInt(window.getComputedStyle(puppy,null).getPropertyValue('left'));
      puppy.style.left=puppyX+112+"px";
  }
  if(e.keyCode===37){
    puppy=document.querySelector(".puppy");
    puppyX=parseInt(window.getComputedStyle(puppy,null).getPropertyValue('left'));
    puppy.style.left=(puppyX-112)+"px";
    }
  }

setInterval(()=>{
  puppy=document.querySelector('.puppy');
  gameOver=document.querySelector('.gameOver');
  obstacle=document.querySelector('.obstacle');

  px=parseInt(window.getComputedStyle(puppy,null).getPropertyValue('left'));
  py=parseInt(window.getComputedStyle(puppy,null).getPropertyValue('top'));

 ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
 oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
  offsetX=Math.abs(px-ox);
  offsetY=Math.abs(py-oy);
  console.log(offsetX,offsetY);
  if(offsetX<93 && offsetY<52){
    gameOver.style.visibility='visible';
    obstacle.classList.remove('obstacleAni');
  }
  else if(offsetX<145 &&  cross){
    score=score+1;
    updateScore(score);

    cross=false;
    setTimeout(()=>{
    cross=true;
    },1000);
  }
},100);


function updateScore(score){
  scoreConst.innerHTML = "Your Score: " + score;
}


