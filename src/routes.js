import React from 'react';
import { Redirect, Route, NavLink } from 'react-router-dom';
import { IonListHeader, IonNote, IonRouterOutlet, IonMenu, IonHeader, IonToolbar, IonContent, IonItem, IonList, IonTitle, IonMenuButton, IonPage, IonMenuToggle} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NewItem from './pages/NewItem';
import SignIn from './pages/SignIn';
import People from './pages/People';
import { connect } from 'react-redux';

const Routes = (props) => {
	console.log(props)
  return (
    <IonReactRouter>
	  	<IonMenu side="start" type="overlay" contentId="main-content">
	      <IonContent>
	        <IonList id="user-list">
	        	<IonListHeader>Inbox</IonListHeader>
          		<IonNote>{props.auth.email}</IonNote>
	          	<IonMenuToggle autoHide={false}>    
	                <IonItem routerDirection="none" routerLink="/home" lines="none" detail={false}>
	                    Home
	                </IonItem>          
	          	</IonMenuToggle>
	          	<IonMenuToggle autoHide={false}>    
	                <IonItem routerDirection="none" routerLink={`/user/${props.auth.uid}`} lines="none" detail={false}>
	                    My Profile
	                </IonItem>          
	          	</IonMenuToggle>
	          	<IonMenuToggle autoHide={false}>    
	                <IonItem routerDirection="none" routerLink="/people" lines="none" detail={false}>
	                    People
	                </IonItem>          
	          	</IonMenuToggle>
	          	<IonItem>Menu Item</IonItem>
	          	<IonItem>Menu Item</IonItem>
	          	<IonItem>Menu Item</IonItem>
	          	<IonItem>Menu Item</IonItem>
	        </IonList>
	      </IonContent>
	    </IonMenu>
        <IonRouterOutlet id="main-content">
         	<Route path="/home" component={Home} />
         	<Route path="/people" component={People} />
         	<Route path="/signin" component={SignIn} />
          	<Route path="/user/:id" component={NewItem} />
          	<Redirect to="/home" />
        </IonRouterOutlet>
    </IonReactRouter>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
})

export default connect(mapStateToProps)(Routes);