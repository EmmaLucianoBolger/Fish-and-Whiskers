<?php
include("db.php");

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['name'];
$cart = $data['cart'];

foreach ($cart as $item) {
    $stmt = $conn->prepare("INSERT INTO orders (customer_name, product_name, price) VALUES (?,?,?)");
    $stmt->bind_param("ssd", $name, $item['name'], $item['price']);
    $stmt->execute();
}

echo "success";
?>