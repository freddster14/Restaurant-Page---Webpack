import './contact.css'
import locationImg from './Images/location-image.svg'
import clockImg from './Images/clock.svg'
import backgroundImg from './Images/background-image.jpg'
import cellphoneImg from './Images/phone.svg'
import mailImg from './Images/email.svg'

export default function contactScreen(){
    const body = document.querySelector('#content');
    const contactContainer = document.createElement('div');
    const contactHeader = document.createElement('div');
    const title = document.createElement('h1');

    const boxInfo1 = document.createElement('div');
    const addressBox = document.createElement('div');
    const phoneBox = document.createElement('div');
    
    const boxInfo2 = document.createElement('div');
    const timeOpenBox = document.createElement('div');
    const emailBox = document.createElement('div');

    const addressImg = new Image();
    const timeOpenImg = new Image();
    const headerImg = new Image();
    const emailImg = new Image();
    const phoneImg = new Image();

    const addressText = document.createElement('p');
    const phoneNumber = document.createElement('p');
    const timeOpenText = document.createElement('p');
    const emailText = document.createElement('p');
    const photoCredit = document.createElement('p');

    contactContainer.id = "contact-container";
    contactHeader.id = "contact-header";
    boxInfo1.id = "info-container-1";
    boxInfo2.id = "info-container-2";
    photoCredit.id = "photo-credit";

    addressBox.classList.add("info-boxes");
    phoneBox.classList.add("info-boxes");
    timeOpenBox.classList.add("info-boxes");
    emailBox.classList.add("info-boxes");

    addressImg.src = locationImg;
    timeOpenImg.src = clockImg;
    headerImg.src = backgroundImg;
    emailImg.src = mailImg;
    phoneImg.src = cellphoneImg;


    title.textContent = 'Contact Us';
    addressText.textContent = '9052 Temple Street Riverdale, GA 30274';
    phoneNumber.textContent = '+1 (123) 456-7890'
    timeOpenText.textContent = 'Mon - Fri: 5:00 AM - 9:00 PM     Sat - Sun: 7:00 AM - 8:00 PM';
    emailText.textContent = 'contact@nats.com'

    photoCredit.innerHTML = 'Background picture: <a href="https://unsplash.com/@matiinu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Matiinu Ramadhan</a>'

    body.appendChild(contactContainer);

    contactContainer.appendChild(contactHeader);
    contactContainer.appendChild(boxInfo1);
    contactContainer.appendChild(boxInfo2);
    contactContainer.appendChild(photoCredit)

    contactHeader.appendChild(headerImg);
    contactHeader.appendChild(title)

    boxInfo1.appendChild(addressBox);
    boxInfo1.appendChild(phoneBox);
    addressBox.appendChild(addressImg);
    addressBox.appendChild(addressText);

    phoneBox.appendChild(phoneImg);
        phoneBox.appendChild(phoneNumber);
        emailBox.appendChild(emailImg);
        emailBox.appendChild(emailText);

    boxInfo2.appendChild(timeOpenBox);
    boxInfo2.appendChild(emailBox);
    timeOpenBox.appendChild(timeOpenImg);
    timeOpenBox.appendChild(timeOpenText);

   


};






//
  