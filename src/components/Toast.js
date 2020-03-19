import React from 'react'
import { IonToast } from '@ionic/react'
 
const Toast = (props) => {
	return (
		<IonToast
	        isOpen={props.isOpen}
	        onDidDismiss={props.action}
	        message={props.children}
	        duration={props.timeout}
      	/>
	)
}

export default Toast