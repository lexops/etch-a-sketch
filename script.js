const container = document.querySelector(".container")

function renderGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    container.appendChild(row)
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div")
      square.classList.add("square")
      row.appendChild(square)
    }
  }

  const squares = document.querySelectorAll(".square")

  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.classList.add("active")
    })
  })
}

renderGrid(32)

function removeGrid() {
  rows = document.querySelectorAll(".row")
  rows.forEach(row => container.removeChild(row))
}

const gridSizeBtn = document.createElement("button")
gridSizeBtn.textContent = "Grid size"

gridSizeBtn.addEventListener("click", () => {
  let gridSize = prompt("Enter the desired grid size: ")
  gridSize = (gridSize < 100) ? parseInt(gridSize) : 100
  removeGrid()
  renderGrid(gridSize)
})

const body = document.querySelector("body")
const h1 = document.querySelector("h1")
body.insertBefore(gridSizeBtn, container)



