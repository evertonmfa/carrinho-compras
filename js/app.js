
let totalGeral;
limpar()
function adicionar() {

    let produto = document.getElementById('produto').value; //Pegando o produto no html
    let nomeProduto = produto.split('-')[0]; // split é um comando para cortar um item apartir de um parametro entre () depois passa a posição que precisa pegar entre []
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value //Pegando o produto no html
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
        </section> ` //.innerHTML add as informações no html para serem apresentadas na pagina.

    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = 1;




}

function limpar() {

    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$: 0,00';

}

