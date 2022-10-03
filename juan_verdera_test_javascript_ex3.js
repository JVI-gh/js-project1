function checkTable(tableToCheck) {
  //new table for errors
  let eTable = document.createElement("table");
  let eTableBody = document.createElement("tbody");
  eTableBody.id = "errors";
  eTable.appendChild(eTableBody);
  document.body.appendChild(eTable);

  verifyRow(tableToCheck);

  verifyColumn(tableToCheck);

  verifyRegion(tableToCheck);
}

function verifyRow(tableToCheck) {
  tableToCheck.forEach((row, index) => {
    if (!verifyData(row)) {
      //creating error index line
      let rowE = document.createElement("tr");
      let indexErrorElement = document.createElement("td");
      indexErrorElement.appendChild(
        document.createTextNode("Line " + (index + 1) + " incorrect")
      );

      rowE.appendChild(indexErrorElement);

      row.forEach((cellData) => {
        let cell = document.createElement("td");
        cell.appendChild(document.createTextNode(cellData));
        rowE.appendChild(cell);
      });
      document.getElementById("errors").innerHTML += rowE.innerHTML;
    }
  });
}

function verifyColumn(tableToCheck) {
  for (let i = 0; i < tableToCheck[0].length; i++) {
    let column = [];
    for (let j = 0; j < tableToCheck.length; j++) {
      column.push(tableToCheck[j][i]);
    }
    if (!verifyData(column)) {
        let rowE = document.createElement("tr");
        let indexErrorElement = document.createElement("td");
        indexErrorElement.appendChild(
          document.createTextNode("Column " + (i + 1) + " incorrect")
        );
  
        rowE.appendChild(indexErrorElement);
  
        column.forEach((cellData) => {
          let cell = document.createElement("td");
          cell.appendChild(document.createTextNode(cellData));
          rowE.appendChild(cell);
        });
        document.getElementById("errors").innerHTML += rowE.innerHTML;
    }
  }
}

function verifyRegion(tableToCheck) {
  for (let i = 0; i < tableToCheck.length; i += 3) {
    for (let j = 0; j < tableToCheck[i].length; j += 3) {
      let region = [];
      //iterate over regions
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          region.push(tableToCheck[i + k][j + l]);
        }
      }
      if (!verifyData(region)) {
        let rowE = document.createElement("tr");
        let indexErrorElement = document.createElement("td");
        indexErrorElement.appendChild(
          document.createTextNode("Region " + (i+3) + " incorrect")
        );
  
        rowE.appendChild(indexErrorElement);
  
        tableToCheck[i].forEach((cellData) => {
          let cell = document.createElement("td");
          cell.appendChild(document.createTextNode(cellData));
          rowE.appendChild(cell);
        });
        document.getElementById("errors").innerHTML += rowE.innerHTML;
      }
    }
  }
}
