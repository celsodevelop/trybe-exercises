let custoProduto = -400;
let vendaProduto = 600;

let impostoCustoProduto = custoProduto * 0.2;

let valorCustoTotal = custoProduto + impostoCustoProduto;
let lucro = (custoProduto>=0&&vendaProduto>=0) ? 1000*(vendaProduto - valorCustoTotal):"Insira um valor valido";

console.log ("O lucro sobre a venda de 1000 produtos será: R$ " + `${lucro}`);
console.log ("O custo do produto será: R$ " + `${valorCustoTotal}`);