// from data.js
var tableData = data;

var button = d3.select("button")

function filterData() {

  // d3.event.preventDefault();

  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  var filtered = data.filter(ufo => ufo.datetime === inputValue);

  var filterType = d3.select("#selFilter").property("value");

  console.log(filterType);

  if (filterType === "datetime") {
    filtered = data.filter(ufo => ufo.datetime === inputValue);
  } else if (filterType === "city") {
    filtered = data.filter(ufo => ufo.city === inputValue);
  } else if (filterType === "state") {
    filtered = data.filter(ufo => ufo.state === inputValue);
  }

  console.log(filtered);
  buildTable(filtered);

  // console.log(filtered.length);

}

function buildTable(filtered) {
  var table = d3.select("#ufo-table");
  //
  // var tbody = table.select("tbody");

  // var tbody = document.createElement('tbody');
  // d3.select("tbody").node().value = ""
  //
  // var trow;
  // var newTable = filtered.forEach(data => {
  //   trow = tbody.append("tr");
  //   trow.append("td").text(data.datetime);
  //   trow.append("td").text(data.city);
  //   trow.append("td").text(data.state);
  //   trow.append("td").text(data.country);
  //   trow.append("td").text(data.shape);
  //   trow.append("td").text(data.durationMinutes);
  //   trow.append("td").text(data.comments);
  // })

  // old_tbody.parentNode.replaceChild(tbody, old_tbody);

  var rows = table.select("tbody").selectAll("tr").data(filtered);
  rows.enter()
    .append("tr")
    .merge(rows)
    .html(data => `<td>${data.datetime}</td><td>${data.city}</td><td>${data.state}</td><td>${data.country}</td><td>${data.shape}</td><td>${data.durationMinutes}</td><td>${data.comments}</td>`);
  rows.exit().remove();

}

buildTable(data);
button.on("click", filterData);
