let cart = [];

function addToCart(name, price) {
    // Only allow one of each item
    let exists = cart.find(item => item.name === name);

    if (exists) {
        alert("You can only add one of each item!");
        return;
    }

    cart.push({ name, price });
    alert(name + " added to cart!");
    localStorage.setItem("cart", JSON.stringify(cart));
}
window.onload = () => {
    const products = document.querySelectorAll(".product");

    products.forEach((product, index) => {
        product.style.opacity = 0;
        product.style.transform = "translateY(20px)";

        setTimeout(() => {
            product.style.transition = "all 0.5s ease";
            product.style.opacity = 1;
            product.style.transform = "translateY(0)";
        }, index * 200);
    });
};

