let navLinks = document.querySelectorAll(".navbar .navbar-nav .nav-link");

navLinks.forEach((el) => {
  el.addEventListener("click", (_) => {
    for (i = 0; i < navLinks.length; i++) {
      navLinks[i].classList.remove("active");
    }
    el.classList.add("active");
  });
});

/*be active when arrive to section*/

let features = document.querySelector("#features");
let portfolio = document.querySelector("#portfolio");
let about = document.querySelector("#about-us");
let blog = document.querySelector(".our-blog");

window.addEventListener("scroll", (e) => {
  if (window.scrollY < features.offsetTop) {
    navLinks.forEach((el) => {
      if (el === navLinks[0]) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  } else if (window.scrollY >= features.offsetTop - 20 && window.scrollY <= features.offsetTop + features.offsetHeight - 20) {
    navLinks.forEach((el) => {
      if (el.attributes.href.value === "#features") {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  } else if (window.scrollY >= portfolio.offsetTop - 20 && window.scrollY <= portfolio.offsetTop + portfolio.offsetHeight - 20) {
    navLinks.forEach((el) => {
      if (el.attributes.href.value === "#portfolio") {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  } else if (window.scrollY >= about.offsetTop - 20 && window.scrollY <= about.offsetTop + about.offsetHeight - 20) {
    navLinks.forEach((el) => {
      if (el.attributes.href.value === "#about-us") {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  } else if (window.scrollY >= blog.offsetTop - 20) {
    navLinks.forEach((el) => {
      if (el.attributes.href.value === "#contact") {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  } else {
    navLinks.forEach((el) => {
      el.classList.remove("active");
    });
  }
});
/*portfolio*/

let portfolioLi = document.querySelectorAll(".portfolio ul li");

portfolioLi.forEach((el) => {
  el.addEventListener("click", (_) => {
    for (i = 0; i < portfolioLi.length; i++) {
      portfolioLi[i].classList.remove("active");
      portfolioLi[i].classList.remove("rounded-pill");
    }
    el.classList.add("active");
    el.classList.add("rounded-pill");
  });
});

let portfolioBox = document.querySelectorAll(".pro");

portfolioLi.forEach((el) => {
  el.addEventListener("click", () => {
    if (el.innerHTML !== "all") {
      portfolioBox.forEach((e) => {
        if (e.children[0].attributes[1].value === el.innerHTML) {
          // e.style.display = "flex";
          e.classList.remove("hide");
          e.classList.add("show");
        } else {
          // e.style.display = "none";
          e.classList.add("hide");
          e.classList.remove("show");
        }
      });
    } else {
      portfolioBox.forEach((e) => {
        // e.style.display = "flex";
        e.classList.remove("hide");
        e.classList.add("show");
      });
    }
  });
});
/*go to top*/
let topBar = document.querySelector(".top");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 650) {
    topBar.style.opacity = "1";
    topBar.style.zIndex = "100";
  } else {
    topBar.style.opacity = "0";
    topBar.style.zIndex = "-100";
  }
});
