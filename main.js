

function connection(getText)
{
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getText}&appid=00c98d4d736e689ce3deb637dadc49ce&units=metric`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data)
    let cityName = data.name; 
    let countryName = data.sys.country; 
    let temp = data.main.temp; 
    let minTemp = data.main.temp_min; 
    let maxTemp = data.main.temp_max;
    
  

    let weatherInfo = {
        City: cityName,
        Country: countryName,
        temperature: temp,
        minTemp:minTemp,
        maxTemp:maxTemp
      };

      return weatherInfo;
  })
  .catch((error) => {
    console.log('Error fetching data:', error);
    alert("sorry ,please enter correct city name! ")
  });

}

function addcard()
{
    
  let currentDate = new Date();
  let day = currentDate.getDate();
  let month = currentDate.getMonth() + 1; 
  let year = currentDate.getFullYear();
  
  let formattedDate = `${day}/${month}/${year}`;

    let gettext=document.getElementById("text").value;
    connection(gettext).then((obj)=>{
        console.log(obj);

      
        let card = document.querySelector(".weather");
        
        let cardClone = card.cloneNode(true);
        card.style.display = 'block';

       document.getElementsByClassName("city")[0].innerHTML="<h1>"+obj.City+" , "+obj.Country;
       
       document.getElementsByClassName("current")[0].innerHTML=Math.round(obj.temperature);
       document.getElementsByClassName("low")[0].innerHTML="Low : "+Math.round(obj.minTemp);
       document.getElementsByClassName("high")[0].innerHTML="High : "+Math.round(obj.maxTemp);
       document.getElementsByClassName("date")[0].innerHTML="<p>"+formattedDate+"</p>";
        let root = document.getElementById("cardContainer");
        
        root.appendChild(cardClone);
        document.getElementById("text").value="";
    });
    
    
}