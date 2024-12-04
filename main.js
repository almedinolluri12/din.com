
function addToCart(price) {
    localStorage.setItem("productPrice", price);
    window.location.href = "cart.html";
}