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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'] ?? '';
    $descricao = $_POST['descricao'] ?? '';
    $valor = $_POST['valor'] ?? '';
    $tipo = $_POST['tipo'] ?? '';
    $categoria = $_POST['categoria'] ?? '';
    $data = $_POST['data'] ?? '';
    $usuario_id = $_SESSION['user_id'];

    // Validação básica
    if (empty($id) || empty($descricao) || empty($valor) || empty($tipo) || empty($categoria) || empty($data)) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Todos os campos são obrigatórios."]);
        exit();
    }

    // Validar tipo
    if (!in_array($tipo, ['receita', 'despesa'])) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Tipo inválido."]);
        exit();
    }

    // Validar valor
    if (!is_numeric($valor) || $valor <= 0) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Valor deve ser um número positivo."]);
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

    // Preparar e executar a query de atualização
    $stmt = $conn->prepare("UPDATE transacoes_financeiras SET descricao = ?, valor = ?, tipo = ?, categoria = ?, data = ? WHERE id = ? AND usuario_id = ?");
    
    if (!$stmt) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Erro na preparação da consulta: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("sdsssii", $descricao, $valor, $tipo, $categoria, $data, $id, $usuario_id);

    if ($stmt->execute()) {
        if ($stmt->affected_rows > 0) {
            ob_clean();
            echo json_encode(["success" => true, "message" => "Transação atualizada com sucesso!"]);
            exit();
        } else {
            ob_clean();
            echo json_encode(["success" => false, "message" => "Nenhuma alteração foi feita."]);
            exit();
        }
    } else {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Erro ao atualizar transação: " . $stmt->error]);
        exit();
    }

    $stmt->close();
} else {
    ob_clean();
    echo json_encode(["success" => false, "message" => "Método não permitido."]);
    exit();
}

$conn->close();
