//  search input result 
class UIsearchResult {
  Ui(data) {
      var htmlSearchReasult = "";
      htmlSearchReasult = `
  <div class="city_div">
      <p class="city_div_text city_head">Country</p>
      <p class="city_div_text city_head">City</p>
      <p class="city_div_text">Temperature</p>
      <p class="city_div_text">Minimum t</p>
      <p class="city_div_text">Maksimum t</p>
      <p class="city_div_text">Main</p>
      <p class="city_div_text">Wind</p>
      <p class="city_div_text">Humidity</p>
      <p class="city_div_text">Pressure</p>
      <p class="city_div_text">description</p>
  </div>

      <div class="info_div">
         <p class="info_div_text city_head">${data.sys.country}</p>
          <p class="info_div_text city_head">${data.name}</p>
          <p class="info_div_text">${data.main.temp}  <sup>o</sup>C <span class="temp_icon"> </span></p>
          <p class="info_div_text ">${data.main.temp_min}  <sup>o</sup>C</p>
          <p class="info_div_text ">${data.main.temp_max}  <sup>o</sup>C</p>
          <p class="info_div_text">${data.weather[0].main}</p>
          <p class="info_div_text">${data.wind.speed}  m/sec</p>
          <p class="info_div_text">${data.main.humidity}</p>
          <p class="info_div_text">${data.main.pressure} mm c.s</p>
          <p class="info_div_text">${data.weather[0].description}</p>
      </div> 
      `
      document.querySelector(".city_weather").innerHTML=htmlSearchReasult;
  }
};



// Baki sum ankara
class UIContainer{
    Baku(data){
        var bakuHtml ="";
        bakuHtml =`             
        <div class="container_info">
            <p>Temp:</p>
            <p>${data.main.temp}<sup>o</sup>C</p>
       </div>
        <div class="container_info">
          <p>Wind:</p>
          <p>${data.wind.speed}  m/sec</p>
        </div>
        <div class="container_info">
          <p>Main:</p>
          <p>${data.weather[0].description}</p>
       </div> 
        `
        document.querySelector(".conatiner_text_baku").innerHTML=bakuHtml;
    };

    Ankara(data){
        var ankaraHtml ="";
        ankaraHtml =`             
        <div class="container_info">
            <p>Temp:</p>
            <p>${data.main.temp}<sup>o</sup>C</p>
        </div>
        <div class="container_info">
          <p>Wind:</p>
          <p>${data.wind.speed}  m/sec</p>
        </div>
        <div class="container_info">
          <p>Main:</p>
          <p>${data.weather[0].description}</p>
       </div> 
        `
        document.querySelector(".conatiner_text_ankara").innerHTML=ankaraHtml;
    };

    Sumqayit(data){
        var sumqayitHtml ="";
        sumqayitHtml =`             
        <div class="container_info">
            <p>Temp:</p>
            <p>${data.main.temp}<sup>o</sup>C</p>
        </div>
        <div class="container_info">
          <p>Wind:</p>
          <p>${data.wind.speed}  m/sec</p>
        </div>
        <div class="container_info">
          <p>Main:</p>
          <p>${data.weather[0].description}</p>
       </div> 
        `
        document.querySelector(".conatiner_text_sumqayit").innerHTML=sumqayitHtml;
    }

};

