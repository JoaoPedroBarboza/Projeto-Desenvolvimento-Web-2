<?php
$host = "localhost";
$db = "financeiro";
$user = "root";
$pass = "";

$conn = new mysqli($host, $user, $pass, $db);
$conn->set_charset("utf8");

if ($conn->connect_error) {
    // Para scripts que retornam JSON, não usar die() com HTML
    if (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false) {
        header('Content-Type: application/json');
        echo json_encode(["success" => false, "message" => "Erro de conexão com o banco de dados."]);
        exit();
    } else {
        die("Conexão falhou: " . $conn->connect_error);
    }
}
