import React from 'react'
// import { Container, PostForm } from '../components'
// import { Container, PostCard } from "./../../container/container";
import Container from "./../../container/container";
import PostCard from "../PostCard";
function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost