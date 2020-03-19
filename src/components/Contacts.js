import React from 'react';
import {  
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonAvatar
} from '@ionic/react';
import { Link } from 'react-router-dom';

const Contacts = (props) => {
	if(props.list.length == 0){
		return <IonList className="list-header"><IonListHeader>Invited</IonListHeader><IonItem>No Invited Peoples</IonItem></IonList>;
	} else {
		return (
			<IonList className="list-header">
				<IonListHeader>Invited</IonListHeader>
				{ props.list.map( item => (
		            <IonItem key={ item.id } routerLink={`/user/${item.id}`}>
		              <IonAvatar slot="start">
	    				<img src={`https://api.adorable.io/avatars/285/${ item.name }.png`} />
	 			      </IonAvatar>
		              <IonLabel>{ item.name }</IonLabel>
		            </IonItem>
		        )) }
			</IonList>
		)
	}
}

export default Contacts