// Menu Toggle Script
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Slider Script
document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");
    
    carousels.forEach(function(carousel) {
        let index = 0;
        const images = carousel.querySelectorAll("img");
        const totalImages = images.length;

        // Auto-slide function
        function autoSlide() {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
            index = (index + 1) % totalImages;
        }

        // Start auto-sliding
        setInterval(autoSlide, 3000); // Change slide every 3 seconds
    });
});





/*document.addEventListener('DOMContentLoaded', function() {
    const quantities = document.querySelectorAll('.quantity input');
    const totalElement = document.querySelector('.cart-total h3');
    let total = 55000; // Replace with the initial total calculation

    quantities.forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    function updateTotal() {
        const newTotal = Array.from(quantities).reduce((acc, input) => {
            const price = parseFloat(input.closest('.cart-item').querySelector('p').textContent.replace('$', '').replace(',', ''));
            return acc + price * parseInt(input.value);
        }, 0);
        totalElement.textContent = `Total: $${newTotal.toLocaleString()}`;
    }
});*/

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.checkout-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your validation or submission logic here
        alert('Order placed successfully!');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Get the parent cart item element
            const cartItem = this.closest('.cart-item');
            
            // Get the item ID from data-id attribute
            const itemId = cartItem.getAttribute('data-id');
            
            // Remove the item from the DOM
            cartItem.remove();
            
            // Call the function to update the cart in local storage or backend
            removeFromCart(itemId);
            
            // Optionally, update the total price
            updateTotalPrice();
        });
    });
});

function removeFromCart(itemId) {
    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Remove the item with the corresponding ID
    cart = cart.filter(item => item.id !== itemId);
    
    // Update the cart in local storage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateTotalPrice() {
    // Assuming you have a function to calculate and update the total price
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Update the total price in the DOM
    document.querySelector('.checkout-summary h2').textContent = `Total: $${total.toFixed(2)}`;
}

//singup
$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

//home-slider