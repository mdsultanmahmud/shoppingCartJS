function elementNumberHandling(elementId, isIncrease){
    const element = document.getElementById(elementId)
    const elementString = element.value 
    const PrevElementValue = parseInt(elementString)
    let newElementNumber
    if (isIncrease) {
        newElementNumber = PrevElementValue + 1
    }else{
        newElementNumber = PrevElementValue - 1
    }

    element.value = newElementNumber
    return newElementNumber
}
// set current phone price and display 
function setCurrentPhonePrice(elementId, value){
    const element = document.getElementById(elementId)
    const currentPhonePrice = 1219 * value
    element.innerText = currentPhonePrice
}
// set current casing price and display
function setCurrentCasingPrice(elementId, value){
    const element = document.getElementById(elementId)
    const currentCasingPrice = 59 * value
    element.innerText = currentCasingPrice
}

// set total, subtotal and tax amound 
function setTotalByGetId(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}
function getTotalPrice(){
    const casingPrice = parseInt(document.getElementById('case-price').innerText)
    const mobilePrice = parseInt(document.getElementById('total-phone-price').innerText)
    const subTotalPrice = casingPrice + mobilePrice
    // set sub total price and display 
    setTotalByGetId("sub-total", subTotalPrice)
    // set tax amount and display 
    const taxAmountString = (subTotalPrice * 0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setTotalByGetId("tax-amount", taxAmount)
    // set total value and display 
    const totalPrice = subTotalPrice + taxAmount
    setTotalByGetId("final-total", totalPrice)
}
// plus button handle in phone 
document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const totalphoneNumber = elementNumberHandling('phone-input-field', true)
    setCurrentPhonePrice('total-phone-price',totalphoneNumber)
    // set subtotal, tax and total amount 
    getTotalPrice()
})

// minus button handle in phone 
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const totalphoneNumber = elementNumberHandling('phone-input-field', false)
    setCurrentPhonePrice('total-phone-price',totalphoneNumber)
    // set subtotal, tax and total amount 
    getTotalPrice()
})


// plus button handle in casing 
document.getElementById('btn-case-plus').addEventListener('click', function(){
    const totalCaseNumber = elementNumberHandling('case-input-field', true)
    setCurrentCasingPrice('case-price',totalCaseNumber)
    // set subtotal, tax and total amount 
    getTotalPrice()
})

// minus button handle in casing 
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const totalCaseNumber =  elementNumberHandling('case-input-field', false)
    setCurrentCasingPrice('case-price',totalCaseNumber)
    // set subtotal, tax and total amount 
    getTotalPrice()
})