//6. Construa um programa que apresente o valor de H, sendo H calculado por:   H = 1 + 2 + 3 + 4 + ... + N O valor de N será apresentado pelo usuário.

function soma(n, soma_n){
    soma_n = soma_n + n;
    return soma_n
}

var soma_n = 0, numero;
do{
    numero = parseInt(prompt("Digite um numero: "));
}while (numero <= 0)
for(var n = 1; n <= numero; n++){
    soma_n = soma(n,soma_n);
}

console.log(soma_n);
