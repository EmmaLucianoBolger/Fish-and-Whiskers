window.onload = () => {
    const form = document.querySelector("form");

    form.style.opacity = 0;
    form.style.transform = "scale(0.9)";

    setTimeout(() => {
        form.style.transition = "all 0.5s ease";
        form.style.opacity = 1;
        form.style.transform = "scale(1)";
    }, 200);
};