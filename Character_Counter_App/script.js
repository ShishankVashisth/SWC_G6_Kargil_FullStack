const reviewBox = document.getElementById("reviewBox");
const remaining = document.getElementById("remaining");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

const MAX_LIMIT = 200;

reviewBox.addEventListener("input", () => {

    let currentLength = reviewBox.value.length;

    let remainingChars =
        MAX_LIMIT - currentLength;

    remaining.textContent =
        remainingChars;

    remaining.classList.remove(
        "warning",
        "danger"
    );

    if(currentLength >= 160 &&
       currentLength < 180){

        remaining.classList.add(
            "warning"
        );
    }

    if(currentLength >= 180){

        remaining.classList.add(
            "danger"
        );
    }

});

submitBtn.addEventListener("click", () => {

    let text =
        reviewBox.value.trim();

    if(text === ""){

        alert(
            "Please write something first."
        );

        return;
    }

    message.textContent =
        "Review Submitted Successfully!";

    reviewBox.value = "";

    remaining.textContent =
        MAX_LIMIT;

    remaining.classList.remove(
        "warning",
        "danger"
    );

});