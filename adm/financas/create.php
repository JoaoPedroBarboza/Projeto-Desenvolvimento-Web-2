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
    $descricao = $_POST['descricao'] ?? '';
    $valor = $_POST['valor'] ?? '';
    $tipo = $_POST['tipo'] ?? '';
    $categoria = $_POST['categoria'] ?? '';
    $data = $_POST['data'] ?? '';
    $usuario_id = $_SESSION['user_id'];

    // Validação básica
    if (empty($descricao) || empty($valor) || empty($tipo) || empty($categoria) || empty($data)) {
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

    // Preparar e executar a query
    $stmt = $conn->prepare("INSERT INTO transacoes_financeiras (descricao, valor, tipo, categoria, data, usuario_id) VALUES (?, ?, ?, ?, ?, ?)");
    
    if (!$stmt) {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Erro na preparação da consulta: " . $conn->error]);
        exit();
    }

    $stmt->bind_param("sdsssi", $descricao, $valor, $tipo, $categoria, $data, $usuario_id);

    if ($stmt->execute()) {
        ob_clean();
        echo json_encode(["success" => true, "message" => "Transação cadastrada com sucesso!"]);
        exit();
    } else {
        ob_clean();
        echo json_encode(["success" => false, "message" => "Erro ao cadastrar transação: " . $stmt->error]);
        exit();
    }

    $stmt->close();
} else {
    ob_clean();
    echo json_encode(["success" => false, "message" => "Método não permitido."]);
    exit();
}

$conn->close();
