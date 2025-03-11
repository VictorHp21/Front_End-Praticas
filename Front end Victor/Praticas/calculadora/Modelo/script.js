let num1 = document.getElementById('numero1')
let num2 = document.getElementById('numero2')
let resultado = document.getElementById('res')
let opp = document.getElementById('opera').value
//var opp = opcao.value


function calcular(){

    if(opp === "soma"){
        let n = Number(num1.value)
        let n2 = Number(num2.value)
       var conta = n + n2 
        resultado.innerHTML = `O resultado é: ${conta}`
        
    } else if (opp === "subtracao"){
        let n = Number(num1.value)
        let n2 = Number(num2.value)
       var conta = n - n2 
        resultado.innerHTML = `O resultado é: ${conta}`

    } else if (opp === "multiplicacao"){
        let n = Number(num1.value)
        let n2 = Number(num2.value)
       var conta = n * n2 
        resultado.innerHTML = `O resultado é: ${conta}`
    } else if (opp === "divisao"){
        let n = Number(num1.value)
        let n2 = Number(num2.value)
       var conta = n / n2 
        resultado.innerHTML = `O resultado é: ${conta}` 
    }
} 