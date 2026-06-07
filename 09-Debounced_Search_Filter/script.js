const products = [
    "Laptop",
    "Mobile",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones",
    "Camera",
    "Smart Watch",
    "Tablet",
    "Printer",
    "Speaker",
    "Charger"
];

const searchInput =
    document.getElementById("searchInput");

const productList =
    document.getElementById("productList");

function renderProducts(items){

    productList.innerHTML = "";

    items.forEach(product => {

        const li =
            document.createElement("li");

        li.textContent = product;

        productList.appendChild(li);

    });
}

renderProducts(products);

function debounce(func, delay){

    let timer;

    return function(){

        clearTimeout(timer);

        timer = setTimeout(() => {

            func.apply(this, arguments);

        }, delay);

    };
}

const handleSearch = () => {

    const searchText =
        searchInput.value
        .toLowerCase();

    const filteredProducts =
        products.filter(product =>
            product
            .toLowerCase()
            .includes(searchText)
        );

    renderProducts(filteredProducts);
};

searchInput.addEventListener(
    "input",
    debounce(handleSearch, 300)
);