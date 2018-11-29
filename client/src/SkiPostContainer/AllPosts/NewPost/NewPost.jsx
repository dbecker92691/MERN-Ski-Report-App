import React, {Component} from 'react';



class NewPost extends Component {
    constructor(){
        super();

        this.state = {
            mountain: '',
            body: ''
        }
    }
    makePost = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.props.newSkiPost.bind(null, this.state)}>
                    <input type='text' name='mountain' value={this.state.mountain} placeholder='Mountain' onChange={this.makePost} />
                    <input type='text' name='body' value={this.state.body} placeholder='Post' onChange={this.makePost} />
                    <button type='submit'>Make Post</button>
                </form>
            </div>
        )
    }
}


export default NewPost;