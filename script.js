const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let imageData = [];

// code for loading images
let ready = false;
let numberOfLoaded = loaderFunction;
let imagesLoaded=0;
let totalImages = imageData.length;


function loaderFunction() {
  imagesLoaded++;
  console.log(imagesLoaded);
  if(imagesLoaded === totalImages){
    ready = true;
  }



}

function setAttributes(element, attributes) {
  for (const item in attributes) {
    element.setAttribute(item, attributes[item]);
  }
}

function displayPhoto() {
  imageData.forEach((photos) => {
    const item = document.createElement("a");

    setAttributes(item, {
      href: photos.links.html,
      target: "_blank",
    });const imageContainer = document.getElementById("image-container");
    const loader = document.getElementById("loader");
    
    let imageData = [];
    
    // code for loading images
    let ready = false;
    let numberOfLoaded = loaderFunction;
    let imagesLoaded=0;
    let totalImages = imageData.length;
    
    
    function loaderFunction() {
      imagesLoaded++;
      console.log("image loaded");
      if(imagesLoaded === totalImages){
        console.log("before"+imagesLoaded);

        ready = true;
        console.log("after"+imagesLoaded);
      }
    
    
    
    }
    
    function setAttributes(element, attributes) {
      for (const item in attributes) {
        element.setAttribute(item, attributes[item]);
      }
    }
    
    function displayPhoto() {
      imageData.forEach((photos) => {
        const item = document.createElement("a");
    
        setAttributes(item, {
          href: photos.links.html,
          target: "_blank",
        });
    
        // image element
        const imageEl = document.createElement("img");
    
        setAttributes(imageEl, {
          src: photos.urls.regular,
          alt: photos.alt_description,
          title: photos.alt_description,
        });
    
        // Add to container
        item.appendChild(imageEl);
        imageContainer.appendChild(item);
      });
    
      imageEl.addEventListener('load', loaderFunction);
    
      // put image in container
      // wrap the image in a href then put the href in a container by appedning
    }
    
    const count = 10;
    const apiKey = "0Mmy76wvVIFoNOpU44w8iYiMIFRwzVm9Knm8i0Oeh1g";
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
    
    // Get data
    async function getdata() {
      try {
        const response = await fetch(apiUrl);
        imageData = await response.json();
        displayPhoto();
      } catch (error) {
        console.log(error);
      }
    }
    
    window.addEventListener("scroll", () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
        ready
      ) {
    
        ready = false;
    
        getdata();
      }
    });
    
    getdata();
    

    // image element
    const imageEl = document.createElement("img");

    setAttributes(imageEl, {
      src: photos.urls.regular,
      alt: photos.alt_description,
      title: photos.alt_description,
    });

    imageEl.addEventListener('load', loaderFunction);

    // Add to container
    item.appendChild(imageEl);
    imageContainer.appendChild(item);
  });



  // put image in container
  // wrap the image in a href then put the href in a container by appedning
}

const count = 10;
const apiKey = "0Mmy76wvVIFoNOpU44w8iYiMIFRwzVm9Knm8i0Oeh1g";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get data
async function getdata() {
  try {
    const response = await fetch(apiUrl);
    imageData = await response.json();
    displayPhoto();
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    console.log("Loading more");
    ready = false;

    getdata();
  }
});

getdata();
