const columnDefs = [
  { field: 'userId' },
  { field: 'id' },
  { field: 'title' },
  { field: 'completed' }
]

const gridOptions = {
  columnDefs: columnDefs,
  onGridReady: (event) => {
    renderDataInTheTable(event.api)
  }
}

const eGridDiv = document.getElementById('data-table')
new agGrid.Grid(eGridDiv, gridOptions)

function renderDataInTheTable(api) {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      api.setRowData(data)
      api.sizeColumnsToFit()
    })
}
