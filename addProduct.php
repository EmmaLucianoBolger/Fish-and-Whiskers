<?php
include("db.php");

$name = $_POST['name'];
$price = $_POST['price'];

$stmt = $conn->prepare("INSERT INTO products (name, price) VALUES (?,?)");
$stmt->bind_param("sd", $name, $price);
$stmt->execute();

echo "Product added!";
?>