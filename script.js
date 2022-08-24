let total = document.getElementById('total')
let expense = document.getElementById('expense')
let income = document.getElementById('income')
let box = document.getElementById('box')
let boxt = document.getElementById('box2')
let btnclear = document.getElementById('clear')
let incomeAmount = document.getElementById('incomeAmount')
let incomeNote = document.getElementById('incomeNote')
let btnAdd = document.getElementById('btnadd')
let expenseAmount = document.getElementById('expenseAmount')
let expenseNote = document.getElementById('expenseNote')
let btnAdds = document.getElementById('btnadd2')




const INCOMEarr = []

btnAdd.addEventListener('click', ()=>{    
if ( incomeAmount.value == '' || incomeNote.value == '' ) {
    alert ("Input can't be empty")
}
 else{

    INCOMEarr.push(Number(incomeAmount.value))
    const INCOME = INCOMEarr.reduce(function(a, b){
        return a + b})
        income.textContent = INCOME
    // income.textContent = incomeAmount.value

    let list = document.createElement(`p`)
    // let list1 = document.createElement(`p`)
    let amountIncome = document.createElement(`span`)
    // let amountExpense = document.createElement(`span`)
    list.setAttribute(`class`, ` list bg-white py- px-4`)

        total.textContent =  income.textContent - expense.textContent

    list.textContent = incomeNote.value
    amountIncome.textContent = incomeAmount.value
    amountIncome.style.float = `right`
    // amountExpense.style.float = `right`
    amountIncome.style.color = `green`
    amountIncome.style.fontWeight = `500`
    // amountExpense.style.color = `red`

    box.append(list)
    list.append(amountIncome)
    incomeAmount.value = ""
    incomeNote.value= ""

 }
    
    
})





const EXPENSEarr =[]

btnAdds.addEventListener('click', (e)=>{
    e.preventDefault()
    
    if (expenseAmount.value == "" || expenseNote.value== ""){
        alert ("Input can't be empty")
    }
    
    else{
        EXPENSEarr.push(Number(expenseAmount.value))
       const EXPENSE = EXPENSEarr.reduce(function(a, b){return a + b})
       expense.textContent = EXPENSE



       total.textContent =  income.textContent - expense.textContent

    let lists = document.createElement(`p`) 
    let amountExpense = document.createElement(`span`)
    lists.setAttribute(`class`, ` list bg-white py-2 px-4`)

    
    
    lists.textContent = expenseNote.value
    amountExpense.textContent = expenseAmount.value
    amountExpense.style.float = `right`
    amountExpense.style.color = `red`
    amountExpense.style.fontWeight = `500`
    boxt.append(lists)
    lists.append(amountExpense)
    expenseAmount.value = ""
    expenseNote.value = ""
    
    
}

    
})

btnclear.addEventListener('click',()=>{
expense.textContent = ""
income.textContent = ""
total.textContent = ""

})
