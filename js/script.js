const popupOpenImages = document.querySelectorAll('[data-popup-image]');
const popupCloseImages = document.querySelectorAll('[data-popup-close]');
const allPopups = document.querySelectorAll('[data-popup]');

popupOpenImages.forEach(function (item) {
    item.addEventListener('click', function () {
        const popupId = this.dataset.popupImage;
        const popup = document.querySelector('#' + popupId);
        popup.classList.remove('hidden');
        popup.querySelector('.popup__body').addEventListener('click', function (e) {
            e.stopPropagation();
        })
    })
})

popupCloseImages.forEach(function (item) {
    item.addEventListener('click', function () {
        const popup = this.closest('[data-popup]');
        popup.classList.add('hidden');
    })
})

allPopups.forEach(function (item) {
    item.addEventListener('click', function () {
        this.classList.add('hidden');
    })
})