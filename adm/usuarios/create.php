<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];

$sql = "INSERT INTO usuarios (username, email) VALUES ('$name', '$email')";

if ($conn->query($sql)) {
    echo json_encode(["success" => true, "message" => "Usuário cadastrado com sucesso."]);
} else {
    echo json_encode(["success" => false, "message" => "Ocorreu um erro ao cadastrar o usuário"]);
    //echo "Erro: " . $conn->error;
}
?>
