const renderNavBar = () => {
	let { navigation } = store.getState();

	return `
		<div>
			<span 
			   style="${navigation == "COUNTER" ? "color: blue;" : "" }  cursor: pointer;"
			   onclick="navigateAction('COUNTER')">| COUNTER | </span>
			<span 
			   style="${navigation == "MOVIES"  ? "color: blue;" : "" }  cursor: pointer;"
			   onclick="navigateAction('MOVIES')">| MOVIES | </span>
			<span 
			   style="${navigation == "DOGS"    ? "color: blue;" : "" }  cursor: pointer;"
			   onclick="navigateAction('DOGS')">| DOGS | </span>
		</div>
	`
}