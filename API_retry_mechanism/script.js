const loadBtn =
    document.getElementById("loadBtn");

const status =
    document.getElementById("status");

const result =
    document.getElementById("result");

const API_URL =
    "https://jsonplaceholder.typicode.com/users/1";

loadBtn.addEventListener(
    "click",
    () => {

        fetchWithRetry(
            API_URL,
            3
        );

    }
);

async function fetchWithRetry(
    url,
    retries
){

    try{

        status.textContent =
            "Loading...";

        const response =
            await fetch(url);

        if(!response.ok){

            throw new Error(
                "Request Failed"
            );
        }

        const data =
            await response.json();

        status.textContent =
            "Success";

        result.innerHTML = `
            <h3>${data.name}</h3>
            <p>${data.email}</p>
        `;

    }
    catch(error){

        if(retries > 0){

            status.textContent =
                `Retrying... (${retries} left)`;

            setTimeout(() => {

                fetchWithRetry(
                    url,
                    retries - 1
                );

            }, 1000);

        }
        else{

            status.textContent =
                "Failed after 3 attempts.";

            result.innerHTML = `
                <p style="color:red">
                    Unable to load data.
                    Please try again later.
                </p>
            `;
        }

    }

}