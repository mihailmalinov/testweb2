let selectedItems = [];

function placeOrder() {
    const checkboxes = document.querySelectorAll('#items input[type="checkbox"]:checked');
    selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Store selectedItems in a database or local storage (for simplicity, we'll use local storage here)
    localStorage.setItem('orders', JSON.stringify(selectedItems));

    // Redirect to the orders page
    window.location.href = 'orders.html';
}
