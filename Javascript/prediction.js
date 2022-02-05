let first_name = document.getElementById("firstname");
let button = document.getElementById("button");


let img_url = 'https://dog.ceo/api/breeds/image/random';

let urls = [
    'https://api.genderize.io/?name=caline',
    'https://api.agify.io/?name=joe',
    'https://api.nationalize.io/?name=mohamad'
];

async function getApi(url) {
    
    const response = await fetch(url);
    const image = await response.json();
    show(image);
}

function show(data) {
    const random = Math.floor(Math.random()*100);
    document.getElementById("DogImage").src = data.message;
}

document.addEventListener("onload", getApi(img_url));
