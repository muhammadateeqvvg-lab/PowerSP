const scriptURL = 'https://script.google.com/macros/s/AKfycbyBar79SNowgd4_1SWH7gu_3a6Z2qMNpRYtnDCs0nKyOyuw693M39o-Vg3QKaH7iiQW/exec'

const form = document.forms['contactform']

form.addEventListener('submit', e => {
    var x = document.getElementById("loaderBox");
    x.style.display = "flex";
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => location.replace("popup.html"))
        // .then(() => { window.location.href = 'popup.html' })
        .catch(error => console.error('Error!', error.message))
})

