<?php include("db.php"); ?>

<!DOCTYPE html>
<html>
<head>
    <title>All Products</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Shop Products</h1>
    <nav>
        <a href="index.php">Home</a>
        <a href="sellerdashboard.html">Dashboard</a>
    </nav>
</header>

<section class="page">

<?php
$result = $conn->query("SELECT * FROM products");

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "
        <div class='card'>
            <h3>{$row['name']}</h3>
            <p>€{$row['price']}</p>
        </div>
        ";
    }
} else {
    echo "<p>No products found</p>";
}
?>

</section>

</body>
</html>