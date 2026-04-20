function createRain() {
    const drop = document.createElement("div");
    drop.classList.add("raindrop");

    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = (Math.random() * 1 + 1) + "s";
    drop.style.opacity = Math.random();

    document.body.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 3000);
}

window.addEventListener("load", () => {
    setInterval(createRain, 150);
});