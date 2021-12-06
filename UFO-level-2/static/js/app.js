// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

// Load data into the page
tableData.forEach((record) => {
    var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputDatetime = d3.select("#datetime");

  // Get the value property of the input element
  var inputDatevalue = inputDatetime.property("value");

  console.log(inputDatevalue);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputDatevalue);

  console.log(filteredData);

  d3.selectAll("tr").remove();

  filteredData.forEach((record) => {
    var row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  

  // filteredData.forEach((record) => {
  //   Object.entries(record).forEach(([key, value]) => {
      
  //     cell.text(value);
  //   });
  // });

};
