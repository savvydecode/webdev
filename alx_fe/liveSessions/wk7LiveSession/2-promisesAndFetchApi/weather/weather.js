/*const button = document.querySelector("#responsive-btn");
/
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
/*
button.addEventListener("click", () => {
	console.log("starting to fetch data");
	fetchData();
});

const weatherContainer = document.querySelector(".weather-container");
 async function fetchData() {
	try {
		const apikey = "306746da76d7460a69cff089bb49d938";
		const response = await fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=306746da76d7460a69cff089bb49d938"
		);

		if (response.status !== 200) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		console.log(data);
		console.log(typeof data);
		// OpenWeather returns an object, not an array. Build a single card from the object.
		postsContainer.innerHTML = "";
		const postCard = document.createElement("div");
		postCard.classList.add("posts-card");

		//if data.main.temp is a number, convert to celcius
		const tempC =
			data.main && typeof data.main.temp === "number"
				? (data.main.temp - 273.15).toFixed(1)
				: "N/A";
		const humidity =
			data.main && typeof data.main.humidity === "number"
				? data.main.humidity
				: "N/A";

		postCard.innerHTML = `
                <h2>City: ${data.name}</h2>
                <p>Temperature: ${tempC} °C</p>
                <p>Humidity: ${humidity}%</p>

            `;
		postsContainer.appendChild(postCard);
	} catch (error) {
		console.error(error);
	}
}
 */


//////////////////////////////////
/*
//USEING FETCH .then() .catch()

const button = document.querySelector("#responsive-btn");

button.addEventListener("click", () => {
	console.log("starting to fetch data");
	fetchData();
});

const weatherContainer = document.querySelector(".weather-container");


function fetchData() {
 	const apikey = "306746da76d7460a69cff089bb49d938";
	const responsePromise =  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=306746da76d7460a69cff089bb49d938"
  	)
     //.then((response) => response.json())
    //.then((data) => console.log(data))
    //.catch((error) => console.error(error)); 


	responsePromise.then(response => {
		const dataPromise = response.json();
		return dataPromise;
	}).then(data => {
		console.log(data);

		cons ole.log(`country: ${data.name}`);
		const tempC = typeof data.main.temp === 'number' ?  (data.main.temp - 273.15).toFixed(2) : "N/A"

		console.log(tempC)

		// render on the page
		weatherContainer.innerHTML = '';
		const postCard = document.createElement('div');
		postCard.classList.add('weather-card');
		postCard.innerHTML = `
					<h2>Country: ${data.name}</h2>
					<p>Temperature: ${tempC} °C</p>`
		
		weatherContainer.appendChild(postCard)

	}).catch(error){
		console.error(error)
	}

	
}
console.log("hello"); 
*/

/////////////////////////
//A MORE SIMPLIFIED VERSION

/*
const button = document.querySelector("#responsive-btn");
button.addEventListener("click", () => {
	console.log("starting to fetch data");

	const weatherContainer = document.querySelector(".weather-container");
	fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=306746da76d7460a69cff089bb49d938"
  	).then(response => {
		return response.json();
	}).then(data => {
		console.log(data);

		console.log(`country: ${data.name}`);
		const tempC = typeof data.main.temp === 'number' ?  (data.main.temp - 273.15).toFixed(2) : "N/A"

		console.log(tempC)

		// render on the page
		weatherContainer.innerHTML = '';
		const postCard = document.createElement('div');
		postCard.classList.add('weather-card');
		postCard.innerHTML = `
					<h2>Country: ${data.name}</h2>
					<p>Temperature: ${tempC} °C</p>`
		
		weatherContainer.appendChild(postCard)

	}).catch((error) => {
		console.error(error);
	});
	
});

*/

////////////////////////////////

//USING ASYNC/AWAIT APPROACH

const button = document.querySelector("#responsive-btn");

button.addEventListener("click", () => {
	console.log("starting to fetch data");
	fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=306746da76d7460a69cff089bb49d938"
  	)
});

const weatherContainer = document.querySelector(".weather-container");

async function fetchData(){
	try{
		const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=306746da76d7460a69cff089bb49d938"
  	)

	if (response.status !== 200){
		throw new Error('HTTP request error!: ${error}');
	
	}
	console.log(typeof response);
	//use await to reslve the respnse promise else the value of data will be a promise.
	const data = await response.json();
	console.log(data);

	console.log(data.name);
const temp = data?.main?.temp;
const tempC = temp != null ? (temp - 273.15).toFixed(2) : 'N/A';
	// render on the page
		weatherContainer.innerHTML = '';
		const postCard = document.createElement('div');
		postCard.classList.add('weather-card');
		postCard.innerHTML = `
					<h2>Country: ${data.name}</h2>
					<p>Temperature: ${tempC} °C</p>`
		
		weatherContainer.appendChild(postCard)

	
	}catch(error){
		console.error(error);
	}
}
		