function ElementNumberHandling(elementId, isIncrease) {
    const elementField = document.getElementById(elementId)
    const elementFieldString = elementField.value
    const previousElementNumber = parseInt(elementFieldString)
    let newElementNumber
    // check the btn plus or minus 
    if (isIncrease) {
        newElementNumber = previousElementNumber + 1
    } else {
        newElementNumber = previousElementNumber - 1
    }
    elementField.value = newElementNumber
    return newElementNumber
}

function getTotalElement(elementId){
    const elementField = document.getElementById(elementId)
    const elementFieldString = elementField.innerText
    const currentTotalElementPrice = parseInt(elementFieldString)
    return currentTotalElementPrice
}

function setElementById(elementId, value){
    // sub total price calculate 
    const subTotal = document.getElementById(elementId)
    subTotal.innerText = value
}
function getTotalPrice(){
    // calculate total price of phone 
    const totalPhonePrice = getTotalElement('total-phone-price')
    const currentTotalCasePrice = getTotalElement('case-price')
    const currentSubTotal = totalPhonePrice + currentTotalCasePrice
    // set currentSubTotal 
    setElementById('sub-total', currentSubTotal)

    // calculate tax amount and set 
    // if you set toFixed() function, then the value will be string 
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2)
    const taxAmount = parseFloat(taxAmountString)
    setElementById('tax-amount',taxAmount )
    // calculate total amount for phone and casing 
    const totalAmount = currentSubTotal + taxAmount
    setElementById('final-total', totalAmount)

}






