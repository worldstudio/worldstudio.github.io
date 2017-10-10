function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("menuIcon").style.opacity = "0";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("menuIcon").style.opacity = "1";
}

// function browserID () {
//     alert(navigator.userAgent)
// }


// swipe stuff
// var startX;
// var startY;
// var endX;
// var endY;
// var treshold = 100; //threshold for noise
// var slides = document.getElementById("dummyDiv");


// function handleTouch(start,end, cbL, cbR){ 
//   var xDist = endX - startX;
//   var yDist = endY - startY;
  
//   console.log(xDist);
//   console.log(yDist);
//    if(endX - startX < 0){
//       cbL();
//     }else{
//       cbR();
//     }
// }

// var left = () =>{   
//   console.log("You swipped left!"); 
// }

// var right = () =>{
//   console.log("You swipped right!");  
// }


// // window.onload = function(){
//  slides.addEventListener('touchstart', function(event){
//    console.log(event);
//    startX = event.touches[0].clientX;
//    startY = event.touches[0].clientY;
//    console.log(`the start is at X: ${startX}px and the Y is at ${startY}px`)
   
//  })
 
//   slides.addEventListener('touchend', function(event){
//    console.log(event);
//    endX = event.changedTouches[0].clientX;
//    endY = event.changedTouches[0].clientY;
//    console.log(`the start is at X: ${endX}px and the Y is at ${endY}px`)
    
//    handleTouch(startX, endX, left, right)
   
//  })
// }
