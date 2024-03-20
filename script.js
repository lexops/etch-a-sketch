function getRandomColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  return `rgb(${r}, ${g}, ${b})`

}

const container = document.querySelector(".container")

const grid = document.createElement("div")
grid.classList.add("grid")
container.appendChild(grid)

function renderGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    grid.appendChild(row)
    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div")
      square.classList.add("square")
      row.appendChild(square)
    }
  }

  let selectedRainbow = true

  const squares = document.querySelectorAll(".square")

  squares.forEach(square => {
    square.addEventListener("mouseover", () => {
      square.style.borderColor = "rgba(255, 225, 255, 0)"

      if (square.darkness) {
        square.darkness += 0.1
      } else {
        square.darkness = 0.1
      }

      square.style.opacity = square.darkness

      if (selectedRainbow) {
        square.style.backgroundColor = getRandomColor()
      } else {
        square.style.backgroundColor = "black"
      }

    })
  })
}

renderGrid(32)

function removeGrid() {
  rows = document.querySelectorAll(".row")
  rows.forEach(row => grid.removeChild(row))
}

const gridSizeBtn = document.createElement("button")
gridSizeBtn.textContent = "Grid size"

gridSizeBtn.addEventListener("click", () => {
  let gridSize = prompt("Enter the desired grid size: ")
  gridSize = (gridSize < 100) ? parseInt(gridSize) : 100
  removeGrid()
  renderGrid(gridSize)
})

const h1 = document.querySelector("h1")
container.insertBefore(gridSizeBtn, grid)
