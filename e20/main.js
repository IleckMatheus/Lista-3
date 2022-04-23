/* 20. Construa um programa que leia as informações de: horas trabalhadas (HT), valor da hora
trabalhada (VH). Calcule e apresente o salário líquido dos empregados da empresa, baseado
nas tabelas abaixo.
OBS: Salário Líquido = Salário Bruto – INSS – Imposto de Renda
a) INSS = 11% do salário bruto
b) Imposto de Renda  após descontar o INSS usar esse valor e ler a alíquota do imposto de renda na tabela abaixo 
Não é conhecido o número de funcionários da empresa. Ao final de cada cálculo, o programa
deve perguntar se a pessoa deseja calcular o salário de outro funcionário. Caso a resposta
seja negativa, o programa deve parar.
OBS: Não se esqueça de validar a entrada da resposta do usuário, que só pode aceitar os
caracteres “S” ou “N”.*/

function salario_liqui(salario_bruto, inss, imposto){
    salario_liquido = salario_bruto - inss - imposto;
    return salario_liquido;
}

function valor_inss (salario_bruto){
    inss = salario_bruto * 11/100;
    return inss
}

function sala_bruto(hora_trabalhada, valor_hora, salario_bruto){
    salario_bruto = hora_trabalhada * valor_hora;
    return salario_bruto
}

var salario_bruto, inss, valor_hora, hora_trabalhada, aliquota, deduzir, imposto, salario_liquido, opcao;

do{
    hora_trabalhada = parseInt(prompt("Quantas horas foram trabalhadas: "));
    valor_hora = parseInt(prompt("Qual o valor da sua hora: "));
    salario_bruto = sala_bruto (hora_trabalhada, valor_hora, salario_bruto);
    console.log("O salario bruto sera de: "+salario_bruto);
    if(salario_bruto < 900){
        aliquota = 0;
        deduzir = 0;
    }else if(salario_bruto >= 900 && salario_bruto <= 1800){
        aliquota = 15/100;
        deduzir = 135;
    }else{
        aliquota = 27.5/100;
        deduzir = 360;
    }
    inss = valor_inss(salario_bruto);
    imposto = aliquota * (salario_bruto - inss) -deduzir;
    salario_liquido = salario_liqui (salario_bruto, inss, imposto);
    console.log("O seu salario é de: "+ salario_liquido);
    opcao=(prompt("Deseja continuar para saber do proximo funcionario: (S)im (N)ão: "));
}while (opcao == "S" || opcao == "s");