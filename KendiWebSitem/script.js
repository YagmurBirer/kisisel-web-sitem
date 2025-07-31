document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
        darkModeToggle.textContent = body.classList.contains("light-mode") ? "🌙" : "☀";
    });

    // Sayfa yüklendiğinde fade-in animasyonu ekle
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach(el => el.classList.add("show"));
    }, 300);
});
