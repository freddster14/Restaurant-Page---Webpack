import homeScreen from './home.js'
import menu from './menu.js'
import './index.css'

import logo from './logo.png'

const body = document.querySelector("#content");
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');

function header(){
    const topBar = document.createElement('div');
    const title = new Image();
    const containerBtn = document.createElement('div');
    const header = document.createElement('div');

    title.src = logo

    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    title.textContent = "NAT'S";

    header.id = "header";
    topBar.id = "top-bar";
    containerBtn.id = "container-btn";
    homeBtn.id = "home-btn";
    menuBtn.id = "menu-btn";
    title.id = "title";

    header.appendChild(topBar);
    topBar.appendChild(title);
    topBar.appendChild(containerBtn);

    containerBtn.appendChild(homeBtn);
    containerBtn.appendChild(menuBtn);
    containerBtn.appendChild(contactBtn);

    body.appendChild(header);

}

function removeContent(){
    body.removeChild(body.lastChild)
}

function showHome(){
    if(body.children.length > 1)removeContent();
    homeScreen();
}

function showMenu(){
    if(body.children.length > 1)removeContent();
    menuScreen();
}

homeBtn.addEventListener('click', () => showHome())

header();
showHome();
