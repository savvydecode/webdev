const button = document.querySelector("#responsive-btn");
/* 
function greet(name, sayHi) {
	sayHi(name);
}

function bounjour(name) {
	console.log("bounjour", name);
}

function mambo(name) {
	console.log("Mambo", name);
} */
/*
button.addEventListener("click", () => {
	greet("Savvy", bounjour);
});
 */
/* 
//USING SET TIME OUT
button.addEventListener("click", () => {
    console.log("immediately button is clicked");
	setTimeout(() => {
		console.log("the actual delay event");
	}, 5000);
    console.log("After button is clicked");
});
console.log("end of demo") */

//THE PROBLEM WITH CALLBACKS
/* button.addEventListener("click", () => {
	console.log("Starting a sequency of async tasks...");

	//This is the "callback Hell' part", where we chail them together
	setTimeout(() => {
		firstTask();
		setTimeout(() => {
			secondTask();
			setTimeout(() => {
				thirdTask();
				console.log("Sequence finished");
			}, 1000);
		}, 1000);
	}, 5000);
}); */

//three functions for out tasks
/* function firstTask() {
	console.log("Do: first task!");
}

function secondTask() {
	console.log("Do: second task!");
}

function thirdTask() {
	console.log("Do: third task!");
}
 */

// USING PROMISES

//A simple function that returns a promise!
//It's a cleawn way to wrap our asynchronous task.


/* button.addEventListener('click', () => {

    //Now, we can chain our asynchronous tasks using .then()
delay(1000)
	.then(() => {
		console.log("Finished: First task!");
		return delay(1000); // return a promise for the next task   
	})
	.then(() => {
		console.log("Finished: Second task!");
		return delay(1000); //return a new promise for the next task
	})
	.then(() => {
		console.log("Finished: Third task!");
        console.log("Promise chain finished!");
	})
    .catch(error => {
        console.error("Oops, an error occured:", error);
    });
});

function delay(ms) {
	return new Promise((reslove) => setTimeout(reslove, ms));
}

console.log("startting a clean Promise chain..."); */




/* button.addEventListener("click", () => {
	console.log("starting to fetch data");
	fetchData();
});

function fetchData() {
	fetch("https://stub.muindetuva.com/api/public/delayed/posts")
		.then((response) => {
			console.log(response);

			//you can  catch a 404 error here
			if (response.status === 404) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			if (response.status == 200) {
				console.log(response.json());
			}
		})
		.then((data) => {
			console.log(data);
			//Dynamically update the UI with the fetched data
		})
		.catch((error) => {
			console.error("no data", error);
		});
}
 */

//USING ASYNC AWAIT
 button.addEventListener("click", () => {
	console.log("starting to fetch data");
	fetchData();
});

const postsContainer = document.querySelector(".posts-container");
async function fetchData() {

    try{
        const response = await fetch("https://stub.muindetuva.com/api/public/delayed/posts");
        
        if (response.status !==200){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
		console.log(typeof data)
        data.map((post) => {
            const postCard = document.createElement("div");
            postCard.classList.add("posts-card");
            postCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <p>${post.created_at}</p>

            `;
            postsContainer.appendChild(postCard);
        });
    } catch(error){
        console.error("no data", error);
    }

}
 