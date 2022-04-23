//7. Construa um programa que calcule N! (fatorial de N), sendo que o valor de N (inteiro) é fornecido pelo usuário. Sabe-se que: N! = 1 x 2 x 3 x 4 x .... x N
//OBS: 0! = 1 (fatorial do número zero é igual a 1 por definição). Além disso, não deve ser permitido que seja calculado o fatorial de número negativo, pois isso não existe.

function fatorial(n, multi){
    multi = multi * n;
    return multi
}

var multi = 1, numero;
do{
    numero = parseInt(prompt("Digite um numero: "));
}while (numero <= 0)
for(var n = 1; n <= numero; n++){
    multi = fatorial(n,multi);
}

console.log("O valor sera de: "+multi);
