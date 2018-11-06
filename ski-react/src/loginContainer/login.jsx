import React, {Component} from 'react';



class Login extends Component{
    constructor(){
        super();

        this.state = {
            username: '',
            password: '',
            isLoggedIn: false

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })

    }
    handleSubmit = async (e) => {
        e.preventDefault();
        //console.log(e, 'trying to submit')
        const responseToLogin = await fetch('http://localhost:9001/auth', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(responseToLogin, "<----- response to log in")

        const parsedResponse = responseToLogin.json();
        console.log(parsedResponse, "<--- here is our parsed response")
        
        if(parsedResponse.data === 'you are now logged in'){
            parsedResponse.setState({
                isLoggedIn: true
            })
            console.log('successfull login')
        }

        console.log(parsedResponse.data, "<--- parsed response.data")


    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name={this.state.username} onChange={this.handleChange} placeholder='Username'/>
                    <input type='password' name={this.state.password} onChange={this.handleChange} placeholder='Password'/>
                    <button type='submit'>Login</button>
                </form>
            </div>
        )
    }
}


export default Login;