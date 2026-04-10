let products = JSON.parse(localStorage.getItem("products")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];

// Add product
function addProduct() {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;

    if (!name || !price) {
        alert("Fill all fields 😾");
        return;
    }

    products.push({ name, price });
    localStorage.setItem("products", JSON.stringify(products));

    alert("✨ Product added!");
}

// Display products
if (document.getElementById("product-list")) {
    let list = document.getElementById("product-list");

    products.forEach((p, i) => {
        list.innerHTML += `
            <div class="card">
                <h3>${p.name}</h3>
                <p>€${p.price}</p>
                <button onclick="deleteProduct(${i})">Delete ❌</button>
            </div>
        `;
    });
}

function deleteProduct(index) {
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    location.reload();
}

// Display orders
if (document.getElementById("orders-list")) {
    let list = document.getElementById("orders-list");

    orders.forEach(o => {
        list.innerHTML += `
            <div class="card">
                <h3>${o.name}</h3>
                <p>Total: €${o.total}</p>
            </div>
        `;
    });
}