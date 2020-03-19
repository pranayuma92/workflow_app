import React from 'react';
import {  
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonAvatar
} from '@ionic/react';
import { Link } from 'react-router-dom';

const SuggestPeople = (props) =>{
	const { peoples, history } = props;
	console.log(props)
	return (
		<IonList className="list-header">
			<IonListHeader>Recommended People</IonListHeader>
	        { /** peoples.map( item => (
	            <IonItem key={ item.id } routerLink={`/user/${item.id}`}>
	            	<IonAvatar slot="start">
        				<img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
     				</IonAvatar>
	              	<IonLabel>{ item.name }</IonLabel>
	            </IonItem>
	        )) **/ }
	        
        	<div className="recommend-wrapper">
	        { peoples.map( item => (
	            <div className="child" key={ item.id }>
	            	<Link to={`/user/${item.id}`}>
		            	<IonAvatar slot="start">
	        				<img src={`https://api.adorable.io/avatars/285/${ item.name }.png`} />
	     				</IonAvatar>
     				</Link>
	            </div>
	        )) }
	        </div>
      	</IonList>
	)
}

export default SuggestPeople;