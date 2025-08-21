/*

const apiURL = "https://stub.muindetuva.com/api/posts";
const apiKey = "15|ddIe3Vn5by3WFFPqXqR4wfQ3CWg9l8yjjxmdx470771219f1";

//A get request to retrieve content from the api
//only the required methods will be used.
fetch(apiURL, {
	headers: {
		Authorization: `Bearer ${apiKey}`
	}
}).then((response) => {
	console.log(response);
    
    return response.json();
}).then((data) => {
    console.log(data)
})


// The data we want to send to (a JavaScript object)
const postData = {
	title: "Post created during LiveSession",
	body: "TI can do all things through Christ who strengthens me. I will master javascript and be deligent with it.",
	userId: 208
};
  */
//Writing a post request
/* 
fetch(apiURL, {
    method: 'POST',
    headers: {
        'Content-type' : 'application/json',
        'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(postData)

}).then((response) =>{ 
    console.log(response);
}) */

//////////////////////////////////////////////////

const apiURL = "https://stub.muindetuva.com/api/todos";
const apiKey = "15|ddIe3Vn5by3WFFPqXqR4wfQ3CWg9l8yjjxmdx470771219f1";

const todosContainer = document.querySelector(".todos-container");

document.addEventListener("DOMContentLoaded", async () => {
	try {
		const response = await fetch(apiURL, {
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		});

		if (response.status !== 200) {
			throw new Error(`Error!: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
		data.map((todo) => {
			const todoDiv = document.createElement("div");
			todoDiv.classList.add("todo");
			const todoParagraph = document.createElement("p");
			todoParagraph.innerText = todo.title;
			todoDiv.appendChild(todoParagraph);
			todosContainer.appendChild(todoDiv);
		});
	} catch (error) {
		console.error(error);
	}
});
