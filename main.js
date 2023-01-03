let searchbtn = document.querySelector("#btn");
let countryInp = document.querySelector("#country-input");
let content = document.querySelector(".country-values");
let contentDiv = document.querySelector(".country-content-div");

searchbtn.addEventListener("click", () =>{

    let countryName =  countryInp.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
   
    fetch(url).then(res => res.json()).then(data => {
        contentDiv.style.height = "400px";
        content.innerHTML = `
        <div class="ing-div">
        <img class ="flag-img" src="${data[0].flags.svg}" alt="Country Flag image">
        </div>
        
        <div class="country-content">
        <div class="capital">Capital</div>
        <div>${data[0].capital[0]}</div>
      </div>
    
      <div class="country-content">
        <div class="continents">Continents</div>
        <div>${data[0].continents[0]}</div>
      </div>
    
      <div class="country-content">
        <div class="currencies">Currencies</div>
        <div>${Object.keys(data[0].currencies)[0]}</div>
      </div>
    
      <div class="country-content">
        <div class="languages">Languages</div>
        <div>${Object.values(data[0].languages).toString().split(",").join(", ")}</div>
      </div> 
        `;
    }).catch(()=>{
        if(countryName.length == 0){
            contentDiv.style.height = "65px";
             content.innerHTML = `
             <div class="error-div"><span class="error">Please enter Country name</span></div>
             `;
        }
        else{
            contentDiv.style.height = "65px";
            content.innerHTML = `
             <div class="error-div"><span class="error">Please enter correct Country name</span></div>
             `;
        }
    })
    

})