window.addEventListener("scroll", () => {
    const header = document.querySelector(".header1");
    header.classList.toggle("scrolled", window.scrollY > 50);
});