import React from 'react';




const EditPost = (props) => {
    return(
        <div>
            Edit Post:
            <form onSubmit={props.handleEdit}>
                <input type='text' name='mountain' placeholder={props.postToEdit.mountain} onChange={props.handleEdit} /><br/>
                <input type='text' name='body' placeholder={props.postToEdit.body} onChange={props.handleEdit}/><br/>
                <button type='submit'>Save</button> 
            </form>
        </div>

    )



}






export default EditPost;