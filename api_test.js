const fetch = require('node-fetch');
async function GetSun(){
    const response = await fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400');
   const data = await response.json();
  console.log(data);

}
GetSun();
