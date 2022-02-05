let button = document.getElementById("button");
let img_url = 'https://dog.ceo/api/breeds/image/random';

button.addEventListener("click",function(){
    let first_name = document.getElementById("firstname");
    first_name = first_name.value;
    let gender_url = 'https://api.genderize.io/?name=';
    let age_url = 'https://api.agify.io/?name=';
    let nationality_url = 'https://api.nationalize.io/?name=';
    gender_url+=first_name;
    age_url+=first_name;
    nationality_url+=first_name;
    getGenderApi(gender_url);
    getAgeApi(age_url);
    getNatonalityApi(nationality_url);
});

async function getImageApi(url){
    const response = await fetch(url);
    const image = await response.json();
    document.getElementById("DogImage").src = image.message;
}
document.addEventListener("onload", getImageApi(img_url));

async function getGenderApi(url){
    const response = await fetch(url);
    const name = await response.json();
    document.getElementById("Gender").innerHTML = name.gender;
}

async function getAgeApi(url){
    const response = await fetch(url);
    const name = await response.json();
    document.getElementById("Age").innerHTML = name.age;
}

async function getNatonalityApi(url){
    const response = await fetch(url);
    const name = await response.json();
    document.getElementById("Nationality").innerHTML = name.country[0];
}
