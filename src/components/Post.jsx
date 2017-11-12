import React, { Component } from 'react';
import Comment from './Comment';
import { FaHeartO, FaCommentO } from 'react-icons/lib/fa'
import styled from 'styled-components'

// STYLES
const PostWrapper = styled.div`
  background-color: white;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  margin: 25px auto;
  max-width: 625px;

  p {
    padding-left: 10px;
  }
`
const UserInfo = styled.div`
  display: flex;
  flex-direction: flex-start;
  align-items: center;

  img {
    border-radius: 100%;
    margin: 15px;
    height: 40px;
  }

  p {
    font-weight: bold;
  }
`
const PostContent = styled.div`

  img {
    max-width: 625px;
  }
  
  p {
    padding: 5px;
  }
`
const IconsStyle = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: space-around;
  max-width: 18%;

`

class Post extends Component{

  render(){
    const { post } = this.props;
    return(
      <PostWrapper>
        <UserInfo>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </UserInfo>
        <PostContent>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </PostContent>
        <IconsStyle>
          <FaHeartO />
          <FaCommentO />
        </IconsStyle>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment,i) => <Comment key={i} comment={comment}/>)}
      </PostWrapper>
    )
  }
}

export default Post;