function resize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  resize();
  window.addEventListener("resize", resize);

  function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    let image = event.target;
  
    // Check if the clicked element is an image
    if (image.tagName.toLowerCase() === 'img') {
      // get the src attribute from that element and 'split' it on the "-"
      let src = image.src.split("-");
  
      // construct the new image file name by adding "-full.jpeg" to the first part of the array 
      let fullImagePath = `${src[0]}-full.jpeg`;
  
      // insert the viewerTemplate into the top of the body element
      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImagePath, image.alt));
  
      // add a listener to the close button (X) that calls a function called closeViewer when clicked
      const closeButton = document.querySelector(".close-viewer");
      closeButton.addEventListener("click", closeViewer);
    }
  }

  function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
  }
const gallery = document.querySelector('.gallery');
gallery.addEventListener('click', viewHandler);
