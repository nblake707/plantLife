const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");

mainTag.addEventListener("click", () => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#:~:text=classList%20is%20a%20read%2Donly,space%2Ddelimited%20string%20via%20element.
    mainTag.classList.toggle("open")
});