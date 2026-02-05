function fnMontarCardUnidades(unidade){
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card">
                    <img src="${unidade.foto}"
                        class="card-img-top" alt="${unidade.nome}">
                    <div class="card-body">
                        <p class="card-text">${undade.endereco}</p>
                        <p class="card-text">${undade.email}</p>
                        <p class="card-text">${undade.telefone}</p>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-primary btn-sm">Comprar</button>
                        <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
            </div>
    `
    document.querySelector(".unidades").innerHTML += cartao
}

function fnCarregarDados(){
    fetch('http://localhost:3000/unidades/', { method: 'GET'})
    .then(response => response.json ())
    .then((unidade) => {
        unidade.forEach(unidade => {
            fnMontarCardProduto(unidade)
        });
    })
    .catch(erro => console.log(erro.message))
}

fnCarregarDados()