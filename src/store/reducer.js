const defaultState = {
	inputValue:'I Love You',
	list:[1,2],
};
export default (state = defaultState ,action)=>{
	if(action.type=='change_input_value'){
		const newState = JSON.parse(JSON.stringify(state));
		 newState.inputValue = action.value;
		  console.log('newState',newState)
		 return newState
		
	}
	return state;
}