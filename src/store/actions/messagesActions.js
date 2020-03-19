const addNewMessage = (message, callback) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('messages').add({
			...message,
			createdAt: new Date(),
		}).then(() => {
			dispatch({ type: 'ADD_NEW_MESSAGE', message })
		}).then(() => {
			callback()
		}).catch(err => {
			dispatch({ type: 'ADD_NEW_MESSAGE_ERR', err })
		})
	}
}

export { addNewMessage }