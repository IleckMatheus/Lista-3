//9. Construa um programa que leia o conjunto de 20 números inteiros e mostre qual foi o maior e o menor valor fornecido.

function maior(numero1, numero2) {
    if (numero1 < numero2) {
        numero1 = numero2;
    }
    return numero1
}
function menor(numero2, numero3) {
    if (numero2 < numero3) {
        numero3 = numero2;
    }
    return numero3
}
var numero1, numero2, numero3;
    numero1 = parseInt(prompt("Digite o 1 numero"));
numero3 = numero1;
for (n = 2; n <= 5; n++) {
    numero2 = parseInt(prompt("Digite o " + n + " numero"));
     if (numero2 > numero1) {
        numero1 = numero2;
    } else if (numero2 < numero3){
        numero3 = numero2;
    }
}
console.log("maior " + maior(numero1, numero2));
console.log("menor " + menor(numero1, numero3));