import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, getPostById, updatePost } from '../../services/postService';

class PostDetails extends Component {

  componentDidMount() {
    // dispatch the service method
    console.log(this.props);
    // Reading URL Param
    const postId = this.props.match.params.postId;
    // instead of dispatching from props 
    this.props.onGetPostById(postId)
  }

  deletePostHandler = () => {
    const postId = this.props.match.params.postId;
    this.props.onDeletePost(postId);
  }
  
  updatePostHandler = (e) => {
    e.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getContent.value);

    let draftPost = {
      id: this.props.post.id,
      title: this.getTitle.value,
      body: this.getContent.value
    }

    this.props.onUpdatePost(draftPost);
  }

  render() {

    return (
      <div className='container'>
        <h1>Post Details</h1>

        { Object.keys(this.props.post).length !== 0 ? 
          <div>
            <div className="list-group">
              <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{this.props.post.title}</h5>
                  <small>Post Id: {this.props.post.id}</small>
                </div>
                <p className="mb-1">
                  {this.props.post.body}
                </p>
                <small>UserId: {this.props.post.userId}</small>
                <br />
                <button className='btn btn-primary' data-toggle='modal'
                  data-target='#editModal'>Edit</button> &nbsp;
              <button className='btn btn-danger' onClick={this.deletePostHandler}>Delete</button>
              </div>
            </div>
            <div className="modal fade" id="editModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Update Post
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={this.updatePostHandler}>
                      <input required type="text"
                        placeholder="Enter Post Title"
                        className='form-control' defaultValue={this.props.post.title}
                        ref={(inputEl) => this.getTitle = inputEl}
                      /><br />
                      <textarea required rows="5" cols="28"
                        placeholder="Enter Post"
                        className='form-control' defaultValue={this.props.post.body}
                        ref={(inputEl) => this.getContent = inputEl}
                      /><br />
                      <button className='btn btn-primary' type='submit'>Save Changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        :
          <div className='alert alert-success'>
              Deleted Successfully!
              You can go to <Link to='/posts'>Posts</Link> page!!
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.postData.post
  }
}

// mapDispatchToProps with actions
const mapDispatchToProps = ( dispatch ) => {
  return {
    onGetPostById: (id) => dispatch(getPostById(id)),
    onDeletePost: (postId) => dispatch(deletePost(postId)),
    onUpdatePost: (draftPost) => dispatch(updatePost(draftPost))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);