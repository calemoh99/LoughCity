const images = document.querySelectorAll('.image');
let currentImage = 0;

images.forEach(image => {
  image.style.display = 'none';
  image.style.transition = 'opacity 0.6s ease-in-out';
});
images[currentImage].style.display = 'block';

setInterval(function() {
  images[currentImage].style.opacity = 0;
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].style.display = 'block';
  images[currentImage].style.opacity = 1;
}, 6000);
