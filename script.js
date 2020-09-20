var wrapperEle = document.body.querySelector(".wrapper");

// if(!isNaN(456)){
//   wrapperEle.innerHTML="Is a number";
// }

var repeat = "dog"
var number = 0;

// while(number<=3){
//   repeat=prompt("What is the new value?");
//   number++;
// }

for(var i=0; i<=5; i++){
  number=number+1;
  repeat=prompt("how many hits do you want to make on the dragon?");
}

wrapperEle.innerHTML=number;

for(var i=0; i<=1; i++){
  number=number+2;
  repeat=prompt("click enter and the dragon will randomly deal 1 or 2 damage on you. once");
}

wrapperEle.innerHTML=number;

for(var i=0; i<=1; i++){
  number=number+2;
  repeat=prompt("once the dragon takes 10 damage, you win. once you take 5 damage, the dragon wins. how many more hits on the dragon?");
}

wrapperEle.innerHTML=number;