
const fNameSpan = document.querySelector('#fName');
const contactParagraph = document.querySelector('#contactDetails');
const experienceParagraph = document.querySelector('#experience');
const educationParagraph = document.querySelector('#education');
const qualificationParagraph = document.querySelector('#qualification');
const languagesParagraph = document.querySelector('#languages');
const interestsList = document.querySelector('#interests');


const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const targetImage = document.querySelector('.cv-image img');
let i = 1;


window.onload = () => {

   
    fetch('cvdata.json')
    .then(response => response.json())
    .then(data => {

        console.log(data);

       
        fNameSpan.textContent = data.fName;
        
        
        contactParagraph.innerHTML = data.fName + " " + data.lName + "<br>" + 
                                     data.email + "<br>" + 
                                     data.address + "<br>" + 
                                     data.phone;

        experienceParagraph.textContent = data.experience;
        educationParagraph.textContent = data.education;
        qualificationParagraph.textContent = data.qualification;
        languagesParagraph.innerHTML = data.languages; 

       
        for(let j = 0; j < data.interests.length; j++) {
            let li = document.createElement('li');
            li.innerHTML = data.interests[j];
            interestsList.appendChild(li);
        }
    });
};


targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {
        if(i === images.length) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++; 

        targetImage.style.opacity = '1';
    }, 200);

});