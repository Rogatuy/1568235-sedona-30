const button = document.querySelector(".search-sedona-button")
const search = document.querySelector(".search-sedona-form");

search.classList.remove("search-sedona-form-show");

button.addEventListener("click", function() {
    search.classList.toggle("search-sedona-form-show");
    datestart.focus();
});