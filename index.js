const express = require('express')
const app = express()

const CarAdi = {
    carPhoto: "https://example.com/images/car1.jpg",
    carSelection: [
      {
        "name": "Sports Car",
        "carBrand": "Porsche",
        "carName": "Porsche 992 GT3 RS",
        "history": " 992 GT3 RS was announced in August 2022. It features a dramatically improved aerodynamic profile compared to the 992 GT3, resulting in 860 kg (1,900 lb) of downforce at 285 km/h (177 mph), a two-fold increase over the 991.2 GT3 RS, and 409 kg (902 lb) of downforce at 200 km/h (120 mph).",
        "topSpeed": "190 mph"
      },
      {
        "name": "Luxury Sedan",
        "carBrand": "BMW",
        "carName": "BMW M5 CS",
        "history": "The S-Class has been the flagship of Mercedes-Benz since the 1970s, renowned for its cutting-edge technology and luxury.",
        "topSpeed": "190 mph"
      },
      {
        "name": "Electric Car",
        "carBrand": "Tesla",
        "carName": "Tesla Model S Plaid",
        "history": "The Tesla Model S Plaid is an all-electric performance sedan, launched in 2021, offering the highest performance in Tesla's lineup.",
        "topSpeed": "200 mph"
      },
      {
        "name": "SUV",
        "carBrand": "Land Rover",
        "carName": "Range Rover Sport",
        "history": "Launched in 2005, the Range Rover Sport offers high performance and off-road capability in a luxury SUV package.",
        "topSpeed": "140 mph"
      },
      {
        "name": "Muscle Car",
        "carBrand": "Ford",
        "carName": "Ford Mustang Shelby GT500",
        "history": "The Shelby GT500 is a high-performance variant of the Ford Mustang, introduced in 1967 and constantly evolving with modern technology.",
        "topSpeed": "180 mph"
      },{
        "name": "Sports Car",
        "carBrand": "Ferrari",
        "carName": "Ferrari 488 GTB",
        "history": "The Ferrari 488 GTB was introduced in 2015, replacing the 458 Italia. It is powered by a 3.9L twin-turbocharged V8 engine.",
        "topSpeed": "205 mph"
      },
      {
        "name": "Luxury Sedan",
        "carBrand": "Mercedes-Benz",
        "carName": "Mercedes-Benz S-Class",
        "history": "The S-Class has been the flagship of Mercedes-Benz since the 1970s, renowned for its cutting-edge technology and luxury.",
        "topSpeed": "155 mph"
      },
      {
        "name": "Electric Car",
        "carBrand": "Tesla",
        "carName": "Tesla Model S Plaid",
        "history": "The Tesla Model S Plaid is an all-electric performance sedan, launched in 2021, offering the highest performance in Tesla's lineup.",
        "topSpeed": "200 mph"
      },
      {
        "name": "SUV",
        "carBrand": "Land Rover",
        "carName": "Range Rover Sport",
        "history": "Launched in 2005, the Range Rover Sport offers high performance and off-road capability in a luxury SUV package.",
        "topSpeed": "140 mph"
      },
      {
        "name": "Muscle Car",
        "carBrand": "Ford",
        "carName": "Ford Mustang Shelby GT500",
        "history": "The Shelby GT500 is a high-performance variant of the Ford Mustang, introduced in 1967 and constantly evolving with modern technology.",
        "topSpeed": "180 mph"
      },
    ]
  }

  
  app.use((request, response, next) => {
    console.log(request.method, request.url)
    next()
  })
    app.get("/", (request, response) => {
        response.send("<h2>WELCOME TO CARS PAGES. Go to /docs for more info.</h2>")
    })

    app.get("/docs", (request, response) => {
        response.send("<h2>Hello Welcome one of the few pages you can go to is between /api/Sports/1&2, /api/luxurysedan/1&2, /api/suv/1&2, /api/ev/1&2, /api/muscle/1&2 for a car from each category.</h2>")
    })


    app.get("/api/suv/1", (request, response) => {
        response.json(CarAdi.carSelection[3])
    })
    app.get("/api/sports/1", (request, response) => {
        response.send(CarAdi.carSelection[0])
    })
    app.get("/api/luxurysedan/1", (request, response) => {
        response.send(CarAdi.carSelection[1])
    })
    app.get("/api/ev/1", (request, response) => {
        response.send(CarAdi.carSelection[2])
    })
    app.get("/api/muscle/1", (request, response) => {
        response.send(CarAdi.carSelection[4])
    })
    app.get("/api/suv/2", (request, response) => {
        response.json(CarAdi.carSelection[8])
    })
    app.get("/api/sports/2", (request, response) => {
        response.send(CarAdi.carSelection[5])
    })
    app.get("/api/luxurysedan/2", (request, response) => {
        response.send(CarAdi.carSelection[6])
    })
    app.get("/api/ev/2", (request, response) => {
        response.send(CarAdi.carSelection[7])
    })
    app.get("/api/muscle/2", (request, response) => {
        response.send(CarAdi.carSelection[9])
    })



app.use((request, response, next) =>{
    response.status(404).send("EROROROOR")
})

app.listen(3000, () => {
    console.log("Server running")
})