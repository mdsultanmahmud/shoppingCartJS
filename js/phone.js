
function phonePriceHandling(newPhoneNumber, phonePriceId) {
    const totalPhoneCost = newPhoneNumber * 1219
    const displayPhoneCost = document.getElementById(phonePriceId)
    displayPhoneCost.innerText = totalPhoneCost
}

// add events in plus button 
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = ElementNumberHandling('phone-input-field', true)
    phonePriceHandling(newPhoneNumber, 'total-phone-price')
    // here is subTotal price 
    getTotalPrice()
})

// add events in minus button 

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = ElementNumberHandling('phone-input-field', false)
    phonePriceHandling(newPhoneNumber, 'total-phone-price')

    // here is subTotal price 
    getTotalPrice()
})