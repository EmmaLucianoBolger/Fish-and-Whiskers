let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

function displayCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>Your cart is empty</p>";
        totalDisplay.innerText = "Total: €0";
        return;
    }

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>€${item.price}</p>
            <button class="remove-btn" onclick="removeItem(${index})">Remove </button>
        `;

        cartItemsDiv.appendChild(div);
    });

    totalDisplay.innerText = "Total: €" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty ");
        return;
    }

    alert(" Order placed! Your fish & cats are on the way ");
    
    localStorage.removeItem("cart");
    window.location.href = "confirmation.html";
}

displayCart();