import React from 'react';
import {  
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  IonListHeader,
  IonAvatar,
  IonIcon,
  IonButton
} from '@ionic/react';
import { addCircleOutline, checkmark, close } from 'ionicons/icons';
import { rejectPeople, acceptPeople } from '../store/actions/peopleActions';
import { connect } from 'react-redux';
import Toast from './Toast'

class Invitation extends React.Component {
	state = {
        showToastAccept : false,
        showToastReject : false
    }

    toastActionAccept = () => {
        this.setState({showToastAccept: !this.state.showToastAccept})
    }

    toastActionReject = () => {
        this.setState({showToastReject: !this.showToastReject})
    }

	render(){
		const { list , uid } = this.props
		console.log(list, uid)
		if(list.length == 0){
			return null;
		} else {
			return (
				<>
				<IonList className="list-header">
					<IonListHeader><IonLabel>Invitation  <IonBadge color="danger">{list.length}</IonBadge></IonLabel></IonListHeader>
			        { list.map( item => (
			            <IonItem key={ item.id }>
			              <IonAvatar slot="start">
	        				<img src={`https://api.adorable.io/avatars/285/${ item.name }.png`} />
	     			      </IonAvatar>
			              <IonLabel>{ item.name }</IonLabel>
			              <IonButton 
			              	fill="clear" 
			              	color="danger" 
			              	shape="rounded" 
			              	onClick={() => { this.props.rejectPeople(uid, item.id, null ); this.toastActionReject() } }>
			              		<IonIcon icon={close} />
			              </IonButton>
			              <IonButton 
			              	fill="clear" 
			              	color="success" 
			              	shape="rounded" 
			              	onClick={() => { this.props.acceptPeople(uid, item.id, null ); this.toastActionAccept() } }>
			              		<IonIcon icon={checkmark} />
			              	</IonButton>
			            </IonItem>
			        )) }
		      	</IonList>
		      
		      	<Toast isOpen={this.state.showToastAccept} action={this.toastActionAccept} timeout={2000}>
                    People accepted
                </Toast>
		      	<Toast isOpen={this.state.showToastReject} action={this.toastActionReject} timeout={2000}>
                    People rejected
                </Toast>
                </>
			)
		}
	}
}

const mapDispatchToProps = dispatch => ({
  rejectPeople : (uid, peopleId, callback) => dispatch(rejectPeople(uid, peopleId, callback)),
  acceptPeople : (uid, peopleId, callback) => dispatch(acceptPeople(uid, peopleId, callback))
})

export default connect(null, mapDispatchToProps)(Invitation)