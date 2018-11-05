import React from 'react'


const ListOfPosts = (props) => {
    const allPosts = props.posts.map((post, i) => {
        return(
            <div className="all posts" key={post._id}>
                <ul>
                    <li>
                        User: {post.user}
                        Mountain: {post.mountain}
                        Post: {post.body}
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