// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Display all data in table to start
function displayData(allData){ 
  tbody.text("")
  allData.forEach(function(ufoSighting){
  newTr = tbody.append("tr")
  Object.entries(ufoSighting).forEach(function([key, value]){
      newTd = newTr.append("td").text(value)	
  })
})}

console.log(tableData);
displayData(tableData);

// Select the form
var form = d3.select("#form-control");
// Select the button
var button = d3.select("#filter-btn");
// Start function on click or enter
button.on("click", (runEnter));
form.on("submit",runEnter);
// Complete the event handler function for the filter
function runEnter() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var dateInput = d3.select("#datetime").property("value")

  if (dateInput.trim() === "" ) {
    // Display the whole database if the date field has no date
    var filteredData = tableData;}
    else {
      // otherwise, display the filtered dataset
      var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === dateInput.trim());
    };

      // Display message if no records found
  if (filteredData.length == 0) {
    d3.select("tbody")
      .append("tr")
      .append("td")
        .attr("colspan", 7)
        .html("<h4>No Records Found</h4>");
  };

  console.log(filteredData);
  displayData(filteredData);
};