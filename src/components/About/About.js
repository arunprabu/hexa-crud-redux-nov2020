import React from 'react'
import { connect } from 'react-redux';
import { getContacts } from '../../services/contactService';

const About = (props) => {

  const loadContactsHandler = () => {
    props.dispatch(getContacts());
  }

  return (
    <div className="container text-center">
      <h1>About Page!</h1>

      <button type="button" className="btn btn-primary" onClick={loadContactsHandler}>Load Contacts</button>
    </div>
  )
}

export default connect()(About);
