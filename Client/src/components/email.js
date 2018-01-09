import React, {Component} from 'react'
import Mailto from 'react-mailto'


class Mail extends Component {
  render () {
    return (

    	<div>
      	<Mailto email = "dwayne@westcreekproductions.com" obfuscate={true}>
        Email me!
      </Mailto>
      </div>
    )
  }
}
export default Mail

