/*
Desafio 3/5 - Análise de Números - Fundamentos Aritméticos em JavaScriptDesafio 
Desafio 3 - Nível Básico

Você deve fazer a leitura de 5 valores inteiros. Em seguida mostre quantos valores informados são pares, quantos valores informados são ímpares, quantos valores informados são positivos e quantos valores informados são negativos.
Entrada

Você receberá 5 valores inteiros.
Saída

Exiba a mensagem conforme o exemplo de saída abaixo, sendo uma mensagem por linha e não esquecendo o final de linha após cada uma.
 
Exemplo de Entrada 	

-5
0
-3
-4
12
	
Exemplo de Saída

3 valor(es) par(es)
2 valor(es) impar(es)
1 valor(es) positivo(s)
3 valor(es) negativo(s)
*/

let resultado = [0,0,0,0];
for (let i = 0, numero = 0; i < 5; i++) {
  numero = parseInt(gets());
  resultado[(numero > 0)?numero % 2:numero % 2 * -1]++;
  if(numero != 0)
    (numero > 0)?resultado[2]++:resultado[3]++;
}
console.log(`${resultado[0]} valor(es) par(es)
${resultado[1]} valor(es) impar(es)
${resultado[2]} valor(es) positivo(s)
${resultado[3]} valor(es) negativo(s)`)