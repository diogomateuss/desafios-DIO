/*
Desafio 2/5 - Exibindo Números Pares - Fundamentos Aritméticos em JavaScript
Desafio 2 - Nível Básico

Crie um programa que leia um número e mostre os números pares até esse número, inclusive ele mesmo.
Entrada

Você receberá 1 valor inteiro N, onde N > 0.
Saída

Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 
 
Exemplo de Entrada 	
6 	

Exemplo de Saída

2
4
6 
*/

var valor = 0;

 valor = gets();
  
   for (let i = 1; i <= valor; i++){
      if (i % 2 === 0) {
          console.log(i);
      }
  };

