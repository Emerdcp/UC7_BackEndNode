function abrirModalVeiculo() {
    document.getElementById("modalVeiculo").classList.remove("hidden");
}

function fecharModalVeiculo() {
    document.getElementById("modalVeiculo").classList.add("hidden");
}

window.onclick = function (event) {
    const modal = document.getElementById("modalVeiculo");
    if (event.target === modal) {
        // modal.style.display = "none";
        modal.classList.add("hidden");
    }
}

function fnLimparCampos() {
    document.getElementById("formVeiculo").reset()
}

function fnCadastrarVeiculo() {
    let formDados = {
        modelo: document.getElementById("modelo").value,
        marca: document.getElementById("marca").value,
        placa: document.getElementById("placa").value,
        categoria: document.getElementById("categoria").value,
        valor_diaria: document.getElementById("valor_diaria").value,
        imagem: document.getElementById("imagem").value
    }
    // console.dir(formDados)

    fetch('http://localhost:3000/veiculos', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formDados)
    })

        .then(resposta => resposta.json())
        .then((dados) => {
            fnLimparCampos()
            fecharModalVeiculo()
            console.log(dados)
        })
        .catch(erro => console.log(erro.message))
}

let btn_salvar = document.getElementById("salvar-veiculo")

btn_salvar.addEventListener("click", function () {
    fnCadastrarVeiculo()
})

function fnMontarCardVeiculos(veiculo) {
    let cartao = `
    <div class="col-md-4 mb-3">
        <div class="card shadow">
            <div class="card-body">
                <h5><strong>${veiculo.marca}</strong></h5>
                <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
                <p><strong>Placa:</strong> ${veiculo.placa}</p>
                <p><strong>Valor:</strong> R$ ${veiculo.valor_diaria}</p>
                <p><strong>Categoria:</strong> ${veiculo.categoria}</p>
                ${veiculo.imagem ? `<img src="${veiculo.imagem}" class="card-img-top mt-2">` : ""}
            </div>
        </div>
    </div>
    `
    document.getElementById("veiculos").innerHTML += cartao;
}

function fnCarregarVeiculos(){
    fetch('http://localhost:3000/veiculos/', { method: 'GET'})
    .then(response => response.json())
    .then((veiculos) => {
        veiculos.forEach(veiculo => {
            fnMontarCardVeiculos(veiculo)
        });
    })
    .catch(erro => console.log(erro.message))
}

fnCarregarVeiculos()

