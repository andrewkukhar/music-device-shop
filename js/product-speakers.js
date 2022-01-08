class ProductList {
    constructor(cart) {
        this.cart = cart;
        this.container = document.querySelector('.speakers-slider');
        this.productService = new ProductsService();
        this.productService
            .getProducts()
            .then(() => this.renderProducts())
            .then(() => this.addEventListeners());
    }
    async renderProducts() {
        let productListDomString = '';
        const products = await this.productService.getProducts();
        [...products]
            .forEach(product => {
                productListDomString += `<div class="speakers-slider__item">
                <img src="${product.image}">
                <span>${product.model}</span>
                <strong>$${product.price}</strong>
                <button class="buy" data-id="${product.id}">ADD TO CART</button>
                </div>`;
            });
        this.container.innerHTML = productListDomString;
        $(document).ready(function () {
            $('.speakers-slider').slick({
                arrows: true,
                dots: false,
                adaptiveHeight: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 700,
                easing: 'linear',
                infinite: true,
                initialSlide: 1,
                autoplay: false,
                autoplaySpeed: 1500,
                pauseOnFocus: true,
                pauseOnHover: true,
                pauseOnDotsHover: true,
                rows: 1,
                slidesPerRows: 1,
                responsive: [
                    {
                        breakpoint: 1068,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }, {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ],
            });
        });
    }
    async addEventListeners() {
        document
            .querySelectorAll(
                '.speakers-slider__item button'
            )
            .forEach(button =>
                button.addEventListener('click', event =>
                    this.handleProductBuyClick(event)
                )
            );
    }
    handleProductBuyClick(event) {
        const button = event.target;
        const id = button.dataset.id;
        this.cart.addProduct(id);
        //$.POST('send.php', {'cart': cartForSend});
    }
};