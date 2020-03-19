import React from 'react';
import { connect } from 'react-redux';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonInput,
    IonItem,
    IonLabel
} from '@ionic/react';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';


class SignIn extends React.Component {

	state = {
		email: '',
		password: ''
	}

	handleChange = (e) => {
		console.log(e)

		this.setState({ [e.target.id] : e.target.value})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.signIn(this.state)
	}

	render(){
		const { auth } = this.props;
		if(auth.uid) return <Redirect to='/home' />
		return (
			<IonPage>
			 	<IonContent>
			 		<IonItem>
     					<IonLabel position="floating">Email</IonLabel>
      					<IonInput onIonChange={this.handleChange} type="email" value={this.state.email} id="email"></IonInput>
   					</IonItem>
			 		<IonItem>
     					<IonLabel position="floating">Password</IonLabel>
      					<IonInput onIonChange={this.handleChange} type="password" value={this.state.password} id="password"></IonInput>
   					</IonItem>
   					<IonButton onClick={this.handleSubmit}>SignIn</IonButton>
			 	</IonContent>
			</IonPage>
		)
	}
}

const mapStateToProps = state => ({
	authError : state.auth.authError,
	auth: state.firebase.auth
})

const mapDispatchToProps = (dispatch) => ({
	signIn : creds => dispatch(signIn(creds))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);