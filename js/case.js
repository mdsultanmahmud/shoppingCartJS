
function casePriceHandle(newCaseNumber){
    const totalCaseCost = newCaseNumber * 59;
    const casePrice = document.getElementById('case-price')
    casePrice.innerText =totalCaseCost
}
// add event listener to the case plus button 

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = ElementNumberHandling('case-number-field', true)
    casePriceHandle(newCaseNumber)
    // here is subTotal price 
    getTotalPrice()
})

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = ElementNumberHandling('case-number-field', false)
    casePriceHandle(newCaseNumber)
    // here is subTotal price 
    getTotalPrice()
})