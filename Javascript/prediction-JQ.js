let button = $("#button");
let img_url = 'https://dog.ceo/api/breeds/image/random';

button.click(function(){
   
    let first_name = $("#firstname");
    first_name = first_name.val();
    let gender_url = 'https://api.genderize.io/?name=';
    let age_url = 'https://api.agify.io/?name=';
    let nationality_url = 'https://api.nationalize.io/?name=';
    gender_url+=first_name;
    age_url+=first_name;
    nationality_url+=first_name;
    $("#Gender").text("Gender: ");
    $("#Age").text("Age: ");
    $("#Nationality").text("Nationality: ");
    getGenderApi(gender_url);
    getAgeApi(age_url);
    getNatonalityApi(nationality_url);
});



$.on("load",function(){
    $.ajax({url: img_url, success: function(result){
      $("#DogImage").attr("src",result);
    }});
  });

async function getGenderApi(url){
    const response = await fetch(url);
    const name = await response.json();
    document.getElementById("Gender").textContent += name.gender;
}

async function getAgeApi(url){
    const response = await fetch(url);
    const name = await response.json();
    document.getElementById("Age").textContent += name.age;
}

async function getNatonalityApi(url){
    const response = await fetch(url);
    const name = await response.json();
    let countries = name.country
    let nationalities = countries.map(function(element){
        return element.country_id;
    });
    document.getElementById("Nationality").textContent += nationalities;
}
