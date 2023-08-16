let search=document.getElementById('search')
let arr
let tome=[]
async function dope(city){
    let weather= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6e1fde54ef924489a2e175229231508&q=${city}&days=3`)
    let data= await weather.json()
    arr=data
    console.log(data.forecast.forecastday[0].date)
    tome.push(data.forecast.forecastday)
    console.log(tome)
    display()
}

const successCallback = (position) => {
    console.log(position);
    async function getlocation(){
        let response=await fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json&apiKey=0d643c233e444ad4bb7017898795e971`)
        let location=await response.json()
        dope(location.results[0].city)
    }
    getlocation()
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
search.addEventListener('keydown',function(){
 dope(search.value)
})
function display(){
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month=["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
    let dC=new Date(arr.location.localtime)
    let d1=new Date(arr.forecast.forecastday[1].date)
    let d2=new Date(arr.forecast.forecastday[2].date)
    var cartona=``
    cartona+=`
    <div class="col-12 col-md-12 col-lg-4">
                <div class="card">
                    <div class="card-header d-flex justify-content-between pb-0">
                        <p>${weekday[dC.getDay()]}</p>
                        <p>${dC.getDate()} ${month[dC.getMonth()]}</p>
                    </div>
                    <div class="card-body">
                    <p>${arr.location.name}</p>
                    <div class="d-flex gap-2 align-items-center">
                    <h1 class="display-1 fw-bold">${arr.current.temp_c}<sup>o</sup>C</h1>
                    <img src="https://${arr.current.condition.icon}" class="h-50" alt="">
                </div>
                <p>${arr.current.condition.text}</p>
                <i class="fa-solid fa-umbrella"></i> <span>20%</span>
                <i class="fa-solid fa-wind"></i> <span>${arr.current.wind_kph}kph</span>
                <i class="fa-regular fa-compass"></i> <span>${arr.current.wind_dir}</span>
                </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <div class="card sp">
                    <div class="card-header pb-0">
                        <p class="text-center">${weekday[d1.getDay()]}</p>
                    </div>
                    <div class="card-body">
                    <div class="text-center">
                    <img src="https://${arr.forecast.forecastday[1].day.condition.icon}" alt="">
                    <h1 class="text-center">${arr.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</h1>
                    <h5 class="text-center">${arr.forecast.forecastday[1].day.avgtemp_c}<sup>o</sup>C</h5>
                </div>
                <p class="text-center mt-4">${arr.forecast.forecastday[1].day.condition.text}</p>
                </div>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <div class="card">
                    <div class="card-header pb-0">
                        <p class="text-center">${weekday[d2.getDay()]}</p>
                    </div>
                    <div class="card-body">
                    <div class="text-center">
                        <img src="https://${arr.forecast.forecastday[2].day.condition.icon}" alt="">
                    <h1 class="text-center">${arr.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</h1>
                    <h5 class="text-center">${arr.forecast.forecastday[2].day.avgtemp_c}<sup>o</sup>C</h5>
                </div>
                <p class="text-center mt-4">${arr.forecast.forecastday[2].day.condition.text}</p>
                </div>
                </div>
            </div>
            `
            document.getElementById('display').innerHTML=cartona
            }



// function display2(){
//     var  cartona2=''
//                 cartona2+=`
//                 <div class="col-md-4">
//                 <div class="card">
//                     <div class="card-header pb-0">
//                         <p class="text-center">${arr.forecast.forecastday[0].date}</p>
//                     </div>
//                     <div class="card-body">
//                     <div class="text-center">
//                         <i class="fa-solid fa-sun text-warning fs-3"></i>
//                     <h1 class="text-center">${arr.forecast.forecastday[0].day.maxtemp_c}<sup>o</sup>C</h1>
//                     <h2 class="text-center">${arr.forecast.forecastday[0].day.avgtemp_c}<sup>o</sup>C</h2>
//                 </div>
//                 <p class="text-center">${arr.forecast.forecastday[0].day.condition.text}</p>
//                 </div>
//                 </div>
//             </div>`
//             document.getElementById('display2').innerHTML=cartona2}
            
