function createRain() {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");

    drop.style.left = Math.random() * window.innerWidth + "px";

    drop.style.animationDuration = (Math.random() * 1 + 0.5) + "s";

    document.body.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 2000);
}

window.addEventListener("load", () => {
    setInterval(createRain, 50);
});