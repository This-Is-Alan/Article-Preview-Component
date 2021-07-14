const shareButton = document.getElementById('share');
const mobileShareButton = document.getElementById('share-mobile');
const popUp = document.querySelector('.card-share-pop');
const mobilePopUp = document.querySelector('.pop-button__wrapper');

function showPopDesktop(){
    popUp.classList.toggle('card-share-pop--active');
}

function showPopMobile(){
    mobilePopUp.classList.toggle('pop-button__wrapper--active');
}

shareButton.addEventListener('click', showPopDesktop);
mobileShareButton.addEventListener('click', showPopMobile);
