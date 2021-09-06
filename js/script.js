// lightbox gallery for <section class="featured-works">
lightbox.option({
    'fadeDuration': 800,
});

// hover-effect for <section class="small-team">
const smallTeamImages = document.querySelectorAll('.small-team__image');

if (smallTeamImages.length > 0) {
    smallTeamImages.forEach(function (item) {
        item.insertAdjacentHTML("afterend",
            `<div class="small-team__info">
                      <p class="small-team__name"><span class="small-team__job">AL RAYHAN</span> / UI Designer</p>
                      <p class="small-team__about-person">Lorem Ipsum is not simply is an action designer random text.
                          <br>It has roots in a piece.</p>
                      <ul class="small-team__social-links">
                          <li><a class="small-team__social-item" href="#"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a class="small-team__social-item" href="#"><i class="fab fa-twitter"></i></a></li>
                          <li><a class="small-team__social-item" href="#"><i class="fab fa-dribbble"></i></a></li>
                          <li><a class="small-team__social-item" href="#"><i class="far fa-envelope"></i></a></li>
                      </ul>
                  </div>`);
    })
}
