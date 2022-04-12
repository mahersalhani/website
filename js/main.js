let topBar = document.querySelector(".top");
console.log(topBar);

window.addEventListener("scroll", (_) => {
  if (window.scrollY >= 500) {
    topBar.style.opacity = "1";
    topBar.style.zIndex = "100";
  } else {
    topBar.style.opacity = "0";
    topBar.style.zIndex = "-1";
  }
});
