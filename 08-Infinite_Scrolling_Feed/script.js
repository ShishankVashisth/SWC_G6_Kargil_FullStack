const feed =
    document.getElementById("feed");

const loader =
    document.getElementById("loader");

let page = 1;

let isLoading = false;

function loadPosts(){

    if(isLoading){
        return;
    }

    isLoading = true;

    loader.style.display = "block";

    setTimeout(() => {

        for(let i = 1; i <= 10; i++){

            const post =
                document.createElement("div");

            post.classList.add("post");

            post.innerHTML = `
                <h3>
                    Post ${(page - 1) * 10 + i}
                </h3>

                <p>
                    This is sample content
                    for the feed item.
                </p>
            `;

            feed.appendChild(post);
        }

        page++;

        isLoading = false;

        loader.style.display = "none";

    }, 1500);
}

loadPosts();

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const windowHeight =
            window.innerHeight;

        const documentHeight =
            document.documentElement.scrollHeight;

        if(
            scrollTop + windowHeight >=
            documentHeight - 100
        ){

            loadPosts();
        }

    }
);