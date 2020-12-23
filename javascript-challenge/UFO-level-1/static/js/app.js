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

  // Clear the table for new data
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };

  // Select the form
  var form = d3.select("#form-control");
  // Select the button
  var button = d3.select("#filter-btn");
  // Start function on click or enter
  button.on("click", function(event) {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Delete table data
    deleteTbody();
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
  });