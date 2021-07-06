const popupOpenImages = document.querySelectorAll('[data-popup-image]');
const popupCloseImages = document.querySelectorAll('[data-popup-close]');
const allPopups = document.querySelectorAll('[data-popup]');
const body = document.querySelector("body");

popupOpenImages.forEach(function (item) {
    item.addEventListener('click', function () {
        const popupId = this.dataset.popupImage;
        const popup = document.querySelector('#' + popupId);
        popup.classList.remove('hidden');
        if (popupId === 'image-2' || popupId === 'image-6') {
            popup.querySelector('.popup__close-button').style.color = "#b83868";
        }

        body.classList.add("hidden-scroll");

        popup.querySelector('.popup__body').addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })
})

popupCloseImages.forEach(function (item) {
    item.addEventListener('click', function () {
        const popup = this.closest('[data-popup]');
        popup.classList.add('hidden');
        body.classList.remove("hidden-scroll");
    })
})

allPopups.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
        body.classList.remove("hidden-scroll");
    })
})