import React from 'react'
import EditPost from './EditPost/EditPost'


const ListOfPosts = (props) => {
    const allPosts = props.posts.map((post) => {
        return(
                        <EditPost deletePost={props.deletePost} handleEdit={props.handleEdit} closeAndEdit={props.closeAndEdit} post={post} key={post._id}/>
    
        )
    })

    return(
        <div>
            {allPosts}
        </div>
    )
}

export default ListOfPosts;