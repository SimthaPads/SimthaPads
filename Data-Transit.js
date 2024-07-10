const scriptURL = 'https://script.google.com/macros/s/AKfycbxyxFToGUtR0qwKctlhCG47ltubGO7uRRad6iNiN9-c_s8F43BKtq_DHtUidAjkgLSUPg/exec';
const form = document.forms['billing-form'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Retrieve dynamically generated data
    var productName = localStorage.getItem('productName');
    var quantity = localStorage.getItem('quantity');
    var deliveryFee = localStorage.getItem('deliveryFee');
    
    // Retrieve promo code entered by the user
    var promoCode = document.getElementById('promoInput').value;
    
    // Extract price from T-Price element
    var priceElement = document.getElementById('T-Price');
    var price = priceElement.textContent.trim();

    // Append dynamically generated data to the form
    var productNameInput = document.createElement('input');
    productNameInput.type = 'hidden';
    productNameInput.name = 'ProductName';
    productNameInput.value = productName;
    form.appendChild(productNameInput);

    var quantityInput = document.createElement('input');
    quantityInput.type = 'hidden';
    quantityInput.name = 'Quantity';
    quantityInput.value = quantity;
    form.appendChild(quantityInput);

    var deliveryFeeInput = document.createElement('input');
    deliveryFeeInput.type = 'hidden';
    deliveryFeeInput.name = 'DeliveryFee';
    deliveryFeeInput.value = deliveryFee;
    form.appendChild(deliveryFeeInput);

    var priceInput = document.createElement('input');
    priceInput.type = 'hidden';
    priceInput.name = 'T-Price';
    priceInput.value = price;
    form.appendChild(priceInput);

    // Calculate and append Discount-Price
    var discountedPrice = parseFloat(price) - 0.10; // Calculate discounted price
    var discountInput = document.createElement('input');
    discountInput.type = 'hidden';
    discountInput.name = 'Discount-Price';
    discountInput.value = discountedPrice.toFixed(2); // Format to 2 decimal places
    form.appendChild(discountInput);

    // Promo code input
    var promoInput = document.createElement('input');
    promoInput.type = 'hidden';
    promoInput.name = 'PromoCode'; // Corrected the name attribute to 'PromoCode'
    promoInput.value = promoCode;
    form.appendChild(promoInput);

    // Submit the form
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert('Wait! processing payment');
            // Reload the page after 2 minutes (120 seconds)
            setTimeout(() => { window.location.reload(); }, 120000);
        })
        .catch(error => console.error('Error!', error.message));
});
