const mainGame = document.querySelector('.main-game')
const pilar01 = document.querySelector('#pilar-01')
const pilar02 = document.querySelector('#pilar-02')
const pilar03 = document.querySelector('#pilar-03')
const btnDificuldade = document.getElementById('dificuldade')
const resetGame = document.getElementById('reset-game')
const resultadoJogo = document.getElementById('resultado-jogo')
const statusJogo = document.querySelector('div.status-jogo h3')
const qntMovimento = document.querySelector('.resultado-jogo__qnt-movimento')
const record = document.getElementById('record')


let seletorNivel = 0

// CRIA OS DISCOS BASEADO NA DIFICULDADE DO NIVEL SELECIONADO E RETORNA PARA A CRIAÇÃO DOS DISCOS
const seletorNivelGame = (evt) => {
    let evtSelect = evt.target.id
    
    if (evtSelect === 'facil'){
        seletorNivel = 3
    }else if (evtSelect === 'medio'){
        seletorNivel = 4
    }else if (evtSelect === 'dificil'){
        seletorNivel = 5
    }else{
        seletorNivel = 3
    }

    btnDificuldade.style.display = 'none'
    blocosTorres(seletorNivel)
    return seletorNivel
}

btnDificuldade.addEventListener('click', seletorNivelGame)

// CRIA OS DISCOS BASEADOS NA DIFICULDADE SELECIONADO NA FUNÇÃO 'seletorNivelGame'
const blocosTorres = (nivel) =>{
    
    for (let i = 1; i <= nivel; i++){
        let torres = document.createElement('div')
        torres.classList.add('main-game__box-torre__torre')
        torres.setAttribute('id', 'torre-0'+i)
        pilar01.appendChild(torres)
    }
}



// FUNÇÃO PARA MOVER OS BLOCOS

let clicado = false
let selecionou
let contatorDeMovimentos = 0
let contRecord = 0
pilar01.addEventListener('click', (evt) => {
    let pickLastElement = evt.currentTarget

    if (clicado === true){
        selecionou.style.marginBottom = '0px'
        selecionou.style.transition = '1000ms'
        clicado = false
        

    }else{
        selecionou = pickLastElement.lastElementChild
        selecionou.style.marginBottom = '10px'
        selecionou.style.transition = '1000ms'
        clicado = true
       
    }
    
    if (!pickLastElement.lastElementChild){
        pickLastElement.appendChild(selecionou)
        selecionou.style.transition = '1000ms'
        clicado = false
        contatorDeMovimentos++
        contRecord++

    }else if (pickLastElement.lastElementChild.clientWidth > selecionou.clientWidth){
        pickLastElement.appendChild(selecionou)
        selecionou.style.transition = '1000ms'
        clicado = false
        contatorDeMovimentos++
        contRecord++
    }

    statusJogo.innerHTML = 'Jogo iniciado'

})

pilar02.addEventListener('click', (evt) => {
    let pickLastElement = evt.currentTarget


    if (clicado === true){
        selecionou.style.marginBottom = '0px'
        selecionou.style.transition = '1000ms'
        clicado = false

    }else{
        selecionou = pickLastElement.lastElementChild
        selecionou.style.marginBottom = '10px'
        selecionou.style.transition = '1000ms'
        clicado = true
    }
    
    if (!pickLastElement.lastElementChild){
        pickLastElement.appendChild(selecionou)
        selecionou.style.transition = '1000ms'
        clicado = false
        contatorDeMovimentos++
        contRecord++

    }else if (pickLastElement.lastElementChild.clientWidth > selecionou.clientWidth){
        pickLastElement.appendChild(selecionou)
        selecionou.style.transition = '1000ms'
        clicado = false
        contatorDeMovimentos++
        contRecord++
    }
    selecionou.style.transition = '2000ms'
})

pilar03.addEventListener('click', (evt) => {
    let pickLastElement = evt.currentTarget


    if (clicado === true){
        selecionou.style.marginBottom = '0px'
        selecionou.style.transition = '1000ms'
        clicado = false

    }else{
        selecionou = pickLastElement.lastElementChild
        selecionou.style.marginBottom = '10px'
        selecionou.style.transition = '1000ms'
        clicado = true
    }
    
    if (!pickLastElement.lastElementChild){
        pickLastElement.appendChild(selecionou)
        selecionou.style.transition = '1000ms'
        clicado = false
        contatorDeMovimentos++
        contRecord++

    }else if (pickLastElement.lastElementChild.clientWidth > selecionou.clientWidth){
        pickLastElement.appendChild(selecionou)
        selecionou.style.transition = '1000ms'
        clicado = false
        contatorDeMovimentos++
        contRecord++
    }
    selecionou.style.transition = '2000ms'
    verificaGanhou()
})

const verificaGanhou = () => {

    if (pilar03.childElementCount == seletorNivel){
        resultadoJogo.style.display = 'flex'
        record.style.display = 'none'
        qntMovimento.innerHTML += contatorDeMovimentos
        record.innerHTML += contRecord
        setTimeout(()=>{
            pilar03.innerHTML = ''
        },2000)
    }
}

// FUNÇÃO QUE RESETA O GAME TODO
const funcResetGame = () =>{
    

    contatorDeMovimentos = 0
    pilar01.innerHTML = ''
    pilar02.innerHTML = ''
    pilar03.innerHTML = ''
    record.style.display = 'flex'
    // if (contRecord > 0){
    //     record.innerHTML += `${contRecord}`
    qntMovimento.innerHTML = `Quantidade de movimentos: ${contatorDeMovimentos}`
    // }
    
    statusJogo.innerHTML = 'Aguardando jogador...'
    
    btnDificuldade.style.display = 'flex'
    resultadoJogo.style.display = 'none'
}

resetGame.addEventListener('click', funcResetGame)
// mainGame.addEventListener('click', escuta)