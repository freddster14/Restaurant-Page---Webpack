import homeScreen from './home.js'
import menuScreen from './menu.js'
import './index.css'
import logo from './logo.png'
import sidebarLogo from './sidebar.png'

const body = document.querySelector("#content");
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button');
const contactBtn = document.createElement('button');
const overlay = document.createElement('div')

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
    title.id = "logo";
    overlay.id = "overlay";

    header.appendChild(topBar);
    topBar.appendChild(title);
    topBar.appendChild(containerBtn);

    containerBtn.appendChild(homeBtn);
    containerBtn.appendChild(menuBtn);
    containerBtn.appendChild(contactBtn);

    body.appendChild(header);
    

    let screenWidth  = window.innerWidth || document.documentElement.clientWidth || 
    document.body.clientWidth;
    if(screenWidth < 761 )runFunction();
    
    function runFunction(){
        const sidebarBtn = document.createElement('input');
        sidebarBtn.type = "image";
        sidebarBtn.src = sidebarLogo;
        sidebarBtn.id = "sidebar-btn";
        topBar.appendChild(sidebarBtn);
        sidebarBtn.addEventListener('click', () => {
        containerBtn.classList.toggle("active");
        overlay.classList.toggle("active");
        });
        return true
    }
    
    let mq = window.matchMedia("(max-width: 760px)");
    
    mq.addListener((event) => {
      if (event.matches) {
        runFunction();
      }else {topBar.removeChild(topBar.lastChild)}
    })

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

body.appendChild(overlay);

