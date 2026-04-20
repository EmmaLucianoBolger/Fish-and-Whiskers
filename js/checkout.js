function placeOrder() {
    let name = document.getElementById("customerName").value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!name || cart.length === 0) {
        alert("Missing info");
        return;
    }

    fetch("placeOrder.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            cart: cart
        })
    })
    .then(res => res.text())
    .then(data => {
        localStorage.removeItem("cart");
        window.location.href = "confirmation.html";
    });
}