import React, { Component } from 'react';
import API from "../utils/API";

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      commentBoxes: [],
      commentBoxId: 0
    };
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
    API.getComments()
      .then(res => {
        let commentBox_size = 0;
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].last_key !== 0) {
              API.getComment(i)
                .then(res => {

                  let commentBox = <CommentBox key={i} id={i} comment_obj={res.data[0].comment_obj}/>
                  this.setState({commentBoxes: this.state.commentBoxes.concat(commentBox)});
                })
                .catch(err => console.log(err));
                commentBox_size++;
          }
          
        }
        this.setState({commentBoxId: commentBox_size});
      })
      .catch();
    
  }

  addNewCommentBox() {
    let newCommentBoxId = this.state.commentBoxId;
    this.setState({commentBoxId: newCommentBoxId});
    API.getComment(this.state.commentBoxId)
      .then(res => {
        let commentBox = <CommentBox key={this.state.commentBoxId} id={this.state.commentBoxId} comment_obj={res.data[0].comment_obj}/>
        this.setState({commentBoxes: this.state.commentBoxes.concat(commentBox)});
        newCommentBoxId = this.state.commentBoxId + 1;
        this.setState({commentBoxId: newCommentBoxId});
      })
      .catch();
    
    
  }  

  render() {
    return (
      <div className="App">
        <div className="boxesSpace">
           {this.state.commentBoxes.map(function(commentBox) {
             return commentBox;
           })}
        </div>
        <div className="buttonBar">
          <button className = "commBut" onClick={this.addNewCommentBox.bind(this)}>Add new comment</button>
        </div>        

        
      </div>
    );
  }
}

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentId: 0,
      commentBoxId: props.id,
      comment_obj: props.comment_obj
    };
  }

  componentDidMount() {
    this.loadComments();
  }

  loadComments = () => {
    if (this.state.comment_obj.length > 0) {
      let oldComments = this.state.comment_obj;
      this.setState({comments: this.state.comments.concat(oldComments)});
    }
  }

  handleOnSubmit(commentText) {
     
    API.getComment(this.state.commentBoxId).then(res => {
      let newCommentId = res.data[0].last_key + 1;
      this.setState({commentId: newCommentId});
      let oldComments = [];
      oldComments = res.data[0].comment_obj;
      let comment = {id:this.state.commentId, author: 'me', text: commentText}
      this.setState({comments: oldComments.concat(comment)});
      API.updateComment(this.state.commentBoxId, this.state.comments).then().catch();
      API.updateCommentKey(this.state.commentBoxId, [this.state.commentId]);
    }).catch();
    
  }  
  render() {
    return (
      <div className="CommentBox">
        <CommentList comments={this.state.comments}/>
        <CommentInput onCommentSubmit={this.handleOnSubmit.bind(this)}/>
      </div>
    );
  }
}


class CommentInput extends Component {
  
  handleOnSubmit(e) {
    let commentText = this.textInput.value;
    if (commentText) {
      this.props.onCommentSubmit(commentText);
      this.textInput.value = '';
    }
  }
  render() {
    return (
      <div className="CommentInput">
        <input className = 'SendBox' ref={(ref) => this.textInput = ref} type="text"></input>
        <button className = "commBut" onClick={this.handleOnSubmit.bind(this)}>Send</button>
      </div>
    );
  }
}

class CommentList extends Component {
  render() {
    let  liComments = this.props.comments.map(function(comment) {
                         return <Comment key={comment.id} author={comment.author} text={comment.text}/>;
                       })
    return (
      <ul className="CommentList">
        {liComments}
      </ul>
    );
  }
}

class Comment extends Component {
  render() {
    return (
      <li key={this.props.id} className="Comment">
        {this.props.author}: {this.props.text}
      </li>
    );
  }
}

export default Comments;
