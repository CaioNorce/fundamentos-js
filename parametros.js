// parâmetros de função

function soma(a, b){
    return a + b;
}

console.log(soma(11, 56));
console.log(soma(-657, 22));

// parâmetros x argumentos
// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(27, "Caio"));

function multiplica(a=1, b=1){
    return a * b;
}

console.log(multiplica(soma(2, 3)));



