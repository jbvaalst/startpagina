const url = 'https://wttr.in/de bilt?format=+%c+%t 💧 %p %w';


  // Unsplash API
  const apiKey = 'qiGAYz8dmr3ETMNXP7OzpT5PRXd0B1QUWpX0qhOsKR4';
  let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${1}`;

function getWeather() {
  const req = new XMLHttpRequest();
  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.readyState == 4 && req.status == '200') {
        const weather = document.getElementById('weather');
        weather.innerHTML = req.response;
      }
    }
  }
  req.open('GET', url, true);
  req.send();
}

function getTime() {
  let tijd = document.getElementById('Tijd');
  let date = new Date();
  tijd.innerHTML = date;
}


// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    image = await response.json();
    document.getElementById("templatemo_header").style.backgroundImage = image;
  } catch (error) {
    // Catch Error Here
  }
}

function loadJSON(callback) {
  const req = new XMLHttpRequest();
  req.overrideMimeType('application/json');
  req.onreadystatechange = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
      if (req.readyState == 4 && req.status == '200') {
        callback(req.responseText);
      }
    }
  }
  req.open('GET', 'quotes.json', true );
  req.send(null);
}

function setGreeting() {
  let element = document.getElementById('title');
  let d = new Date();
  let time = d.getHours();
  let naam = "Jan-Bart"


  if (time >= 6 && time < 12) {
    element.innerHTML = 'Good morning ' + naam + '!';
  }
  if (time >= 12 && time < 13) {
    element.innerHTML= 'Go eat lunch ' + naam + '!';
  }
  if (time >= 13 && time < 18) {
    element.innerHTML = 'Good afternoon ' + naam + '!';
  }
    if (time >= 18 && time < 24) {
    element.innerHTML = 'Good evening ' + naam + '!';
  }
  if (time >= 0 && time < 6) {
    element.innerHTML = 'Good night ' + naam + '!';
  }
}

function setImg() {
  let a = Math.floor(Math.random() * 2);
  document.getElementById('pict').src = `gifs/${a}.webp`;
}

setGreeting();
getWeather();
setInterval(getTime, 1000);
setImg();
loadJSON((response) => {
  let quotes = JSON.parse(response);
  let randomElement = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerHTML = randomElement.quote;
  document.getElementById('author').innerHTML = randomElement.author || randomElement.source;
})