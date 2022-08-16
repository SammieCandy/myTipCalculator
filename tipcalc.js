// function calculate() {
//     document.querySelector('#form').onclick = function calculate () {
//         console.log('percentage')
//         console.log('amount')
//         console.log(form.elements['percentage'].value)
//         console.log(form.elements['tip'].value)
//         console.log(form.elements['total'].value)
//         let amount = Number(document.querySelector('amount').value);
//         let percentage = document.querySelector('percentage').value;
//         let tipValue = amount * (percentage / 100);
//         let totalBill = amount + tipValue;
    
//         console.log(total)
//         let tip = document.querySelector('#tip')
//         let total = document.querySelector('#total')
    
//         tip.value = tipValue.toFixed(2);
//         total.value = totalBill.toFixed(2);
//     }
// }


var x = document.getElementById("calculator");
var y = document.getElementById("addup");
var z = document.getElementById("clear");

y.addEventListener("click", function() {

            let amount = Number(document.getElementById("amount").value);
            let percentage = document.getElementById("percentage").value;
            let tipValue = amount * (percentage/100);
            let totalBill = amount + tipValue;
        
            let tip = document.getElementById("tip");
            let output = document.getElementById("output");
        
            tip.value = tipValue.toFixed(2);
            output.value = totalBill.toFixed(2);

            z.addEventListener('click', function() {
                tip.value = '';
                output.value = '';
            });
});

