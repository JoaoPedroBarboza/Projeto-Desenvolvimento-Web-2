document.addEventListener("DOMContentLoaded", function () {
    loadUsers();

    // Elementos do formulário
    const formTitle = document.getElementById("form-title");
    const submitBtn = document.getElementById("submit-btn");
    const cancelBtn = document.getElementById("cancel-btn");
    const userForm = document.getElementById("userForm");

    // Botão cancelar
    cancelBtn.addEventListener("click", function () {
        resetForm();
    });

    document.getElementById("userForm").addEventListener("submit", function (e) {
        e.preventDefault();
        const id = document.getElementById("userId").value;
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        if (!name.trim() || !email.trim()) {
            showError("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);

        let url = "create.php";
        if (id) {
            formData.append("id", id);
            url = "update.php";
        }

        // Desabilita o botão durante o envio
        submitBtn.disabled = true;
        submitBtn.textContent = "⏳ Salvando...";

        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);

        xhr.onload = function () {
            // Reabilita o botão
            submitBtn.disabled = false;
            submitBtn.textContent = id ? "💾 Atualizar Usuário" : "💾 Salvar Usuário";

            if (xhr.status === 200) {
                try {
                    const response = JSON.parse(xhr.responseText);

                    if (response.success) {
                        showSuccess(response.message);
                        resetForm();
                        loadUsers();
                    } else {
                        showError(response.message);
                    }
                } catch (err) {
                    console.error("Erro ao processar a resposta JSON:", err);
                    showError("Erro inesperado no cadastro.");
                }
            } else {
                console.error("Erro HTTP:", xhr.status);
                showError("Erro na comunicação com o servidor.");
            }
        };

        xhr.onerror = function () {
            submitBtn.disabled = false;
            submitBtn.textContent = id ? "💾 Atualizar Usuário" : "💾 Salvar Usuário";
            console.error("Erro de rede na requisição.");
            showError("Erro de rede.");
        };
        xhr.send(formData);
    });
});

// Funções auxiliares
function resetForm() {
    document.getElementById("userForm").reset();
    document.getElementById("userId").value = "";
    document.getElementById("form-title").textContent = "Cadastrar Novo Usuário";
    document.getElementById("submit-btn").textContent = "💾 Salvar Usuário";
    document.getElementById("cancel-btn").style.display = "none";
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

function loadUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "read.php", true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                const users = JSON.parse(this.responseText);
                const table = document.getElementById("userTable");
                table.innerHTML = "";

                if (users.length === 0) {
                    table.innerHTML = `
                        <tr>
                            <td colspan="3" style="text-align: center; color: #7f8c8d; font-style: italic; padding: 30px;">
                                Nenhum usuário cadastrado
                            </td>
                        </tr>
                    `;
                    return;
                }

                users.forEach(user => {
                    const row = `<tr>
                        <td>${user.username}</td>
                        <td>${user.email || 'Não informado'}</td>
                        <td>
                            <button class="btn btn-edit" onclick="editUser(${user.id}, '${user.username}', '${user.email || ''}')">
                                ✏️ Editar
                            </button>
                            <button class="btn btn-delete" onclick="deleteUser(${user.id})">
                                🗑️ Excluir
                            </button>
                        </td>
                    </tr>`;
                    table.innerHTML += row;
                });
            } catch (err) {
                console.error("Erro ao carregar usuários:", err);
                showError("Erro ao carregar a lista de usuários.");
            }
        }
    };
    xhr.onerror = function () {
        showError("Erro de conexão ao carregar usuários.");
    };
    xhr.send();
}

function editUser(id, name, email) {
    document.getElementById("userId").value = id;
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("form-title").textContent = "Editar Usuário";
    document.getElementById("submit-btn").textContent = "💾 Atualizar Usuário";
    document.getElementById("cancel-btn").style.display = "inline-block";
    clearMessages();

    // Scroll para o formulário
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
}

function deleteUser(id) {
    if (!confirm("⚠️ Tem certeza que deseja excluir este usuário?\n\nEsta ação não pode ser desfeita.")) return;

    const xhr = new XMLHttpRequest();
    xhr.open("DELETE", "delete.php?id=" + id, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            try {
                const response = JSON.parse(xhr.responseText);

                if (response.success) {
                    showSuccess(response.message);
                    loadUsers();
                } else {
                    showError(response.message);
                }
            } catch (err) {
                console.error("Erro ao processar a resposta JSON:", err);
                showError("Erro inesperado ao excluir usuário.");
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
