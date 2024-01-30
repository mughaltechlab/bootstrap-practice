// https://api.openweathermap.org/data/2.5/weather?q=london&appid=1be04f41aab825421a7ab4e25dcb19dd
// icon url = https://openweathermap.org/img/wn/04n@2x.png
const apiKey = "1be04f41aab825421a7ab4e25dcb19dd";

// get document elments
const cityInp = document.querySelector('#cityInp');
const icon = document.querySelector('#icon');
const okBtn = document.querySelector('#submit-btn');
const description = document.querySelector('#description');


// event listener on OKBTN
okBtn.addEventListener('click',()=>{
    // get input value
    let cityN = cityInp.value;

    getData(cityN);
});

async function getData(value){
    try {
        //* fetch url
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apiKey}`);
        //*   check response status if not ok 
       if (!res.ok) {
           console.log('error');
       }else{

            // convert response data into json format
            const data = await res.json();

            // data variables
            ic = data.weather[0].icon;
            des = data.weather[0].description;

            
            //    set elements in html
            // set icon
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${ic}@2x.png" alt="weather-icon">`;
            console.log(ic);
            // set description
            description.innerHTML = des;
            console.log(des);


       }
    } catch (e) {
        
    }
    


    
}