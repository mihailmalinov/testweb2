let selectedItems = [];

function placeOrder() {
    const checkboxes = document.querySelectorAll('#items input[type="checkbox"]:checked');
    selectedItems = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Store selectedItems in a database or local storage (for simplicity, we'll use local storage here)
    localStorage.setItem('orders', JSON.stringify(selectedItems));

    // Redirect to the orders page
    window.location.href = 'orders.html';
}
// script.js

// ... existing code ...

async function sendOrderToServer(order) {
    try {
        const response = await fetch('https://your-server-url.com/place-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        });

        if (!response.ok) {
            throw new Error('Failed to place order');
        }
    } catch (error) {
        console.error('Error sending order to server:', error);
        // Handle error appropriately
    }
}
