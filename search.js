const button = document.querySelector(".search-sedona-button")
const search = document.querySelector(".search-sedona-form");
const datestart = search.querySelector("[name=date-start]");
const dateend = search.querySelector("[name=date-end]");
const sedonaold = search.querySelector("[name=sedona-old]");
const sedonayoung = search.querySelector("[name=sedona-young]");
const form = search.querySelector("form");

search.classList.remove("search-sedona-form-show");

button.addEventListener("click", function() {
    search.classList.toggle("search-sedona-form-show");
    search.classList.remove("search-sedona-form-error");
    datestart.focus();
});

form.addEventListener("submit", function() {
    if (!datestart.value || !dateend.value || !sedonaold.value || !sedonayoung.value) {
    search.classList.add("search-sedona-form-error");
}});