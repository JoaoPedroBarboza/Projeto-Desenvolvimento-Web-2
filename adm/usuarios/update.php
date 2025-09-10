<?php
include 'db.php';

$id = $_POST['id'];
$name = $_POST['name'];
$email = $_POST['email'];

$sql = "UPDATE usuarios SET username='$name', email='$email' WHERE id=$id";

if ($conn->query($sql)) {
    echo json_encode(["success" => true, "message" => "Usuário alterado com sucesso."]);
} else {
    echo json_encode(["success" => false, "message" => "Ocorreu um erro ao alterar o usuário"]);
    //echo "Erro: " . $conn->error;
}
?>
