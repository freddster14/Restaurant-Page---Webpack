import homeScreen from './home.js'
import menu from './menu.js'
import './index.css'
import purpleBoba from './purple-boba.jpg'
import croissant from './croissant.jpg'
const body = document.querySelector("#content");

const topBar = document.createElement('div');

const title = document.createElement('h1');
const containerBtn = document.createElement('div');
const homeBtn = document.createElement('button');
const menuBtn = document.createElement('button')
const contactBtn = document.createElement('button')
const header = document.createElement('div')

homeBtn.textContent = "Home"
menuBtn.textContent = "Menu"
contactBtn.textContent = "Contact"
title.textContent = "NAT'S"

header.id = "header"
topBar.id = "top-bar"
containerBtn.id = "container-btn"
homeBtn.id = "home-btn"
menuBtn.id = "menu-btn"
title.id = "title"

header.appendChild(topBar)
topBar.appendChild(title)
topBar.appendChild(containerBtn)

containerBtn.appendChild(homeBtn)
containerBtn.appendChild(menuBtn)
containerBtn.appendChild(contactBtn)

body.appendChild(header)

function removeContent(){
    body.removeChild(body.lastChild)
}

function showHome(){
    removeContent();
    home();
}

//
const menuContainer = document.createElement('div')

const announcementContainer = document.createElement('div')
const announcement = document.createElement('div')
const announcement2 = document.createElement('div')

const box1 = document.createElement('div')
const bubbleTea = new Image()
const textContainer = document.createElement('div')
const title1 = document.createElement('h2')
const text1 = document.createElement('p')

const box2 = document.createElement('div')
const homeFood = new Image()
const textContainer2 = document.createElement('div')
const title2 = document.createElement('h2')
const text2 = document.createElement('p')

bubbleTea.src = purpleBoba
homeFood.src = croissant

announcement.textContent = "Sign up for NAT Rewards to get 20% off your next order!"
announcement2.textContent = "Try all of ours refreshing drinks 50% off on Tuesday."

title1.textContent = "Summers Night"
text1.textContent = "Ask for our new vegan bubble tea, available for a limited time!"

title2.textContent = "Crispy Bread"
text2.textContent = "Our new available croissant are freshly baked before opening."

menuContainer.id = 'menu-container'
announcementContainer.id = 'announcement-container'
announcement.id = 'announcement'
announcement2.id = 'announcement-2'
box1.id = 'box-1'
box2.id = 'box-2'
textContainer.id = 'text-container-1'
textContainer2.id = 'text-container-2'
bubbleTea.id = 'bubble-tea'
homeFood.id = 'croissant-img'

announcementContainer.appendChild(announcement)
announcementContainer.appendChild(announcement2)

textContainer.appendChild(title1)
textContainer.appendChild(text1)
box1.appendChild(bubbleTea)
box1.appendChild(textContainer)

textContainer2.appendChild(title2)
textContainer2.appendChild(text2)
box2.appendChild(textContainer2)
box2.appendChild(homeFood)

menuContainer.appendChild(announcementContainer)
menuContainer.appendChild(box1)
menuContainer.appendChild(box2)

body.appendChild(menuContainer)



