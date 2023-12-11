document.addEventListener('DOMContentLoaded', function () {
  const orderList = document.getElementById('order-list');
  
  // Retrieve orders from local storage
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  if (orders.length > 0) {
      orderList.innerHTML = '<h2>Your Orders:</h2>';
      orders.forEach(order => {
          orderList.innerHTML += `<p>${order}</p>`;
      });
  } else {
      orderList.innerHTML = '<p>No orders yet.</p>';
  }
});
