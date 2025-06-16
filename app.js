let Api_key = "812a756d3744e9def83e97ebe3025a8c"

let input = document.getElementById("search-input");
let showdata = document.getElementById("showdata");
let details = document.getElementById("showdetails");


let SearchData = async () => {

  if(!input.value){

    showdata.innerHTML = `<h2 class="text-danger">Please enter a valid city name!</h3>`
    details.innerHTML = " ";
  }
  else{
    
  try {
showdata.innerHTML = `<div class="text-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`

let Api_Url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${Api_key}&units=metric`; 

let response = await fetch(Api_Url);
let resdata = await response.json();
console.log(resdata);


ShowWeatherData(resdata);
ShowDetails(resdata);
    
      } catch (error) {
    console.log(error);  
          }
     }

}

// Tempreture

let ShowWeatherData = data => {         // data(parameter)

    if(data.cod == `404`){

        showdata.innerHTML = `<h3>No City Found!</h3>`;

    }

    else{
    showdata.innerHTML = `<div>
    <img  class="fw-bolder" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"alt="">
    </div>

    <div>
    <h1>${data.main.temp}°C</h1>                
    <h1>${data.weather[0].main}</h1>
    </div>`

    }                        //for degree  symbol  alt 0176
};

// Details

 let ShowDetails = dataDetail =>{

  if(dataDetail.cod == `404`){

    details.innerHTML = `<h3> No Details Found!</h3>`;

  }

  else{
    details.innerHTML = `
        <h4>${dataDetail.main.feels_like}°C <br><b> (Feels Like) </b></h3>   
        <h4>${dataDetail.main.humidity}% <br><b>(Humidity)</b></h4>  
        <h4>${dataDetail.main.temp_min}°C<br><b>(low)</b></h4> 
        <h4>${dataDetail.main.temp_max}°C<br><b>(High)</b></h4> 
        <h4>${dataDetail.main.pressure}<br><b>(pressure)</b></h4> 
        <h4>${dataDetail.main.sea_level}<br><b>(Sea level)</b></h4> 
       <h4>${dataDetail.wind.speed}km/hr<br><b>(Wind Speed)</b></h4> 
    `
      }

 };
