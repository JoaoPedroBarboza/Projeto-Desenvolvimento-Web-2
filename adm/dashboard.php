<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestor de Finanças - Dashboard</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="dashboard-container">
        <div class="dashboard-header">
            <h2>Gestor de Finanças</h2>
            <p class="dashboard-subtitle">
                Bem-vindo, <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong>! 
                Gerencie suas finanças de forma inteligente.
            </p>
        </div>

        <div class="menu-grid">
            <a href="financas/financas.html" class="menu-card">
                <div class="menu-icon">📊</div>
                <div class="menu-title">Gestão Financeira</div>
                <div class="menu-description">
                    Controle suas receitas, despesas e categorias de gastos
                </div>
            </a>
            
            <a href="usuarios/usuario.html" class="menu-card">
                <div class="menu-icon">👥</div>
                <div class="menu-title">Gerenciar Usuários</div>
                <div class="menu-description">
                    Administre os usuários do sistema e suas permissões
                </div>
            </a>
            
            <a href="#" class="menu-card">
                <div class="menu-icon">📈</div>
                <div class="menu-title">Relatórios</div>
                <div class="menu-description">
                    Visualize gráficos e relatórios das suas finanças
                </div>
            </a>
            
            <a href="#" class="menu-card">
                <div class="menu-icon">⚙️</div>
                <div class="menu-title">Configurações</div>
                <div class="menu-description">
                    Configure categorias, metas e preferências do sistema
                </div>
            </a>
        </div>

        <a href="logout.php" class="logout-btn">Sair do Sistema</a>
    </div>
</body>
</html>

