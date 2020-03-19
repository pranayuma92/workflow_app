const initState = {}

const messagesReducer = (state =  initState, action) => {
	switch(action.type){
		case 'ADD_NEW_MESSAGE' :
			console.log('message added', action.message)
			return state;
		case 'ADD_NEW_MESSAGE_ERR' :
			console.log('message failed added', action.err)
			return state;
		default: 
			return state;
	}
}

export default messagesReducer;