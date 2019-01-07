import React from 'react';
import AllPosts from '../components/Posts'
import Layout from '../components/layout'

const Posts = ({data}) => {    
    return(
        <Layout>
            <AllPosts data={data.allService.edges} />
        </Layout>
    )
}
export default Posts;


export const allPosts = graphql`
{
allService{
  edges{
    node{
      id
      title
    }
  }
}
}
`;