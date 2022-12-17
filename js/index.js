// функции открытия и закрытия мадальных окон

function openPopup (popup) {
  popup.classList.add('popup__opened');
  document.addEventListener('keydown', handlePressOnEsc);
  // document.body.style.overflow = "hidden";
};




function closePopup (popup) {
  popup.classList.remove('popup__opened');
  document.removeEventListener('keydown', handlePressOnEsc);
  // document.body.style.overflow = "";
};

function handlePressOnEsc (evt) {
  if (evt.key ==='Escape'){
    const popupOpened = document.querySelector('.popup__opened');
    closePopup(popupOpened);
  }
};

function handlePressOverlay (evt) {
  if (evt.target.classList.contains('.popup__opened')){
    closePopup(evt.target);
  }
};



// переменные попапа ВИДЕО
const popupElement = document.querySelector('.popup');
// const popupOpenButton = document.querySelector('.quest__popup');
const popupCloseButton = popupElement.querySelector('.popup__close-btn');



function openPopupVideo () {
  console.log(1)
  openPopup (popupElement);
};

function closePopupVideo () {
  closePopup (popupElement);
};





popupOpenButton.addEventListener('click', openPopupVideo);
popupCloseButton.addEventListener('click', closePopupVideo);
popupElement.addEventListener('mousedown', handlePressOverlay);




// КОД ИЗ ВИДЖЕО ПРО ПОПАПЫ

const popupOpenButtons= document.querySelectorAll('.quest__popup');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

if(popupOpenButtons.length > 0 ) {
  for (let i=0; i<popupOpenButtons.length; i++) {
    const popupOpenButton = popupOpenButton[i];
    popupOpenButton.addEventListener('click', openPopupVideo ());
  }
};
