let tableToCheck = [];

tableToCheck = arrayToTable(array_number, tableToCheck);
displayTable(tableToCheck);

function arrayToTable(inputArray, table) {
  for (let i = 0; i < inputArray.length; i++) {
      table[i] = inputArray[i].split(" ");
    }
    return table;
}

function displayTable(tableData) {
    let eTable = document.createElement('table');
    let eTableBody = document.createElement('tbody');
    
    tableData.forEach(rowData => {
        let row = document.createElement('tr');
        
        rowData.forEach(cellData => {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });
        
        eTableBody.appendChild(row);
    });
    eTable.appendChild(eTableBody);
    document.body.appendChild(eTable);
}

checkTable(tableToCheck);

