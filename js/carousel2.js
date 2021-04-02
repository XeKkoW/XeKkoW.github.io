//same as the carousel.js but with a different json


var images = document.getElementById('carouselImages');
var caption = document.getElementById('carouselCaption');
var prev = document.getElementById('carouselPrev');
var next = document.getElementById('carouselNext');


fetch('js/carousel2.json')
.then(function(res) {
  res.json().then(function(json) {
    json.forEach(function(el, i) {
      var image = document.createElement('img');
      image.setAttribute('src', el.url);       
      image.setAttribute('alt', el.caption);   
      image.setAttribute('title', el.caption); 
      images.appendChild(image);
    });
    setupCarousel(json);
  });
});


function setupCarousel(json) {
  var imageCount = images.childElementCount;
  var currentImage = 1;
  var imageWidth = 1000;
  prev.addEventListener('click', function(event) {
    event.preventDefault();
    if(currentImage != 1) {
      --currentImage;
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    else if(currentImage == 1){
      currentImage = imageCount;
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';

    }
    
    caption.innerText = json[currentImage - 1].caption;
  });
  next.addEventListener('click', function(event) {
    event.preventDefault();
   
    if(currentImage != imageCount) {
      ++currentImage;
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }

    else if(currentImage == imageCount){
      currentImage = 1;
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    
    caption.innerText = json[currentImage - 1].caption;
  });

}
