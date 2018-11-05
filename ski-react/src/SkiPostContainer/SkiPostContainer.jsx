import React, {Component} from 'react';
import WeatherAPI from './WeatherAPI/WeatherAPI';
import ListOfPosts from './AllPosts/ListOfPosts';
import NewPost from './AllPosts/NewPost/NewPost'

class SkiPost extends Component {
    constructor(){
        super();

        this.state = {
            posts: [{
                user: '',
                mountain: '',
                body: '',
                _id: ''
            }],
            currentWeather: []
        }
    }
    getPosts = async () => {
        const post = await fetch('http://localhost:9001/api/v1/skiapp');
        console.log(post, "HOUSTON We have made connection to the ski server")
        const parsedPostData = post.json();
        return parsedPostData;
    }
    componentDidMount(){
        this.getPosts().then((posts) => {
            this.setState({
                posts: posts.data
            }).catch((err) => {
                console.log(err, "This is our internal server error")
            })

        })
    }
    getTheWeather = (weather) => {
        this.setState({
            currentWeather: [...this.props.weather, weather]
        })
    }
    newSkiPost = async (post, e) => {
        e.preventDefault();
            try{
                const newPost = await fetch('http://localhost:9001/api/v1/skiapp', {
                    method: 'POST',
                    credentials: 'include',
                    body: JSON.stringify(post),
                    headers: {
                        'Content-type': 'application/json'
                    }
                })

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

    render(){
        return(
            <div>
                This is our Main Container
                <section>
                    <WeatherAPI getTheWeather={this.getTheWeather}/>
                </section>
                <section>
                    <NewPost newSkiPost={this.newSkiPost}/>
                    <ListOfPosts posts={this.state.posts} />
                </section>
                
            </div>
        )
    }
}


export default SkiPost;