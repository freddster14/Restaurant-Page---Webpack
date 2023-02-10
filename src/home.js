import purpleBoba from './Images/purple-boba.jpg'
import croissant from './Images/croissant.jpg'
import './home.css'


export default function homeScreen(){
    const body = document.querySelector("#content");
    const homeContainer = document.createElement('div');

    const announcementContainer = document.createElement('div');
    const announcement = document.createElement('div');
    const announcement2 = document.createElement('div');

    const box1 = document.createElement('div');
    const bubbleTea = new Image();
    const textContainer = document.createElement('div');
    const title1 = document.createElement('h2');
    const text1 = document.createElement('p');

    const box2 = document.createElement('div');
    const homeFood = new Image();
    const textContainer2 = document.createElement('div');
    const title2 = document.createElement('h2');
    const text2 = document.createElement('p');

    const footerContainer = document.createElement('div')
    const endingTitle = document.createElement('p')

    bubbleTea.src = purpleBoba;
    homeFood.src = croissant;

    announcement.textContent = "Sign up for NAT Rewards"
    announcement2.textContent = "Try all of ours refreshing drinks 50% off on Tuesday."

    title1.textContent = "Summers Night"
    text1.textContent = "Ask for our new vegan bubble tea, available for a limited time!"

    title2.textContent = "Crispy Bread"
    text2.textContent = "Our new available croissant are freshly baked before opening."

    endingTitle.innerHTML = '<p>Thanks to <a id="starbucks-link" href="https://www.starbucks.com/" target="_blank">Starbucks</a> for page inspiration.</p><p>Picture of the <a id="" href="https://lehighvalleystyle.com/food/drinks/yobo-bubble-tea/" target="_blank">purple bubble tea</a>.</p><p>Picture of the <a href = "https://unsplash.com/photos/qqIj5pV48-s" target="_blank">croissant</a>.</p>'

    homeContainer.id = 'home-container'
    announcementContainer.id = 'announcement-container'
    announcement.id = 'announcement'
    announcement2.id = 'announcement-2'
    box1.id = 'box-1'
    box2.id = 'box-2'
    textContainer.id = 'text-container-1'
    textContainer2.id = 'text-container-2'
    bubbleTea.id = 'bubble-tea'
    homeFood.id = 'croissant-img'
    footerContainer.id = 'footer-container'
    endingTitle.id = 'footer'

    announcementContainer.appendChild(announcement);
    announcementContainer.appendChild(announcement2);

    textContainer.appendChild(title1);
    textContainer.appendChild(text1);
    box1.appendChild(bubbleTea);
    box1.appendChild(textContainer);

    textContainer2.appendChild(title2);
    textContainer2.appendChild(text2);
    box2.appendChild(textContainer2);
    box2.appendChild(homeFood);

    footerContainer.appendChild(endingTitle);

    homeContainer.appendChild(announcementContainer);
    homeContainer.appendChild(box1);
    homeContainer.appendChild(box2);
    homeContainer.appendChild(footerContainer);

    body.appendChild(homeContainer);
}
