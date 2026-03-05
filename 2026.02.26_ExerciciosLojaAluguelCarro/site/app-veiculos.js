const nivel = localStorage.getItem("nivel");
if(nivel === "O"){
    document.getElementById("salvar-veiculo").style.display = "none";
}


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
    let id = document.getElementById("id").value;

    let formDados = {
        modelo: document.getElementById("modelo").value,
        marca: document.getElementById("marca").value,
        placa: document.getElementById("placa").value,
        categoria: document.getElementById("categoria").value,
        valor_diaria: document.getElementById("valor_diaria").value,
        imagem: document.getElementById("imagem").value
    }
    // console.dir(formDados)

    let metodo = "POST";
    let url = "http://localhost:3000/veiculos";

    if (id) {
        metodo = "PUT";
        url = `http://localhost:3000/veiculos/${id}`;
    }

    fetch(url, {
        // fetch('http://localhost:3000/veiculos', {
        // method: 'POST',
        method: metodo,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formDados)
    })

        .then(resposta => resposta.json())
        .then((dados) => {
            fnLimparCampos()
            fecharModalVeiculo()
            console.log(dados)

            document.getElementById("veiculos").innerHTML = ""
            fnCarregarVeiculos()
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
                ${localStorage.getItem("nivel") === "A" ? 
                    `<button class="btn btn-warning mt-2" onclick="fnEditarVeiculo(${veiculo.id})">Editar</button>` 
                : ""}
            </div>
        </div>
    </div>
    `
    document.getElementById("veiculos").innerHTML += cartao;
}

function fnCarregarVeiculos() {
    fetch('http://localhost:3000/veiculos/', { method: 'GET' })
        .then(response => response.json())
        .then((veiculos) => {
            veiculos.forEach(veiculo => {
                fnMontarCardVeiculos(veiculo)
            });
        })
        .catch(erro => console.log(erro.message))
}


function fnEditarVeiculo(id) {

    if (!id) {
        console.error("ID do veículo não encontrado");
        return;
    }

    fetch(`http://localhost:3000/veiculos/${id}`)
        .then(response => response.json())
        .then((veiculo) => {

            document.getElementById("id").value = veiculo.id;
            document.getElementById("modelo").value = veiculo.modelo;
            document.getElementById("marca").value = veiculo.marca;
            document.getElementById("placa").value = veiculo.placa;
            document.getElementById("categoria").value = veiculo.categoria;
            document.getElementById("valor_diaria").value = veiculo.valor_diaria;
            document.getElementById("imagem").value = veiculo.imagem;

            abrirModalVeiculo();

        })
        .catch(erro => console.log(erro));

}


fnCarregarVeiculos()

