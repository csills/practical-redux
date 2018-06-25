let generateDoggo = () => {
	// Before any search happens, we tell the reducer that we're starting a search
	store.dispatch({
		type: "DOG_SEARCH_INITIATED"
	})

	$.ajax({
		method: "GET",
		url: "https://dog.ceo/api/breeds/image/random"
	}).then( (dog) => {
		// Asynchronously dispatch another action when the movies come back from the API
		if (dog.Error) {
			store.dispatch({
				type: "DOG_ERROR",
				error: dog.status
			});
		} else {
			store.dispatch({
				type: "DOG_RETURNED",
				dog: dog.message
			});
		}	

		
	} )
	
}