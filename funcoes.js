// funções

//let x = "";
//console.log(x);
//x = "oi";

// DECLARAÇÃO DE FUNÇÃO

// 1º declara a função

function imprimeTexto(texto){
    console.log(texto);
}

// depois a gente executa a função uma ou mais vezes

//imprimeTexto("oi");
//imprimeTexto("outro texto");

// três formas de escrever funções

function soma(a, b){
    
    //outros códigos
    //vários console.log()
    //mas o return precisa ser a última linha da função
    //caso algo venha após o return, não será executado
    return a + b;
}

//console.log(soma(2, 5));

imprimeTexto(soma(3, 8));