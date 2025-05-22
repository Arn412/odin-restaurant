import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
home();
const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const aboutBtn = document.querySelector(".about-btn");


homeBtn.onclick = () =>{home()};
menuBtn.onclick = () =>{menu()};
aboutBtn.onclick = () =>{about()};
