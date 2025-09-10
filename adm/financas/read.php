<?php

header('Content-Type: application/json; charset=utf-8');

// Verificar se o usuário está logado
session_start();
if (!isset($_SESSION['user_id'])) {
    ob_clean();
    echo json_encode([]);
    exit();
}

include 'db.php';

$usuario_id = $_SESSION['user_id'];

$result = $conn->query("SELECT * FROM transacoes_financeiras WHERE usuario_id = $usuario_id ORDER BY data DESC, id DESC");

$transacoes = [];
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $transacoes[] = $row;
    }
}

ob_clean();
echo json_encode($transacoes);

$conn->close();
