<?php
include("db.php");
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();

$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {

    if (password_verify($password, $row['password'])) {

        $_SESSION['user'] = $row;

        if ($row['role'] == 'seller') {
            header("Location: sellerdashboard.html");
        } else {
            header("Location: index.php");
        }

    } else {
        echo "Wrong password";
    }

} else {
    echo "User not found";
}
?>