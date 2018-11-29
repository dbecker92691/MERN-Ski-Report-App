import React, {Component} from 'react';




class EditPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            postToEdit: {
                mountain: this.props.post.mountain,
                body:   this.props.post.body,
                _id: this.props.post._id
            },
            showEdit: false
        }
    }    
    handleShow = () => {
        this.setState({
            showEdit: true
        })
    }
    openAndEdit = (e) => {
        this.setState({
            postToEdit: {
                ...this.state.postToEdit,
                [e.currentTarget.name] : e.currentTarget.value
            }
            
        })


    }
    handleEdit = (e) => {
        console.log(e, "current edit")
        this.setState({
            ...this.state.postToEdit, 
            [e.currentTarget.name]: e.currentTarget.value
            
        })

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e, "current submit")
        this.handleClose();
        this.props.editPost(this.state.postToEdit)
    }

    handleClose = () => {
        this.setState({
            showEdit: false
        })
    }
    render(){
        return(
            <div key={this.props.post._id}>
                <h5>{this.props.post.mountain}</h5>
                <p>{this.props.post.body}</p>
                <button onClick={this.props.deletePost.bind(null,this.props.post._id)}>Delete</button>
                <button onClick={this.handleShow}>Edit</button>
                <form onSubmit={this.handleEdit}>
                    <input type='text' name='mountain' placeholder={this.props.post.mountain} onChange={this.handleEdit} /><br/>
                    <input type='text' name='body' placeholder={this.props.post.body} onChange={this.handleEdit} /><br/>
                    <input type='submit' onClick={this.handleClose}/> 
                </form>
            </div>
        )
    }

}












export default EditPost;