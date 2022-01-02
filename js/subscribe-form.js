(function () {
const form = document.getElementById("subcribe-form");

async function handleSubmit(event) {
    event.preventDefault();
    let status = document.getElementById("subcribe-form-status");
    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        status.innerHTML = "Thanks for your subscribed!";
        form.reset()
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit);
})();