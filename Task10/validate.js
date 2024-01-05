const token = localStorage.getItem("token")
const currentPage = window.location.href;

if(token) {
    if (!currentPage.includes("home.html")) {
        window.location.href = "./home.html";
    }
} else {
    if (!currentPage.includes("index.html")) {
        window.location.href = "./index.html";
    }
}