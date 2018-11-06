import React from 'react'


const ListOfPosts = (props) => {
    const allPosts = props.posts.map((post, i) => {
        return(
            <div className="all posts" key={post._id}>
                <ul>
                    <li>
                        Mountain: {post.mountain}<br/>
                        Post: {post.body}
                        <button onClick={props.openAndEdit.bind(null,post)}>Edit</button>
                        <button onClick={props.deletePost.bind(null,post._id)}>Delete</button>
                    </li>
                </ul>

            </div>
        )
    })

    return(
        <div>
            {allPosts}
        </div>
    )
}

export default ListOfPosts;