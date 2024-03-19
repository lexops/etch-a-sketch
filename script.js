const container = document.querySelector(".container")

let gridSize = 32

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



