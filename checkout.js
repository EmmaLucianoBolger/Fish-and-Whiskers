function placeOrder() {
    let name = document.getElementById("customerName").value;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!name || cart.length === 0) {
        alert("Missing info ");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price, 0);

    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push({ name, total });

    localStorage.setItem("orders", JSON.stringify(orders));
    localStorage.removeItem("cart");

    window.location.href = "confirmation.html";
}