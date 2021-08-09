const menuNav = document.getElementById("menu-burger");
const menuConent = document.getElementById("myNav");
const hamburgerElems = document.getElementsByClassName("burger-line");
const bodyTag = document.querySelector("body");

// use barba for page transitions
barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: "fade",
      beforeEnter(data) {
        data.next;
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
      enter(data) {
        console.log(data.current);
        console.log(data.next);
      },
    },
  ],
  // views: [
  // {
  //   namespace: "feed",
  //   beforeEnter() {
  //     bodyTag.classList.add("feed");
  //   },
  //   beforeLeave() {
  //     bodyTag.classList.remove("feed");
  //   },
  // },
  // ],
  debug: true,
});

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
