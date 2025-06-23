//exercicio 1
(function (){
    let n1 = parseFloat(prompt('Digite um número.'))
    let n2 = parseFloat(prompt('Digite um número.'))
    if(!isNaN(n1) && !isNaN(n2)){
        console.log("Soma:",n1+n2)
        console.log('Subtração:', n1-n2)
        console.log('Multiplicação:', n1*n2)
        console.log('Resto da divisão:', n1%n2)
    }
    else{
        throw Error('Valores indefinidos.')
    }
})()

//exercicio 2
(function (){
    let idade = parseInt(prompt('Digite sua idade.'))
    if(!NaN(idade)){
        if(idade < 18) console.log('Menor de idade.')
        else console.log('Maior de idade.')
    }
    else{
        console.log('Valor inválido.')
    }
})()

//exercicio 3
(function (){
    let count = parseInt(prompt("Digite um valor."))
    if(!isNaN(count)){
        for(let i=0; i<=count; i++){
            console.log(i)
        }
    }
    else{
        console.log('Valor inválido')
    }
})()


//exercicio 4
(function (){
    let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let soma = 0
    arr.forEach(e => {
        if(e%2 !== 0){
            soma += e
        }
    })
    console.log('Soma dos ímpares:',soma)
})()

//exercicio 5
(function (){
    function calcularIMC(peso, altura){
        if(peso === undefined || altura === undefined){
            throw Error('Valores indefinidos.')
        }
        return peso / (altura * altura)
    }
    
    function classificaIMC(imc){
        if(imc <= 16.9) return 'imc muito baixo'
        else if(imc <= 18.4) return 'imc baixo'
        else if(imc <= 24.9) return 'normal'
        else if(imc <= 29.9) return 'acima do peso'
        else if(imc <= 34.9) return 'obesidade grau 1'
        else if(imc <= 40) return 'obesidade grau 2'
        else return 'obesidade grau 3'
    }
    
    let peso = parseFloat(prompt('Digite seu peso:'))
    let altura = parseFloat(prompt('Digite sua altura:'))
    let imc = calcularIMC(peso, altura)
    console.log(imc)
    console.log(classificaIMC(imc))
})()

//exercicio 6
(function (){
    let num = parseInt(prompt('Digite um número inteiro.'))
    if(Number.isInteger(num)){
        if(num % 2 === 0){
            console.log('O número é par.')
        }
        else{
            console.log('O número é ímpar')
        }
    }
    else{
        console.log('O número não é inteiro.')
    }  
})()

//exercicio 7
(function (){
    count = parseInt(prompt("Digite um valor."))
    if(!isNaN(count)){
        for(let i=count; i>=0; i--){
            console.log(i + '\n')
        }
    }
    else{
        console.log('Valor indefinido.')
    }
})()

//exercicio 8
(function (){
    let nota1 = parseFloat(prompt('Insira a primeira nota.'))
    let nota2 = parseFloat(prompt('Insira a segunda nota.'))
    let nota3 = parseFloat(prompt('Insira a terceira nota.'))
    let nota4 = parseFloat(prompt('Insira a quarta nota.'))
    
    if(!isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3) && !isNaN(nota4)){
        let media = (n1 + n2 + n3 + n4) / 4
        if(media >= 7){
            console.log('Aprovado.')
        }
        else{
            console.log('Reprovado.')
        }
    }
    else{
        console.log('Notas inválidas.')
    }
})


//exercicio 9
(function (){
    arr = [1,2,3,4,5,6,7,8,9,10]
    let maior = -Infinity
    arr.forEach(e => {
        if(e > maior){
            maior = e
        }
    })
    console.log('Maior valor do array:',maior)  
})()

//exercicio 10
(function (){
    let palavra = prompt('Digite uma string')
    console.log('Texto invertido:', palavra.split('').reverse().join(''))
})()