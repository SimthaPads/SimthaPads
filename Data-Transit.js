const scriptURL = 'https://script.google.com/macros/s/AKfycbwqTVDqRSXKX_tS4RQCRvtLYkIbOhd63DRztVfokhazQeCK02-mRIZ5_iRuQHyoSMpE8w/exec';
const form = document.forms['billing-form'];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Retrieve dynamically generated data
    var productName = localStorage.getItem('productName');
    var quantity = localStorage.getItem('quantity');
    var deliveryFee = localStorage.getItem('deliveryFee');
    
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

    // Submit the form
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert('Wait! processing payment');
            // Reload the page after 60 seconds
            setTimeout(() => { window.location.reload(); }, 120000);
        })
        .catch(error => console.error('Error!', error.message));
});
