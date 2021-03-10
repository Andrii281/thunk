import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { connect } from 'react-redux'
import {addPost, getUsers, getPosts} from './actions'

import Layout from './components/Layout'
import Posts from './components/posts'
import CreatePost from './components/create-post-form'
import UserList from './components/user_list'
import AddUser from './components/add-user-form'

import './App.css';

function App(props) {

  useEffect(() => {
    props.getUsers();
    props.getPosts();
  }, []);

  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path="/create-post">
              {props.post != null && props.user != null ? <CreatePost/> : ''}
            </Route>
            <Route path="/posts">
              {props.post != null && props.user != null ? <Posts  posts = {props.post} /> : ''}
            </Route>
            <Route path="/users">
            {props.post != null && props.user != null ? <UserList/> : ''}
            </Route>
            <Route path="/add-user">
              <AddUser/>
            </Route>
            <Route path="/">
              {props.post != null && props.user != null ? <Posts posts/> : ''}
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.post, 
    user: state.user,
    photo: state.photo,
  }
}


export default connect(mapStateToProps, {addPost, getUsers, getPosts})(App);
