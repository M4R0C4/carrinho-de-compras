let precoTotal;
limpar();

function adicionar() {
    //recuperar valores: nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value ;
    // calcular o preco total: o subtotal
    let preco = quantidade* valorUnitario;
    // adicionar no carrinho: produto, quantidade e valor total
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
    <section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>
    `
    // atualizar o valor total
    precoTotal = precoTotal + preco;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.innerHTML = `R$${precoTotal}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    document.getElementById('lista-produtos').innerHTML= '';
    precoTotal = 0;
    document.getElementById('quantidade').value = 0
}