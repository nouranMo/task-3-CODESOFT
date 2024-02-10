class Calculator{

    constructor(currentOperater,prevOperator){
        this.currentOperater=currentOperater;
        this.prevOperator = prevOperator;

        this.clear()
    }

    clear(){
        this.currentOperand='';

        this.prevOperand = '';

        this.operation=undefined;
    }

    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        if(number==='.'&& this.currentOperand.includes('.')) return
        this.currentOperand += number;
       
    }

    chooseOperation(operation){

        if(this.currentOperand=='') return
        if(this.prevOperand!==''){
            this.compute
        }
         this.operation =operation
         this.prevOperand = this.currentOperand
         this.currentOperand=''
    }

    compute(){

        let computation
        const prev = parseFloat(this.prevOperand);
        const current = parseFloat(this.currentOperand)
        if (isNaN(current)|| isNaN(prev)) return

        switch (this.operation){
        case "+":
            computation= prev + current;
            console.log(computation)
            break;
        case "-":  
            computation = prev - current;
            break;
         case "*":  
            computation = prev * current;
            break; 
            
        case "/":  
            computation = prev / current;
            break;
        default:
            return 
        }
        this.currentOperand=computation;
        this.operation=undefined;
        this.prevOperand = ''

    }
    getDisplayNumber(number){
        const floatnumber = parseFloat(number)
        if(isNaN(floatnumber)) return ''
        return floatnumber.toLocaleString('en')
    }
    updateDisplay(){
        console.log(currentOperater)
        this.currentOperater.innerText= this.getDisplayNumber(this.currentOperand)
        this.prevOperator.innerText = this.prevOperand

    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons =  document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const All_clear_Button = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const currentOperater = document.querySelector('[data-current]');
const prevOperator = document.querySelector('[data-prev]')

const calculator = new Calculator(currentOperater,prevOperator);


numberButtons.forEach(button =>{
button.addEventListener('click',()=>{
    console.log(button.innerText)
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay();
})
});

operationButtons.forEach(operation=>{
    operation.addEventListener('click',()=>{
        console.log(operation.innerText)
        calculator.chooseOperation(operation.innerText);
        calculator.updateDisplay();

    })
})

All_clear_Button.addEventListener('click',()=>{
    calculator.clear();
    calculator.updateDisplay();
})


equalButton.addEventListener('click',()=>{
    calculator.compute();
    calculator.updateDisplay();
})

deleteButton.addEventListener('click',()=>{
    calculator.delete();
    calculator.updateDisplay();
})
