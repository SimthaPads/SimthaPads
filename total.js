// Get the quantity and unit price elements by their IDs
var quantityElement = document.getElementById("Quantity");
var unitPriceElement = document.getElementById("T-Price");
var totalPriceElement = document.getElementById("Total-Price");

// Extract numerical values from the inner text of the elements
var quantity = parseFloat(quantityElement.innerText);
var unitPrice = parseFloat(unitPriceElement.innerText.replace(/[^\d.]/g, '')); // Remove non-numeric characters

// Check if both values are numbers
if (!isNaN(quantity) && !isNaN(unitPrice)) {
    // Calculate the total price
    var totalPrice = quantity * unitPrice;
    // Update the inner text of the Total Price element with the calculated total price
    totalPriceElement.innerText = totalPrice.toFixed(2); // Display total price with two decimal places
} else {
    totalPriceElement.innerText = "Error: Quantity or Unit Price is not a valid number.";
}
