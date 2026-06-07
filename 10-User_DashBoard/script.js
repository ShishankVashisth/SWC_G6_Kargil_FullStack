const userContainer =
    document.getElementById("userContainer");

const loader =
    document.getElementById("loader");

const API_URL =
    "https://jsonplaceholder.typicode.com/users";

async function fetchUsers(){

    try{

        loader.style.display = "block";

        const response =
            await fetch(API_URL);

        const users =
            await response.json();

        loader.style.display = "none";

        renderUsers(users);

    }
    catch(error){

        loader.textContent =
            "Failed to load users.";
    }
}

function renderUsers(users){

    users.forEach(user => {

        const card =
            document.createElement("div");

        card.classList.add(
            "user-card"
        );

        card.innerHTML = `
            <h3>${user.name}</h3>

            <p>
                <strong>Email:</strong>
                ${user.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${user.phone}
            </p>

            <p>
                <strong>Website:</strong>
                ${user.website}
            </p>
        `;

        userContainer.appendChild(card);
    });
}

fetchUsers();