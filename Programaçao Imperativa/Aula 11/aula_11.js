let filmes = [
    'star wars',
    'totoro',
    'rocky',
    'pulp fiction',
    'la vida é bela',
    'The Potatos',
    'Galaxy Guardians',
    'Avengers'
  ]
  function converterMaiusculas(filmes) {
    for (let quantidade = 1; quantidade < filmes.length; quantidade++) {
      filmes[quantidade] = filmes[quantidade].toUpperCase()
    }
    return filmes
  }
  
  console.log(filmes)
  console.log(converterMaiusculas(filmes))

  let filmesA = [
    'stax wars',
    'totoro',
    'rocky',
    'pulp fiction',
    'la vida é bela',
    'The Potatos',
    'Galaxy Guardians',
    'Avengers'
  ]
  let filmesB = []
  
  let tamanho = filmesA.length
  
  function passagemElementos() {
    for (let i = 0; i < tamanho; i++) {
      filmesB.push(filmesA.pop())
    }
    return filmesB
  }
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function compararClassificacoes(asia, europa) {
  let comparacoesAsiaEuropa = []
  comparacoesAsiaEuropa[0] = asia[0] === europa[0]
  comparacoesAsiaEuropa[1] = asia[1] === europa[1]
  comparacoesAsiaEuropa[2] = asia[2] === europa[2]
  comparacoesAsiaEuropa[3] = asia[3] === europa[3]

}

  

  console.log(compararClassificacoes())
