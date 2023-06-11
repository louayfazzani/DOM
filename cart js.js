import { Button } from "bootstrap";

const items = document.getElementById("item-list");
const Buttondown = document.getElementsByClassName("decrement-btn");
const Buttonup = document.getElementsByClassName("increment-btn");
const remove = document.getElementsByClassName("delete-btn");
const likeButtons = document.getElementsByClassName("like-btn");
const price = document.getElementById("total-price");

// Add event listeners to buttons
for (let i = 0; i < Buttondown.length; i++) {
  Buttondown[i].addtoevent("click", quantityup);
}

for (let i = 0; i < Buttonup.length; i++) {
  Buttonup[i].addtoevent("click", incrementQuantity);
}

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addtoevent("click", deleteItem);
}

for (let i = 0; i < likeButtons.length; i++) {
  likeButtons[i].addtoevent("click", toggleLike);
}

// Event handler for decrement button
function quantityup(event) {
  const item = event.target.parentElement;
  const quantityElement = item.querySelector(".item-quantity");
  let quantity = parseInt(quantityElement.textContent);

  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
  }
}

function incrementQuantity(event) {
  const item = event.target.parentElement;
  const quantityElement = item.querySelector(".item-quantity");
  let quantity = parseInt(quantityElement.textContent);

  quantity++;
  quantityElement.textContent = quantity;
}

function deleteItem(event) {
  const item = event.target.parentElement;
  item.remove();
  updateTotalPrice();
}

function toggleLike(event) {
  const likeButton = event.target;
  likeButton.classList.toggle("liked");
}

function updateTotalPrice() {
  const items = items.getElementsByClassName("cart-item");
  let totalPrice = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const quantity = parseInt(item.querySelector(".item-quantity").textContent);
    totalPrice += quantity;
  }

  price.textContent = "Total: $" + totalPrice.toFixed(2);
}
updateTotalPrice();