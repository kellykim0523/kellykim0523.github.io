document.addEventListener("mousemove", (event) => {


  const count = Math.floor(Math.random() * 4) + 2;

  for (let i = 0; i < count; i++) {
    const dot = document.createElement("div");
    dot.classList.add("grain-dot");

   
    const offsetX = (Math.random() - 0.5) * 200; 
    const offsetY = (Math.random() - 0.5) * 100;

    dot.style.left = event.clientX + offsetX + "px";
    dot.style.top = event.clientY + offsetY + "px";

    document.body.appendChild(dot);

    setTimeout(() => dot.remove(), 500);
  }
});
