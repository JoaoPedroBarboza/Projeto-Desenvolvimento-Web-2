document.addEventListener("DOMContentLoaded", function () {
   loadTransactions();

   // Define a data padrão como hoje
   document.getElementById("data").value = new Date().toISOString().split('T')[0];

   // Elementos do formulário
   const formTitle = document.getElementById("form-title");
   const submitBtn = document.getElementById("submit-btn");
   const cancelBtn = document.getElementById("cancel-btn");
   const transactionForm = document.getElementById("transactionForm");

   // Botão cancelar
   cancelBtn.addEventListener("click", function () {
      resetForm();
   });

   document.getElementById("transactionForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const id = document.getElementById("transactionId").value;
      const descricao = document.getElementById("descricao").value;
      const valor = document.getElementById("valor").value;
      const tipo = document.getElementById("tipo").value;
      const categoria = document.getElementById("categoria").value;
      const data = document.getElementById("data").value;

      if (!descricao.trim() || !valor || !tipo || !categoria || !data) {
         showError("Por favor, preencha todos os campos obrigatórios.");
         return;
      }

      const formData = new FormData();
      formData.append("descricao", descricao);
      formData.append("valor", valor);
      formData.append("tipo", tipo);
      formData.append("categoria", categoria);
      formData.append("data", data);


      if (id) {
         formData.append("id", id);
         url = "update.php";
      }

      // Desabilita o botão durante o envio
      submitBtn.disabled = true;
      submitBtn.textContent = "⏳ Salvando...";

      const xhr = new XMLHttpRequest();
      xhr.open("POST", "create.php", true);

      xhr.onload = function () {
         // Reabilita o botão
         submitBtn.disabled = false;
         submitBtn.textContent = id ? "💾 Atualizar Transação" : "💾 Salvar Transação";

         if (xhr.status === 200) {
            try {
               // Para debug: mostrar a resposta antes de parsear
               console.log("Resposta do servidor:", xhr.responseText);

               const response = JSON.parse(xhr.responseText);

               if (response.success) {
                  showSuccess(response.message);
                  resetForm();
                  loadTransactions();
               } else {
                  showError(response.message);
               }
            } catch (err) {
               console.error("Erro ao processar a resposta JSON:", err);
               console.error("Resposta recebida:", xhr.responseText);
               showError("Erro inesperado no cadastro. Verifique o console para mais detalhes.");
            }
         } else {
            console.error("Erro HTTP:", xhr.status);
            showError("Erro na comunicação com o servidor.");
         }
      };

      xhr.onerror = function () {
         submitBtn.disabled = false;
         submitBtn.textContent = id ? "💾 Atualizar Transação" : "💾 Salvar Transação";
         console.error("Erro de rede na requisição.");
         showError("Erro de rede.");
      };
      xhr.send(formData);
   });
});

// Funções auxiliares
function resetForm() {
   document.getElementById("transactionForm").reset();
   document.getElementById("transactionId").value = "";
   document.getElementById("form-title").textContent = "Nova Transação";
   document.getElementById("submit-btn").textContent = "💾 Salvar Transação";
   document.getElementById("cancel-btn").style.display = "none";
   document.getElementById("data").value = new Date().toISOString().split('T')[0];
   clearMessages();
}

function showError(message) {
   const errorElement = document.getElementById("error-message");
   errorElement.textContent = message;
   errorElement.style.display = "block";
   errorElement.style.background = "rgba(231, 76, 60, 0.1)";
   errorElement.style.color = "#e74c3c";
   errorElement.style.border = "1px solid rgba(231, 76, 60, 0.3)";
}

function showSuccess(message) {
   const errorElement = document.getElementById("error-message");
   errorElement.textContent = message;
   errorElement.style.display = "block";
   errorElement.style.background = "rgba(39, 174, 96, 0.1)";
   errorElement.style.color = "#27ae60";
   errorElement.style.border = "1px solid rgba(39, 174, 96, 0.3)";

   setTimeout(() => {
      clearMessages();
   }, 3000);
}

function clearMessages() {
   document.getElementById("error-message").style.display = "none";
}

function formatCurrency(value) {
   return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
   }).format(value);
}

function formatDate(dateString) {
   return new Date(dateString).toLocaleDateString('pt-BR');
}

function getCategoryIcon(categoria) {
   const icons = {
      'alimentacao': '🍽️',
      'moradia': '🏠',
      'transporte': '🚗',
      'saude': '⚕️',
      'educacao': '📚',
      'lazer': '🎮',
      'contas': '📋',
      'salario': '💼',
      'investimento': '📈',
      'outros': '📦'
   };
   return icons[categoria] || '📦';
}

function loadTransactions() {
   const xhr = new XMLHttpRequest();
   xhr.open("GET", "read.php", true);
   xhr.onload = function () {
      if (xhr.status === 200) {
         try {
            const transactions = JSON.parse(this.responseText);
            const table = document.getElementById("transactionTable");
            table.innerHTML = "";

            if (transactions.length === 0) {
               table.innerHTML = `
                        <tr>
                            <td colspan="6" style="text-align: center; color: #7f8c8d; font-style: italic; padding: 30px;">
                                Nenhuma transação encontrada
                            </td>
                        </tr>
                    `;
               updateSummary([], 0, 0);
               return;
            }

            let totalReceitas = 0;
            let totalDespesas = 0;

            transactions.forEach(transaction => {
               if (transaction.tipo === 'receita') {
                  totalReceitas += parseFloat(transaction.valor);
               } else {
                  totalDespesas += parseFloat(transaction.valor);
               }

               const tipoClass = transaction.tipo === 'receita' ? 'color: #27ae60; font-weight: bold;' : 'color: #e74c3c; font-weight: bold;';
               const tipoIcon = transaction.tipo === 'receita' ? '💰' : '💸';

               const row = `<tr>
                        <td>${formatDate(transaction.data)}</td>
                        <td>${transaction.descricao}</td>
                        <td>${getCategoryIcon(transaction.categoria)} ${transaction.categoria.charAt(0).toUpperCase() + transaction.categoria.slice(1)}</td>
                        <td style="${tipoClass}">${tipoIcon} ${transaction.tipo.charAt(0).toUpperCase() + transaction.tipo.slice(1)}</td>
                        <td style="${tipoClass}">${formatCurrency(transaction.valor)}</td>
                        <td>
                            <button class="btn btn-edit" onclick="editTransaction(${transaction.id}, '${transaction.descricao}', ${transaction.valor}, '${transaction.tipo}', '${transaction.categoria}', '${transaction.data}')">
                                ✏️ Editar
                            </button>
                            <button class="btn btn-delete" onclick="deleteTransaction(${transaction.id})">
                                🗑️ Excluir
                            </button>
                        </td>
                    </tr>`;
               table.innerHTML += row;
            });

            updateSummary(transactions, totalReceitas, totalDespesas);

         } catch (err) {
            console.error("Erro ao carregar transações:", err);
            showError("Erro ao carregar o histórico de transações.");
         }
      }
   };
   xhr.onerror = function () {
      showError("Erro de conexão ao carregar transações.");
   };
   xhr.send();
}

function updateSummary(transactions, totalReceitas, totalDespesas) {
   document.getElementById("total-receitas").textContent = formatCurrency(totalReceitas);
   document.getElementById("total-despesas").textContent = formatCurrency(totalDespesas);

   const saldo = totalReceitas - totalDespesas;
   const saldoElement = document.getElementById("saldo");
   saldoElement.textContent = formatCurrency(saldo);

   // Muda a cor do saldo baseado no valor
   if (saldo > 0) {
      saldoElement.style.color = "#27ae60";
   } else if (saldo < 0) {
      saldoElement.style.color = "#e74c3c";
   } else {
      saldoElement.style.color = "#95a5a6";
   }
}

function editTransaction(id, descricao, valor, tipo, categoria, data) {
   document.getElementById("transactionId").value = id;
   document.getElementById("descricao").value = descricao;
   document.getElementById("valor").value = valor;
   document.getElementById("tipo").value = tipo;
   document.getElementById("categoria").value = categoria;
   document.getElementById("data").value = data;
   document.getElementById("form-title").textContent = "Editar Transação";
   document.getElementById("submit-btn").textContent = "💾 Atualizar Transação";
   document.getElementById("cancel-btn").style.display = "inline-block";
   clearMessages();

   // Scroll para o formulário
   document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
}

function deleteTransaction(id) {
   if (!confirm("⚠️ Tem certeza que deseja excluir esta transação?\n\nEsta ação não pode ser desfeita.")) return;

   const xhr = new XMLHttpRequest();
   xhr.open("DELETE", "delete.php?id=" + id, true);
   xhr.onload = function () {
      if (xhr.status === 200) {
         try {
            const response = JSON.parse(xhr.responseText);

            if (response.success) {
               showSuccess(response.message);
               loadTransactions();
            } else {
               showError(response.message);
            }
         } catch (err) {
            console.error("Erro ao processar a resposta JSON:", err);
            showError("Erro inesperado ao excluir transação.");
         }
      } else {
         console.error("Erro HTTP:", xhr.status);
         showError("Erro na comunicação com o servidor.");
      }
   };

   xhr.onerror = function () {
      console.error("Erro de rede na requisição.");
      showError("Erro de rede.");
   };
   xhr.send();
}
