fetch('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    return response.json()
  })
  .then(function (apiJsonData) {
    console.log(apiJsonData)
    renderDataInTheTable(apiJsonData)
  })

function renderDataInTheTable(todos) {
  const myTable = document.getElementById('html-data-table')
  todos.forEach((todo) => {
    let newRow = document.createElement('tr')
    Object.values(todo).forEach((value) => {
      let cell = document.createElement('td')
      cell.innerText = value
      newRow.appendChild(cell)
    })
    myTable.appendChild(newRow)
  })
}
