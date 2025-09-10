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

## 🎬 ROTEIRO PARA VÍDEO EXPLICATIVO

### 🎥 **PARTE 1: Introdução (2-3 minutos)**

**🎯 O que falar:**
```
"Olá! Hoje vou apresentar o sistema Gestor de Finanças, desenvolvido como atividade acadêmica. 
Este é um sistema completo de gestão financeira pessoal que atende todos os requisitos solicitados:

✅ Sistema de login com área restrita
✅ Gerenciamento completo de usuários (CRUD)
✅ Gestão de transações financeiras (CRUD)

O sistema foi desenvolvido com PHP, MySQL, HTML, CSS e JavaScript, 
rodando no servidor Apache através do XAMPP."
```

**🎬 O que mostrar:**
- Tela inicial do XAMPP com Apache e MySQL ativos
- Estrutura de pastas no Windows Explorer
- Arquitetura do sistema (front-end + back-end + banco)

---

### 🎥 **PARTE 2: Requisito 1 - Sistema de Login (3-4 minutos)**

**🎯 O que explicar:**
```
"Vamos começar pelo primeiro requisito: o sistema de login. 
Aqui temos uma interface moderna e responsiva que se comunica com o back-end PHP."
```

**🎬 Demonstração prática:**
1. **Mostrar o código HTML** (`login.html`):
   - Estrutura do formulário
   - Campos de usuário e senha
   - Validações front-end

2. **Mostrar o JavaScript** (`login-ck.js`):
   - Captura dos dados do formulário
   - Requisição AJAX para o back-end
   - Tratamento das respostas

3. **Mostrar o PHP** (`login.php`):
   - Recebimento dos dados via POST
   - Consulta ao banco de dados
   - Validação de credenciais
   - Criação da sessão

4. **Demonstrar funcionalmente**:
   - Tentar login com dados incorretos (mostrar erro)
   - Fazer login com credenciais corretas (admin/1234)
   - Mostrar redirecionamento para dashboard
   - Destacar a mensagem personalizada de boas-vindas

---

### 🎥 **PARTE 3: Dashboard e Navegação (2-3 minutos)**

**🎯 O que explicar:**
```
"Após o login bem-sucedido, o usuário é redirecionado para o dashboard, 
que é a área restrita do sistema. Aqui temos os menus principais e 
a mensagem de boas-vindas personalizada."
```

**🎬 O que mostrar:**
- Interface do dashboard
- Mensagem de boas-vindas com nome do usuário
- Cards de navegação para os diferentes módulos
- Sistema de proteção (mostrar que ao tentar acessar diretamente sem login, redireciona)

---

### 🎥 **PARTE 4: Requisito 2 - Gerenciamento de Usuários (5-6 minutos)**

**🎯 O que explicar:**
```
"Agora vamos ao segundo requisito: o gerenciamento completo de usuários. 
Este módulo implementa todas as operações CRUD (Create, Read, Update, Delete) 
com comunicação front-end/back-end e persistência no banco de dados."
```

**🎬 Demonstração por funcionalidade:**

1. **LISTAR (READ)**:
   - Abrir a tela de usuários
   - Mostrar a tabela carregando via AJAX
   - Explicar o código JavaScript (`script.js`) que faz a requisição
   - Mostrar o PHP (`read.php`) que consulta o banco
   - Demonstrar os dados sendo exibidos

2. **CRIAR (CREATE)**:
   - Preencher o formulário de novo usuário
   - Mostrar validações front-end
   - Submeter o formulário
   - Explicar o JavaScript que envia os dados
   - Mostrar o PHP (`create.php`) que insere no banco
   - Demonstrar o usuário aparecendo na lista

3. **EDITAR (UPDATE)**:
   - Clicar em editar um usuário existente
   - Mostrar como os dados preenchem o formulário
   - Alterar alguns dados
   - Explicar o processo de atualização
   - Mostrar o PHP (`update.php`) e suas validações
   - Demonstrar a alteração refletindo na lista

4. **EXCLUIR (DELETE)**:
   - Clicar em excluir um usuário
   - Mostrar a confirmação
   - Explicar o processo de exclusão
   - Mostrar o PHP (`delete.php`)
   - Demonstrar o usuário sumindo da lista

**🎬 Código para destacar:**
- Estrutura da requisição AJAX
- Validações de segurança no PHP
- Prepared statements para evitar SQL Injection
- Sistema de sessões para controle de acesso

---

### 🎥 **PARTE 5: Requisito 3 - Gestão Financeira (5-6 minutos)**

**🎯 O que explicar:**
```
"O terceiro requisito é o módulo principal do sistema: a gestão de transações financeiras. 
Aqui controlamos receitas e despesas, permitindo ao usuário ter controle completo 
de sua vida financeira."
```

**🎬 Demonstração detalhada:**

1. **INTERFACE E FUNCIONALIDADES**:
   - Mostrar a tela de gestão financeira
   - Explicar os campos (descrição, valor, tipo, categoria, data)
   - Destacar a diferenciação visual entre receitas e despesas

2. **CRIAR TRANSAÇÃO (CREATE)**:
   - Adicionar uma nova receita (ex: salário)
   - Adicionar uma nova despesa (ex: compra no mercado)
   - Mostrar validações (valor positivo, campos obrigatórios)
   - Explicar o JavaScript (`financas.js`)
   - Mostrar o PHP (`create.php`) com suas validações

3. **LISTAR TRANSAÇÕES (READ)**:
   - Demonstrar a lista ordenada por data
   - Mostrar como diferencia receitas (verde) de despesas (vermelho)
   - Explicar a consulta que filtra por usuário logado

4. **EDITAR TRANSAÇÃO (UPDATE)**:
   - Editar uma transação existente
   - Mostrar como os dados preenchem o formulário
   - Alterar valores e salvar
   - Destacar as validações de segurança

5. **EXCLUIR TRANSAÇÃO (DELETE)**:
   - Excluir uma transação
   - Mostrar confirmação
   - Demonstrar a exclusão

**🎬 Aspectos técnicos importantes:**
- Relacionamento entre usuário e transações (chave estrangeira)
- Validações de tipo ENUM (receita/despesa)
- Formatação de valores monetários
- Controle de permissões (usuário só vê suas transações)

---

### 🎥 **PARTE 6: Aspectos Técnicos e Segurança (3-4 minutos)**

**🎯 O que explicar:**
```
"Vamos agora destacar os aspectos técnicos e de segurança implementados no sistema."
```

**🎬 Pontos a abordar:**

1. **SEGURANÇA**:
   - Sistema de sessões PHP
   - Prepared statements contra SQL Injection
   - Validações front-end e back-end
   - Controle de acesso por usuário
   - Hash das senhas (MD5 - mencionar que em produção seria bcrypt)

2. **ARQUITETURA**:
   - Separação front-end/back-end
   - APIs REST em PHP
   - Comunicação via AJAX/JSON
   - Estrutura MVC simplificada

3. **BANCO DE DADOS**:
   - Relacionamentos entre tabelas
   - Chaves estrangeiras
   - Índices para performance
   - Constraints e validações

4. **TRATAMENTO DE ERROS**:
   - Controle de buffer output (ob_clean)
   - Tratamento de exceções
   - Messages de erro padronizadas
   - Debug no console do navegador

---

### 🎥 **PARTE 7: Demonstração Final e Conclusão (2-3 minutos)**

**🎯 O que fazer:**
```
"Para finalizar, vou fazer uma demonstração completa do sistema, 
mostrando o fluxo completo de uso."
```

**🎬 Demonstração final:**
1. **Logout e novo login**
2. **Navegar entre os módulos**
3. **Criar alguns usuários e transações**
4. **Mostrar a integração entre os módulos**
5. **Destacar a responsividade da interface**

**🎯 Conclusão:**
```
"Este sistema atende completamente aos três requisitos da atividade:

✅ Sistema de login funcional com área restrita
✅ CRUD completo de usuários com comunicação front-end/back-end
✅ CRUD completo de transações financeiras

O projeto demonstra conhecimentos em:
- PHP para back-end e APIs REST
- JavaScript para interatividade
- MySQL para persistência de dados
- HTML/CSS para interface responsiva
- Conceitos de segurança web
- Arquitetura de sistemas web

Obrigado pela atenção!"
```

---

## 🔧 Dicas para o Vídeo

### 📹 **Preparação**:
1. **Teste todo o sistema** antes de gravar
2. **Limpe o banco** e tenha dados de exemplo preparados
3. **Prepare o ambiente** (feche outras aplicações, limpe a área de trabalho)
4. **Teste o áudio e vídeo**

### 🎨 **Durante a gravação**:
1. **Fale claramente** e em ritmo adequado
2. **Use o mouse** para destacar elementos importantes
3. **Pause quando necessário** para explicar conceitos
4. **Mostre código e resultado** lado a lado quando possível
5. **Use zoom** para destacar partes importantes do código

### ⏰ **Tempo sugerido**:
- **Total**: 20-25 minutos
- **Cada requisito**: 5-6 minutos
- **Introdução e conclusão**: 4-5 minutos

### 📝 **Checklist final**:
- [ ] Todos os requisitos foram demonstrados
- [ ] Código front-end explicado
- [ ] Código back-end explicado
- [ ] Banco de dados mostrado
- [ ] Aspectos de segurança abordados
- [ ] Sistema funcionando completamente

---

## 🆘 Troubleshooting

### Problemas Comuns:

1. **Erro de conexão com banco**:
   - Verificar se MySQL está ativo no XAMPP
   - Conferir credenciais em `db.php`

2. **Erro de JSON inválido**:
   - Verificar se não há saída HTML antes do JSON
   - Conferir se as tags PHP estão corretas

3. **Sessão não funciona**:
   - Verificar se `session_start()` está no início dos arquivos
   - Conferir configurações de sessão do PHP

4. **AJAX não funciona**:
   - Verificar console do navegador para erros JavaScript
   - Conferir se as URLs das requisições estão corretas

---

## 📚 Recursos Adicionais

- **Documentação PHP**: [php.net](https://php.net)
- **MySQL Documentation**: [dev.mysql.com](https://dev.mysql.com/doc/)
- **MDN Web Docs**: [developer.mozilla.org](https://developer.mozilla.org)

---

**Desenvolvido como atividade acadêmica - 2025**
