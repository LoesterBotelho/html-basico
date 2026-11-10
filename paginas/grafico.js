function initSalesChart() {
  const ctx = document.getElementById("salesChart").getContext("2d");
  
  const gradient = ctx.createLinearGradient(0, 0, 0, 200);
  gradient.addColorStop(0, "rgba(242, 101, 34, 0.3)");
  gradient.addColorStop(1, "rgba(242, 101, 34, 0)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [{
        data: [100, 340, 200, 530, 320, 650, 440, 710],
        borderColor: "#f26522",
        backgroundColor: gradient,
        fill: true,
        tension: 0.3,
        pointBackgroundColor: "#ffffff",
        pointBorderColor: "#f26522",
        pointBorderWidth: 2,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          min: 0,
          max: 1800,
          ticks: { stepSize: 200, color: "#999" },
          grid: { color: "#f0f0f0" }
        },
        x: {
          ticks: { color: "#999" },
          grid: { display: false }
        }
      }
    }
  });
}

function initTopProductsChart() {
  const ctx = document.getElementById("topProductsChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Top 1", "Top 2", "Top 3", "Top 4", "Top 5", "Top 6", "Top 8", "Top 7"],
      datasets: [{
        data: [85000, 160000, 105000, 195000, 130000, 235000, 180000, 210000],
        backgroundColor: "#f26522",
        borderRadius: 4,
        barThickness: 16
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          min: 0,
          max: 250000,
          ticks: { stepSize: 50000, color: "#999" },
          grid: { color: "#f0f0f0" }
        },
        x: {
          ticks: { color: "#999" },
          grid: { display: false }
        }
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initSalesChart();
  initTopProductsChart();
});