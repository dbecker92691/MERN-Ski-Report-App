import React, {Component} from 'react';
import WeatherAPI from './WeatherAPI/WeatherAPI';
import ListOfPosts from './AllPosts/ListOfPosts';
import NewPost from './AllPosts/NewPost/NewPost';
import EditPost from './AllPosts/EditPost/EditPost';
import './style.css';

class SkiPost extends Component {
    constructor(){
        super();

        this.state = {
            posts: [],
            currentWeather: [],
            
            }
        }
    
    getPosts = async () => {
        const post = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/skiapp`);
        const parsedPostData = post.json();
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
                const newPost = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/skiapp/`, {
                    method: 'POST',
                    body: JSON.stringify(post),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

                const parsedNewPost = await newPost.json();

                this.setState({
                    posts: [...this.state.posts, parsedNewPost.data]
                })

            } catch(err){
                console.log(err, "error with creating a new post")
            }


    } 
    editPost = async (postData) => {
        try{
            const submitEdit = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/skiapp/` + postData._id, {
                method: "PUT",
                body: JSON.stringify(postData),
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
            })
            console.log(submitEdit, 'fetching....')

            const parsedEdit = await submitEdit.json();

            console.log(parsedEdit, 'response ....')
            this.setState({
                posts: this.state.posts.map((post) => {
                    return post._id === parsedEdit.data._id ?
                    parsedEdit.data : post
                })
            })

        } catch(err){
            console.log(err, "<----- This is our edit i")
        }    



    }
    deletePost = async (id) => {
        await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/api/v1/skiapp/` + id, {
            method: "DELETE"
        })


        this.setState({
            posts: this.state.posts.filter((post) => post._id !== id )})
    }

    render(){
        return(
            <div>
                <section>
                    <WeatherAPI getTheWeather={this.getTheWeather}/>
                </section>
                <section>
                    <NewPost newSkiPost={this.newSkiPost}/>
                    { this.props.showEdit ? 
                        <EditPost /> :
                        <ListOfPosts posts={this.state.posts} openAndEdit={this.openAndEdit} deletePost={this.deletePost} />
                    }
                </section>  
            </div>
        )
    }
}


export default SkiPost;