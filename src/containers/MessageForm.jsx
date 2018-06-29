import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from '../store/actions/messages';

class MessageForm extends Component{
  constructor(props) {
    super(props);
    this.state = {
      message:""
    }
  }

  handleNewMessage = e => {
    e.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({message:''});
    this.props.history.push('/');
  }

  render(){
    return(
      <form onSubmit={this.handleNewMessage}>
        {this.props.errors.message && (
          <div>{this.props.errors}</div>    
        )}
        <label htmlFor="message">Your Message: </label>
        <input 
          className="form-control" 
          value={this.state.message} 
          onChange={e => this.setState({message: e.target.value})} 
          type="text" 
          name="message" 
          id="message"
        />
        <button 
          type="submit"
          className="btn btn-success pull-right"
        >
          Add my message
        </button>
      </form>
    )
  }
}

function mapStateToProp(reduxState){
  return{
    errors: reduxState.errors
  };
}

export default connect(mapStateToProp, {postNewMessage})(MessageForm);

