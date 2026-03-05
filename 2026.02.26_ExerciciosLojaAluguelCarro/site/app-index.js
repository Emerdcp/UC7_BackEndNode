function abrirModalLogin() {
  document.getElementById("modalLogin").classList.remove("hidden");
}

function fecharModalLogin() {
  document.getElementById("modalLogin").classList.add("hidden");
}

window.onclick = function (event) {
  const modal = document.getElementById("modalLogin");
  if (event.target === modal) {
    modal.classList.add("hidden");
  }
}


//Enviar agendamento da index
function fnLimparCampos() {
  document.getElementById("formReserva").reset()
}

function fnCadastrarAgendamento() {
  let formDados = {
    nome_cliente: document.getElementById("nome_cliente").value,
    email_cliente: document.getElementById("email_cliente").value,
    // veiculo_id: 1,
    // categoria: document.getElementById("categoria").value
    veiculo_id: document.getElementById("veiculo_id").value
  }
  // console.dir(formDados)

  fetch('http://localhost:3000/agendamentos', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(formDados)
  })
    .then(resposta => resposta.json())
    .then((dados) => {
      fnLimparCampos()
      console.log(dados)
    })
    .catch(erro => console.log(erro.message))
}

let btn_salvar = document.getElementById("salvar-agendamento")

btn_salvar.addEventListener("click", function () {
  fnCadastrarAgendamento()
})

function fnCarregarVeiculos(){
    fetch("http://localhost:3000/veiculos")
    .then(response => response.json())
    .then(veiculos => {
        const select = document.getElementById("veiculo_id");
        veiculos.forEach(veiculo => {
            let option = document.createElement("option");
            option.value = veiculo.id;
            option.text = `${veiculo.marca} - ${veiculo.modelo}`;
            select.appendChild(option);
        });
    })
    .catch(erro => console.log(erro));
}

fnCarregarVeiculos();


async function fazerLogin() {
    const email = document.getElementById("login_email").value;
    const senha = document.getElementById("login_senha").value;
    if (!email || !senha) {
        mostrarMensagem("Preencha email e senha");
        return;
    }

    const resposta = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json();

    if (resposta.ok) {
        mostrarMensagem("Login realizado com sucesso!", "success");
        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);
    } else {
        mostrarMensagem(dados.erro);
    }
}

function mostrarMensagem(texto, tipo = "danger") {
  const msg = document.getElementById("mensagemLogin");
  msg.className = `alert alert-${tipo}`;
  msg.innerText = texto;
  msg.classList.remove("d-none");
}


if (resposta.ok) {
    localStorage.setItem("usuario", dados.usuario);
    localStorage.setItem("nivel", dados.nivel);
    
    window.location.href = "dashboard.html";
}