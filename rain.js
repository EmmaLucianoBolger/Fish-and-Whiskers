function createRain() {
    const rainDrop = document.createElement("div");
    rainDrop.classList.add("raindrop");

    rainDrop.style.left = Math.random() * window.innerWidth +"px";

    rainDrop.style.animationDuration =(Math.random() * 1 + 0.5) + "s";

    document.body.appendChild(rainDrop);

    setTimeout(() => {
        rainDrop.remove();
    }, 2000);
}

setInterval(createRain, 100);