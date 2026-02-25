function fnMontarProduto(produto){
    let cartao = `
        <div class="container mt-5">
                    <div class="row">
                        <!-- Product Images -->
                        <div class="col-md-6 mb-4">
                            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                alt="Product" class="img-fluid rounded mb-3 product-image" id="foto">${produto.foto}
                        </div>

                        <!-- Product Details -->
                        <div class="col-md-6">
                            <h2 class="mb-3" id="titulo">${produto.titulo}</h2>

                            <h4 class="mb-3" id="categoria">${produto.categoria}/h4>

                            <div class="mb-3">
                                <span class="h4 me-2" id="preco">${produto.preco}</span>

                            </div>
                            <div class="mb-3" id="avaliacao">
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-half text-warning"></i>
                                <span class="ms-2">4.5${produto.avaliacao}</span>
                            </div>
                            <p class="mb-4" id="descricao">Experience premium sound quality and industry-leading noise cancellation
                                with these
                                wireless
                                headphones. Perfect for music lovers and frequent travelers.${produto.descricao}</p>

                        </div>
                    </div>
                </div>


                
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
    // const parametros = new URLSearchParams(window.location.search)
    
    fetch('http://localhost:3000/produto/' + id, { method: 'GET'})
    .then(response => response.json ())
    .then((produtos) => {
        produtos.forEach(produto => {
            fnMontarProduto(produto)
        });
    })
    .catch(erro => console.log(erro.message))
}



// fetch('http://localhost:3000/produto/' + id)
//             .then(response => response.json())
//             .then((dados) => {

//                 const produto = dados[0]; // vem como array do MySQL

//                 document.querySelector("#foto").src = produto.foto;
//                 document.querySelector("#titulo").innerText = produto.titulo;
//                 document.querySelector("#categoria").innerText = produto.categoria;
//                 document.querySelector("#preco").innerText = "R$ " + produto.preco;
//                 document.querySelector("#descricao").innerText = produto.descricao;
//                 document.querySelector("#avaliacao span").innerText = produto.avaliacao;

//             })
//             .catch(erro => console.log(erro));
//     }

fnCarregarDados()
