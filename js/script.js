const popupOpenImages = document.querySelectorAll('.featured-works__image');
const popupImages = document.querySelector('.popup__image');
const popupCloseImages = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const body = document.querySelector("body");
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
                popupCloseImages.style.color = '#6EEEE4';
            }

            popup.querySelector('.popup__body').addEventListener('click', function (e) {
                e.stopPropagation();
            });
        });
    });
}

function popupCloseImage(item) {
    item.addEventListener('click', function () {
        popup.classList.remove('open');
        bodyUnlock();
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
        popup.classList.remove('open');
        bodyUnlock();
    }
});