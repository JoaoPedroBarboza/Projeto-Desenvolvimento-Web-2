# 🎬 ROTEIRO PRÁTICO PARA VÍDEO - Gestor de Finanças

## 📋 CHECKLIST PRÉ-GRAVAÇÃO
- [ ] XAMPP rodando (Apache + MySQL)
- [ ] Banco de dados criado e populado
- [ ] Navegador limpo (sem outras abas)
- [ ] Código aberto no editor
- [ ] Áudio e vídeo testados

---

## ⏰ CRONOGRAMA SUGERIDO (20-25 minutos)

| Seção | Tempo | Conteúdo |
|-------|-------|----------|
| Introdução | 2min | Apresentação e visão geral |
| Login | 4min | Requisito 1 - Sistema de login |
| Dashboard | 2min | Área restrita e navegação |
| Usuários | 6min | Requisito 2 - CRUD usuários |
| Finanças | 6min | Requisito 3 - CRUD finanças |
| Técnico | 3min | Segurança e arquitetura |
| Conclusão | 2min | Demonstração final |

---

## 🎯 SCRIPT DETALHADO

### **ABERTURA (2 minutos)**

**💬 O que falar:**
> "Olá! Sou [SEU NOME] e hoje vou apresentar o sistema **Gestor de Finanças**, desenvolvido como atividade acadêmica. Este sistema atende todos os 3 requisitos solicitados: sistema de login, gerenciamento de usuários e gestão de funcionalidade específica - no caso, controle financeiro."

**🖱️ O que mostrar:**
1. Tela do XAMPP com serviços ativos
2. Estrutura de pastas no Explorer
3. Visão geral da arquitetura (front + back + BD)

---

### **REQUISITO 1: LOGIN (4 minutos)**

**💬 Introduzir:**
> "Começando pelo **Requisito 1**: Sistema de login com área restrita. Vou mostrar o front-end fazendo requisição ao back-end com consulta no banco."

**🖱️ Demonstração:**

1. **Mostrar `login.html` (30s)**:
   ```
   "Aqui temos a interface de login responsiva com validação front-end"
   ```

2. **Mostrar `login-ck.js` (45s)**:
   ```
   "O JavaScript captura os dados e faz requisição AJAX para o back-end"
   ```
   - Destacar: captura do formulário, validação, requisição AJAX

3. **Mostrar `login.php` (45s)**:
   ```
   "No back-end, validamos as credenciais consultando o banco de dados"
   ```
   - Destacar: recebimento POST, consulta MySQL, criação de sessão

4. **Demonstrar funcionalmente (2min)**:
   - Tentar login incorreto → mostrar erro
   - Login correto (admin/1234) → mostrar redirecionamento
   - **Destacar**: "Mensagem personalizada de boas-vindas com nome do usuário"

---

### **DASHBOARD (2 minutos)**

**💬 Explicar:**
> "Após o login, o usuário é redirecionado para a área restrita - o dashboard, que mostra mensagem de boas-vindas personalizada e os menus disponíveis."

**🖱️ Mostrar:**
1. Interface do dashboard
2. Mensagem com nome do usuário logado
3. Cards de navegação
4. **Testar proteção**: tentar acessar URL diretamente sem login

---

### **REQUISITO 2: USUÁRIOS (6 minutos)**

**💬 Introduzir:**
> "**Requisito 2**: Gerenciamento completo de usuários. CRUD com front-end fazendo requisições ao back-end e operações no banco de dados."

**🖱️ Demonstração por operação:**

1. **LISTAR - READ (1min)**:
   ```
   "Primeiro, vamos listar os usuários existentes"
   ```
   - Abrir tela de usuários
   - Mostrar carregamento via AJAX
   - Destacar código: `script.js` → `read.php`

2. **CRIAR - CREATE (1.5min)**:
   ```
   "Agora vou cadastrar um novo usuário"
   ```
   - Preencher formulário (nome: "João", email: "joao@teste.com")
   - Mostrar validações front-end
   - Submeter e mostrar na lista
   - Destacar: `create.php` com prepared statement

3. **EDITAR - UPDATE (1.5min)**:
   ```
   "Vou editar este usuário que acabei de criar"
   ```
   - Clicar em editar
   - Mostrar preenchimento automático
   - Alterar dados
   - Salvar e ver alteração na lista

4. **EXCLUIR - DELETE (1min)**:
   ```
   "Por fim, vou excluir um usuário"
   ```
   - Clicar em excluir
   - Confirmar exclusão
   - Ver usuário sumindo da lista

5. **Mostrar código back-end (1min)**:
   ```
   "Vou mostrar rapidamente a estrutura do back-end"
   ```
   - Mostrar estrutura dos arquivos PHP
   - Destacar prepared statements e validações

---

### **REQUISITO 3: FINANÇAS (6 minutos)**

**💬 Introduzir:**
> "**Requisito 3**: Módulo principal - gestão de transações financeiras. CRUD completo para controlar receitas e despesas."

**🖱️ Demonstração:**

1. **Interface (30s)**:
   ```
   "Esta é a tela de gestão financeira, onde controlamos receitas e despesas"
   ```

2. **CRIAR transações (2min)**:
   ```
   "Vou adicionar uma receita e uma despesa"
   ```
   - Adicionar receita: "Salário", R$ 3000, receita, salário
   - Adicionar despesa: "Mercado", R$ 250, despesa, alimentação
   - Mostrar validações e diferenciação visual

3. **LISTAR (1min)**:
   ```
   "Veja como as transações aparecem listadas, com cores diferentes para receita e despesa"
   ```
   - Mostrar lista ordenada por data
   - Verde para receitas, vermelho para despesas

4. **EDITAR (1.5min)**:
   ```
   "Vou editar esta despesa do mercado"
   ```
   - Clicar em editar
   - Alterar valor para R$ 300
   - Salvar e ver alteração

5. **EXCLUIR (30s)**:
   ```
   "E agora vou excluir esta transação"
   ```
   - Excluir uma transação

6. **Aspectos técnicos (30s)**:
   ```
   "Importante destacar que cada usuário só vê suas próprias transações, garantindo a privacidade"
   ```

---

### **ASPECTOS TÉCNICOS (3 minutos)**

**💬 Explicar:**
> "Vou destacar os aspectos técnicos e de segurança implementados."

**🖱️ Mostrar código:**

1. **Segurança (1min)**:
   - Sistema de sessões
   - Prepared statements
   - Validações front e back-end
   - Controle de acesso por usuário

2. **Arquitetura (1min)**:
   - APIs REST em PHP
   - Comunicação AJAX/JSON
   - Separação front/back-end

3. **Banco de dados (1min)**:
   - Mostrar estrutura no phpMyAdmin
   - Relacionamentos entre tabelas
   - Chaves estrangeiras

---

### **CONCLUSÃO (2 minutos)**

**💬 Finalizar:**
> "Para concluir, vou fazer uma demonstração rápida do sistema completo."

**🖱️ Demonstração final:**
1. Logout e novo login
2. Navegar entre módulos
3. Mostrar integração completa

**💬 Concluir:**
> "Este sistema atende completamente aos 3 requisitos:
> ✅ Sistema de login com área restrita e mensagem personalizada
> ✅ CRUD completo de usuários com front-end/back-end integrados  
> ✅ CRUD completo de funcionalidade específica - gestão financeira
> 
> Demonstrando conhecimentos em PHP, JavaScript, MySQL, HTML/CSS e conceitos de segurança web. Obrigado!"

---

## 📝 DADOS DE TESTE PARA USAR NO VÍDEO

### **Login padrão:**
- Usuário: `admin`
- Senha: `1234`

### **Usuários para criar:**
1. Nome: `João Silva`, Email: `joao@teste.com`, Senha: `123456`
2. Nome: `Maria Santos`, Email: `maria@teste.com`, Senha: `654321`

### **Transações para criar:**
1. **Receita**: "Salário Mensal", R$ 3.500,00, receita, salário
2. **Despesa**: "Compra Supermercado", R$ 250,00, despesa, alimentação  
3. **Receita**: "Freelance", R$ 800,00, receita, outros
4. **Despesa**: "Conta de Luz", R$ 150,00, despesa, contas

---

## 🎥 DICAS DE GRAVAÇÃO

### ✅ **FAZER:**
- Falar claramente e pausadamente
- Usar o cursor para destacar elementos
- Mostrar código E resultado
- Testar tudo antes de gravar
- Fazer zoom quando necessário

### ❌ **EVITAR:**
- Falar muito rápido
- Deixar erros sem explicar
- Pular etapas importantes
- Mostrar informações desnecessárias
- Gravações muito longas sem pausas

---

## 🚨 PONTOS CRÍTICOS A DESTACAR

1. **"Front-end fazendo requisição ao back-end"** - sempre mencionar
2. **"Consulta/operação no banco de dados"** - sempre mostrar
3. **"Área restrita com controle de acesso"** - destacar segurança
4. **"CRUD completo"** - mencionar todas as operações
5. **"Mensagem personalizada de boas-vindas"** - mostrar nome do usuário

---

**⏰ Lembre-se: 20-25 minutos total | Pratique antes de gravar | Boa sorte! 🍀**
