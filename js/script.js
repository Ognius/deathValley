// lightbox gallery for <section class="featured-works">
lightbox.option({
    'fadeDuration': 800,
});

// hover-effect for <section class="small-team">
const smallTeamContent = document.querySelector('.small-team__content');
const smallTeam = [
    {
        name: 'AL RAYHAN',
        position: 'UI Designer',
        imageUrl: 'images/team-pic1.jpg',
        imageAlt: 'Small Team image 1',
    },
    {
        name: 'AL RAYHAN',
        position: 'UI Designer',
        imageUrl: 'images/team-pic2.jpg',
        imageAlt: 'Small Team image 2',
    },
    {
        name: 'AL RAYHAN',
        position: 'UI Designer',
        imageUrl: 'images/team-pic3.jpg',
        imageAlt: 'Small Team image 3',
    },
    {
        name: 'AL RAYHAN',
        position: 'UI Designer',
        imageUrl: 'images/team-pic4.jpg',
        imageAlt: 'Small Team image 4',
    },
    {
        name: 'AL RAYHAN',
        position: 'UI Designer',
        imageUrl: 'images/team-pic5.jpg',
        imageAlt: 'Small Team image 5',
    },
    {
        name: 'AL RAYHAN',
        position: 'UI Designer',
        imageUrl: 'images/team-pic6.jpg',
        imageAlt: 'Small Team image 6',
    }
];

let smallTeamMembers = smallTeam.map(function (item) {return (
    `<li class="small-team__item">
        <img alt="${item.imageAlt}" class="small-team__image" src="${item.imageUrl}">
        <div class="small-team__info">
            <p class="small-team__name"><span class="small-team__job">${item.name}</span> / ${item.position}</p>
            <p class="small-team__about-person">Lorem Ipsum is not simply is an action designer random text.
                <br>It has roots in a piece.</p>
            <ul class="small-team__social-links">
                <li><a class="small-team__social-item" href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a class="small-team__social-item" href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a class="small-team__social-item" href="#"><i class="fab fa-dribbble"></i></a></li>
                <li><a class="small-team__social-item" href="#"><i class="far fa-envelope"></i></a></li>
            </ul>
        </div>
     </li>`
)});

smallTeamContent.innerHTML = smallTeamMembers.join('');

// button Scroll Up
const insertButton = document.body;

insertButton.insertAdjacentHTML('beforeend', '<button onclick="scrollUpFunction()" id="toTop" title="Go to top"><i class="fas fa-arrow-circle-up"></i></button>');

const selectButton = document.getElementById('toTop');
const setTransition = document.querySelector('.fas');

selectButton.setAttribute('style',
    `font-size: 40px;
    display: none;
    position: fixed;
    bottom: 5px;
    right: 18px;
    background: none;
    border: none;
    outline: none;
    color: #71f6eb;
    cursor: pointer;`);

setTransition.setAttribute('style', 'transition: all .5s ease-out;');

document.documentElement.setAttribute('style', 'scroll-behavior: smooth;');

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        selectButton.style.display = 'block';
    } else {
        selectButton.style.display = 'none';
    }
}

function scrollUpFunction() {
    document.documentElement.scrollTop = 0;
}

function setColor(e) {
    if (e.type === 'mouseover') {
        e.target.style.color = '#616161';
    } else if (e.type === 'mouseout') {
        e.target.style.color = '#71f6eb';
    } else if (e.type === 'click') {
        e.target.style.color = '#eaeaab';
    }
}
selectButton.addEventListener('mouseover', setColor);
selectButton.addEventListener('mouseout', setColor);
selectButton.addEventListener('click', setColor);

// Animation
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;
            
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('anim-no-hide')) {
                    animItem.classList.remove('active');
                }
            }
        }
    }
    function offset (el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);
    
}