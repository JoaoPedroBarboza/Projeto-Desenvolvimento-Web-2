# Gestor de Finanças - Sistema de Gestão Financeira Pessoal

Um sistema web completo para controle e gestão de finanças pessoais, desenvolvido em HTML, CSS, JavaScript e PHP com MySQL.

## 🚀 Funcionalidades

### ✅ Implementado
- **Sistema de Login/Logout** com autenticação segura
- **Dashboard Principal** com visão geral do sistema
- **Gestão de Usuários** (CRUD completo)
- **Gestão Financeira** (CRUD de transações)
  - Cadastro de receitas e despesas
  - Categorização de transações
  - Resumo financeiro em tempo real
  - Histórico completo com filtros

### 📊 Categorias Disponíveis
- 🍽️ Alimentação
- 🏠 Moradia
- 🚗 Transporte
- ⚕️ Saúde
- 📚 Educação
- 🎮 Lazer
- 📋 Contas e Serviços
- 💼 Salário
- 📈 Investimento
- 📦 Outros

## 🛠️ Tecnologias Utilizadas

- **Frontend:**
  - HTML5
  - CSS3 (Design moderno com gradientes e glassmorphism)
  - JavaScript Vanilla (Ajax/XMLHttpRequest)
  
- **Backend:**
  - PHP 7.4+
  - MySQL
  - Sessões para autenticação

## 📋 Pré-requisitos

- XAMPP (ou outro servidor local com Apache + PHP + MySQL)
- Navegador web moderno
- MySQL 5.7+ ou MariaDB

## ⚙️ Instalação

1. **Clone ou baixe o projeto**
   ```
   Extraia os arquivos na pasta htdocs do XAMPP
   ```

2. **Configure o banco de dados**
   - Abra o phpMyAdmin (http://localhost/phpmyadmin)
   - Crie um banco de dados chamado `financeiro`
   - Execute o script SQL contido no arquivo `sql.txt`

3. **Configure a conexão**
   - Verifique os arquivos `db.php` nas pastas `/usuarios/` e `/financas/`
   - Ajuste as credenciais se necessário:
     ```php
     $host = "localhost";
     $db = "financeiro";
     $user = "root";
     $pass = "";
     ```

4. **Inicie o servidor**
   - Inicie o Apache e MySQL no XAMPP
   - Acesse: `http://localhost/[pasta-do-projeto]/login.html`

## 👤 Acesso Padrão

- **Usuário:** admin
- **Senha:** 1234

## 📁 Estrutura do Projeto

```
📦 Gestor de Finanças
├── 📄 login.html              # Tela de login
├── 📄 dashboard.php           # Dashboard principal
├── 📄 logout.php             # Logout do sistema
├── 📄 login.php              # Processamento do login
├── 📄 db.php                 # Conexão com banco
├── 📄 sql.txt                # Script de criação do banco
├── 📂 css/
│   └── 📄 style.css          # Estilos globais
├── 📂 js/
│   └── 📄 login-ck.js        # JavaScript do login
├── 📂 usuarios/              # Módulo de usuários
│   ├── 📄 usuario.html       # Interface CRUD usuários
│   ├── 📄 script.js          # JavaScript usuários
│   ├── 📄 create.php         # Criar usuário
│   ├── 📄 read.php           # Listar usuários
│   ├── 📄 update.php         # Atualizar usuário
│   ├── 📄 delete.php         # Excluir usuário
│   └── 📄 db.php             # Conexão local
└── 📂 financas/              # Módulo financeiro
    ├── 📄 financas.html      # Interface gestão financeira
    ├── 📄 financas.js        # JavaScript financeiro
    ├── 📄 create.php         # Criar transação
    ├── 📄 read.php           # Listar transações
    ├── 📄 update.php         # Atualizar transação
    ├── 📄 delete.php         # Excluir transação
    └── 📄 db.php             # Conexão local
```

## 🎨 Design

O sistema utiliza um design moderno com:
- **Gradientes** em tons de azul e roxo
- **Glassmorphism** (efeito de vidro com blur)
- **Responsividade** para diferentes dispositivos
- **Ícones e emojis** para melhor UX
- **Animações sutis** em hover e focus

## 🔐 Segurança

- Autenticação por sessão
- Validação de entrada de dados
- Prepared statements (proteção contra SQL Injection)
- Verificação de permissões por usuário
- Hash MD5 para senhas (em produção recomenda-se bcrypt)

## 📊 Funcionalidades Financeiras

### Resumo em Tempo Real
- Total de receitas
- Total de despesas  
- Saldo atual (receitas - despesas)
- Cores dinâmicas baseadas no saldo

### Gestão de Transações
- Formulário intuitivo de cadastro
- Validação completa de dados
- Edição inline de transações
- Exclusão com confirmação
- Histórico ordenado por data

## 🚀 Próximas Funcionalidades

- 📈 Gráficos e relatórios
- 🎯 Sistema de metas financeiras
- 📱 Versão mobile app
- 💱 Múltiplas moedas
- 📧 Notificações por email
- 🔄 Backup automático

## 👨‍💻 Desenvolvimento

Este sistema foi desenvolvido como projeto acadêmico, seguindo boas práticas de desenvolvimento web e priorizando:
- Código limpo e bem documentado
- Arquitetura modular
- Interface intuitiva
- Performance otimizada

---

**© 2025 Gestor de Finanças - Sistema de Gestão Financeira Pessoal**
