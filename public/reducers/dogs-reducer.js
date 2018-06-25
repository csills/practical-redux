let dogsDefaultState = {
	dog: "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_15112.jpg",
    isLoading: false,
    error: null
}

const dogsReducer = (state = dogsDefaultState, action) => {
	let stateCopy = {
        ...state
    }

    if (action.type == "DOG_SEARCH_INITIATED") {
        stateCopy.isLoading = true;
        stateCopy.error = null;
        return stateCopy;
    } else if (action.type == "DOG_RETURNED") {
        let { dog } = action;
        stateCopy.dog = dog
        stateCopy.isLoading = false;
        stateCopy.error = null;
        return stateCopy
    } else if (action.type == "DOG_ERROR") {
        let { error } = action;
        stateCopy.dog = "";
        stateCopy.isLoading = false;
        stateCopy.error = error;
        return stateCopy;
    }
	return state;
}