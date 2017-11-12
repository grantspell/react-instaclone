import React, {Component} from 'react';
import styled from 'styled-components';

// STYLES
const CommentStyle = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 100%;
    margin: 15px;
    height: 25px;
  }

  p {
    strong {
      padding-right: 3px;
      margin-left: -10px;
    }
  }

`

class Comment extends Component {
  render() {
    const {comment} = this.props;
    console.log(comment);
    return (
      <CommentStyle>
        <img src={comment.profile_pic}/>
        <p>
          <strong>{comment.username}</strong>
          {comment.text}</p>
      </CommentStyle>
    );
  }
}

export default Comment;