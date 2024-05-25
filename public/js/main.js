const submitBtn = document.getElementById('submitBtn');

const cityname = document.getElementById('cityname');

const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status')


const city_name = document.getElementById('city_name')

const datahide = document.querySelector('.middle_layer_date_time')

// const temp_mood = document.getElementById('temp_mood');
const getInfo = async(event)=>{
  event.preventDefault();

  let cityVal = cityname.value;




  if(cityVal ===" "){

    city_name.innerText = "plz write city name before search!!"

    datahide.classList.add('data_hide')
  }else{


    try{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1a7d2d21a20f2fb01a987ab7d455d174`;

    const response = await fetch(url);
    const resData = await response.json()
    console.log(resData)
    const arrData = [resData];
    
    city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;
 const tempvalue =arrData[0].main?.temp;
 
    temp.innerText = (tempvalue-273.15).toFixed(2);
 temp_status.innerText = arrData[0].weather[0]?.main;

 const weatherStatus = arrData[0].weather[0]?.main;

      if (weatherStatus === "Clear") {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:yellow'></i>";
      } else if (weatherStatus === "Rain") {
        temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#f1f2f6'></i>";
      } else if (weatherStatus === "Clouds") {
        temp_status.innerHTML = "<i class='fas fa-cloud' style='color:yellow'></i>";
      } else {
        temp_status.innerHTML = "<i class='fas fa-sun' style='color:yellow'></i>";
      }

      datahide.classList.remove('data_hide')

    }

    catch(err){
        city_name.innerText = "plz enter  city name properly search!!"
        datahide.classList.add('data_hide')
    }
  }
}

submitBtn.addEventListener('click' , getInfo)