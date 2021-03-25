/*
Desafio 4/5 - Contagem de Cédulas - Fundamentos Aritméticos em JavaScript
Desafio 4 - Nível Intermediário

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre o valor lido e a relação de notas necessárias.
Entrada

Você receberá um valor inteiro N (0 < N < 1000000).
Saída

Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.
 
Exemplo de Entrada 	

576
	
Exemplo de Saída

576
5 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
1 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
0 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00

Exemplo de Entrada
11257
	
Exemplo de Saída
11257
112 nota(s) de R$ 100,00
1 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
1 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
0 nota(s) de R$ 1,00

Exemplo de Entrada
503
	
Exemplo de Saída
503
5 nota(s) de R$ 100,00
0 nota(s) de R$ 50,00
0 nota(s) de R$ 20,00
0 nota(s) de R$ 10,00
0 nota(s) de R$ 5,00
1 nota(s) de R$ 2,00
1 nota(s) de R$ 1,00
*/

let valor = parseInt(gets());
var dif = valor;
n100 = parseInt(dif / 100);
if(n100!=0){
  dif=dif-(100*n100);
}
n50 = parseInt(dif / 50);
if(n50!=0){
  dif=dif-(50*n50);
}
n20 = parseInt(dif / 20);
if(n20!=0){
  dif=dif-(20*n20);
}
n10 = parseInt(dif / 10);
if(n10!=0){
  dif=dif-(10*n10);
}
n5 = parseInt(dif / 5);
if(n5!=0){
  dif=dif-(5*n5);
}
n2 = parseInt(dif / 2);
if(n2!=0){
  dif=dif-(2*n2);
}
n1 = parseInt(dif / 1);
if(n1!=0){
  dif=dif-(1*n1);
}
console.log(valor);
console.log(n100 + " nota(s) de R$ 100,00");
console.log(n50 + " nota(s) de R$ 50,00");
console.log(n20 + " nota(s) de R$ 20,00");
console.log(n10 + " nota(s) de R$ 10,00");
console.log(n5 + " nota(s) de R$ 5,00");
console.log(n2 + " nota(s) de R$ 2,00");
console.log(n1 + " nota(s) de R$ 1,00");