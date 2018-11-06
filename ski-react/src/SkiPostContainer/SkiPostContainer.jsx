import React, {Component} from 'react';
//import WeatherAPI from './WeatherAPI/WeatherAPI';
import ListOfPosts from './AllPosts/ListOfPosts';
import NewPost from './AllPosts/NewPost/NewPost'
import EditPost from './AllPosts/EditPost/EditPost'

class SkiPost extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            currentWeather: [],
            postToEdit: {
                mountain: '',
                body: '',
                _id: ''
            }
        }
    }
    getPosts = async () => {
        const post = await fetch('http://localhost:9001/api/v1/skiapp');
        const parsedPostData = post.json();
        console.log(parsedPostData, "Getting all posts!!!!!!");
        return parsedPostData;
        

    }
    componentDidMount = async () => {

        this.getPosts().then((posts) => {
            this.setState({posts: posts.data})
          }).catch((err) => {
            console.log(err,"This is our internal server error")});


    }
    getTheWeather = (weather) => {
        this.setState({
            currentWeather: [...this.props.weather, weather]
        })
    }
    newSkiPost = async (post, e) => {
        e.preventDefault();
            try{
                const newPost = await fetch('http://localhost:9001/api/v1/skiapp/', {
                    method: 'POST',
                    body: JSON.stringify(post),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                console.log(newPost, '<------ NEW POST . JSON')

                const parsedNewPost = newPost.json();
                console.log(parsedNewPost, "<---- parsed new post")

                this.setState({
                    posts: [...this.state.posts, parsedNewPost.data]
                })
                console.log(this.state.posts, '<--- post . state')

            } catch(err){
                console.log(err, "error with creating a new post")
            }


    }
    openAndEdit = (postBeingEdited) => {

        this.setState({
            postToEdit: {
                ...postBeingEdited
            }
        })


    }
    handleEdit = (e) => {
        this.setState({
            ...this.state.postToEdit,
            [e.currentTarget.name]: e.currentTarget.value
        })

    }
    closeAndEdit = async (e) => {
        e.preventDefault();
        try{
            const submitEdit = await fetch('http://localhost:9001/api/v1/skiapp/' + this.state.postToEdit._id, {
                method: "PUT",
                body: JSON.stringify({
                    mountain: this.state.postToEdit.mountain,
                    body: this.state.postToEdit.body
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })

            const parsedEdit = await submitEdit.json();

            const newEditedArr = this.state.posts.map((post) => {
                if(post._id === parsedEdit.data._id){
                    post = parsedEdit.data
                }
                return post
            });

            this.setState({
                posts: newEditedArr
            })
        } catch(err){
            console.log(err, "<----- This is our edit i")
        }    



    }
    deletePost = async (id) => {
        const postToDelete = await fetch('http://localhost:9001/api/v1/skiapp/' + id, {
            method: "DELETE"
        })

        const parsedDelete = postToDelete.json();

        this.setState({
            posts: this.state.posts.filter((post) => post._id !== id )})
    }

    render(){
        return(
            <div>
                This is our Main Container
                {/* <section>
                    <WeatherAPI getTheWeather={this.getTheWeather}/>
                </section> */}
                <section>
                    <NewPost newSkiPost={this.newSkiPost}/>
                    <ListOfPosts posts={this.state.posts} openAndEdit={this.openAndEdit} deletePost={this.deletePost}/>
                    <EditPost handleEdit={this.handleEdit} closeAndEdit={this.closeAndEdit} postToEdit={this.state.postToEdit} />
                </section>
                
            </div>
        )
    }
}


export default SkiPost;