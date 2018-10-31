require("dotenv").config();
var keys = require("./keys.js");

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
var request = require("request");
var inquirer = require("inquirer");


///////////////////////////////////////////////////CODE FOR COMMAND CHOICES///////////////////////////////////////////////////////////////////////////

inquirer.prompt([  
    {
      type: "list",
      name: "doingWhat",
      message: "Pick a commnand to run",
      choices: ["concert-this", "spotify-this-song", "movie-this", "do-what-it-says"]
    },


]).then(function(user) {
    console.log(user + "selection choices is working");

  // User select 'concert-this'...
  if (user.doingWhat === "concert-this") {
    console.log('concert-this is working');

    inquirer.prompt([  
        {
            type: "input",
            name: "concertInput",
            message: "Pick a Concert?"
          }
        ]).then(function(user) {
            console.log(user);


            // Store the users input
var nodeArgs = JSON.stringify(user.concertInput);


// Create an empty variable for holding the concert name
var concertName = nodeArgs ;

// Then run a request to the OMDB API with the movie specified

console.log("concert name " + concertName);
var queryUrl = "https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp";
console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//     // If the request is successful
//     if (!error && response.statusCode === 200) {
  
//       Parse the body of the site and recover just the imdbRating
//       (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//      console.log("Venue Name: " + JSON.parse(body).venue[i]);
//       console.log("Venue Location: " + JSON.parse(body).Year);
//       console.log("Date of event: " + JSON.parse(body).imdbRating);
      

//     }

//         })
    
    
});
};

////////////////////end of concert decision
// User select 'spotify-this'...
if (user.doingWhat === "spotify-this-song") {
    console.log('spotify-this is working');

    inquirer.prompt([  
        {
            type: "input",
            name: "musicInput",
            message: "Pick a song?"
          }
        ]).then(function(user) {
            console.log(user);
        })
    } 
////////////////////end of song decision

// User select 'do-what-it-says'...
if (user.doingWhat === "do-what-it-says") {
    console.log('do-what-it-says is working');

    inquirer.prompt([  
        {
            type: "input",
            name: "saysInput",
            message: "Pick something?"
          }
        ]).then(function(user) {
            console.log(user);
        })
    } 
////////////////////end of do-what-it-says decision

    // User select 'movie this'...
    if (user.doingWhat === "movie-this") {
        console.log('movie-this is working');
   
        inquirer.prompt([  
            {
                type: "input",
                name: "userInput",
                message: "Pick a Movie?"
              }
            ]).then(function(user) {
                console.log(user);
                console.log("working");
            
 ///////////////////////////////////////////////////CODE FOR MOVIE///////////////////////////////////////////////////////////////////////////      
// Store the users input
var nodeArgs = JSON.stringify(user.userInput);

// if (nodeArgs === "") { 
// nodeArgs = "Mr. Nobody";
// console.log("This should be Mr. Nobody, and the value actually is " + nodeArgs);
// };

// Create an empty variable for holding the movie name
var movieName = nodeArgs ;

// Then run a request to the OMDB API with the movie specified

if (movieName === "Dark Knight") {
    console.log("for the IF, the movie name value is " + movieName);
var queryUrl = "http://www.omdbapi.com/?t=Mr.+Nobody&y=&plot=short&apikey=trilogy";
console.log("This should be Mr. Nobody, and the value actually is " + nodeArgs);
} else {
    console.log("for the ELSE, the movie name value is " + movieName);
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
};

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("Movie Title: " + JSON.parse(body).Title);
    console.log("Release Year: " + JSON.parse(body).Year);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country where the movie was produced: " + JSON.parse(body).Country);
    console.log("Movie Language: " + JSON.parse(body).Language);
    console.log("Movie Plot: " + JSON.parse(body).Plot);
    console.log("Movie Actors: " + JSON.parse(body).Actors);
//     if (JSON.parse(body).Ratings[1] != undefined) {
//         console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
//     } else {
//         console.log("Rotten Tomatoes Rating: Cannot be found");
//   }




   if (JSON.parse(body).Title === undefined && JSON.parse(body).Ratings === undefined) {
    console.log("Movie could not be found");
   } else if (JSON.parse(body).Ratings[1] != undefined) {
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
    } else {
        console.log("Rotten Tomatoes Rating: Cannot be found");
    }
};
});
});
/////// end of movie logic


};



});