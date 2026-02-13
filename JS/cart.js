const cartGrid = document.getElementById("cartGrid");
const emptyCart = document.getElementById("emptyCart");

let cart = JSON.parse(localStorage.getItem("car-Cart")) || [];

function drawCart() {
    cartGrid.innerHTML = "";

    if (cart.length === 0) {
        emptyCart.style.display = "block";
        document.getElementById("totalPrice").style.display = "none";


        return;
    }

    emptyCart.style.display = "none";

    let total = 0;

    cart.forEach((item, index) => {
        total += Number(item.price);
        cartGrid.innerHTML += `
                    <div class="cart-card">
                        <img src="${item.image}" alt="Car">
                        <div class="cart-body">
                            <h3>${item.carName}</h3>
                            <ul>
                                <li><span>${item.cardetails[0]}</span><span>${item.cardetails[1]}</span></li>
                                <li><span>${item.cardetails[2]}</span><span>${item.cardetails[3]}</span></li>
                                <li><span>${item.cardetails[4]}</span><span>${item.cardetails[5]}</span></li>
                            </ul>
                            <h4 class="price">$${item.price}</h4>
                            <button class="remove-btn" onclick="removeItem(${index})">
                                Remove from Cart
                            </button>
                        </div>
                    </div>
                `;
    });
    document.getElementById("totalPrice").textContent = `Total: $${total}`;

}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("car-Cart", JSON.stringify(cart));
    drawCart();
}

drawCart();