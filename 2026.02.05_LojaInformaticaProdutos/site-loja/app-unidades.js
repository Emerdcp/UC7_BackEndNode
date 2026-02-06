function fnMontarCardUnidades(unidade){
    let cartao = `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-3">
                <div class="card">
                    <img src="${unidade.foto} class="card-img-top""
                        class="card-img-top" alt="${unidade.nome_da_loja}">
                    <div class="card-body">
                        <h5 class="card-title"><strong>${unidade.nome_da_loja}</strong></h5>
                        <p class="card-text"><strong>Endereço:</strong> ${unidade.endereco}</p>
                        <p class="card-text"><strong>E-mail:</strong> ${unidade.email}</p>
                        <p class="card-text"><strong>Telefone:</strong> ${unidade.telefone}</p>
                        ${gmap(unidade.latitude, unidade.longitude)}
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
    .then((unidades) => {
        unidades.forEach(unidade => {
            fnMontarCardUnidades(unidade)
        });
    })
    .catch(erro => console.log(erro.message))
}

function gmap(lat, lng) {
    return`
        <iframe
        class="aspect-video"
        src="https://www.google.com/maps?q=${lat},${lng}&output=embed"
            style="border:0;"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>    
    `
}

fnCarregarDados()