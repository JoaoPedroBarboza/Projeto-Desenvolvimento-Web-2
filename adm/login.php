<?php
session_start();
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    include 'db.php';

    $username = $_POST['username'];
    $password = md5($_POST['password']); // Criptografa com MD5

    // Consulta direta com verificação de usuário e senha
    $stmt = $conn->prepare("SELECT id, username FROM usuarios WHERE username = ? AND senha = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 1) {
        $stmt->bind_result($id, $user);
        $stmt->fetch();

        // Login bem-sucedido
        $_SESSION['user_id'] = $id;
        $_SESSION['username'] = $user;

        echo json_encode(["success" => true]);
    } else {
        echo json_encode(["success" => false, "message" => "Usuário ou senha incorretos."]);
    }

    $stmt->close();
    $conn->close();
}
?>
