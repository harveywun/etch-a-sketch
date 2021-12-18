const container = document.querySelector(".container");

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        for (let j = 0; j < gridSize; j++) {
            const newPix = document.createElement("div");
            newPix.classList.add("pix");
            newPix.addEventListener("mouseover", () => {
                newPix.classList.add("hover");
            });
            newRow.appendChild(newPix);
        }
        container.appendChild(newRow);
    }
}

const button = document.querySelector("button");

button.addEventListener("click", () => {
    container.innerHTML = "";
    let newGridSize = 16;

    do {
        newGridSize = prompt("Enter New Grid Size (<100):");
    } while (newGridSize > 100);

    // let newGridSize = prompt("Enter New Grid Size:");

    createGrid(newGridSize);
})

createGrid(16);