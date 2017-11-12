import React, {Component} from 'react';
import Post from './Post';
import FakePost from '../seed/fakePost.js';
import styled from 'styled-components';

// STYLES
const PostsWrapper = styled.div`
  align-items: center;
`

class Posts extends Component {
  state = {
    posts: []
  }
  componentWillMount(){
    const posts = [];
    for(let i = 0; i < 20; i++){
      posts.push(new FakePost);
    }
    this.setState({posts});
  }
  render() {
    return (
      <PostsWrapper>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </PostsWrapper>
    )
  }
}

export default Posts;