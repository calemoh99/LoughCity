$(document).ready(function() {
  $("#searchButton").click(function(event) {
    event.preventDefault();
    var searchTerm = $("#searchInput").val();
    // Perform a search operation using the searchTerm variable
    // ...
  });
});

const images = document.querySelectorAll(".image");
let currentImage = 0;

images[currentImage].style.opacity = "1";

document.getElementById("next-button").addEventListener("click", function() {
  images[currentImage].style.opacity = "0";
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.opacity = "1";
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}