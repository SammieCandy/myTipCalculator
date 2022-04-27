console.log('calculate')
document.querySelector('#calculator').onclick = calculate;
const form  = document.querySelector('#calculator')

function calculate () {
    console.log('percentage')
    console.log('amount')
    console.log(form.elements['percentage'].value)
    console.log(form.elements['tip'].value)
    console.log(form.elements['total'].value)
    let amount = document.querySelector('#amount').value;
    let percentage = document.querySelector('#percentage').value;
    let tip = amount * (percentage / 100);
    let total = Number(amount) + tip;


}

