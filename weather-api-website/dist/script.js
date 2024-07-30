(function(){

    //     const exampleData = {
    //         "timelines": {
    //         "minutely": [
    //         {
    //         "time": "2024-04-12T17:00:00Z",
    //         "values": {
    //         "cloudBase": 0.15,
    //         "cloudCeiling": 0.15,
    //         "cloudCover": 100,
    //         "dewPoint": 14.13,
    //         "freezingRainIntensity": 0,
    //         "humidity": 93,
    //         "precipitationProbability": 0,
    //         "pressureSurfaceLevel": 996.25,
    //         "rainIntensity": 0,
    //         "sleetIntensity": 0,
    //         "snowIntensity": 0,
    //         "temperature": 15.63,
    //         "temperatureApparent": 15.63,
    //         "uvHealthConcern": 0,
    //         "uvIndex": 1,
    //         "visibility": 12.44,
    //         "weatherCode": 1001,
    //         "windDirection": 195.81,
    //         "windGust": 8.5,
    //         "windSpeed": 3.19
    //         }
    //         }
    //     ],
    //     "daily": [
    //         {
    //         "time": "2024-04-12T10:00:00Z",
    //         "values": {
    //         "cloudBaseAvg": 0.11,
    //         "cloudBaseMax": 0.51,
    //         "cloudBaseMin": 0,
    //         "cloudCeilingAvg": 0.12,
    //         "cloudCeilingMax": 0.45,
    //         "cloudCeilingMin": 0,
    //         "cloudCoverAvg": 48.09,
    //         "cloudCoverMax": 100,
    //         "cloudCoverMin": 0,
    //         "dewPointAvg": 11.13,
    //         "dewPointMax": 15,
    //         "dewPointMin": 6.04,
    //         "evapotranspirationAvg": 0.071,
    //         "evapotranspirationMax": 0.179,
    //         "evapotranspirationMin": 0.02,
    //         "evapotranspirationSum": 1.627,
    //         "freezingRainIntensityAvg": 0,
    //         "freezingRainIntensityMax": 0,
    //         "freezingRainIntensityMin": 0,
    //         "humidityAvg": 85.69,
    //         "humidityMax": 94,
    //         "humidityMin": 81.02,
    //         "iceAccumulationAvg": 0,
    //         "iceAccumulationLweAvg": 0,
    //         "iceAccumulationLweMax": 0,
    //         "iceAccumulationLweMin": 0,
    //         "iceAccumulationLweSum": 0,
    //         "iceAccumulationMax": 0,
    //         "iceAccumulationMin": 0,
    //         "iceAccumulationSum": 0,
    //         "moonriseTime": "2024-04-12T12:15:56Z",
    //         "moonsetTime": "2024-04-12T03:27:49Z",
    //         "precipitationProbabilityAvg": 10.4,
    //         "precipitationProbabilityMax": 90,
    //         "precipitationProbabilityMin": 0,
    //         "pressureSurfaceLevelAvg": 996.98,
    //         "pressureSurfaceLevelMax": 1003.93,
    //         "pressureSurfaceLevelMin": 992.79,
    //         "rainAccumulationAvg": 0.76,
    //         "rainAccumulationLweAvg": 0.45,
    //         "rainAccumulationLweMax": 4.39,
    //         "rainAccumulationLweMin": 0,
    //         "rainAccumulationMax": 7.52,
    //         "rainAccumulationMin": 0,
    //         "rainAccumulationSum": 17.46,
    //         "rainIntensityAvg": 0.45,
    //         "rainIntensityMax": 7.95,
    //         "rainIntensityMin": 0,
    //         "sleetAccumulationAvg": 0,
    //         "sleetAccumulationLweAvg": 0,
    //         "sleetAccumulationLweMax": 0,
    //         "sleetAccumulationLweMin": 0,
    //         "sleetAccumulationLweSum": 0,
    //         "sleetAccumulationMax": 0,
    //         "sleetAccumulationMin": 0,
    //         "sleetIntensityAvg": 0,
    //         "sleetIntensityMax": 0,
    //         "sleetIntensityMin": 0,
    //         "snowAccumulationAvg": 0,
    //         "snowAccumulationLweAvg": 0,
    //         "snowAccumulationLweMax": 0,
    //         "snowAccumulationLweMin": 0,
    //         "snowAccumulationLweSum": 0,
    //         "snowAccumulationMax": 0,
    //         "snowAccumulationMin": 0,
    //         "snowAccumulationSum": 0,
    //         "snowDepthAvg": 0,
    //         "snowDepthMax": 0,
    //         "snowDepthMin": 0,
    //         "snowDepthSum": 0,
    //         "snowIntensityAvg": 0,
    //         "snowIntensityMax": 0,
    //         "snowIntensityMin": 0,
    //         "sunriseTime": "2024-04-12T10:08:00Z",
    //         "sunsetTime": "2024-04-12T23:21:00Z",
    //         "temperatureApparentAvg": 13.52,
    //         "temperatureApparentMax": 17,
    //         "temperatureApparentMin": 8.17,
    //         "temperatureAvg": 13.52,
    //         "temperatureMax": 17,
    //         "temperatureMin": 8.17,
    //         "uvHealthConcernAvg": 0,
    //         "uvHealthConcernMax": 0,
    //         "uvHealthConcernMin": 0,
    //         "uvIndexAvg": 0,
    //         "uvIndexMax": 1,
    //         "uvIndexMin": 0,
    //         "visibilityAvg": 12.97,
    //         "visibilityMax": 16,
    //         "visibilityMin": 2.46,
    //         "weatherCodeMax": 1000,
    //         "weatherCodeMin": 1000,
    //         "windDirectionAvg": 184.69,
    //         "windGustAvg": 11.76,
    //         "windGustMax": 17.55,
    //         "windGustMin": 7.28,
    //         "windSpeedAvg": 5.04,
    //         "windSpeedMax": 7.37,
    //         "windSpeedMin": 2.69
    //         }
    //         },
    //         {
    //         "time": "2024-04-13T10:00:00Z",
    //         "values": {
    //         "cloudBaseAvg": 1.65,
    //         "cloudBaseMax": 6.54,
    //         "cloudBaseMin": 0,
    //         "cloudCeilingAvg": 1.09,
    //         "cloudCeilingMax": 9.17,
    //         "cloudCeilingMin": 0,
    //         "cloudCoverAvg": 82.4,
    //         "cloudCoverMax": 100,
    //         "cloudCoverMin": 1.21,
    //         "dewPointAvg": 3.79,
    //         "dewPointMax": 6.43,
    //         "dewPointMin": 1.29,
    //         "evapotranspirationAvg": 0.133,
    //         "evapotranspirationMax": 0.297,
    //         "evapotranspirationMin": 0.046,
    //         "evapotranspirationSum": 3.054,
    //         "freezingRainIntensityAvg": 0,
    //         "freezingRainIntensityMax": 0,
    //         "freezingRainIntensityMin": 0,
    //         "humidityAvg": 75.1,
    //         "humidityMax": 83.66,
    //         "humidityMin": 68.45,
    //         "iceAccumulationAvg": 0,
    //         "iceAccumulationLweAvg": 0,
    //         "iceAccumulationLweMax": 0,
    //         "iceAccumulationLweMin": 0,
    //         "iceAccumulationLweSum": 0,
    //         "iceAccumulationMax": 0,
    //         "iceAccumulationMin": 0,
    //         "iceAccumulationSum": 0,
    //         "moonriseTime": "2024-04-13T13:03:41Z",
    //         "moonsetTime": "2024-04-13T04:38:30Z",
    //         "precipitationProbabilityAvg": 0.9,
    //         "precipitationProbabilityMax": 15,
    //         "precipitationProbabilityMin": 0,
    //         "pressureSurfaceLevelAvg": 998.78,
    //         "pressureSurfaceLevelMax": 1006.43,
    //         "pressureSurfaceLevelMin": 994.66,
    //         "rainAccumulationAvg": 0,
    //         "rainAccumulationLweAvg": 0.02,
    //         "rainAccumulationLweMax": 0.38,
    //         "rainAccumulationLweMin": 0,
    //         "rainAccumulationMax": 0,
    //         "rainAccumulationMin": 0,
    //         "rainAccumulationSum": 0,
    //         "rainIntensityAvg": 0.02,
    //         "rainIntensityMax": 0.38,
    //         "rainIntensityMin": 0,
    //         "sleetAccumulationAvg": 0,
    //         "sleetAccumulationLweAvg": 0,
    //         "sleetAccumulationLweMax": 0,
    //         "sleetAccumulationLweMin": 0,
    //         "sleetAccumulationLweSum": 0,
    //         "sleetAccumulationMax": 0,
    //         "sleetAccumulationMin": 0,
    //         "sleetIntensityAvg": 0,
    //         "sleetIntensityMax": 0,
    //         "sleetIntensityMin": 0,
    //         "snowAccumulationAvg": 0,
    //         "snowAccumulationLweAvg": 0,
    //         "snowAccumulationLweMax": 0,
    //         "snowAccumulationLweMin": 0,
    //         "snowAccumulationLweSum": 0,
    //         "snowAccumulationMax": 0,
    //         "snowAccumulationMin": 0,
    //         "snowAccumulationSum": 0,
    //         "snowDepthAvg": 0,
    //         "snowDepthMax": 0,
    //         "snowDepthMin": 0,
    //         "snowDepthSum": 0,
    //         "snowIntensityAvg": 0,
    //         "snowIntensityMax": 0,
    //         "snowIntensityMin": 0,
    //         "sunriseTime": "2024-04-13T10:06:00Z",
    //         "sunsetTime": "2024-04-13T23:22:00Z",
    //         "temperatureApparentAvg": 7.87,
    //         "temperatureApparentMax": 10.26,
    //         "temperatureApparentMin": 4.52,
    //         "temperatureAvg": 7.87,
    //         "temperatureMax": 10.26,
    //         "temperatureMin": 4.52,
    //         "uvHealthConcernAvg": 0,
    //         "uvHealthConcernMax": 1,
    //         "uvHealthConcernMin": 0,
    //         "uvIndexAvg": 1,
    //         "uvIndexMax": 3,
    //         "uvIndexMin": 0,
    //         "visibilityAvg": 15.88,
    //         "visibilityMax": 16,
    //         "visibilityMin": 14.65,
    //         "weatherCodeMax": 1001,
    //         "weatherCodeMin": 1001,
    //         "windDirectionAvg": 235.95,
    //         "windGustAvg": 11.05,
    //         "windGustMax": 12.93,
    //         "windGustMin": 8.09,
    //         "windSpeedAvg": 5.11,
    //         "windSpeedMax": 6.28,
    //         "windSpeedMin": 4.26
    //         }
    //         }
    //     ]
    // },
    // "location": {
    //     "lat": 42.3478,
    //     "lon": -71.0466
    //     }
    //     }
        
        //variables I will need to update throughout
        let dailyData;
        let myLineChart;
        let api;
    
        //main function to fetch the api data
        function getData(data){
            fetch(api)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            processWeatherData(json)
            })
        }
     
        function processWeatherData(data){ //shows me the data and then calls updateChart
            dailyData = data.timelines.daily;
    
            //these are just logged so i can see the data it's producing and maek sure its correct
            console.log(getPercentCloud(dailyData));
            console.log(getWindSpeed(dailyData));
            console.log(getHighTemp(dailyData));
            console.log(getRelativeHumidity(dailyData));
            console.log(getRainProbability(dailyData));
            console.log(getDate(dailyData));
            console.log(getUvIndex(dailyData));
            
            updateChart();
        }
    
        function updateChart() {//updates chart depending on user selction of weather type to view
            const weatherDropdown = document.getElementById('weatherType');
            const selectedOption = weatherDropdown.value;
    
            //variables that change depending on selction
            let labels;
            let data;
            let graphType;
    
            if (selectedOption === 'cloudCover') {
                labels = getDate(dailyData);
                data = getPercentCloud(dailyData);
                graphType = '% Cloud Cover'
            } else if (selectedOption === 'precipitation') {
                labels = getDate(dailyData);
                data = getRainProbability(dailyData);
                graphType = '% Chance Of Rain'
            } else if (selectedOption === 'uvIndex') {
                labels = getDate(dailyData);
                data = getUvIndex(dailyData);
                graphType = 'UV Index'
            } else if (selectedOption === 'humidity') {
                labels = getDate(dailyData);
                data = getRelativeHumidity(dailyData);
                graphType = '% Relative Humidity'
            } else if (selectedOption === 'windSpeed') {
                labels = getDate(dailyData);
                data = getWindSpeed(dailyData);
                graphType = 'Wind Speed (km/h)'
            } else if (selectedOption === 'highTemp') {
                labels = getDate(dailyData);
                data = getHighTemp(dailyData);
                graphType = 'High Temperature(°Celcius)'
            } else {
                console.log('No option selected.');
                return;
            }
    
            if (myLineChart) {
                myLineChart.destroy(); //built in method to destroy old chart before creating new one
            }
            createChart(labels, data, graphType); //make new chart using updated data
           
        
        }
        function getApi(){ //updates which api to use depending on location selected by user
            const locationDropdown = document.getElementById('location');
            const selectedOption = locationDropdown.value;
    
            if (selectedOption === 'halifax') {
                api = "https://api.tomorrow.io/v4/weather/forecast?location=44.6476,-63.5728&apikey=Z2QgoB9XcHXaDDOFjkM0wa9mdLuithnd";
            }else if(selectedOption === "fredericton"){
                api = "https://api.tomorrow.io/v4/weather/forecast?location=45.9636,-66.6432&apikey=Z2QgoB9XcHXaDDOFjkM0wa9mdLuithnd"
            }else if(selectedOption === 'charlottetown'){
                api = "https://api.tomorrow.io/v4/weather/forecast?location=46.2382,-63.1311&apikey=Z2QgoB9XcHXaDDOFjkM0wa9mdLuithnd"
            }else if(selectedOption === "stjohns"){
                api = "https://api.tomorrow.io/v4/weather/forecast?location=47.5556,-52.7453&apikey=Z2QgoB9XcHXaDDOFjkM0wa9mdLuithnd"
            }else if(selectedOption === "toronto"){
                api = "https://api.tomorrow.io/v4/weather/forecast?location=43.6532,-79.3832&apikey=Z2QgoB9XcHXaDDOFjkM0wa9mdLuithnd"
            }else if(selectedOption === "montreal"){
                api = "https://api.tomorrow.io/v4/weather/forecast?location=45.5019,-73.5674&apikey=Z2QgoB9XcHXaDDOFjkM0wa9mdLuithnd"
            }else {
                console.log('No option selected.');
                return;
            }
            getData(); // fetches data after updating the api url
        }
    
        function createChart(labels, data, graphType){ //creates the chart using the chart.js specified format
            const ctx = document.getElementById('myChart').getContext('2d');
    
            myLineChart = new Chart(ctx, {
                type: 'line', //type of graph i want (could be bar, bubble, pie...etc)
                data: {
                    labels: labels,
                    datasets: [{
                        label: graphType,
                        data: data,
                        backgroundColor: 'rgba(255, 0, 0, 0.2)', //sets shaded description box colour
                        borderColor: 'rgba(255, 0, 0, 1)', //sets line colour
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    
        //if user selects % cloud cover this data is shown
        function getPercentCloud(dailyData){
            return dailyData.filter(day => day.values.cloudCoverAvg !== undefined)
            .map(day => day.values.cloudCoverAvg || 0);
        }
        //if user selects relative humidity this data is shown
        function getRelativeHumidity(dailyData){
            return dailyData.filter(day => day.values.humidityAvg !== undefined)
            .map(day => day.values.humidityAvg || 0);
        }
        //if user selects wind speed this data is shown
        function getWindSpeed(dailyData){
            return dailyData.filter(day => day.values.windSpeedMax !== undefined)
            .map(day => day.values.windSpeedMax || 0);
        }
        //if user selcts high temp this data is shown
        function getHighTemp(dailyData){
            return dailyData.filter(day => day.values.temperatureMax !== undefined)
            .map(day => day.values.temperatureMax || 0);
        }
        //if user selects rain probability this data is shown
        function getRainProbability(dailyData){
            return dailyData.filter(day => day.values.precipitationProbabilityMax !== undefined)
            .map(day => day.values.precipitationProbabilityMax|| 0);
        }
        //if user selects uv index this data is shown
        function getUvIndex(dailyData){
            return dailyData.filter(day => day.values.uvIndexMax !== undefined)
            .map(day => day.values.uvIndexMax || 0);
        }
        //this function picks out the date format to use on the chart's x axis
        function getDate(dailyData){
            const dates = [];
        
            dailyData.forEach(day => {
                dates.push(day.time.substring(0, 10));
            });
        
            return dates;
        }
        
    
        //first thing you need is which api to use:
         getApi();
       
    
        // Add event listener for location dropdown
        const locationDropdown = document.getElementById('location');
        locationDropdown.addEventListener('change', getApi);
    
        // Add event listener for weatherType dropdown
        const dropdown = document.getElementById('weatherType');
        dropdown.addEventListener('change', updateChart);
    
    
    })();