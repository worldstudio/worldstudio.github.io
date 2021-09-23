const menuNav = document.getElementById("menu-burger");
const menuContent = document.getElementById("myNav");
const hamburgerElems = document.getElementsByClassName("burger-line");
const bodyTag = document.querySelector("body");
const headerTextLines = document.getElementsByClassName("line-container");
const year = new Date().getFullYear();

// use barba CSS for page transitions empty hook are overwritten by CSS logic
barba.use(barbaCss);

barba.hooks.beforeEnter(function (data) {
  // update body class
  if (data && data.current.namespace !== data.next.namespace) {
    bodyTag.classList = data.next.namespace;
  }
  // toggle header when going from or to home page, etc
  if (
    data &&
    data.current.container !== undefined &&
    data.next &&
    (data.next.namespace === "main home" ||
      data.current.namespace === "main home") &&
    data.next.namespace !== data.current.namespace
  ) {
    toggleHeader(headerTextLines);
  }
  // do not re-animate stokes
  if (data.next.namespace === "main home" && data.current.namespace !== undefined) {
    const sloganUlines = document.getElementsByClassName("caption-line");
        Array.prototype.forEach.call(sloganUlines, function (elem) {
          elem.classList.add("initialized");
        });
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  ga('set', 'page', window.location.pathname);
  ga('send', 'pageview');

});

barba.init({
  transitions: [
    {
      name: "fade",
      beforeOnce(data) {
        if (
          data &&
          data.next &&
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
  // debug: true,
});

// update year
document.addEventListener("DOMContentLoaded", function(event) 
{
  document.getElementById("year").innerHTML = year;
})

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