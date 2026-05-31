const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
const targetImage = document.querySelector('.cv-image img');
let i = 1;

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