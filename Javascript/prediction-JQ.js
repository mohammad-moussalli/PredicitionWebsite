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
    function getGenderApi(){
        $.ajax({type: 'GET', url: gender_url, success: function(url){
            $('#Gender').append(url.gender);
          }});
    }
    function getAgeApi(){
        $.ajax({type: 'GET', url: age_url, success: function(url){
            $('#Age').append(url.age);
        }});
    }
    function getNationalityApi(){
        $.ajax({type: 'GET', url: nationality_url, success: function(url){
            let countries = url.country;
            let nationalities = countries.map(function(element){
                return element.country_id;
            })
            $('#Nationality').append(nationalities);
        }});
    }
    $("#Gender").text("Gender: ");
    $("#Age").text("Age: ");
    $("#Nationality").text("Nationality: ");
    getGenderApi();
    getAgeApi();
    getNationalityApi();
});

$(window).on("load", function(){
    $.ajax({type: 'GET', url: img_url, success: function(url){
      $('img').attr("src",url.message);
    }});
});




