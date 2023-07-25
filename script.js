const count = 10;
const apiKey = "0Mmy76wvVIFoNOpU44w8iYiMIFRwzVm9Knm8i0Oeh1g";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get data
async function getdata() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getdata();
