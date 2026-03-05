function abrirModalUsuario(){
    document.getElementById("modalUsuario").classList.remove("hidden");
}

function fecharModalUsuario(){
    document.getElementById("modalUsuario").classList.add("hidden");
}

window.onclick = function (event) {
    const modal = document.getElementById("modalUsuario");
    if (event.target === modal) {
        // modal.style.display = "none";
        modal.classList.add("hidden");
    }
}

function limparCampos(){
    document.getElementById("formUsuario").reset();
}

function fnCadastrarUsuario() {
    let formDados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        senha: document.getElementById("senha").value,
        nivel_acesso: document.getElementById("nivel_acesso").value
    }
    // console.dir(formDados)

    fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formDados)
    })
    .then(response => response.json())
    .then(dados =>{

        limparCampos();
        fecharModalUsuario();
        carregarUsuarios();

    })
    .catch(erro => console.log(erro));
}


let btn_salvar = document.getElementById("salvar-usuario")

btn_salvar.addEventListener("click", function () {
    fnCadastrarUsuario()
})


function fnMontarCardUsuario(usuario){

    let cartao = `
    <div class="col-md-4 mb-3">
        <div class="card shadow">
            <div class="card-body">
                <h5 class="card-title">Usuário:</h5>
                <p><strong>Nome: </strong>${usuario.nome}</p>
                <p><strong>Usuário: </strong>${usuario.email}</p>
                <p><strong>Nível:</strong> 
                ${usuario.nivel_acesso === "A" ? "Administrador" : "Operador"}
                </p>
            </div>
        </div>
    </div>
    `
    document.getElementById("usuarios").innerHTML += cartao;
}


function fnCarregarUsuarios(){
    fetch("http://localhost:3000/usuarios", {method: 'GET'})
    .then(response => response.json())
    .then((usuarios) => {
        usuarios.forEach(usuario => {
            fnMontarCardUsuario(usuario)
        });
    })
    .catch(erro => console.log(erro.message))
}

fnCarregarUsuarios();