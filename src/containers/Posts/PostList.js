import React, { Component } from 'react'

/* Step 16: 
  in PostList.js, let's get the state data from the store and 
  convert them into read-only props. 
  Redux's core purpose is to get rid of state across the app and make it props. 
  */

// Step 16.1
import { connect } from 'react-redux';
import { getPosts } from '../../services/postService';
import Post from '../../components/Posts/Post';

class PostList extends Component {

  // Step 18: Let's get the list of posts on load
  componentDidMount(){
    // ideal place for us to send ajax calls
    // let's dispatch an action
    this.props.dispatch(getPosts());
  }

  render() {
    // Step 17: have the following lists and key 
    console.log(this.props);

    let posts = null;
    if(this.props.postList && this.props.postList.length > 0){
      posts = this.props.postList.map( (post, index) => {
        return(
          <Post key={index} 
                title={post.title}
                body={post.body}
                id={post.id}
                userId={post.userId}></Post>
        )
      });
    }
   

    return (
      <div className='container'>
        <h3>Post List</h3>
      
        { this.props.postList && this.props.postList.length? 
          posts
          :
          <div className='alert alert-warning'>
            Post Not Found! You can add one.
          </div>
        }
      </div> 
    )
  }
}

// Step 16.2
/* to get the state and to convert that to props 
in the PostList.js file, make the following change in the export. */
//mapStateToProps() fn should be defined in the same file before the export
const mapStateToProps = (state) => {
  console.log(state);
  return {
    postList: state.postData.postList
  }
}
export default connect(mapStateToProps)(PostList);
/* The above function will convert state to props for the PostList compoent.
By doing the above, this comp's state will be null . */

