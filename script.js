document.getElementById("timeButton")
    .addEventListener("click", () => {
        const now = new Date();

        document.getElementById("timeDisplay")
            .textContent =
            `Current browser time: ${now.toLocaleString()}`;
    });

document.querySelector(".accordion")
    .addEventListener("click", () => {

        const panel = document.querySelector(".panel");

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });