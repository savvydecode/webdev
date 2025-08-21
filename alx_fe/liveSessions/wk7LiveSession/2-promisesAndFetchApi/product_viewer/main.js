
const apiURL = "https://stub.muindetuva.com/api/public/products";

const productsContainer = document.querySelector(".products-container");


document.addEventListener("DOMContentLoaded", async () => {
	// Fetch the data form out API

	try {
		const response = await fetch(apiURL);
		//do error checking
		if (response.status !== 200) {
			throw new Error(`HTTP error! ${response.status}`);
		}
		//return data
		const data = await response.json();
		console.log(data);

		//function for appending products to the page
		data.map(renderProducts);
		//OR
		/* data.map(item => {
            renderProducts(item);
        }) */
	} catch (error) {
		console.error(error);
	}
});

function renderProducts(product) {
	//console.log(product.name);

	//create a div, assign class product-card to it
	const productCard = document.createElement("div");
	productCard.classList.add("product-card");

	// create a img src="https://placehold.co/200", alt='product image';
	const productImg = document.createElement("img");
	productImg.src = "https://placehold.co/200";
	productImg.alt = `${product.name} image`;

	//create element p, assign class product-title
	const productTitle = document.createElement("p");
	productTitle.classList.add("product-title");
	productTitle.innerText = `${product.name}`;

	//create element p assign product-price;
	const productPrice = document.createElement("p");
	productPrice.classList.add("product-price");
	productPrice.innerText = `${product.currency} ${product.price}`;

	// create element button  innerhtml Add to Card
	const button = document.createElement("button");
	button.innerText = "Add to Card";

	//append all to div
	productCard.appendChild(productImg);
	productCard.appendChild(productTitle);
	productCard.appendChild(productPrice);
	productCard.appendChild(productTitle);
	productCard.appendChild(button);

	//append div to productsContainer
	productsContainer.appendChild(productCard);
}
