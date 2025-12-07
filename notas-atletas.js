let atletas = [
 { nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88]},
 { nome: "Fernando Puntel", notas:  [8, 10, 10, 7, 9.33]},
 { nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8]},
 { nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5]}
];

let somaNotas = 0

function calcularMedia(notas) {
    let notasOrdenadas = [...notas].sort((a, b) => a-b)
    let notasValidas = notasOrdenadas.slice(1, 4)
    let soma = 0
    notasValidas.forEach((nota) => {
        soma += nota
    })
    
    return soma / notasValidas.length
}

function exibirResultados(listaDeAtletas) {
    listaDeAtletas.forEach((atleta) => {
        let media = calcularMedia(atleta.notas)
        
        console.log(`
Atleta: ${atleta.nome}
Notas Obtidas: ${atleta.notas}
Média Válida: ${media}\n`)
        })

}

exibirResultados(atletas)