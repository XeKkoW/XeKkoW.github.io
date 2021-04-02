/*this code is inspired by the code on https://codepen.io/pbutcher/pen/YEeWzO*/

//this is a variable that contains all the images
var images = document.getElementById('carouselImages');
//this is a variable that contains the caption of one image
var caption = document.getElementById('carouselCaption');
//this is a variable that represent the button previous image on the carousel
var prev = document.getElementById('carouselPrev');
//this is a variable that represent the button next image on the carousel
var next = document.getElementById('carouselNext');

//fecth the json
fetch('js/carousel.json')
	/* fonction to do something with the response*/
.then(function(res) {
  /*get the Json response*/
  res.json().then(function(json) {
    //for all images in the json
    json.forEach(function(el, i) {
      //create an element that is an image of the gallery
      var image = document.createElement('img');
      //set the attribute of this element, src, the alt, the title.
      image.setAttribute('src', el.url);       
      image.setAttribute('alt', el.caption);   
      image.setAttribute('title', el.caption); 
      images.appendChild(image);
    });
    //call the function setupCarousel
    setupCarousel(json);
  });
});

//function that setup the carousel
function setupCarousel(json) {
  //the number of images
  var imageCount = images.childElementCount;
  //create the variable that represent the current image and set it at 1
  var currentImage = 1;
  //image width
  var imageWidth = 1000;
  //function for the previous button
  prev.addEventListener('click', function(event) {
    //allows to stay at the bottom of the page when you click withou this if the carousel isn't at the top of the page when you click on prev, 
    //you go to the top of the page
    event.preventDefault();
    //if the current image isn't the first one
    if(currentImage != 1) {
      //we set the current image to the previous image
      --currentImage;
      //move the image to see it with the marginleft properties
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    //if the current image is the first one
    else if(currentImage == 1){
      //set the current image to the last one
      currentImage = imageCount;
      //move the image to see it with the marginleft properties
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';

    }
    //set the caption of the image
    caption.innerText = json[currentImage - 1].caption;
  });
  //funtion for the next button
  next.addEventListener('click', function(event) {
    //allows to stay at the bottom of the page when you click withou this if the carousel isn't at the top of the page when you click on prev, 
    //you go to the top of the page
    event.preventDefault();
  //if the current image isn't the last one
    if(currentImage != imageCount) {
      //set the current image to the next one
      ++currentImage;
      //move the previous image to see it with the marginleft properties
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    //if the current image is the last one
    else if(currentImage == imageCount){
      //set the current image to the first one
      currentImage = 1;
      //move the previous image to see it with the marginleft properties
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    //set the caption of the image
    caption.innerText = json[currentImage - 1].caption;
  });

}