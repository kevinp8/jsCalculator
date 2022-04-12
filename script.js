let calcArray = []
let arrayToJoin = []
document.querySelector('h1').textContent = ''


Array.from(document.querySelectorAll('.operator')).forEach(element => element.addEventListener('click', calculate))
Array.from(document.querySelectorAll('.number')).forEach(element => element.addEventListener('click', addToJoin))

document.querySelector('.clear').addEventListener('click', clear)
document.querySelector('.enter').addEventListener('click', enter)

function addToJoin(click) {
    if (document.querySelector('h1').textContent == 'Error') {
        clear()
    }
    arrayToJoin.push(click.target.textContent)
        console.log(`arrayToJoin ${arrayToJoin}`)
        console.log(`calcarray ${calcArray}`)
        document.querySelector('h1').textContent += click.target.textContent
}

function add(num1, num2) {
    return num1+num2
}
function subtract(num1, num2) {
    return num1-num2
}
function multiply(num1, num2) {
    return num1*num2
}
function divide(num1, num2) {
    if (num2 == 0) {
        document.querySelector('h1').textContent = 'Error'
    }
    return num1/num2
}

function clear() {
    calcArray = []
    arrayToJoin = []
    document.querySelector('h1').textContent = ''
}

function enter() {
    if (document.querySelector('h1').textContent == 'Error') {
        clear()
    }
    if (calcArray.length == 2 && arrayToJoin.length > 0) {
        calcArray.push(Number(arrayToJoin.join('')))
        arrayToJoin = []
    }
    if (calcArray.length == 3) {
        if (calcArray[1] == '+') {
            document.querySelector('h1').textContent = add(calcArray[0], calcArray[2])
            arrayToJoin = [add(calcArray[0], calcArray[2])]
            calcArray = []
            console.log(`calcarray ${calcArray}`)
            console.log(`arrayToJoin ${arrayToJoin}`)
        }
        if (calcArray[1] == '-') {
            document.querySelector('h1').textContent = subtract(calcArray[0], calcArray[2])
            arrayToJoin = [subtract(calcArray[0], calcArray[2])]
            calcArray = []
        }
        if (calcArray[1] == 'X') {
            document.querySelector('h1').textContent = multiply(calcArray[0], calcArray[2])
            arrayToJoin = [multiply(calcArray[0], calcArray[2])]
            calcArray = []
        }
        if (calcArray[1] == '/') {
            document.querySelector('h1').textContent = divide(calcArray[0], calcArray[2])
            arrayToJoin = [divide(calcArray[0], calcArray[2])]
            calcArray = []
        }
}}

function calculate(click) {
        if ( calcArray[1] == '+' || calcArray[1] == '-' || calcArray[1] == '/' || calcArray[1] == '*'){
            calcArray[1] = click.target.textContent
            console.log(calcArray)
            document.querySelector('h1').textContent = `${calcArray[0]}${calcArray[1]}`
        }
        if (document.querySelector('h1').textContent == 'Error') {
            clear()
        }
        if (arrayToJoin.length >= 1 && calcArray.length ==2) {
            calcArray.push(Number(arrayToJoin.join('')))
            arrayToJoin = []
            if (calcArray.length == 3) {
                if (calcArray[1] == '+') {
                    document.querySelector('h1').textContent = add(calcArray[0], calcArray[2])
                    calcArray = [add(calcArray[0], calcArray[2])]
                    console.log(calcArray)
                    console.log(arrayToJoin)
                }
                if (calcArray[1] == '-') {
                    document.querySelector('h1').textContent = subtract(calcArray[0], calcArray[2])
                    calcArray = [subtract(calcArray[0], calcArray[2])]
                }
                if (calcArray[1] == 'X') {
                    document.querySelector('h1').textContent = multiply(calcArray[0], calcArray[2])
                    calcArray = [multiply(calcArray[0], calcArray[2])]
                }
                if (calcArray[1] == '/') {
                    document.querySelector('h1').textContent = divide(calcArray[0], calcArray[2])
                    calcArray = [divide(calcArray[0], calcArray[2])]
                }
                document.querySelector('h1').textContent += click.target.textContent
                calcArray.push(click.target.textContent)
                console.log(calcArray)
            }
        } else if (arrayToJoin.length >= 1) {
            calcArray.push(Number(arrayToJoin.join('')))
            arrayToJoin = []
            calcArray.push(click.target.textContent)
            console.log(`calcarray ${calcArray}`)
            console.log(`arrayToJoin ${arrayToJoin}`)
            document.querySelector('h1').textContent += click.target.textContent
        }
    
    
}