document.addEventListener("DOMContentLoaded", function () {
  const cartItemsDiv = document.getElementById("cartItems");
  const totalSpan = document.getElementById("total");
  const itemCountSpan = document.getElementById("itemCount");
  const clearCartBtn = document.getElementById("clearCart");
  const buyNowBtn = document.getElementById("buyNow");
  const successMsg = document.getElementById("successMessage");
  const paymentPopup = document.getElementById("paymentPopup");

  const cashBtn = document.getElementById("cashBtn");
  const upiBtn = document.getElementById("upiBtn");
  const cardBtn = document.getElementById("cardBtn");
  const netbankingBtn = document.getElementById("netbankingBtn");
  const cancelPopup = document.getElementById("cancelPopup");

  const upiSection = document.getElementById("upiSection");
  const cardSection = document.getElementById("cardSection");
  const netbankingSection = document.getElementById("netbankingSection");

  const methodButtons = document.getElementById("methodButtons");
  const backBtns = document.querySelectorAll(".backBtn");

  // Load cart
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Render cart
  function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("cart-item");
      itemDiv.innerHTML = `
        ${item.name} - ₹${item.price}
        <button class="btn" data-index="${index}">Remove</button>
      `;
      cartItemsDiv.appendChild(itemDiv);
      total += item.price;
    });
    totalSpan.textContent = total;
    itemCountSpan.textContent = cart.length;
  }
  renderCart();

  // Remove items
  cartItemsDiv.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON") {
      const index = e.target.getAttribute("data-index");
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  // Clear cart
  clearCartBtn.addEventListener("click", function () {
    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  });

  // Buy Now click
  buyNowBtn.addEventListener("click", function () {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    paymentPopup.style.display = "flex";
  });

  // Payment Methods
  cashBtn.addEventListener("click", () => completePurchase("Cash"));

  upiBtn.addEventListener("click", () => showSection(upiSection));
  cardBtn.addEventListener("click", () => showSection(cardSection));
  netbankingBtn.addEventListener("click", () => showSection(netbankingSection));

  cancelPopup.addEventListener("click", () => {
    paymentPopup.style.display = "none";
    hideAllSections();
  });

  // Back buttons
  backBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      hideAllSections();
      methodButtons.style.display = "flex";
    });
  });

  // UPI Pay
  document.getElementById("upiPayBtn").addEventListener("click", () => {
    const upiId = document.getElementById("upiId").value.trim();
    if (upiId === "") return alert("Please enter UPI ID!");
    completePurchase("UPI (" + upiId + ")");
  });

  // Card Pay
  document.getElementById("cardPayBtn").addEventListener("click", () => {
    const card = document.getElementById("cardNumber").value.trim();
    const expiry = document.getElementById("expiry").value.trim();
    const cvv = document.getElementById("cvv").value.trim();

    if (card === "" || expiry === "" || cvv === "")
      return alert("Please fill all card details!");

    completePurchase("Credit/Debit Card");
  });

  // Netbanking Pay
  document.getElementById("bankPayBtn").addEventListener("click", () => {
    const bank = document.getElementById("bankSelect").value;
    if (bank === "") return alert("Please select a bank!");
    completePurchase("Net Banking (" + bank + ")");
  });

  // Helper: show/hide sections
  function showSection(section) {
    methodButtons.style.display = "none";
    hideAllSections();
    section.style.display = "block";
  }

  function hideAllSections() {
    upiSection.style.display = "none";
    cardSection.style.display = "none";
    netbankingSection.style.display = "none";
  }

  // Complete purchase
  function completePurchase(method) {
    paymentPopup.style.display = "none";
    hideAllSections();

    successMsg.style.display = "block";
    successMsg.innerHTML = `
      ✅ Purchase successful via <strong>${method}</strong>!<br>
      Thank you for shopping with Sundarban Explorars.<br>
      Total Paid: ₹${totalSpan.textContent}.
    `;

    cart = [];
    localStorage.removeItem("cart");
    renderCart();
  }
});
