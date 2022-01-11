class Cart {
  constructor() {
    this.productService = new ProductsService();
    this.cartContainer = document.querySelector('#popup-cart');
    this.cart = JSON.parse(localStorage['cart'] || '{}');
    this.addEventListeners();
    this.updateBadge();
  }
  addEventListeners() {
    document
      .querySelector('.cart__link')
      .addEventListener('click', () => this.renderCart());
    this.cartContainer
    //.querySelector('.order')
    //.addEventListener('click', ev => this.order(ev));
  }
  saveCart() {
    localStorage['cart'] = JSON.stringify(this.cart);
  }
  async renderCart() {
    let total = 0;
    let cartDomSting = `
        <div class="product__data-type">
        <div class="data-type__item"><strong>Product</strong></div>
        <div class="data-type__item"><strong>Price</strong></div>
        <div class="data-type__item"><strong>Quantity</strong></div>
        </div>
        `;
    for (const id in this.cart) {
      const product = await this.productService.getProductById(id);
      total += product.price * this.cart[id];
      cartDomSting += `
        <div class="product__list" data-id="${id}">
        <div class="list__item">${product.model}</div>
        <div class="list__item">$${product.price}</div>
        <div class="list__item-quantity">
        <div class="list__quantity">${this.cart[id]}</div>
        <div class="list__buttom"><button data-id=${id} class="plus">+</button></div>
        <div class="list__buttom"><button data-id=${id} class="minus">-</button></div>
        </div>
        </div>
        `;
    }
    const cartSend = JSON.stringify(this.cart);
    cartDomSting += `
        <div class="product__total-sum">
        <div class=""><strong>TOTAL</strong></div>
        <input id="productOrder" type="hidden" defaultValue="${localStorage['cart']}">
        <input id="productCart" type="hidden" value="${cartSend}">
        <input id="quantity" type="hidden" value="${total.toFixed(2)}">      
        <div class=""><strong>$${total.toFixed(2)}</strong></div>
        </div>`;
    this.cartContainer.querySelector(
      '.popup__product'
    ).innerHTML = cartDomSting;
    this.cartContainer
      .querySelectorAll('.plus')
      .forEach(el =>
        el.addEventListener('click', ev =>
          this.changeQuantity(ev, this.addProduct)
        )
      );
    this.cartContainer
      .querySelectorAll('.minus')
      .forEach(el =>
        el.addEventListener('click', ev =>
          this.changeQuantity(ev, this.deleteProduct)
        )
      );
  }
  changeQuantity(ev, operation) {
    const button = ev.target;
    const id = button.dataset.id;
    operation.call(this, id);
    this.renderCart();
  }
  addProduct(id) {
    this.cart[id] = (this.cart[id] || 0) + 1;
    this.saveCart();
    this.updateBadge();
  }
  deleteProduct(id) {
    if (this.cart[id] > 1) {
      this.cart[id] -= 1;
    } else {
      delete this.cart[id];
    }
    this.saveCart();
    this.updateBadge();
  }
  async updateBadge() {
    const { count, cost } = await this.cartLengthAndCost();
    document.querySelector('#cart-badge').innerText = `${count} $${cost.toFixed(2)}`;
    if (count === 0) {
      document.querySelector("#cart-icon > a").classList.add('d-none');
    } else {
      document.querySelector("#cart-icon > a").classList.remove('d-none');
    }
  }
  async cartLengthAndCost() {
    // return Object.keys(this.cart).length;
    let count = 0;
    let cost = 0;
    // const productService = new ProductsService();
    for (const key in this.cart) {
      const product = await this.productService.getProductById(key);
      const quantity = this.cart[key];
      count += quantity;
      cost += quantity * product.price;
    }
    return {
      count, cost
    };
  }
  // async order(ev) {
  //   if ((await this.cartLengthAndCost()).count === 0) {
  //     alert('Please choose products to order', false);
  //     return;
  //   }
  //   const form = this.cartContainer.querySelector('.cart-form__body');
  //   if (form.checkValidity()) {
  //     ev.preventDefault();
  //     await fetch('sendmail.php', {
  //       method: 'POST',
  //       body: new FormData(form)
  //     })
  //       .then(response => {
  //         if (response.status === 200) {
  //           return response.text();
  //         } else {
  //           throw new Error('Cannot send form');
  //         }
  //       })
  //       .then(responseText => {
  //         form.reset();
  //         this.cart = {};
  //         this.saveCart();
  //         this.updateBadge();
  //         this.renderCart();
  //         alert('Thank you! For You Order. ' + responseText);
  //         this.cartContainer.querySelector('.popup-close').click();
  //       })
  //       .catch(error => alert(`There is an error: ${error}`, false));
  //   } else {
  //     alert('Please fill form correctly', false);
  //   }
  // }
}