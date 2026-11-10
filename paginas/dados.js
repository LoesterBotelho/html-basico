const dashboardData = {
  stats: {
    totalStock: 263,
    lowStock: 1,
    outOfStock: 0,
    analytics: 446
  },
  products: [
    { name: "Product Name 1", stock: 50, price: "$100", status: "In Stock", badge: "badge-green" },
    { name: "Product Name 2", stock: 30, price: "$55", status: "In Stock", badge: "badge-green" },
    { name: "Product Name 3", stock: 35, price: "$60", status: "In Stock", badge: "badge-green" },
    { name: "Product Name 4", stock: 30, price: "$35", status: "In Stock", badge: "badge-green" },
    { name: "Product Name 5", stock: 10, price: "$50", status: "Low Stock", badge: "badge-orange" }
  ],
  orders: [
    { id: "100101", customer: "Customer 1", date: "Apr 18, 2023", total: "$23.00", status: "Monthly", statusType: "badge-green" },
    { id: "100202", customer: "Customer 2", date: "Feb 18, 2023", total: "$30.00", status: "Remove", statusType: "badge-orange" },
    { id: "100303", customer: "Customer 3", date: "Apr 18, 2023", total: "$72.00", status: "Remove", statusType: "badge-orange" },
    { id: "100304", customer: "Customer 4", date: "Feb 18, 2023", total: "$76.00", status: "Remove", statusType: "badge-orange" },
    { id: "100306", customer: "Customer 5", date: "Mar 18, 2023", total: "$73.00", status: "Monthly", statusType: "badge-green" }
  ],
  customers: [
    { name: "Customer 1", email: "customer1@email.com", orders: 5, totalSpent: "$230.00" },
    { name: "Customer 2", email: "customer2@email.com", orders: 2, totalSpent: "$85.00" },
    { name: "Customer 3", email: "customer3@email.com", orders: 8, totalSpent: "$450.00" },
    { name: "Customer 4", email: "customer4@email.com", orders: 3, totalSpent: "$120.00" },
    { name: "Customer 5", email: "customer5@email.com", orders: 6, totalSpent: "$310.00" }
  ]
};