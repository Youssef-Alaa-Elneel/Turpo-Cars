const goToTop = document.getElementById("gototop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        goToTop.classList.add("show");
    } else {
        goToTop.classList.remove("show");
    }
});


function addToLocal(pr) {
    console.log(pr.parentElement);

    var product = pr.parentElement;
    var image = product.querySelector("img").src;
    var carName = product.querySelector(".car-name").textContent;
    var cardet = product.querySelectorAll("span");
    var price = product.querySelector("a").textContent.replace("$", "");
    var cardetails = [];
    console.log(image);
    console.log(carName);
    console.log(cardetails);
    console.log(price);

    for (var x = 0; x < cardet.length; x++) {
        cardetails.push(cardet[x].textContent);
    }

    let cart = JSON.parse(localStorage.getItem("car-Cart")) || [];
    cart.push({ carName, image, cardetails, price });
    localStorage.setItem("car-Cart", JSON.stringify(cart));
    // console.log(JSON.parse(localStorage.getItem("cart")))
    alert(`${carName} added to cart!`)
}
