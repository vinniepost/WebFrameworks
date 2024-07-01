function kwadraat(num: number): number {
    return num * num;
}

function repeater(zin:string, num:number):string[]{
    var return_string:string[] = []
    for (let index = 0; index < num; index++) {
        return_string.push(zin);
    }
    return return_string
}


const splitText = (text:string, seperator:string = "-"):string[] =>{
    return text.split(seperator)
}

function product(...numbers:number[]):number{
    var prod:number
    if (numbers != null) {
        prod = numbers[0]
        for (let index = 1; index < numbers.length; index++) {
            prod *= prod
        }
    }
    else{
        prod = 0
    }

    return prod
}

const product_of_numbers = (...number:number[]):number => {
    var prod:number
    if (number != null) {
        prod = number[0]
        for (let index = 1; index < number.length; index++) {
            prod *= prod
        }
    }
    else{
        prod = 0
    }

    return prod
}