// Simple Item class
class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    // Calculate the total price of the item
    getTotal() {
        return this.price * this.quantity;
    }
}

// Simple Cart class
class Cart {
    constructor() {
        this.items = this.loadCart();
    }

    // Add an item to the cart
    addItem(item) {
        this.items.push(item);
        this.saveCart();
    }

    // Calculate the total price of all items in the cart
    calculateTotal() {
        return this.items.reduce((total, item) => total + item.getTotal(), 0);
    }

    // Save the cart to localStorage
    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    // Load the cart from localStorage
    loadCart() {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    }

    // Display cart items and total price
    displayCart() {
        const cartItemsDiv = document.getElementById('cart-items');
        cartItemsDiv.innerHTML = ''; // Clear previous items

        this.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.textContent = `${item.name} (x${item.quantity}) - $${item.getTotal()}`;
            cartItemsDiv.appendChild(itemDiv);
        });

        const totalDiv = document.getElementById('cart-total');
        totalDiv.textContent = `Total: $${this.calculateTotal()}`;
    }
}

// Create a new cart
const cart = new Cart();

// Add some items
cart.addItem(new Item('Laptop', 1000, 1));
cart.addItem(new Item('Phone', 500, 2));

// Display the cart contents
cart.displayCart();
