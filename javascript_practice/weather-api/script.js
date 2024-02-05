// https://api.openweathermap.org/data/2.5/weather?q=london&appid=1be04f41aab825421a7ab4e25dcb19dd
// icon url = https://openweathermap.org/img/wn/04n@2x.png
const apiKey = "1be04f41aab825421a7ab4e25dcb19dd";

// get document elments 
const dataContainer = document.querySelector('#data-container');
const cityInp = document.querySelector('#cityInp');
const icon = document.querySelector('#icon');
const okBtn = document.querySelector('#submit-btn');
const description = document.querySelector('#description');
const temperature = document.querySelector('#temp');




// form event
document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    // get input value
    let cityN = cityInp.value;
    dataContainer.style.display = 'flex';

    getData(cityN);
});
// event listener on OKBTN
okBtn.addEventListener('click',()=>{
    // get input value
    let cityN = cityInp.value;
    dataContainer.style.display = 'flex';

    getData(cityN);
});

async function getData(value){
    try {
        //* fetch url
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}&units=metric`);
        //*   check response status if not ok 
       if (!res.ok) {
           console.log('error');
            // set icon
            icon.innerHTML = ` <i class="bi bi-infinity"></i> `;
            // set description
            description.innerHTML = "";
            // set temperature
            temperature.innerHTML = "";
       }else{

            // convert response data into json format
            const data = await res.json();

            // data variables
            const ic = data.weather[0].icon;
            const des = data.weather[0].description;
            const temp = Math.round(data.main.temp);

            
            //    set elements in html
            // set icon
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${ic}@2x.png" alt="weather-icon">`;
            // set description
            description.innerHTML = des;
            // set temperature
            temperature.innerHTML = temp + "°";
            console.log(temp);
            console.log(data);


       }
    } catch (e) {
            // set icon
            icon.innerHTML = ` <i class="bi bi-infinity"></i> `;
            // set description
            description.innerHTML = "";
            // set temperature
            temperature.innerHTML = "";
    }
    


    
}