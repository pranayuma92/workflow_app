const addNewPeople = (people, callback) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('people').add({
			...people,
			createdAt: new Date(),
		}).then(() => {
			dispatch({ type: 'ADD_NEW_PEOPLE', people })
		}).then(() => {
			callback()
		}).catch(err => {
			dispatch({ type: 'ADD_NEW_PEOPLE_ERR', err })
		})
	}
}

const invitePeople = (uid, peopleId, callback) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('people').doc(uid).set({
			invited : firestore.FieldValue.arrayUnion(peopleId),
		}, { merge: true } ).then(() => {
			firestore.collection('people').doc(peopleId).set({
				invitation : firestore.FieldValue.arrayUnion(uid),
			}, { merge: true } )
			dispatch({ type: 'INVITE_PEOPLE', peopleId })
		}).then(() => {
			callback()
		}).catch(err => {
			dispatch({ type: 'INVITE_PEOPLE_ERR', err })
		})
	}
}

const rejectPeople = (uid, peopleId, callback) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('people').doc(uid).update({
			invitation : firestore.FieldValue.arrayRemove(peopleId),
		}).then(() => {
			firestore.collection('people').doc(peopleId).update({
				invited : firestore.FieldValue.arrayRemove(uid),
			})
			dispatch({ type: 'REJECT_PEOPLE', peopleId })
		}).then(() => {
			callback()
		}).catch(err => {
			dispatch({ type: 'REJECT_PEOPLE_ERR', err })
		})
	}
}

const acceptPeople = (uid, peopleId, callback) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		const firestore = getFirestore();
		firestore.collection('people').doc(uid).set({
			contacts : firestore.FieldValue.arrayUnion(peopleId),
			invitation : firestore.FieldValue.arrayRemove(peopleId),
		}, { merge: true } ).then(() => {
			firestore.collection('people').doc(peopleId).update({
				invitation : firestore.FieldValue.arrayRemove(uid),
				invited : firestore.FieldValue.arrayRemove(uid),
				contacts : firestore.FieldValue.arrayUnion(uid)
			})
			dispatch({ type: 'ACCEPT_PEOPLE', peopleId })
		}).then(() => {
			callback()
		}).catch(err => {
			dispatch({ type: 'ACCEPT_PEOPLE_ERR', err })
		})
	}
}

export { addNewPeople, invitePeople, rejectPeople, acceptPeople }