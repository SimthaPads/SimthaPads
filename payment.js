const paymentForm = document.getElementById('billing');
if (paymentForm) { // Check if the form element exists
    paymentForm.addEventListener("submit", payWithPaystack, false);
}

function payWithPaystack(e) {
    e.preventDefault();

    // Extract the price from the Total-Price element
    let totalPriceElement = document.getElementById("Total-Price");
    if (!totalPriceElement) {
        alert("Total price element not found.");
        return;
    }
    let totalPrice = totalPriceElement.textContent.trim();
    if (!totalPrice) {
        alert("Total price is not provided.");
        return;
    }

    // Validate if totalPrice is in the expected format
    let pricePattern = /^\d+(\.\d{1,2})?$/; // Pattern for price with optional two decimal places
    if (!pricePattern.test(totalPrice)) {
        alert("Invalid total price format.");
        return;
    }

    // Convert the price to an integer (assuming it's in cents/pennies)
    let amount = parseInt(parseFloat(totalPrice) * 100);

    let handler = PaystackPop.setup({
        key: 'pk_live_8df85f43adf0059b1cb668a627d928d7f4d84c25', // Replace with your actual Paystack public key
        email: document.getElementById("email-address").value,
        amount: amount,
        currency: 'ZAR',
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // Consider using a more robust method for generating unique references
        onClose: function(){
            alert('Window closed.');
        },
        callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
        }
    });

    handler.openIframe();
}
