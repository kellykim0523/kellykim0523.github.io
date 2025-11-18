let isDrawing = false;


const themes = ["fluffy", "glossy", "gummy", "rigid"];


const selectedTheme = themes[Math.floor(Math.random() * themes.length)];

console.log("Selected Theme:", selectedTheme);

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

document.addEventListener("mousemove", (event) => {
    if (!isDrawing) return;

    const dot = document.createElement("div");
    dot.classList.add("dot");

   
    let size = Math.floor(Math.random() * 100) + 8; 
    dot.style.width = size + "px";
    dot.style.height = size + "px";

    
    dot.classList.add(selectedTheme);

   
    dot.style.left = event.clientX + "px";
    dot.style.top = event.clientY + "px";

    document.body.appendChild(dot);
});
