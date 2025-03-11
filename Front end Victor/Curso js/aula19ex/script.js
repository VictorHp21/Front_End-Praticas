function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    let op = document.getElementById('opera')
    var opp = op.value

    if(num.value.length == 0){
        alert('Por favor digite um número')

    } else if (opp === "soma"){
                let n = Number(num.value)
                let c = 1
                while(c <= 10){
                    let item = document.createElement('option')
                    item.text = `${n} + ${c} = ${n+c}`
                    tab.appendChild(item)
                    c++ } 
            } else if (opp === "div"){
                let n = Number(num.value)
                let c = 1
                while(c <= 10){
                    let item = document.createElement('option')
                    item.text = `${n} / ${c} = ${n/c}`
                    tab.appendChild(item)
                    c++ } 
        } else if (opp === "multi"){
            let n = Number(num.value)
                let c = 1
                while(c <= 10){
                    let item = document.createElement('option')
                    item.text = `${n} x ${c} = ${n*c}`
                    tab.appendChild(item)
                    c++ } 
        } else if (opp === "subt"){
            let n = Number(num.value)
            let c = 1
            while(c <= 10){
                let item = document.createElement('option')
                item.text = `${n} - ${c} = ${n-c}`
                tab.appendChild(item)
                c++ } 
        }
    }
        

