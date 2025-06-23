// function fn(cb){
//     console.log('executar função de callback')
//     console.log(typeof cb)
//     cb()
// }

// fn(function(){
//     console.log('função passada como parâmetro')
// })

function fn(cb){
    console.log('executar função de callback')
    console.log(typeof cb)
    cb()
}

function callback(){
    console.log('função passada como parâmetro')
}

fn(callback)

const objeto = {
    nome: "teste",
    callback
}
objeto.callback()