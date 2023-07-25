const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let imageData = [];

function displayPhoto() {
  imageData.forEach((photos) => {
    const item = document.createElement("a");
    item.setAttribute("href", photos.links.html);
    item.setAttribute("target", "_blank");

    // image element
    const imageEl = document.createElement("img");
    imageEl.setAttribute("src", photos.urls.regular);
    imageEl.setAttribute("alt", photos.alt_description);
    imageEl.setAttribute("title", photos.alt_description);

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

getdata();
