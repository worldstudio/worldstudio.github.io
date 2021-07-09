const menuNav = document.getElementById("menu-burger");
const menuConent = document.getElementById("myNav");
const hamburgerElems = document.getElementsByClassName("burger-line");

//expanding and folding mobile nav
function toggleNav() {
    // console.log(menuNav);

    if (!menuNav.classList.contains("active")) {
      menuNav.classList.add("active");
      menuConent.classList.add("active");
  
      //iterate through node list as if it was an array
      Array.prototype.forEach.call(hamburgerElems, function (elem) {
        elem.classList.add("active");
        if (elem.classList.contains("inactive")) {
          elem.classList.remove("inactive");
        }
      });
  
    } else {
      menuNav.classList.remove("active");
      menuConent.classList.remove("active");
  
      Array.prototype.forEach.call(hamburgerElems, function (elem) {
        elem.classList.remove("active");
        elem.classList.add("inactive");
      });
  
    }
  }

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


// var startX;
// var startY;
// var endX;
// var endY;
// var treshold = 100; //threshold for noise

// var slidesName = document.getElementsByClassName("themeMain");
// var firstSlide = slidesName[0];

// var swipe  = document.getElementById("swipe");

// // test for mobile
// function isMobileDevice() {
//     return (window.innerWidth < 480); 
// }; 
// // || (window.innerWidth < 500); -- keep for tests
// // (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1) || 

// function handleTouch(start,end, cbL, cbR){ 
//   var xDist = endX - startX;
//   var yDist = endY - startY;

//   console.log(xDist);
//   console.log(Math.abs(endY - startY));

//    if(endX - startX < -1.0*treshold && Math.abs(endY - startY) < treshold){
//       cbL();
//     }
//     if (endX - startX > treshold && Math.abs(endY - startY) < treshold) {
//       cbR();
//     }
// };

// var firstTheme = 0;

// if (isMobileDevice() == true) {
// 	mobileLayout()
// }


// function mobileLayout() {
// // animate sliding card deck

// 	window.addEventListener('touchstart', function(event){
// 	   console.log(event);
// 	   swipe.style.display = "none";
// 	  });
	   


// 	orderThemes(firstTheme);

// 	function plusSlides(n) {
// 	  orderThemes(firstTheme += n);
// 	}

// 	function currentSlide(n) {
// 	  orderThemes(firstTheme = n);
// 	}


// 	var left = () =>{   
// 	  plusSlides(1);
// 	};


// 	var right = () =>{
// 	  plusSlides(-1);
// 	};


// 	function orderThemes(n) {
// 	  var i;
	  
// 	  if (n >= slidesName.length) {
// 	    firstTheme = 0;
// 	  }
// 	  if (n < 0) {
// 	    firstTheme = slidesName.length - 1;
// 	  }

// 	  for (i = 0; i < slidesName.length; i++) {
// 	  	var activeSlide = (firstTheme+i) % (slidesName.length);

// 	    slidesName[activeSlide].style.zIndex = Math.abs(i - slidesName.length);
// 	    slidesName[activeSlide].style.top = String(i*5) + "px";
// 	    slidesName[activeSlide].style.left = String(i*5) + "px";
// 	    // console.log("active slide index:" + activeSlide);
	    
// 	  }
// 	 // console.log("this is the going number" + firstTheme);
	 
// 	 slidesName[firstTheme].addEventListener('touchstart', function(event){
// 	   console.log(event);
// 	   startX = event.touches[0].clientX;
// 	   startY = event.touches[0].clientY;
// 	   // console.log(`the start is at X: ${startX}px and the Y is at ${startY}px`)
	   
// 	  });
	 
// 	 slidesName[firstTheme].addEventListener('touchend', function(event){
// 	   console.log(event);
// 	   endX = event.changedTouches[0].clientX;
// 	   endY = event.changedTouches[0].clientY;
// 	   // console.log(`the start is at X: ${endX}px and the Y is at ${endY}px`)
	    
// 	   handleTouch(startX, endX, left, right)
	   
// 	  }); 
// 	}
// };