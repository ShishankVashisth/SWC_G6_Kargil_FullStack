const tabButtons =
    document.querySelectorAll(".tab-btn");

const tabContents =
    document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        tabButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        tabContents.forEach(content => {
            content.classList.remove(
                "active-content"
            );
        });

        button.classList.add("active");

        const targetTab =
            button.getAttribute("data-tab");

        document
            .getElementById(targetTab)
            .classList.add(
                "active-content"
            );

    });

});