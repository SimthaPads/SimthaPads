// DataExchange.js

document.addEventListener("DOMContentLoaded", function() {
    var purchaseButton = document.querySelector('button[type="button"]');
    if (purchaseButton) {
        purchaseButton.addEventListener("click", function() {
            // Extract data from the cart
            var productName = document.getElementById('prod-cart-name').textContent;
            var quantity = document.querySelector('.qty').textContent;
            var deliveryFee = document.getElementById('delivery-fee').textContent;
            var price = document.getElementById('price-display').textContent;

            // Store data in localStorage
            localStorage.setItem('productName', productName);
            localStorage.setItem('quantity', quantity);
            localStorage.setItem('deliveryFee', deliveryFee);
            localStorage.setItem('price', price);

            // Redirect to billing-form.html
            window.location.href = 'billing-form.html';
        });
    }
});
