

import {WeatherAPI} from "./weather-api.js"

function testBuildURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.buildURL("India");
  

}

async function testInvokeURL(){

  // Call innvokeURL()
  // ResponseJSON
  // console.log()

  const weatherAPIObj = new WeatherAPI();
  weatherAPIObj.buildURL("India");
  const responseJSON = await weatherAPIObj.invokeURL();

  console.log(responseJSON);

}

// testBuildURL();
testInvokeURL();
