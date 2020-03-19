import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonButton,
    IonPopover,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonAvatar,
    IonMenuButton
} from '@ionic/react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { invitePeople } from '../store/actions/peopleActions';
import Toast from '../components/Toast'

class NewItem extends React.Component {
    state = {
        showModal : false
    }

    modalAction = () => {
        this.setState({showModal: !this.state.showModal})
    }

    handleInvite = () => {
        this.props.invitePeople(this.props.auth.uid, this.props.match.params.id, this.modalAction() )
    }

    render(){
        const { people } = this.props
        console.log(this.props.people)
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="tertiary">
                        <IonButtons slot="start">
                            <IonBackButton />
                            <IonMenuButton autoHide={true} slot="start"/>
                        </IonButtons>
                        <IonTitle>{people.name}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <div className="has-padding">
                    
                    
                    
                    <IonButton onClick={this.handleInvite}>Invite</IonButton>
                    </div>
                </IonContent>
                <Toast isOpen={this.state.showModal} action={this.modalAction} timeout={2000}>
                    {people.name} has been invited
                </Toast>
            </IonPage>
        );
    }
};

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    const peoples = state.firestore.data.people;
    const people = peoples ? peoples[id] : null;
    return {
        people: people,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = dispatch => ({
  invitePeople : (uid, peopleId, callback) => dispatch(invitePeople(uid, peopleId, callback)),
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection:'people' }
    ])
)(NewItem);