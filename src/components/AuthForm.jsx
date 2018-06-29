import React, { Component } from "react";

class AuthForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      email:"",
      username:"",
      password:"",
      profileImageUrl:""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin"
    this.props
      .onAuth(authType, this.state)
      .then(() => {
        this.props.history.push('/');
      })
      .catch(() => {
        return;
      })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { email, username, profileImageUrl } = this.state;
    const { heading, buttonText, signUp, errors, history, removeError} = this.props;

    if (errors.message) {
      const unlisten = history.listen(() => {
        removeError()
        unlisten()
      });
    }

    return(
      <div>
        <div className="row justify-content-md-center text-center">
          <div className="col-md-6">
            <form onSubmit={this.handleSubmit}>
              <h2>{heading}</h2>
              {errors.message && (<div>{errors.message}</div>)}
              <label htmlFor="email">Email:</label>
              <input 
                className="form-control"
                name="email"
                id="email" 
                type="text" 
                onChange={this.handleChange}
                value={email}
              />

              <label htmlFor="password">Password:</label>
              <input 
                className="form-control" 
                name="password"
                id="password" 
                type="password" 
                onChange={this.handleChange}
              />
              {
                signUp && (
                  <div>
                    <label htmlFor="username">Username:</label>
                    <input 
                      className="form-control"
                      name="username"
                      id="username" 
                      type="text" 
                      onChange={this.handleChange}
                      value={username}
                    />
      
                    <label htmlFor="profileImageUrl">Image Url:</label>
                    <input 
                      className="form-control" 
                      name="profileImageUrl"
                      id="profileImageUrl" 
                      type="profileImageUrl" 
                      onChange={this.handleChange}
                      value={profileImageUrl}
                    />  
                  </div>
                )
              }
              <button className="btn btn-primary btn-block btn-lg">
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AuthForm;