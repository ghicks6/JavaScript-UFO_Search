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

  // 'Filter Table' button
  var button = d3.select("#filter-btn");

  // Filter the database
  button.on("click", function(event) { 
    d3.event.preventDefault();
    deleteTbody();
    var filteredData = tableData;
    var inputId = document.getElementsByClassName("form-control");
    
    // Iterate through all the input fields
    for (var i = 0; i < inputId.length; i++) {
      var idName = inputId[i].id;
      var field = d3.select("#" + idName).property("value");
      
      // Treat empty or space-only fields as a search for ALL for that field
      if (field.trim() !== "") {
        var filteredData = filteredData.filter(ufoSighting =>
          // Match as case insensitive
          ufoSighting[idName].toUpperCase().trim() ===
          field.toUpperCase().trim());
      };
    };
   
    // Display message if no records found
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
    
    // Display the database
    console.log(filteredData);
    displayData(filteredData);
  });