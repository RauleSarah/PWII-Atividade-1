
export let farea= (comprimento:number,largura:number) => (comprimento * largura )


export let parimpar = function(num:number) :boolean{
    if (num %2 == 0)
        return true
    else 
        return false
    }
export let fcubo= (CUBO:number) => ( Math.pow(CUBO,3) )
console.log(`A área é ${fcubo(CUBO)}`)


