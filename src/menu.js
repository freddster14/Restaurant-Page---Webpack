import './menu.css'
import purpleBoba from './Images/purple-boba.jpg'
import originalBubbleTea from './Images/original-bubble-tea.jpg'
import frappeCoffee from './Images/frappe-coffee.jpg'
import aguita from './Images/aguita.jpg'
import morningBurrito from './Images/morning-burrito.jpg'
import croissant from './Images/croissant.jpg'
import crepas from './Images/crepas.jpg'
import waffles from './Images/waffles.jpg'

export default function menuScreen(){
    const body = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    const title = document.createElement('h1')
    const drinkContainer = document.createElement('div')
    const foodContainer = document.createElement('div');
    const foodTitle = document.createElement("h2")
    const drinkTitle = document.createElement('h2');

    menuContainer.id = "menu-container"
    drinkContainer.id = "drink-container"
    foodContainer.id = "food-container"

    title.textContent = "Menu"
    foodTitle.textContent = "Meals"
    drinkTitle.textContent = "Drinks"
    
    body.appendChild(menuContainer);
    
    menuContainer.appendChild(title);
    menuContainer.appendChild(drinkContainer);
    menuContainer.appendChild(foodContainer);

    drinkContainer.appendChild(drinkTitle);
    foodContainer.appendChild(foodTitle)

    for(let i = 1; i <= 4; i++){
        const drinkImg = new Image();
        const drinkName = document.createElement('p');
        const drinkBox = document.createElement('div');

        drinkName.id = "drink-name-" +i;
        drinkImg.id = "drink-img-" +i;

        drinkBox.classList.add("drink-boxes");
        drinkImg.classList.add("drink-images")

        drinkBox.appendChild(drinkImg);
        drinkBox.appendChild(drinkName);
        drinkContainer.appendChild(drinkBox);
    };
    
    const drinkImg1 = document.querySelector("#drink-img-1");
    const drinkImg2 = document.querySelector("#drink-img-2");
    const drinkImg3 = document.querySelector("#drink-img-3");
    const drinkImg4 = document.querySelector("#drink-img-4");

    drinkImg1.src = purpleBoba;
    drinkImg2.src = originalBubbleTea;
    drinkImg3.src = frappeCoffee;
    drinkImg4.src = aguita;
    

    const drinkName1 = document.querySelector("#drink-name-1");
    const drinkName2 = document.querySelector("#drink-name-2");
    const drinkName3 = document.querySelector("#drink-name-3");
    const drinkName4 = document.querySelector("#drink-name-4");

    drinkName1.textContent = "Vegan Bubble Tea";
    drinkName2.textContent = "Original Bubble Tea";
    drinkName3.textContent = "Frappé Coffee";
    drinkName4.textContent = "Agüita";

    for(let i = 1; i <= 4; i++){
        const foodImg = new Image();
        const foodName = document.createElement('p');
        const foodBox = document.createElement('div');
        
        foodName.id = "food-name-" + i;
        foodImg.id = "food-img-" + i;

        foodBox.classList.add("food-boxes");
        foodImg.classList.add("food-images");

        foodBox.appendChild(foodImg);
        foodBox.appendChild(foodName);
        foodContainer.appendChild(foodBox);
    };

    const foodImg1 = document.querySelector("#food-img-1");
    const foodImg2 = document.querySelector("#food-img-2");
    const foodImg3 = document.querySelector("#food-img-3");
    const foodImg4 = document.querySelector("#food-img-4");

    foodImg1.src = morningBurrito;
    foodImg2.src = croissant;
    foodImg3.src = crepas;
    foodImg4.src = waffles;


    const foodName1 = document.querySelector("#food-name-1");
    const foodName2 = document.querySelector("#food-name-2");
    const foodName3 = document.querySelector("#food-name-3");
    const foodName4 = document.querySelector("#food-name-4");

    foodName1.textContent = "Morning Burrito";
    foodName2.textContent = "Gluten Free Bread";
    foodName3.textContent = "Crepas";
    foodName4.textContent = "Waffles";

    const footer = document.createElement('div');
    const footerText = document.createElement('div');

    footer.id = 'footer-container'
    footerText.id = 'footer-text'
    menuContainer.appendChild(footer);
    footer.appendChild(footerText);

    footerText.innerHTML = '<p>Picture of the <a id="" href="https://lehighvalleystyle.com/food/drinks/yobo-bubble-tea/" target="_blank">purple bubble tea</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href="https://unsplash.com/@rosalindjchang?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">original bubble tea</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href="https://unsplash.com/@pariwatt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">frappe coffee</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href="https://unsplash.com/ja/@clintmckoy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">water</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href="https://unsplash.com/@creativeheadline?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">burrito</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href = "https://unsplash.com/photos/qqIj5pV48-s" target="_blank">croissant</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href="https://unsplash.com/@mdagonakis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">crepas</a>.</p>'
    footerText.innerHTML += '<p>Picture of the <a href="https://unsplash.com/@miracletwentyone?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">waffles</a>.</p>'
    
}