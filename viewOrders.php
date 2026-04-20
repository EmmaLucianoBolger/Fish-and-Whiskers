<?php include("db.php"); ?>

<!DOCTYPE html>
<html>
<head>
    <title>Orders</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Orders</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="sellerdashboard.html">Dashboard</a>
    </nav>
</header>

<section class="page">

<?php
$result = $conn->query("SELECT * FROM orders ORDER BY order_date DESC");

while($row = $result->fetch_assoc()) {
    echo "
    <div class='card'>
        <h3>{$row['customer_name']}</h3>
        <p>Product: {$row['product_name']}</p>
        <p>€{$row['price']}</p>
    </div>
    ";
}
?>

</section>

</body>
</html>