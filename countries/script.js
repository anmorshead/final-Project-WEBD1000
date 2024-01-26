function readTextFile(file) {//create function to read the contents of a file
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        try{
        if (rawFile.readyState === 4 && rawFile.status == "200") {//4=done, 200=OK
            parseCountryJSON(rawFile.responseText);//when it successfully loads, it calls the parseCountryJSON function
        }else{//handles error of file not loading
            console.error('Error loading file. HTTP status:', rawFile.status);
        }
    }
 catch (error) {
    // Handle other errors
    console.error('An error occurred:', error);
}
    }

    rawFile.send(null);//initiates the HTTP request
}

function parseCountryJSON(responseRaw) {//function to take JSON formatted string as input
  let countryHtml = "<option value='' selected disabled>Select a Country</option>"; // Add an empty option at top of dropDown;
  let countryInfos = JSON.parse(responseRaw);//parses string into array of key:value pairs

  for (let i=0; i<countryInfos.length; i++) {//iterating over the array
  
    //generates a <option> value for each country including value, id, area and the population for future use
    countryHtml = `${countryHtml} \n <option value="${countryInfos[i].Name}" 
    id="countrycode-${countryInfos[i].Name}" 
    population="${countryInfos[i].Population}" area="${countryInfos[i].Area}">${countryInfos[i].Name}</option>`;

    totalWorldPopulation = totalWorldPopulation+(countryInfos[i].Population);//keep track of total population everytime it iterates
  }  
  //set innerHTML of dropDown to countryHtml, populating the drop down menu with the countries
  document.getElementById("dropDown").innerHTML = countryHtml;
  
}

function CountrySelection(){//triggered when dropDown menu value changes
   selectedCountry = document.getElementById("dropDown");
   //sets the value of the text box below "Country info for:" to the selected country value
   document.getElementById("selectedCountry").value = selectedCountry.value;
}

function GetCountryData() {//create function to populate the "flags/Country.jpg" html element
    selectedPopulation = selectedCountry.options[selectedCountry.selectedIndex].getAttribute("population");
    selectedCountry = document.getElementById("dropDown").value;//use the value from the dropDown
}

function DisplayFlag(){
    let flagPath = "flags/" + selectedCountry.split(' ').join('_') + ".png";//set the path location for the png file, account for spaces!
    document.getElementById("flag").src = flagPath;//set the new path to be the src
}

function DisplayPopulation() {
    // Set the selectedPopulation variable
    let populationTextBox = document.getElementById("populationInput")
    populationTextBox.value = selectedPopulation;
}

function CalculateArea(){//calculate area depending on the radio button selection
    //use the selectedIndex property to determine which country is selected then get area attribute
    selectedArea = document.getElementById("dropDown").options[document.getElementById("dropDown").selectedIndex].getAttribute("area")
    let sqMilesRadiobutton = document.getElementById("sqmilesRadio");//see if sq.miles radio button is checked
    let sqKmRadioButton = document.getElementById("sqkmRadio");
    let areaTextBox = document.getElementById("areaText")//get the element where the text will go
    if(sqMilesRadiobutton && sqMilesRadiobutton.checked){//if the element exists, and is checked
        areaTextBox.value = selectedArea;//populate the areaText
    }else if(sqKmRadioButton && sqKmRadioButton.checked){
        areaTextBox.value =  (parseInt(selectedArea*1.609344));
    }
} 

function uncheckRadioButtons(){//reset the radio buttons when new country is selected
    document.getElementById("sqmilesRadio").checked = false;
    document.getElementById("sqkmRadio").checked = false;
    let areaTextBox = document.getElementById("areaText")
    areaTextBox.value = " ";//populate the areaText with blank

    document.getElementById("persqmile").checked = false;
    document.getElementById("persqkm").checked = false;
    let denseTextBox = document.getElementById("popText")
    denseTextBox.value = " ";//populate the popText with blank
}

function GoToWiki(){//uses the button element to go to the countries wiki page
    let wikiPath = "https://en.wikipedia.org/wiki/" + selectedCountry.split(' ').join('_');//set the path location for the png file, account for spaces!
    document.getElementById("wiki").href = wikiPath;//set the new path to be the href
}

function CalculatePopDensity(){
    //use the selectedIndex property to determine which country is selected then get area attribute
    selectedArea = document.getElementById("dropDown").options[document.getElementById("dropDown").selectedIndex].getAttribute("area")
    selectedPopulation = document.getElementById("dropDown").options[document.getElementById("dropDown").selectedIndex].getAttribute("population")

    let sqMilesRadiobutton = document.getElementById("persqmile");//see if sq.miles radio button is checked
    let sqKmRadioButton = document.getElementById("persqkm");
    let denseTextBox = document.getElementById("popText")//get the element where the text will go
    if(sqMilesRadiobutton && sqMilesRadiobutton.checked){//if the element exists, and is checked
        denseTextBox.value = parseInt((selectedPopulation/selectedArea));//populate the areaText
    }else if(sqKmRadioButton && sqKmRadioButton.checked){
        denseTextBox.value = parseInt((selectedPopulation/(selectedArea*1.609344)));
    }
} 

function CalculatePercentPop(){
    //divide total population by the selcted countries population *100
    let percentageTextBox = document.getElementById("percentageText")
    percentageTextBox.value = ((selectedPopulation/totalWorldPopulation)*100).toFixed(3) + "%";
}


//usage:

readTextFile("countries.json");//initial call for the function to read the JSON file

//set global variables
let selectedCountry;
let selectedPopulation; 
let selectedArea;
let totalWorldPopulation=0;

//add event listnener to populate the text box under "Country info for:"
document.getElementById("dropDown").addEventListener('change',CountrySelection,false);
//add event listener to change the flag when a country is selected from dropDown
document.getElementById("dropDown").addEventListener('change', GetCountryData, false);
//add event listener to display the flag element when a country is selected from dropDown
document.getElementById("dropDown").addEventListener('change', DisplayFlag, false);
//add event listener to change the population when a country is selected from dropdown
document.getElementById("dropDown").addEventListener('change', DisplayPopulation, false); 
//add event listener to change the area when sqMiles radio button is selected
document.getElementById("sqmilesRadio").addEventListener('change', CalculateArea, false);
//add event listener to change the area when sqKM radio button is selected
document.getElementById("sqkmRadio").addEventListener('change', CalculateArea, false);
// Add event listener to uncheck all radio buttons when a new country is selected
document.getElementById("dropDown").addEventListener('change', uncheckRadioButtons, false);
//add event listener to go to the countries wiki when the button is clicked
document.getElementById("wiki").addEventListener('click',GoToWiki,false);
//add event listener to change the pop density when sqmile radio button is selected
document.getElementById("persqmile").addEventListener('change',CalculatePopDensity,false);
//add event listener to change the pop density when sqKM radio button is selected
document.getElementById("persqkm").addEventListener('change',CalculatePopDensity,false);
//add event listener to change the percentage of world pop when country is selected from dropdown
document.getElementById("dropDown").addEventListener('change', CalculatePercentPop,false)
 