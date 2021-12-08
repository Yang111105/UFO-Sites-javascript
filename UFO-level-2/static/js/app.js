//--------------------Load All Data--------------------
// from data.js
let tableData = data;

// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(tableData);

// Load data into the page
tableData.forEach((record) => {
    let row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
  

//--------------------Create Reference--------------------
// Select the button
// var button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Create event handlers 
// button.on("click", runEnter);
form.on("change",runEnter);


//--------------------runEnter Function--------------------//
// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let input = [d3.select("#datetime"),d3.select("#city"),d3.select("#state"),d3.select("#country"),d3.select("#shape")];
  console.log(input);

  // Get the value property of the input element
  let filters = [{"datetime":input[0].property("value")},{"city":input[1].property("value")},{"state":input[2].property("value")},{"country":input[3].property("value")},{"shape":input[4].property("value")}]; 
  filters.forEach ((f) => {
    for (let value in f) {
     if (f[value] === "") {
       delete f[value];
     }
    }
  });
  console.log(filters);

  let filteredData = tableData;

  filters.forEach(f=>{
    Object.entries(f).forEach(([key,value]) => {
      filteredData = filteredData.filter(record => record[key] === value);
    })
  });

  console.log(filteredData);
  rebuildTable(filteredData);
};

//--------------------rebuildTable Function--------------------//
function rebuildTable(data) {
  // Remove current table and show filtered table only
  tbody.selectAll("tr").remove();

  data.forEach((record) => {
    let row = tbody.append("tr");
    Object.entries(record).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    })
  });
};
