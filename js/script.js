const popupOpenImages = document.querySelectorAll('.featured-works__image');
const popupImages = document.querySelector('.popup__image');
const popupCloseImages = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const body = document.querySelector("body");

popupOpenImages.forEach(function (item) {
    item.addEventListener('click', function () {
        const imageSrc = this.getAttribute('src');
        popupImages.setAttribute('src', imageSrc);
        popup.classList.remove('hidden');
        body.classList.add("hidden-scroll");

        if (imageSrc === 'image/banner-pic2.jpg' || imageSrc === 'image/banner-pic6.jpg') {
            popupCloseImages.style.color = "#b83868";
        } else {
            popupCloseImages.style.color = "#6EEEE4";
        }

        popup.querySelector('.popup__body').addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});

function closeImage(item) {
    item.addEventListener('click', function () {
        popup.classList.add('hidden');
        body.classList.remove("hidden-scroll");
    });
}

closeImage(popupCloseImages);
closeImage(popup);