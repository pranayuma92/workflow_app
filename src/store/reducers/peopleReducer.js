const initState = {};

const peopleReducer = (state = initState, action) => {
	switch(action.type){
		case 'ADD_NEW_PEOPLE' :
			console.log('people added', action.people)
			return state;
		case 'ADD_NEW_PEOPLE_ERR' :
			console.log('people failed added', action.err)
			return state;
		case 'INVITE_PEOPLE' :
			console.log('people added', action.peopleId)
			return state;
		case 'INVITE_PEOPLE_ERR' :
			console.log('people failed added', action.err)
			return state;
		case 'REJECT_PEOPLE' :
			console.log('people rejected', action.peopleId)
			return state;
		case 'REJECT_PEOPLE_ERR' :
			console.log('people failed reject', action.err)
			return state;
		case 'ACCEPT_PEOPLE' :
			console.log('people accepted', action.peopleId)
			return state;
		case 'ACCEPT_PEOPLE_ERR' :
			console.log('people failed accept', action.err)
			return state;
		default: 
			return state;
	}
}

export default peopleReducer;