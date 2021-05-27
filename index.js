const modal = document.getElementById("myModal");

const form = document.querySelector(".contact-form form");

const span = document.getElementsByClassName("close")[0];
form.addEventListener("submit", (e) => {
    e.preventDefault()
    modal.style.display = "block";
    document.getElementById('submitted-name').innerText = document.getElementById("name").value;
    document.getElementById('submitted-email').innerText = document.getElementById("email").value;
    document.getElementById('submitted-address').innerText = document.getElementById("address").value;
    document.getElementById('submitted-phone').innerText = document.getElementById("phone").value;
    document.getElementById('submitted-message').innerText = document.getElementById("message").value;
})
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
