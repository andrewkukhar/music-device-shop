(async function () {
    const response = await fetch('main-headphones.json');
    const products = await response.json();

    function renderProducts(product) {
        const productsContainer = document.querySelector('.headphones-all-cards');
        let html = '';
        for (const product of products) {
            const productHTML = 
            html += `
            <article class="headphones-card">
                <div class="content">
                    <a class="a" href="#">
                        <img class="headphones-image" src="${product.image}" alt="${product.name}">
                        <h4 class="h4-name">${product.name}</h4>
                    </a>
                    <h4 class="h4-price">${product.price}</h4>
                    <button class="button-add-cart">
                        Add to Cart
                    </button>
                </div>
            </article>`;
        }
        productsContainer.innerHTML = html;
    }

    renderProducts(products);
})();



