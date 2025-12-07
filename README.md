# 🏅 Notas dos Atletas – Sistema de Cálculo de Média

Desenvolvido como parte do programa **DEVstart**, aprimorando lógica de programação e habilidades práticas com JavaScript.
Aplicação em **JavaScript** desenvolvida para calcular a média válida de notas atribuídas a atletas em uma competição de ginástica artística.
O projeto faz parte de um desafio que simula o processo de avaliação utilizado por uma banca de jurados.

## 📘 Sobre o Projeto

Em uma competição de ginástica artística, cada atleta é avaliado por **cinco jurados**, sendo cada um responsável por um critério específico:

* Tempo de duração da apresentação
* Originalidade da coreografia
* Postura
* Dificuldade das acrobacias
* Sincronismo

Cada jurado atribui uma nota de **1 a 10**, e a média válida do atleta é calculada seguindo a regra:

> **A média é obtida pelas três notas centrais, desconsiderando a maior e a menor nota.**

Este projeto implementa exatamente essa regra usando JavaScript, recebendo uma lista de atletas, processando suas notas e exibindo o resultado final.

## 🎯 Objetivo

Criar uma função capaz de:

* Receber uma matriz de objetos contendo:

  * Nome do atleta
  * Suas cinco notas
* Ordenar as notas
* Desconsiderar a maior e a menor
* Calcular a média válida
* Exibir para o usuário:

  * Nome
  * Notas obtidas
  * Média final

## 🧠 Tecnologias Utilizadas

* **JavaScript (ES6+)**
* Métodos como:

  * `.sort()`
  * `.slice()`
  * `.forEach()`
* Template strings para saída formatada no console

## 📥 Entrada Utilizada

```js
let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];
```

## 📤 Saída Esperada

```
Atleta: Cesar Abascal
Notas Obtidas: 10,9.34,8.42,10,7.88
Média Válida: 9.253333

Atleta: Fernando Puntel
Notas Obtidas: 8,10,10,7,9.33
Média Válida: 9.11

Atleta: Daiane Jelinsky
Notas Obtidas: 7,10,9.5,9.5,8
Média Válida: 9

Atleta: Bruno Castro
Notas Obtidas: 10,10,10,9,9.5
Média Válida: 9.83333333333
```
## 🧩 Lógica Implementada

 O código utiliza funções bem definidas para separar responsabilidades:

 * `calcularMediaValida()` → ordena as notas, remove a maior e a menor e calcula a média
 * `exibirResultados()` → formata e exibe os dados no console

 A solução também utiliza:

 * Spread operator (`[...]`) para manter as notas originais intactas
 * `.sort()` com comparação numérica
 * `.slice()` para obter apenas as três notas centrais
   

## ▶️ Como Executar

1. Clone este repositório:

```bash
git clone https://github.com/SEU-USUARIO/notas-atletas
```

2. Acesse o diretório:

```bash
cd notas-atletas
```

3. Execute o arquivo no Node.js:

```bash
node notas-atletas.js
```

4. Veja a saída diretamente no console.

## 📁 Estrutura do Repositório

```
📂 notas-atletas
 └── 📄 notas-atletas.js
 └── 📄 README.md
```

## 🚀 Aprendizados

Este projeto reforça:

* Manipulação de arrays em JavaScript
* Separação de responsabilidades em funções
* Imutabilidade usando spread operator
* Processamento de dados
* Lógica para seleção de valores específicos
* Boas práticas de saída no console (uso de template strings)
