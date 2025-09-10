# 🏦 Gestor de Finanças - Sistema de Gestão Financeira Pessoal

## 📋 Sobre o Projeto

O **Gestor de Finanças** é um sistema web completo para gestão financeira pessoal, desenvolvido como atividade acadêmica. O sistema permite controlar receitas, despesas, categorias e usuários através de uma interface web responsiva conectada a um banco de dados MySQL.

## 🎯 Requisitos da Atividade Atendidos

### ✅ 1. Tela de Login (1,0 pts)
- **Front-end**: Interface de login responsiva com validação
- **Back-end**: Autenticação via PHP com consulta ao banco de dados
- **Funcionalidades**:
  - Validação de credenciais
  - Redirecionamento para dashboard
  - Mensagem de boas-vindas personalizada
  - Sistema de sessão para área restrita

### ✅ 2. Gerenciamento de Usuários (1,0 pts)
- **CRUD completo**: Create, Read, Update, Delete
- **Front-end**: Interface para listar, criar, editar e excluir usuários
- **Back-end**: APIs REST em PHP para todas as operações
- **Segurança**: Acesso apenas para usuários logados

### ✅ 3. Gerenciamento de Finanças (1,0 pts)
- **CRUD completo**: Gestão de transações financeiras
- **Funcionalidades**: Controle de receitas e despesas por categoria
- **Front-end**: Interface intuitiva com formulários dinâmicos
- **Back-end**: APIs REST com validação e controle de permissões

## 🛠️ Tecnologias Utilizadas

### Front-end
- **HTML5**: Estrutura semântica das páginas
- **CSS3**: Estilização responsiva e moderna
- **JavaScript (Vanilla)**: Interatividade e comunicação com APIs
- **AJAX/XMLHttpRequest**: Requisições assíncronas

### Back-end
- **PHP 8+**: Lógica de negócio e APIs REST
- **MySQL**: Banco de dados relacional
- **Session Management**: Controle de autenticação

### Servidor
- **XAMPP**: Apache + MySQL + PHP

## 🗄️ Estrutura do Banco de Dados

### Tabela: `usuarios`
```sql
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    email VARCHAR(100) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Tabela: `transacoes_financeiras`
```sql
CREATE TABLE transacoes_financeiras (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    tipo ENUM('receita', 'despesa') NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    data DATE NOT NULL,
    usuario_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
```

## 📁 Estrutura de Arquivos

```
gestor-de-financas/
├── adm/
│   ├── css/
│   │   └── style.css              # Estilos gerais do sistema
│   ├── js/
│   │   ├── login-ck.js           # JavaScript do login
│   │   └── [outros arquivos JS]
│   ├── financas/
│   │   ├── financas.html         # Interface de gestão financeira
│   │   ├── financas.js           # Lógica front-end das finanças
│   │   ├── create.php            # API para criar transações
│   │   ├── read.php              # API para listar transações
│   │   ├── update.php            # API para atualizar transações
│   │   ├── delete.php            # API para excluir transações
│   │   └── db.php                # Conexão com banco de dados
│   ├── usuarios/
│   │   ├── usuario.html          # Interface de gestão de usuários
│   │   ├── script.js             # Lógica front-end dos usuários
│   │   ├── create.php            # API para criar usuários
│   │   ├── read.php              # API para listar usuários
│   │   ├── update.php            # API para atualizar usuários
│   │   ├── delete.php            # API para excluir usuários
│   │   ├── style.css             # Estilos específicos
│   │   └── db.php                # Conexão com banco de dados
│   ├── dashboard.php             # Página principal pós-login
│   ├── login.html                # Página de login
│   ├── login.php                 # Processamento do login
│   ├── logout.php                # Processamento do logout
│   ├── db.php                    # Conexão principal com BD
│   └── sql.txt                   # Script de criação do banco
```

## 🚀 Como Executar o Projeto

### Pré-requisitos
1. **XAMPP** instalado e funcionando
2. **Apache e MySQL** ativos no XAMPP
3. Navegador web moderno

### Passo a Passo

1. **Configurar o Banco de Dados**:
   ```bash
   # Acesse o phpMyAdmin
   http://localhost/phpmyadmin
   
   # Crie o banco de dados 'financeiro'
   # Execute o conteúdo do arquivo sql.txt
   ```

2. **Configurar o Projeto**:
   ```bash
   # O projeto deve estar em: C:\xampp\htdocs\gestor-de-financas
   # Verifique se todos os arquivos estão na estrutura correta
   ```

3. **Acessar o Sistema**:
   ```bash
   # Abra o navegador e acesse:
   http://localhost/gestor-de-financas/adm/login.html
   
   # Credenciais padrão:
   Usuário: admin
   Senha: 1234
   ```


---

## 📚 Recursos Adicionais

- **Documentação PHP**: [php.net](https://php.net)
- **MySQL Documentation**: [dev.mysql.com](https://dev.mysql.com/doc/)
- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org)

---

**Desenvolvido como atividade acadêmica - 2025**
