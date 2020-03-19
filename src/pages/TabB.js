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
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/react';

class TabB extends React.Component {
    state = {
        showModal : false
    }

    modalAction = () => {
        this.setState({showModal: !this.state.showModal})
    }

    render(){
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar color="tertiary">
                    <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
                    <IonTitle>New Item</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonPopover isOpen={this.state.showModal} onDidDismiss={this.modalAction}>
                        <p>test</p>
                    </IonPopover>
                    <IonButton onClick={this.modalAction}>Open</IonButton>
                    <IonCard>
                    <img src="data:image/jpeg;base64,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"/>
      <IonCardHeader>
        <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
        <IonCardTitle>Card Title</IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        Keep close to Nature's heart... and break clear away, once in awhile,
        and climb a mountain or spend a week in the woods. Wash your spirit clean.
      </IonCardContent>
    </IonCard>
                </IonContent>
            </IonPage>
        );
    }
};

export default TabB;