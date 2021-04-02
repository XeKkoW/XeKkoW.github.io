/*this code is inspired by the code on https://codepen.io/pbutcher/pen/bGBmwJv*/

/*this is a variable that contains all the image*/
	var gallery = document.getElementById('gallery');

	//fetch the json
	fetch('js/gallery.json')
	/* fonction to do something with the response*/
	.then(function(res){
		/*get the Json response*/
		res.json().then(function(json){
			//for all images in the json
			json.images.forEach(function(el){
				//it create an element that is an item of the gallery
				var galleryItem = document.createElement('a');
				//set the attribute of this element, like the class, the link, the target.
				galleryItem.setAttribute('class','galleryItem');
				galleryItem.setAttribute('href',el.url);
				galleryItem.setAttribute('target','_blank');
				//create an element that is an image of the gallery
				var image = document.createElement('img');
				//set the attribute of this element, src, the alt, the title.
				image.setAttribute('src',el.url);
				image.setAttribute('alt',el.caption);
				image.setAttribute('title',el.caption);
				//create an element which is the caption of the image
				var caption = document.createElement('caption');
				//set the caption
				caption.innerText = el.caption;
				//attached an image to a galleryItem as a child
				galleryItem.appendChild(image);
				//attached the caption of the image to a gallryItem as a child
				galleryItem.appendChild(caption);
				//attached the galleryItem to the gallery as a child
				gallery.appendChild(galleryItem);
			});
		});
	});
