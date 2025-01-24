//1.Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Qual é o dia da semana?');

if (diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    console.log('Bom fim de semana!');
} else {
   console.log ('Boa semana!');
}

//2.Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numero = prompt('Digite um número');
if (numero == positivo){
alert (`O número ${numero} é positivo`);
}else{
alert(`O número ${numero} é negativo`);
}

//3.Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
//  Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacaoDoJogo = 110;

if (pontuacaoDoJogo >=100){
alert ('Parabéns, você venceu!')
}else{
    alert('Tente novamente para ganhar.')
}

//4.Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template 
// string para incluir o valor do saldo.
let saldoDaConta = 1000;
let mensagem = `O seu saldo da conta é R$ ${saldoDaConta}` ;
alert (mensagem);

//5.Peça ao usuário para inserir seu nome usando prompt. 
// Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome :');
alert (`Boas Vindas ${nome} !`);