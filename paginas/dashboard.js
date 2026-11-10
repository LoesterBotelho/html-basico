document.addEventListener("DOMContentLoaded", () => {
  renderStats();
  renderProducts();
  renderOrders();
});

function renderStats() {
  document.getElementById("stat-total-stock").textContent = dashboardData.stats.totalStock;
  document.getElementById("stat-low-stock").textContent = dashboardData.stats.lowStock;
  document.getElementById("stat-out-of-stock").textContent = dashboardData.stats.outOfStock;
  document.getElementById("stat-analytics").textContent = dashboardData.stats.analytics;
}

function renderProducts() {
  const tbody = document.getElementById("products-table-body");
  tbody.innerHTML = dashboardData.products.map(product => `
    <tr>
      <td>${product.name}</td>
      <td>${product.stock}</td>
      <td>${product.price}</td>
      <td><span class="badge-green">${product.status}</span></td>
      <td><button class="btn btn-action">Actions</button></td>
    </tr>
  `).join("");
}

function renderOrders() {
  const tbody = document.getElementById("orders-table-body");
  tbody.innerHTML = dashboardData.orders.map(order => `
    <tr>
      <td>${order.id}</td>
      <td>${order.customer}</td>
      <td>${order.date}</td>
      <td>${order.total}</td>
      <td><span class="${order.statusType}">${order.status}</span></td>
    </tr>
  `).join("");
}