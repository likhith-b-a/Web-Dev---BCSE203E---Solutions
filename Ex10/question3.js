document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelectorAll(".product");
  let quantities = document.querySelectorAll(".quantity");

  // Enable quantity input when product is checked
  products.forEach((checkbox, index) => {
      checkbox.addEventListener("change", function () {
          quantities[index].disabled = !this.checked;
          if (!this.checked) {
              quantities[index].value = ""; // Reset value if unchecked
          }
      });
  });
});

function submitOrder() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  let selectedProducts = [];
  let products = document.querySelectorAll(".product");
  let quantities = document.querySelectorAll(".quantity");

  products.forEach((checkbox, index) => {
      if (checkbox.checked) {
          let [productName, price] = checkbox.value.split(",");
          let quantity = quantities[index].value;
          selectedProducts.push({ name: productName, price: price, quantity: quantity });
      }
  });

  let orderDetails = {
      name: name,
      phone: phone,
      email: email,
      products: selectedProducts
  };

  // Store order details in localStorage
  localStorage.setItem("order", JSON.stringify(orderDetails));

  // Redirect to receipt page
  window.location.href = "receipt.html";
}
