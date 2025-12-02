const upload = document.getElementById("upload");
const board = document.getElementById("board");

upload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const img = document.createElement("img");
    img.classList.add("postit");
    img.src = URL.createObjectURL(file);

    
    const size = Math.floor(Math.random() * 200) + 150;
    img.style.width = size + "px";

    
    img.style.left = Math.random() * (window.innerWidth - size) + "px";
    img.style.top = Math.random() * (window.innerHeight - size - 200) + "px";

    
    const rotate = (Math.random() - 0.5) * 40; 
    img.style.transform = `rotate(${rotate}deg)`;

    board.appendChild(img);

    makeDraggable(img);
});

function makeDraggable(el) {
    let offsetX, offsetY;

    el.addEventListener("mousedown", (e) => {
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;

        function move(e) {
            el.style.left = e.clientX - offsetX + "px";
            el.style.top = e.clientY - offsetY + "px";
        }

        function stop() {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", stop);
        }

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", stop);
    });
}

function goBack() {
    window.location.href = "../playground/index.html";
}
