import React from 'react';
import SingleGalleryComponent from '../components/SingleGalleryComponent'
import Layout from '../components/layout'

const SingleGallery = ({ data }) => {
    return (
        <Layout>
        <SingleGalleryComponent data={data.allPosts.edges} />
        </Layout>
    )
}

export default SingleGallery;

export const allPosts = graphql`
{
allPosts{
  edges{
    node{
      id
      title
      image
      content
    }
  }
}
}
`;