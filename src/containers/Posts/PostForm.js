import React, { Component } from 'react';
// Step 10
// Step 10.1
// react-redux is the glue to connect react js with redux.
// the last line of the comp -- in export default... make some changes to work with connect
import { connect } from 'react-redux';
import { createPost } from '../../services/postService';

class PostForm extends Component {

  // Step 9: Let's work on form submission. 
  addPostHandler = (e) => { // Step 9.2 then, work on addPostHandler method 
    e.preventDefault();

    // Step 10: we are ready for dispatching. refer the imports in the same file.
    const title = this.getTitle.value;
    const body = this.getContent.value;
    const data = {
      title,
      body
    }
    console.log(data);
    // Step 11: Check whether props is having dispatch method
    console.log(this.props);
    // Refer [services/postService.js] for Step 12.
    // Step 13: We are ready for dispatch 
    this.props.dispatch(createPost(data)); // this is the service method
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h3>Create Post!</h3>
            {/* Step 9.1
              form code can be the following with ref's and submission logic  */}
            <form onSubmit={this.addPostHandler}>
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control' ref={(inputEl) => this.getTitle = inputEl} /><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control' ref={(inputEl) => this.getContent = inputEl} /><br />
              <button className='btn btn-primary' type='submit'>Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}



// Step 10.2
// after connecting props will be available in this comp. 
// props will have dispatch method
// using dispatch method we can dispatch actions
export default connect()(PostForm);