//16. Anacleto tem 1,50m e cresce 2 centímetros por ano, enquanto Felisberto tem 1,10 e cresce 3 centímetros por ano. Construa um programa que calcule e apresente quantos anos serão necessários para que Felisberto seja maior que Anacleto.

function altura(anacleto, centi_ana, felisberto, centi_felis, ano){
    do{
        anacleto = anacleto + centi_ana;
        felisberto = felisberto + centi_felis;
        ano ++;
    }while(felisberto < anacleto);
    return ano;
}
var anacleto = 1.50, centi_ana = 0.02, felisberto = 1.10 ,centi_felis = 0.03;ano = 0;
ano = altura(anacleto, centi_ana, felisberto, centi_felis, ano);
console.log(ano);