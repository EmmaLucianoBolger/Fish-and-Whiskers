<?php
include("db.php");

// Prevent errors if page is accessed directly
if (!isset($_POST['name']) || !isset($_POST['price'])) {
    header("Location: sellerdashboard.html");
    exit();
}

// Get form data
$name = $_POST['name'];
$price = $_POST['price'];

// Insert into database
$stmt = $conn->prepare("INSERT INTO products (name, price) VALUES (?,?)");
$stmt->bind_param("sd", $name, $price);
$stmt->execute();

echo "Product added!";
?>