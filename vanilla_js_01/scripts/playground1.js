window.onload = function() {
  // Exercise from https://eloquentjavascript.net/14_dom.html
  // Create nodes
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  const HEADING = [
    "name","height","place"
  ];
  let mountainTable = document.createElement("table");
  let headingRow = document.createElement("tr");
  mountainTable.appendChild(headingRow);
  for (let h of HEADING) {
    let newHeading = document.createElement("th");
    headingRow.appendChild(newHeading);
    let newText = document.createTextNode(h);
    newHeading.appendChild(newText);
  }

  // "of" loop iterates through an iteratable (e.g. an array)
  for (let mountain of MOUNTAINS) {
    let newRow = document.createElement("tr");
    mountainTable.appendChild(newRow);
    for (const [key,value] of Object.entries(mountain)) {
      let newCell = document.createElement("td");
      newRow.appendChild(newCell);
      let newCellText = document.createTextNode(value);
      newCell.appendChild(newCellText);
      newCell.style.border = "1px solid black";
    }
  }
  document.body.appendChild(mountainTable);
  document.querySelector('table').style.border = "1px solid black";
}
