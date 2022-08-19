function caseNumberHandling(isIncrease){
     // get element 

     const caseNumberField = document.getElementById('case-number-field')
     const caseNumberFieldString = caseNumberField.value
     // change the string to number 
     const previousCaseNumber = parseInt(caseNumberFieldString)
     let newCaseNumber
     if(isIncrease){
        newCaseNumber = previousCaseNumber + 1
     }else{
        newCaseNumber = previousCaseNumber - 1
     }
     // set the update case number 
     caseNumberField.value = newCaseNumber
     return newCaseNumber
}
function casePriceHandle(newCaseNumber){
    const totalCaseCost = newCaseNumber * 59;
    const casePrice = document.getElementById('case-price')
    casePrice.innerText ='$'+ totalCaseCost
}
// add event listener to the case plus button 

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber =   caseNumberHandling(true)
    casePriceHandle(newCaseNumber)
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = caseNumberHandling(false)
    casePriceHandle(newCaseNumber)
})