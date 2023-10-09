const products = [
    {
        id: 1,
        name: "Tony",
        description: "It's a pleasure for us to introduce you to Tony, a big and special boy that will bring you happiness and great moments in your life.",
        price: 100,
        image: "img_1.jpeg"
    },
    {
        id: 2,
        name: "Pacho",
        description: "If you're looking for someone who loves you and won't cheat on you, like your ex did, Pacho is the best option for you. This little man will always be with you, giving so much love and company, at least while you feed him :].",
        price: 80,
        image: "img_2.jpg"
    },
];

function loadProducts() {
    const productsContainer = document.querySelector(".products-container");

    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("col-md-4", "mb-4");

        productCard.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-price">$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn btn-primary">Meet him</a>
                </div>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });
}