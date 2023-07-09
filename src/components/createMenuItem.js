// id: 1,
// title: "buttermilk pancakes",
// category: "breakfast",
// price: 15.99,
// img: "../assets/item-1.jpeg",
// desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,

{
  /* <article class="menu-item">
    <img src="./menu-item.jpeg" alt="menu item" class="photo" />
    <div class="item-info">
        <header>
            <h4>buttermilk pancakes</h4>
            <h4 class="price">$15</h4>
        </header>
        <p class="item-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, sint quam. Et reprehenderit fugiat nesciunt inventore
              laboriosam excepturi! Quo, officia.
        </p>
    </div>
</article> */
}

const menuItem = (itemData) => {
  // create article
  const article = document.createElement("article");
  article.classList.add("menu-item", itemData.category);

  // create img
  const img = document.createElement("img");
  img.classList.add("photo");
  img.src = itemData.src;
  img.alt = itemData.title;

  // create a div for item info
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("item-info");

  // create a header
  const header = document.createElement("header");

  // create title
  const title = document.createElement("h4");
  title.innerText = itemData.title;

  // create a price
  const price = document.createElement("h4");
  price.classList.add("price");
  price.innerText = "$" + itemData.price;

  // append title and price
  header.append(title, price);

  // create description
  const description = document.createElement("p");
  description.classList.add("item-text");
  description.innerText = itemData.desc;

  // append a header and description
  infoContainer.append(header, description);

  // append the img and infoContainer
  article.append(img, infoContainer);

  return article;
};

export default menuItem;
