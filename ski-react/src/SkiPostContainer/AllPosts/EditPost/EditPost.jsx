import React from 'react';




const EditPost = (props) => {
    return(
        <div>
            Edit Post:
            <form onSubmit={props.closeAndEdit}>
                <input type='text' name='mountain' value={props.postToEdit.mountain} onChange={props.handleEdit} placeholder='Edit Mountain' /><br/>
                <input type='text' name='post' value={props.postToEdit.body} onChange={props.handleEdit} placeholder='Edit post' /><br/>
                <button type='submit'>Save</button> 
            </form>
        </div>

    )



}






export default EditPost;