import React from 'react';
import { 
  IonContent,
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonList,
  IonItem,
  IonCheckbox,
  IonLabel,
  IonNote,
  IonBadge,
  IonFab,
  IonFabButton,
  IonIcon,
  IonHeader,
  IonButtons, 
  IonBackButton,
  IonButton,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonMenuButton
} from '@ionic/react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { addNewPeople } from '../store/actions/peopleActions';
import { signOut } from '../store/actions/authActions';
import Invitation from '../components/Invitation';
import SuggestPeople from '../components/SuggestPeople';
import Contacts from '../components/Contacts';

class People extends React.Component {

	render(){
		const { peoples, auth, invitation, contact } = this.props
		console.log(invitation)

		return (
			<IonPage>
	         	<IonHeader mode="ios">
	          		<IonToolbar className="translucent">
	            		<IonTitle>People</IonTitle>
	            		<IonMenuButton auto-hide={true} slot="start"/>
	          		</IonToolbar>
	        	</IonHeader>
	        	<IonContent>
	        		<SuggestPeople peoples={peoples} />
	        		<Invitation list={invitation} uid={auth.uid}/>
	        		<Contacts list={contact}/>
	        	</IonContent>
      		</IonPage>
		)
	}
}

const mapStateToProps = state => {
  	const people  = state.firestore.ordered.people
  	const auth = state.firebase.auth
  	const contacts = people.filter( item => item.id == auth.uid)[0].contacts || [];
	const invited = people.filter( item => item.id == auth.uid)[0].invited || [];
	const invitations = people.filter( item => item.id == auth.uid)[0].invitation || [];
	const peoples = people.filter( item => item.id != auth.uid && !invited.includes(item.id) && !contacts.includes(item.id))  || [];

	const invitation = people.filter( item => { 
  		if(invitations){
    		return invitations.includes(item.id)
  		} else {
    		return null
  		}
	})

	const contact = people.filter( item => { 
  		if(contacts){
    		return contacts.includes(item.id)
  		} else {
    		return null
  		}
	})

	return {
		peoples: peoples,
		invitation: invitation,
		contact: contact,
		auth: auth
	}
}

const mapDispatchToProps = dispatch => ({
  addNewPeople : (people, callback) => dispatch(addNewPeople(people, callback)),
  signOut : () => dispatch(signOut())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection:'people', orderBy: ['createdAt', 'desc'] }
  ])
)(People)