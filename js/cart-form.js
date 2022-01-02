(function () {
    const form = document.getElementById("cart-form");

    async function handleSubmit(event) {
        event.preventDefault();
        let status = document.getElementById("cart-form-status");
        let data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            status.innerHTML = "Thanks for your Order's!";
            form.reset()
        }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
        });
    }
    form.addEventListener("submit", handleSubmit);
})();