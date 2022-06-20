<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
      crossorigin="anonymous"
    />
    <link href="src/styles.css" rel="stylesheet" type="text/css"/>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
    <title>Weather App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300&display=swap" rel="stylesheet">
   
</head>
  <body>
    <div class="container">
        <h1>Weather App Name</h1>
        <form id="search-form">
            <input id="location-bar" class="location-bar" type="text" placeholder="Enter your location">
            <input id="search-button" class="search-button" type="submit" value="Search">
            <input id="submit-button" class="current-location" type="submit" value="Current Location">
        </form>
        <div class="row">
            <div class="col-6">
                <div class="card current-weather">
                    <div class="card-body">
                        <h2 id="current-location" class="card-title"></h5>
                        <h5><strong id="temperature-current"></strong>
                            <a id="celsius" href="#">°C</a> |
                            <a id="fahrenheit" href="#"> °F </a>
                        </h3>
                        <p id="current-date"></p>
                        <p class="card-text" id="current-weather"></p>
                    </div>
                </div>
            </div>
        <div class="card daily-weather">    
            <div class="row justify-content-centert">
                <div class="col-md-2">
                    <div class="card daily-forecast">
                        <div class="card-body">
                            <h5 class="card-title">Forecast Day 1</h5>
                            <p class="card-text">Forecast will appear here</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card daily-forecast">
                        <div class="card-body">
                            <h5 class="card-title">Forecast Day 2</h5>
                            <p class="card-text">Forecast will appear here</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card daily-forecast">
                        <div class="card-body">
                            <h5 class="card-title">Forecast Day 3</h5>
                            <p class="card-text">Forecast will appear here</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card daily-forecast">
                        <div class="card-body">
                            <h5 class="card-title">Forecast Day 4</h5>
                            <p class="card-text">Forecast will appear here</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                    <div class="card daily-forecast">
                        <div class="card-body">
                            <h5 class="card-title">Forecast Day 5</h5>
                            <p class="card-text">Forecast will appear here</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
            <div class="col-12">
                <div class="card blanket-information" style="width: 100%">
                    <div class="card-body">
                        <h5 class="card-title">Yarn Color and Range</h5>
                        <p class="card-text">Data will appear here</p>
                    </div>
                </div>
            </div> 
        </div>
       <script src="src/index.js"></script>  
  </body>
</html>
