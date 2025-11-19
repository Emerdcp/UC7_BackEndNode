$(document).ready(function () {
    // Handle click on paging links
    $('.tm-paging-link').click(function (e) {
        e.preventDefault();

        var page = $(this).text().toLowerCase();
        $('.tm-gallery-page').addClass('hidden');
        $('#tm-gallery-page-' + page).removeClass('hidden');
        $('.tm-paging-link').removeClass('active');
        $(this).addClass("active");
    });
});


function fnCarregarDados(rota) {
    fetch('http://localhost:3000/'+rota)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            fnListarCartoes(data, "tm-gallery-page-"+rota);
        })
}

function fnMontarCartao(foto, nome, descricao, preco) {
    let cartao = `
        <article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
            <figure>
                <img src="${foto}" alt="${nome}" class="img-fluid tm-gallery-img" >
                <figcaption>
                    <h4 class="tm-gallery-title">${nome}</h4>
                    <p class="tm-gallery-description">${descricao}</p>
                    <p class="tm-gallery-price">${preco}</p>
                </figcaption>
            </figure>
        </article>
    `
    return cartao
    
}

function fnListarCartoes(dados, retorno){
    document.getElementById(retorno).innerHTML = ""
    dados.forEach(umProduto => {
        document.getElementById(retorno).innerHTML += fnMontarCartao(umProduto.foto, umProduto.nome, umProduto.descricao, umProduto.preco)
    });
}

fnCarregarDados("marmitas")
fnCarregarDados("saladas")
fnCarregarDados("bebidas")