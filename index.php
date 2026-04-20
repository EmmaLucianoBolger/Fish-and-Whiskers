<?php include("db.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Fish & Whiskers</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Fish & Whiskers</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="cart.html">Cart</a>
        <a href="login.html">Login</a>
        <a href="sellerDashboard.html">Seller</a>
    </nav>
</header>

<section class="products">

<?php
$result = $conn->query("SELECT * FROM products");

while($row = $result->fetch_assoc()) {
    echo "
    <div class='product'>
        <img src='{$row['image']}' alt='{$row['name']}'>
        <h2>{$row['name']}</h2>
        <p>€{$row['price']}</p>
        <button onclick=\"addToCart('{$row['name']}', {$row['price']})\">Add to Cart</button>
    </div>
    ";
}
?>

</section>

<script src="js/script.js"></script>
<script src="js/rain.js"></script>

</body>
</html>