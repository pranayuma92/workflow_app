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
  IonMenuButton,
  IonTextarea,
  IonAvatar,
  IonCard, 
  IonCardContent,
  IonInput
} from '@ionic/react';
import { add } from 'ionicons/icons';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { addNewPeople } from '../store/actions/peopleActions';
import { signOut } from '../store/actions/authActions';

class Home extends React.Component {

  state = {
    name: 'Dzania Khairunissa',
    email: 'dzania@gmail.com',
    userName: 'dzania19',
  }

  handlePublish = () => {
    this.props.addNewPeople(this.state, () => {
      console.log('created')
    })
  }

  render(){
    const { people, auth } = this.props
    console.log(people)

    if(!auth.uid) return <Redirect to='/signin' />;

    return (
      <IonPage>
         <IonHeader mode="ios">
          <IonToolbar className="translucent">
            <IonMenuButton auto-hide={true} slot="start"/>
             <IonAvatar slot="end" className="av-p">
              <img src="https://api.adorable.io/avatars/285/dsdsdsds.png" />
              </IonAvatar>
          </IonToolbar>

        </IonHeader>
        <IonContent>
          <h3 style={{padding: 10}} onClick={this.handlePublish}>Hi Pandu!</h3>
          <IonButton onClick={this.props.signOut} fill="clear">Sign out</IonButton>
            <IonCard>
              <IonCardContent>
                <IonItem>
                  <IonInput type="text" placeholder="Enter title"></IonInput>
                </IonItem>
                <IonTextarea rows={6} cols={20} placeholder="Enter any content here..."></IonTextarea>
              </IonCardContent>
              <IonButton fill="clear">Submit</IonButton>
            </IonCard>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => this.props.history.push('/new')}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>

        </IonContent>
      </IonPage>
    );
  }
};

const mapStateToProps = state => ({
  people : state.firestore.ordered.people,
  auth: state.firebase.auth
})

const mapDispatchToProps = dispatch => ({
  addNewPeople : (people, callback) => dispatch(addNewPeople(people, callback)),
  signOut : () => dispatch(signOut())
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection:'people', orderBy: ['createdAt', 'desc'] }
  ])
)(Home);