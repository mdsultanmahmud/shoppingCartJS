function phoneNumberHandling(phoneElementId, isIncrease) {
    const phoneInputField = document.getElementById(phoneElementId)
    const phoneInputFieldString = phoneInputField.value
    const previousPhoneNumber = parseInt(phoneInputFieldString)
    let newPhoneNumber
    // check the btn plus or minus 
    if (isIncrease) {
        newPhoneNumber = previousPhoneNumber + 1
    } else {
        newPhoneNumber = previousPhoneNumber - 1
    }
    phoneInputField.value = newPhoneNumber
    return newPhoneNumber
}

function phonePriceHandling(newPhoneNumber, phonePriceId) {
    const totalPhoneCost = newPhoneNumber * 1219
    const displayPhoneCost = document.getElementById(phonePriceId)
    displayPhoneCost.innerText = '$' + totalPhoneCost
}
document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newPhoneNumber = phoneNumberHandling('phone-input-field', true)
    phonePriceHandling(newPhoneNumber, 'total-phone-price')
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newPhoneNumber = phoneNumberHandling('phone-input-field', false)
    phonePriceHandling(newPhoneNumber, 'total-phone-price')
})