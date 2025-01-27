function changecolor() {
    var colorRadios = document.getElementsByName("color1");

    for (var i = 0; i < colorRadios.length; i++) {
        colorRadios[i].addEventListener("click", function() {
            var selectedColor = this.value;

            var productImg = document.getElementById("productImg1");
            if (selectedColor === "Black") {
                productImg.src = "images/Shop/T-shirt/Black-Tshirt.png";
            } else {
                productImg.src = "images/Shop/T-shirt/White-Tshirt.png";
            }
        });
    }
    var colorRadios = document.getElementsByName("color2");

    for (var i = 0; i < colorRadios.length; i++) {
        colorRadios[i].addEventListener("click", function() {
            var selectedColor = this.value;

            var productImg = document.getElementById("productImg2");
            if (selectedColor === "Black") {
                productImg.src = "images/Shop/Hoodie/black-hoodie.jpg";
            } else {
                productImg.src = "images/Shop/Hoodie/White-Hoodie.png";
            }
        });
    }
    var colorRadios = document.getElementsByName("color3");

    for (var i = 0; i < colorRadios.length; i++) {
        colorRadios[i].addEventListener("click", function() {
            var selectedColor = this.value;

            var productImg = document.getElementById("productImg3");
            if (selectedColor === "Black") {
                productImg.src = "images/Shop/Bag/Black-Bag.jpg";
            } else {
                productImg.src = "images/Shop/Bag/White-Bag.jpg";
            }
        });
    }
}

function addCart(element) {
    var productContainer = element.closest('.content');
    var productImg = productContainer.querySelector(".ProductImg").src;
    var productTitle = productContainer.querySelector("h3").innerText;
    var productPrice = parseFloat(productContainer.querySelector("h6").innerText.replace("LKR ", ""));
    var productColor = productContainer.querySelector('input[type="radio"]:checked') ? productContainer.querySelector('input[type="radio"]:checked').value : '';
    var productSize = '';

    // Handle size selection if applicable
    if (productContainer.querySelector('select')) {
        productSize = productContainer.querySelector('select').value;
    }

    // Generate unique identifier for product based on title, color, and size
    var productIdentifier = `${productTitle}-${productColor}-${productSize}`;

    // Check if the item is already in the cart
    var cartItem = document.querySelector(`.cart-item[data-product-identifier="${productIdentifier}"]`);
    if (cartItem) {
    // Update the quantity and total price
        var productQuantity = parseInt(cartItem.querySelector('span:nth-child(2)').innerText.split('Qty: ')[1]) + 1;
        var productTotal = productPrice * productQuantity;
        cartItem.querySelector('span:nth-child(2)').innerText = `Qty: ${productQuantity}`;
        cartItem.querySelector('span:nth-child(3)').innerText = `Total: LKR ${productTotal.toFixed(2)}`;
    } 
    else {
    // Add the item to the cart for the first time
    var cartItemHTML = `
        <div class="cart-item" data-product-identifier="${productIdentifier}">
            <img src="${productImg}" alt="${productTitle}" style="width: 50px; height: 50px;">
            <span>${productTitle} - ${productColor} - ${productSize} - Qty: 1</span>
            <span>Total: LKR ${productPrice.toFixed(2)}</span>
        </div>`;
    var orderDescription = document.getElementById("orderDescription");
    orderDescription.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    // Update overall cart total
    updateCartTotal();
}

function updateCartTotal() {
    var cartItems = document.querySelectorAll('.cart-item');
    var total = 0;
    cartItems.forEach(function(item) {
        var itemTotal = parseFloat(item.querySelector('span:nth-child(3)').innerText.replace('Total: LKR ', ''));
        total += itemTotal;
    });

    var totalCostElement = document.getElementById("TotalCost");
    totalCostElement.innerText = `LKR ${total.toFixed(2)}`;

    placeorder(total);
}


    function resetOrder() {
    // Clear the cart array
    cart = [];

    // Clear the order description
    var orderDescription = document.getElementById("orderDescription");
    orderDescription.innerHTML = "";

    // Clear the total cost display
    var totalCostElement = document.getElementById("TotalCost");
    totalCostElement.innerText = "LKR 0.00";
    }
    
    function placeorder(totalCost) {
        var ordersummary = document.getElementById("orderSummary");
        ordersummary.innerHTML = `Order Total: LKR ${totalCost.toFixed(2)}`;
    }
    
    // Initialize color change functionality
changecolor();

function showPopup() {
    var orderDescription = document.getElementById("orderDescription").innerHTML;
    if (orderDescription.trim() === "") {
        alert("There is no product added to the cart.");
    } else {
        document.getElementById("popup").style.display = "block";
    }
}


function closePopup() {
    document.getElementById("popup").style.display = "none";
}


// Validation for user credentials

function validation() {
let name = document.getElementById("name").value;
let address = document.getElementById("address").value;
let city = document.getElementById("city").value;
let postal = document.getElementById("postal").value;
let phone = document.getElementById("phone").value;
let email = document.getElementById("email").value;
let card = document.getElementById("card").value;
let cardname = document.getElementById("cardname").value;
let cardexp = document.getElementById("cardexp").value;
let cvv = document.getElementById("cvv").value;

let isValid = true;

if (name === "") {
alert("Name is required");
isValid = false;
} else if (address === "") {
alert("Address is required");
isValid = false;
} else if (city === "") {
alert("City is required");
isValid = false;
} else if (postal === "") {
alert("Postal code is required");
isValid = false;
} else if (phone === "") {
alert("Phone number is required");
isValid = false;
} else if (email === "" || !email.includes("@")|| !email.includes(".")) {
alert("Enter a valid Email, must contain @,.");
isValid = false;
} else if (card === "") {
alert("Card number is required");
isValid = false;
} else if (cardname === "") {
alert("Card name is required");
isValid = false;
} else if (cardexp === "") {
alert("Card expiration date is required");
isValid = false;
} else if (cvv === "" || cvv.length!==3) {
alert("CVV is required, max 3 number");
isValid = false;
} else {
alert("Thanks for ordering!!");
}

return isValid;
}