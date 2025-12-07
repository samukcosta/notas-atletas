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

let somaNotas = 0

for (let i = 0; i < atletas.length; i++) {
  atletas[i].notasValidas = [...atletas[i].notas]
  atletas[i].notasValidas.sort((a, b) => { return a - b})
  atletas[i].notasValidas = atletas[i].notasValidas.slice(1,4)
}

atletas.forEach((atleta) => {
    somaNotas = 0

    atleta.notasValidas.forEach((nota) => {
        somaNotas += nota
    })

    let mediaNota = somaNotas / atleta.notasValidas.length

    atleta.media = mediaNota
})

atletas.forEach((atleta) => {
    console.log(`Atleta: ${atleta.nome}
Notas Obtidas: ${atleta.notas}
Média Válida: ${atleta.media}\n`)
})