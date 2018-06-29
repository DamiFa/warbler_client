import React from 'react';
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import MessageForm from '../containers/MessageForm';

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Homepage {...props} currentUser={currentUser} />} />
        <Route exact path="/signin" render={props => {
          return(
            <AuthForm {...props} 
              removeError={removeError}
              errors={errors}
              onAuth={authUser}
              buttonText="Log in"
              heading="Welcome Back."
            />
          )
        }} />
        <Route exact path="/signup" render={props => {
          return(
            <AuthForm {...props}
              removeError={removeError}
              errors={errors}
              signUp
              onAuth={authUser}
              buttonText="Sign me up!"
              heading="Join Warbler Today!"
            />
          )
        }} />
        <Route path="/user/:id/messages/new" component={withAuth(MessageForm)} />
      </Switch>
    </div>
  );
};

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));