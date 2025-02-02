const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],

  getBalance() {
    return this.balance;
  },

  getDiscount() {
    return this.discount;
  },

  setDiscount(value) {
    this.discount = value;
  },

  addOrder(order, price) {
    this.orders.push(order);
    this.balance -= price * (1 - this.discount);
  },

  getOrders() {
    return this.orders;
  }
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder("Steak", 5000);
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
