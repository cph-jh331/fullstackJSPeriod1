// 2 Chaining promises (fetch requests), and why GraphQL is cool ;-)

// Enter this URL in your browser: https://swapi.co/api/people/1/
// Use information from this link to find the first movie in which  Luke Skywalker  appeared
// Use information from this link to find the first species, which appeared in this movie
// Use information from this link to find the planet (homeworld) for this species
const fetch = require("node-fetch");
const URL = "https://swapi.co/api/people/";

function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    let results = {};

    fetch(URL + id)
        .then(res => res.json())
        .then(data => {
            let newURL = data.films[0];
            console.log(newURL);
            results.personName = data.name;

            return fetch(newURL).then(res => res.json())
        })
        .then(data => {
            let newURL = data.species[0];
            console.log(newURL);
            results.title = data.title;

            return fetch(newURL).then(res => res.json())
        })
        .then(data => {
            let newURL = data.homeworld;
            console.log(newURL);
            results.speciesName = data.name;

            return fetch(newURL).then(res => res.json())
        })
        .then(data => {
            results.planet = data.name;
            console.log(results);
        })
        .catch(err => console.log("Error: " + err));
}

const id = 1;
getPlanetforFirstSpeciesInFirstMovieForPerson(id);