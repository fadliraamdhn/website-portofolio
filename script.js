const loadingPage = document.querySelector(".spinner-wrapper")

window.addEventListener("load", () => {
    loadingPage.style.opacity = '0';

    setTimeout(() => {
        loadingPage.style.display = 'none';
    }, 5000)
});