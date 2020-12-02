const contactsReducer = (state = [], action) => {
  switch(action.type){
    case 'FETCH_CONTACTS': 
      return action.contacts;
    default:
      return state;
  }
}

export default contactsReducer;

// other possible actions
// 'FETCH_CONTACTS_SUCCESS', 'FETCH_CONTACTS_ERROR', 'FETCH_CONTACTS_CANCELLED'  