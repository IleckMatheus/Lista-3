//4. Construa um programa que leia o número de horas trabalhadas diárias (NH) de um funcionário por um período de 30 dias (ele trabalhou todos os 30 dias) e apresente o salário bruto recebido por ele nesse período, sabendo que o valor do salário é R$ 10,00/hora trabalhada.

function horastrabalhadas (hora, total_hora){
    total_hora = total_hora + (10 * hora);
    return total_hora
}

var hora = 9, total_hora=0;

for(var dia = 1; dia <=30; dia ++){
    total_hora = horastrabalhadas(hora, total_hora);
}

console.log("você ira receber: R$ "  + total_hora);

