function fnMontarCardAgendamento(agendamento){

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
            </div>
        </div>
    </div>
    `

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

fnCarregarAgendamentos();