function fnMontarCardAgendamento(agendamento) {
    const nivel = localStorage.getItem("nivel");

    let botoes = "";
    if (nivel === "A") {
        botoes = `
            <button class="btn btn-warning btn-sm" onclick="editarAgendamento(${agendamento.id})">Editar</button>
            <button class="btn btn-danger btn-sm" onclick="excluirAgendamento(${agendamento.id})">Excluir</button>
        `;
    }

    let cartao = `
    <div class="col-md-4 mb-3">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">Reserva</h5>
                <p><strong>Cliente:</strong> ${agendamento.nome_cliente}</p>
                <p><strong>Email:</strong> ${agendamento.email_cliente}</p>
                <p><strong>Categoria:</strong>
                ${
                    agendamento.categoria === "B" ? "Básico" :
                    agendamento.categoria === "L" ? "Luxo" :
                    "Família"
                }
                </p>
                <p><strong>Data:</strong> ${new Date(agendamento.data_reserva).toLocaleString()}</p>
                ${botoes}
            </div>
        </div>
    </div>
    `;

    document.getElementById("agendamentos").innerHTML += cartao;
}


function fnCarregarAgendamentos(){
    fetch("http://localhost:3000/agendamentos", {method:'GET'})
    .then(response => response.json())
    .then((agendamentos) => {
        agendamentos.forEach(agendamento => {
            fnMontarCardAgendamento(agendamento)
        });
    })
    .catch(erro => console.log(erro.message))
}

function editarAgendamento(id) {
    const novoNome = prompt("Digite o novo nome do cliente:");
    if (!novoNome) return;

    fetch(`http://localhost:3000/agendamentos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome_cliente: novoNome })
    })
    .then(res => res.json())
    .then(dados => {
        alert("Agendamento atualizado!");
        document.getElementById("agendamentos").innerHTML = "";
        fnCarregarAgendamentos();
    })
    .catch(err => console.error(err));
}


fnCarregarAgendamentos();