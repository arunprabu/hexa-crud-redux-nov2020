import axios from 'axios';
import {toastr} from 'react-redux-toastr';

const CONTACTS_API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getContacts = () => {
  return (dispatch) => {
    // trigger an ajax call using axios. 
    return axios.get(CONTACTS_API_URL)
            .then( (res) => {
              console.log(res);
              toastr.success('Success', 'Contacts are loaded! Open console to see the updates in store')
              dispatch({
                type: 'FETCH_CONTACTS',
                contacts: res.data
              });
            })
            .catch( (err) => {
              console.log(err);
              toastr.error('Error', 'Some Error occured!')
              throw(err);
            })
            .finally( () => {
              console.log('It is over!');
            });
  }
}