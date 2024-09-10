let ul_menu = document.querySelector(".menu");
let menu_icon = document.querySelector(".menu-icon");
let icons = document.querySelectorAll("i");
let section = document.querySelector("section");

ul_menu.style.maxHeight = "0px";

menu_icon.onclick = menu;

function menu() {
  toggle();
  if (ul_menu.style.maxHeight == "0px") {
    ul_menu.style.maxHeight = "300px";
    section.style.marginTop = "50px";
  } else {
    section.style.marginTop = "0px";
    ul_menu.style.maxHeight = "0px";
  }
}

function toggle() {
  icons.forEach((e) => {
    e.classList.toggle("remove");
  });
}

let nav = document.querySelector("nav");
let infoH1 = document.querySelector("section .info h1");
let infoP = document.querySelector("section .info p");
let line = document.querySelector("section .line");
let landing = document.querySelector(".landing");
let content = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", () => {
  content.style = "display:none;";
  setTimeout(() => {
    landing.style = "display:none;";
    content.style = "display:block;";
  }, 3000);
  setTimeout(() => {
    nav.style = "top:0;";
  }, 4500);
  setTimeout(() => {
    infoP.style = "opacity:1;top:0px;transition:all .5s ease-out";
  }, 4000);
  setTimeout(() => {
    infoH1.style = "opacity:1;top:0px;transition:all .5s ease-out";
  }, 3500);
  line.style = "opacity:1;transition:all .5s 2.5s ease-out";
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

document.addEventListener("aos:in", ({ detail }) => {
  if (detail.classList.contains("element")) {
    detail.classList.add("animated");
  }
});

let btn = document.querySelector(".contact .message button");
let theName = document.querySelector(".contact .message [type = text]");
let theEmail = document.querySelector(".contact .message [type = email]");
let theMessage = document.querySelector(".contact .message textarea");

btn.addEventListener("click", function () {
  let regEx = /\w+@\w+.\w+/gi;
  if (theName.value != "" && theEmail.value.match(regEx)) {
    theEmail.value = "";
    theName.value = "";
    theMessage.value = "";
  }
});

AOS.init({
  offset: 200,
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});
