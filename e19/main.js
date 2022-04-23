//19. Em um cinema, certo dia, cada espectador respondeu a um questionário, que perguntava a sua idade (ID) e a opinião em relação ao filme (OP), seguindo os seguintes critérios:
/*A entrada de dados sobre a opinião deve ser validada.
O final da pesquisa será indicado quando a idade do usuário for informada como negativa
(idade inexistente).
Construa um programa que, lendo esses dados, calcule e apresente:
 Quantidade de pessoas que respondeu a pesquisa
 Média de idade das pessoas que responderam a pesquisa
 Porcentagem de cada uma das respostas*/

function media_idade(media_id, soma_id, cont) {
    media_id = (soma_id / cont);
    return media_id
}

function otimo(pc_a, cont_a, cont) {
    pc_a = 100 * cont_a / cont;
    return pc_a
}
function bom(pc_b, cont_b, cont) {
    pc_b = 100 * cont_b / cont;
    return pc_b
}
function regular(pc_c, cont_c, cont) {
    pc_c = 100 * cont_c / cont;
    return pc_c
}
function pessimo(pc_d, cont_d, cont) {
    pc_d = 100 * cont_d / cont;
    return pc_d
}

var media_id, id, cont = 0, soma_id = 0, cont_a = 0, cont_b = 0, cont_c = 0, cont_d = 0, cont_e = 0, pc_a, pc_b, pc_c, pc_d, pc_e, op;

do {
    if (cont == 0) {
        id = parseInt(prompt("Digite sua idade: "));
    }
    else {
        id = parseInt(prompt("Digite sua idade: "));
    }
    if(id > 0){
        op = (prompt("Qual sua opinião sobre o filme. (A) Ótimo, (B) Bom, (C) Regular, (D) Péssimo"));

        switch (op) //contagem de cada alternativa
        {
            case "A":
                cont_a = cont_a + 1;
                break;
            case "B":
                cont_b = cont_b + 1;
                break;
            case "C":
                cont_c = cont_c + 1;
                break;
            case "D":
                cont_d = cont_d + 1;
                break;
        }
        cont = cont + 1;
        soma_id = soma_id + id;
    }  
} while (id > 0);
media_id = media_idade(media_id, soma_id, cont);

pc_a = otimo(pc_a, cont_a, cont);
pc_b = bom(pc_b, cont_b, cont);
pc_c = regular(pc_c, cont_c, cont);
pc_d = pessimo(pc_d, cont_d, cont);

console.log("Total de participantes: " + cont);
console.log("Media das idades é: " + media_id);
console.log("A porcentagem de otimo: " + pc_a + "%");
console.log("A porcentagem de bom: " + pc_b + "%");
console.log("A porcentagem de regular: " + pc_c + "%");
console.log("A porcentagem de pessimo: " + pc_d) + "%";
