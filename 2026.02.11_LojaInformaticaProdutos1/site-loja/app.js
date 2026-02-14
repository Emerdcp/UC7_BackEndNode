function fnMontarCardProduto(produto){
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card">
                    <img src="${produto.foto}"
                        class="card-img-top" alt="${produto.nome}">
                    <div class="card-body">
                        <h5 class="card-title">${produto.titulo}</h5>
                        <p class="card-text">${produto.descricao}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">R$ ${produto.preco}</span>
                            <div>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star text-warning"></i>
                                <small class="text-muted">(${produto.avaliacao})</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm">Comprar</button>
                        <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".lista-produtos").innerHTML += cartao
}

function fnCarregarDados(){
    const parametros = new URLSearchParams(window.location.search)
    
    const existe_categoria = parametros.has('categoria')
    let rota_categoria = ""
    if (existe_categoria) {
        rota_categoria = parametros.get('categoria') + "/"
    }

    const existe_ordem = parametros.has('ordem')
    let rota_ordem = ""
    if (existe_ordem){
        rota_ordem = parametros.get('ordem') + "/"
    }
    



    const categoria = parametros.get('categoria') || ''
    const links = document.querySelectorAll('#menuOrdenacao a')
    links.forEach(link => {
        const ordem = link.getAttribute('ordem')
        link.href = 'produtos.html?categoria=' + categoria + '&ordem=' + ordem
    })
  
    // links.forEach(link => {
    // const ordem = link.getAttribute('ordem')
    
    //     if (categoria) {
    //         link.href = 'produtos.html?categoria=' + categoria + '&ordem=' + ordem
    //     } else {
    //         link.href = 'produtos.html?ordem=' + ordem
    //     }
    // })



    fetch('http://localhost:3000/produtos/' + rota_categoria + rota_ordem, { method: 'GET'})
    .then(response => response.json ())
    .then((produtos) => {
        produtos.forEach(produto => {
            fnMontarCardProduto(produto)
        });
    })
    .catch(erro => console.log(erro.message))
}

function fnAlterarFoto(){
    if (foto.value != ''){
        document.getElementById("fundo-imagem").style.backgroundImage = `url('${foto.value}')`
    }else{
        document.getElementById("fundo-imagem").style.backgroundImage = `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnDZXH0y8lVWm9NouTeALHsmyUkECuLNm5XA&s)`
    }
    console.log(foto.value)
}

function fnLimparCampos(){
    document.getElementById("form-produtos").reset()
}

function fnCadastrarProdutos(){
    let formDados = {
        titulo: document.getElementById("titulo").value,
        categoria: document.getElementById("categoria").value,
        descricao: document.getElementById("descricao").value,
        preco: Number(document.getElementById("preco").value),
        avaliacao: Number(document.getElementById("avaliacao").value),
        foto: document.getElementById("foto").value
    }
    console.dir(formDados)

    fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formDados)
    })

    .then(resposta => resposta.json())
    .then((dados) =>{
        fnLimparCampos()
        console.log(dados)
        // Mensagem para apresentar quando cadastra
        const toastElement = document.getElementById('liveToast')
        const toast = new bootstrap.Toast(toastElement)
        toast.show()
    })
    .catch(erro => console.log(erro.message))
}

let foto = document.getElementById("foto")
let btn_salvar = document.getElementById("btn-salvar-produtos")

foto.addEventListener("blur", function () {
    fnAlterarFoto()
})

btn_salvar.addEventListener("click", function(){
    fnCadastrarProdutos()
})

// Mensagem para apresentar quando cadastra
function fnMostrarToast(mensagem, tipo = "success") {
    const toastElement = document.getElementById('liveToast')
    toastElement.className = `toast text-bg-${tipo} border-0`
    document.querySelector("#liveToast .toast-body").innerText = mensagem
    const toast = new bootstrap.Toast(toastElement)
    toast.show()
}


fnCarregarDados()
