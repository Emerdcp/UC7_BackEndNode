// ########################### MODAL PARA LOGIN


function abrirModalLogin() {
  document.getElementById("modalLogin").style.display = "flex";
}

function fecharModalLogin() {
  document.getElementById("modalLogin").style.display = "none";
}

window.onclick = function (event) {
  const modal = document.getElementById("modalLogin");
  if (event.target === modal) {
    modal.style.display = "none";
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
    veiculo_id: 1,
    categoria: document.getElementById("categoria").value
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












// async function fazerLogin() {

//     const email = document.getElementById("login_email").value;
//     const senha = document.getElementById("login_senha").value;

//     if (!email || !senha) {
//         alert("Preencha email e senha");
//         return;
//     }

//     const resposta = await fetch("/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, senha })
//     });

//     const dados = await resposta.json();

//     if (resposta.ok) {
//         window.location.href = "dashboard.html";
//     } else {
//         alert(dados.erro);
//     }
// }