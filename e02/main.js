//2. Construa um programa que leia a quantidade (Q) e o preço (PR) de 45 produtos diferentes, comprados por uma empresa, e apresente o total gasto por ela.

function total( valor, preco, qtd ) {
    valor = valor + (preco * qtd);
    return valor
}

var  preco=5, qtd=5, valor=0;
for (var i=1; i<=5; i++)
{
    valor = total(valor, qtd , preco);
}
//EXIBINDO RESULTADO
console.log("O total gasto foi: "+ valor);