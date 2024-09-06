$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,         // Number of items per slide
        // loop: true,       // Enable looping
        margin: 10,       // Space between items
        nav: true,        // Show next/prev buttons
        autoplay: true,   // Optional: Autoplay slides
        autoplayTimeout: 3000,
        navText: ["<div class='custom-prev'>❮</div>", "<div class='custom-next'>❯</div>"]
    });
  });
