<?php
header('Content-Type: application/json; charset=utf-8');

// Verificar se o usuário está logado
session_start();
if (!isset($_SESSION['user_id'])) {
    ob_clean();
    echo json_encode(["success" => false, "message" => "Usuário não autenticado."]);
    exit();
}

include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    parse_str(file_get_contents("php://input"), $delete_vars);
    $id = $_GET['id'] ?? $delete_vars['id'] ?? '';
    $usuario_id = $_SESSION['user_id'];

    if (empty($id)) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "ID da transação é obrigatório."]);
        exit();
    }

    // Verificar se a transação pertence ao usuário logado
    $stmt = $conn->prepare("SELECT id FROM transacoes_financeiras WHERE id = ? AND usuario_id = ?");
    $stmt->bind_param("ii", $id, $usuario_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows === 0) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Transação não encontrada ou sem permissão."]);
        exit();
    }

    // Preparar e executar a query de exclusão
    $stmt = $conn->prepare("DELETE FROM transacoes_financeiras WHERE id = ? AND usuario_id = ?");
    
    if (!$stmt) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Erro na preparação da consulta: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("ii", $id, $usuario_id);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            ob_clean();
            echo json_encode(["success" => true, "message" => "Transação excluída com sucesso!"]);
            exit();
        } else {
            ob_clean();
            echo json_encode(["success" => false, "message" => "Transação não foi encontrada."]);
            exit();
        }
    } else {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Erro ao excluir transação: " . $stmt->error]);
        exit();
    }

    $stmt->close();
} else {
    ob_clean();
    echo json_encode(["success" => false, "message" => "Método não permitido."]);
    exit();
}

$conn->close();
