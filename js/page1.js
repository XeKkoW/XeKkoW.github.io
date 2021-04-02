/*function to correct a problem with my code, I don't know why but there is some space that I don't writte in the code that appears on the pages*/
var el = document.querySelector('html');
el.innerHTML = el.innerHTML.replace(/&nbsp;/g,'');

