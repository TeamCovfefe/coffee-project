"use strict";
function renderCoffee(coffee) {
    var html = '<li class="coffee" id="coffee-display">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class="content"><h2>' + coffee.name + '</h2>';
    html += '<h3>' + "Roast: " + coffee.roast + '</h3></div>';
    html += '</li>';
    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

var filteredCoffees = [];

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    coffees.forEach(function (coffee) {
        if (selectedRoast !== "all") {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        } else {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
    console.log(filteredCoffees);
}

// Coffee type search bar HOPEFULLY
function searchedCoffee(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var searchQuery = searchHandler.value;
    var searchedCoffees = [];
    filteredCoffees.forEach(function (coffee) {
        if (coffee.name.toUpperCase().includes(searchQuery.toUpperCase())) {
            searchedCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(searchedCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchHandler = document.querySelector("#search");

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
searchHandler.addEventListener('keyup', searchedCoffee);