import React from 'react';
import {BrowserRouter as Router,Route,withRouter,
    Redirect,Switch} from 'react-router-dom';
import App from './App';
import ArticleList from './articleList';

const NavigationBar = props => {
    return (
<Router>
<Route exact path="/" component={withRouter(App)}/>
<Route path="/articleList" component={ArticleList}/>
  </Router> 
    );
  }
  export default NavigationBar