const productsElement = document.querySelector(`#products`);
const buttonElement = document.querySelectorAll(`.button-value`);

for (const i of products.data) {
  // create card
  let card = document.createElement("div");
  card.classList.add("card", i.Category, "hide");
  //  create image-container
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  //   img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.Image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  productsElement.appendChild(card);

  // container
  let container = document.createElement("div");
  container.classList.add("container");
  // productName
  let productName = document.createElement("h5");
  productName.classList.add("product-name");
  productName.innerText = i.productName.toUpperCase();
  container.appendChild(productName);
  card.appendChild(container);
  // price container
  let price = document.createElement("h6");
  price.innerText = `$ ${i.Price}`;
  container.appendChild(price);
}

//fileter function
//parameter passed by button(parameter same s category)

const filterProducts = (value) => {
  buttonElement.forEach((button) => {
    //check if value equal innerText
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //Select All card
  let Element = document.querySelectorAll(`.card`);
  //loop through all cards
  Element.forEach((card) => {
    card.clicked == true;
    //display all cards
    if (value == "All") {
      card.classList.remove(`hide`);
    } else {
      //check if element contains category class
      if (card.classList.contains(value)) {
        //display element based category
        card.classList.remove(`hide`);
      } else {
        //hide other element
        card.classList.add(`hide`);
      }
    }
  });
};

//search button click
document.querySelector(`#search`).addEventListener(`click`, () => {
  let searchInput = document.querySelector(`#search-input`).value;
  let elements = document.querySelectorAll(`.product-name`);
  let card = document.querySelectorAll(`.card`);
  //loop through all element
  elements.forEach((elements, index) => {
    //check if text includes the search value
    if (elements.innerText.includes(searchInput.toUpperCase())) {
      card[index].classList.remove(`hide`);
    } else {
      card[index].classList.add(`hide`);
    }
  });
});

window.onload = () => {
  filterProducts("All");
};
