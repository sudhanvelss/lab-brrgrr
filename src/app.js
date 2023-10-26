const ingredients = {
  Patty: 80,
  Cheese: 18,
  Tomatoes: 18,
  Onions: 17,
  Lettuce: 17,
};

const state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true,
};

const elements = {
  patty: document.getElementById("patty"),
  cheese: document.getElementById("cheese"),
  tomatoes: document.getElementById("tomato"),
  onion: document.getElementById("onion"),
  lettuce: document.getElementById("lettuce"),
  buttons: {
    patty: document.querySelector(".btn-patty"),
    cheese: document.querySelector(".btn-cheese"),
    tomatoes: document.querySelector(".btn-tomatoes"),
    onions: document.querySelector(".btn-onions"),
    lettuce: document.querySelector(".btn-lettuce"),
  },
  items: document.getElementsByClassName("items"),
  prize: document.getElementsByClassName("price-details")[0],
};

function renderIngredient(ingredientName) {
  const ingredient = elements[ingredientName.toLowerCase()];
  const button = elements.buttons[ingredientName.toLowerCase()];

  if (state[ingredientName]) {
    ingredient.style.display = "inherit";
    button.classList.add("active");
    elements.items[Object.keys(elements.buttons).indexOf(ingredientName)].textContent = ingredientName;
  } else {
    ingredient.style.display = "none";
    button.classList.remove("active");
    elements.items[Object.keys(elements.buttons).indexOf(ingredientName)].textContent = "";
  }
}

function renderPrice() {
  let total = wholeWheatBun;
  Object.keys(ingredients).forEach((ingredient) => {
    if (state[ingredient]) {
      total += ingredients[ingredient];
    }
  });
  elements.prize.textContent = `INR ${total}`;
}

function handleButtonClick(ingredientName) {
  state[ingredientName] = !state[ingredientName];
  renderIngredient(ingredientName);
  renderPrice();
}

Object.keys(ingredients).forEach((ingredient) => {
  elements.buttons[ingredient.toLowerCase()].onclick = () => handleButtonClick(ingredient);
});

renderAll();

