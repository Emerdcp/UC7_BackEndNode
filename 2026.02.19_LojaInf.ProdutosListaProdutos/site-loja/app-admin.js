function fnMontarLinhaProdutos(produto){
    let linha = `
        <tr>
            <td><img src="${produto.foto}" width="50"></td>
            <td>${produto.id}</td>
            <td>${produto.titulo.substring(0.20)}</td>
            <td>${produto.descricao.substring(0,50)}</td>
            <td>${produto.categoria}</td>
            <td>${produto.preco.toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})}</td>
            <td>"⭐"${produto.avaliacao}</td>
            <td>
                <a href="um-produto.html?id=${produto.id}" class="btn"><img src="img/ver.png" width="20" alt="ver"></a>
                <a href="editar-produto.html?id=${produto.id}" class="btn"><img src="img/alterar.png" width="20" alt="alterar"></a>
                <button type"button" class="btn"><img src="img/excluir.png" width="20" alt="Excluir"></a>
            <td>
        </tr>
    `;
    document.querySelector("#lista-produtos").innerHTML += linha;

    console.log(linha)
}


function fnCarregarDados(){
    // const paramentros = new URLSearchParams(window.location.search)
    // console.log('1')
    fetch('http://localhost:3000/produtos', { method: 'GET'})
    .then(response => response.json ())
    .then((produtos) => {
        produtos.forEach(produto => {
            // console.log('2')
            fnMontarLinhaProdutos(produto)
        });
    })
    .catch(erro => console.log(erro.message))
}

fnCarregarDados()
