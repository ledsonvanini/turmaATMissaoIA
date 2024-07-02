// Criando Objetos Literais Javascript
const caixaPrincipal = document.querySelector('.caixa-principal')
const caixaPerguntas = document.querySelector('.caixa-perguntas')
const caixaAlternatia = document.querySelector('.caixa-alternativas')
const caixaResultado = document.querySelector('.caixa-resultado')
const textoResultado = document.querySelector('.texto-resultado')

const listaPerguntas = [
    {
        enunciado: "Na atualidade, o uso do celular pode ser considerado um problema ecológico e sustentável motivado pelo elevado consumo e descarte irregular de aperelhos tecnológicos. Um dos motivos para este elevado número de descarte se refere a velocidade com que as versões são lançadas no mercado e alterações ocorrem nos hardwares e processadores. Como a IA pode contriubuir para o destino correto dos descartes dos eletrônicos?",

        alternativas: [
            "Oferecer mais recursos para o direcionamento dos descartes e otimização das rotas de coleta de resíduos eletrônicos",

            "Prever tendências de descarte com base em dados de vendas de novos modelos e padrões de consumo"
        ]

    },
    {
        enunciado: "Pergunta 2",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    }
]

// console.log(listaPerguntas)
// for(var i=0; i<listaPerguntas.length; i++){
//     console.log(listaPerguntas[i].alternativas)
// }
for (pergunta of listaPerguntas) {
    console.log(pergunta.enunciado.toUpperCase())
}

// const carro = {
//     "marca":"Volksvagen",
//     "modelo": "Gol",
//     "ano": 2022
// }
// Destructuring
// {marca="marca", modelo="modelo", ano="Modelo"} carro
// {marca="", modelo="", ano=""} carro

// console.log(marca)
// console.log(modelo)
// console.log(ano)

// console.log(carro)
// console.log(carro.marca)
// console.log(carro.modelo)
// console.log(carro.ano)

