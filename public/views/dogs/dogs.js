const renderDogsApp = () => {
	let { dogs } = store.getState();
	let { isLoading, dog, error } = dogs;
	return `
		</br>
		</br>
		</br>
		<button onclick="generateDoggo()">Generate Doggo</button>
		</br>
		</br>
		</br>
		${isLoading 
			? `<h1> LOADING... </h1>`
			: error
				? `<h1>${error}</h1>`
				: `<div>
					<img src=${dog} /><br>
					</div>`
		}
	`
}

/*
	INSTRUCTIONS FOR PRACTICAL-REDUX EXERCISE:
		<h1>Replace this with your dog app!</h1>
		<ul>
			<li>Your app should have a "generate doggo" button</li>
			<li>When the button is clicked, trigger an AJAX call to dogs.ceo to get a random dog image (see actions/movies-actions.js)
			<li>The dog image that comes back should render right below the "generate doggo" button
		</ul>
		<h4>Here are some guidelines and tips:</h4>
		<ul>
			<li>The front-end code is split up in three main folders: actions, reducers, and views</li>
			<li>dogs-actions.js is already there for you. Write a global function that will dispatch dog actions to the store</li>
			<li>dogs-reducer.js is also there for you. I recommend having a "isLoading" key and a "dogImageUrl" key in your state.</li>
			<li>dogs.js is there in the views folder. Use the getState call to conditionally render your app.</li>
			<li>if you're wondering how all these files are tied together, take a look at the bottom of index.html!</li>
			<li>take a look at script.js. Notice that the store.subscribe() callback only calls renderApp(). Try following renderApp and all the other functions in the /views folder to get an idea of how the DOM manipulation works. (template literals everywhere!)</li>
		</ul>
	END INSTRUSTIONS FOR PRACTICAL-REDUX EXERCISE.
*/