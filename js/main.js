const menuNav = document.getElementById("menu-burger");
const menuContent = document.getElementById("myNav");
const hamburgerElems = document.getElementsByClassName("burger-line");
const bodyTag = document.querySelector("body");
const headerTextLines = document.getElementsByClassName("line-container");

// use barba CSS for page transitions empty hook are overwritten by CSS logic
barba.use(barbaCss);

barba.hooks.beforeEnter(function (data) {
  if (data && data.current.namespace !== data.next.namespace) {
    bodyTag.classList = data.next.namespace;
  }
  if (
    data &&
    data.current.container !== undefined &&
    data.next &&
    (data.next.namespace === "main home" ||
      data.current.namespace === "main home") &&
    data.next !== data.current
  ) {
    toggleHeader(headerTextLines);
  }
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

barba.init({
  transitions: [
    {
      name: "fade",
      beforeOnce(data) {
        console.log(data);
        if (data && data.next && data.next.namespace === "main home") {
          const sloganUlines = document.getElementsByClassName("caption-line");
          Array.prototype.forEach.call(sloganUlines, function (elem) {
            elem.classList.add("active");
          });
        } else if (
          data &&
          data.next &&
          data.current.container === undefined &&
          data.next.namespace !== "main home"
        ) {
          toggleHeader(headerTextLines);
        }
      },
      once() {},
      beforeEnter(data) {
        if (
          (data.trigger.classList &&
            data.trigger.classList.contains("nav-link")) ||
          menuNav.classList.contains("active")
        ) {
          toggleNav();
        }
      },
      leave() {},
      enter() {},
    },
    {
      name: "about",
      to: {
        namespace: ["light about"],
      },
      beforeLeave() {
        if (menuNav.classList.contains("active")) {
          menuNav.classList.remove("active");
          menuContent.classList.remove("active");
          Array.prototype.forEach.call(hamburgerElems, function (elem) {
            elem.classList.remove("active");
          });
        }
      },
      leave() {},
      enter() {},
    },
  ],
  debug: true,
});

function toggleHeader(headerLines) {
  if (!headerLines[0].classList.contains("active")) {
    Array.prototype.forEach.call(headerLines, function (elem) {
      elem.classList.add("active");
      if (elem.classList.contains("inactive")) {
        elem.classList.remove("inactive");
      }
    });
  } else {
    Array.prototype.forEach.call(headerLines, function (elem) {
      elem.classList.remove("active");
      elem.classList.add("inactive");
    });
  }
}

//expanding and folding mobile nav
function toggleNav() {
  //first test if not active
  if (!menuNav.classList.contains("active")) {
    menuNav.classList.add("active");
    menuContent.classList.add("active");

    //iterate through node list as if it was an array
    Array.prototype.forEach.call(hamburgerElems, function (elem) {
      elem.classList.add("active");
      if (elem.classList.contains("inactive")) {
        elem.classList.remove("inactive");
      }
    });
  } else {
    menuNav.classList.remove("active");
    menuContent.classList.remove("active");

    Array.prototype.forEach.call(hamburgerElems, function (elem) {
      elem.classList.remove("active");
      elem.classList.add("inactive");
    });
  }
}
