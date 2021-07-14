lightbox.option({
    'disableScrolling':	true,
    'fadeDuration': 800,
})


/*// Popup
const popupOpenImages = document.querySelectorAll('.featured-works__image');
const popupImages = document.querySelector('.popup__image');
const popupCloseImages = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const timeout = 1000;

if (popupOpenImages.length > 0) {
    popupOpenImages.forEach(function (item) {
        item.addEventListener('click', function () {
            const imageSrc = this.getAttribute('src');
            popupImages.setAttribute('src', imageSrc);
            popup.classList.add('open');
            bodyLock();

            if (imageSrc === 'image/banner-pic2.jpg' || imageSrc === 'image/banner-pic6.jpg') {
                popupCloseImages.style.color = '#b83868';
            } else {
                popupCloseImages.style.color = '#6eeee4';
            }

            popup.querySelector('.popup__body').addEventListener('click', function (e) {
                e.stopPropagation();
            });

        });
    });
}

function popupCloseImage(item) {
    item.addEventListener('click', function () {
        popupLock();
    });
}

popupCloseImage(popupCloseImages);
popupCloseImage(popup);

function bodyLock() {
    const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('hidden-scroll');
}

function bodyUnlock() {
    setTimeout(function () {
        body.style.paddingRight = '0px';
        body.classList.remove('hidden-scroll');
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        popupLock();
    }
});

const popupLock = () => {
    popup.classList.remove('open');
    bodyUnlock();
}

// Initialize slider
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector('.slider-container');
const row = document.querySelector('.slider-row');
const buttonPrev = document.querySelector('.slider-button-prev');
const buttonNext = document.querySelector('.slider-button-next');
const items = document.querySelectorAll('.slider-item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach(function (item) {
  item.style.minWidth = `${itemWidth}px`;
});

buttonNext.addEventListener('click', function () {
    const itemRemain = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

    position -= (itemRemain >= slidesToScroll) ? movePosition : itemRemain * itemWidth;

    setPosition();
    checkButtons();
});

buttonPrev.addEventListener('click', function () {
   const itemRemain = Math.abs(position) / itemWidth;

   position += (itemRemain >= slidesToScroll) ? movePosition : itemRemain * itemWidth;

   setPosition();
   checkButtons();
});

const setPosition = () => {
   row.style.transform = `translateX(${position}px)`;
};

const checkButtons = () => {
    buttonPrev.disabled = (position === 0);
    buttonNext.disabled = (position <= -(itemsCount - slidesToShow) * itemWidth);
};

checkButtons();*/

