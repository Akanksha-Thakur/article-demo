import React, { useState } from 'react';
import { connect } from "react-redux";

import './App.css';
import { addArticle } from './action';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

 class App extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
      isCreateArticle : false,
      articleTitle : '',
      articleDiscription: '',
      articleDetail: '',
      authorName: '',
      authorEmailId: '',
     }
   }
   setArticleTitle = (articleTitle) => {
    this.setState({ articleTitle })
   }

   setArticleDetail = (articleDetail) => {
    this.setState({ articleDetail })
   }

   setAuthorName = (authorName) => {
    this.setState({ authorName })
   }

    setAuthorEmailId= (authorEmailId) => {
    this.setState({ authorEmailId })
   }

   onSubmit = () => {
     let state = this.props
    const {isCreateArticle,
      articleTitle,
      articleDiscription,
      articleDetail,
      authorName,
      authorEmailId} = this.state
      var promise = new Promise(function(resolve, reject) {
        state.addArticle({articleTitle, articleDetail, authorName, authorEmailId})
        resolve(true);
      })
      promise.then(bool =>  {
         state.history.push("/articleList");
    })  
   
   }
   cancel = () => {
    this.setState({
      isCreateArticle: !this.state.isCreateArticle,
      articleTitle: '',
      articleDiscription: '',
      articleDetail: '',
      authorName: '',
      authorEmailId: ''

    }) 
   }

   render() {
     const {isCreateArticle,
      articleTitle,
      articleDiscription,
      articleDetail,
      authorName,
      authorEmailId} = this.state
     return (
      <div className="App">
      {!isCreateArticle ? <button
      style={{alignSelf: 'center'}}
         className='createArticlBtn'
         onClick={() => this.setState({isCreateArticle: !isCreateArticle})}
       >Create Article</button> :
       <div
         className="createArticleDialog"
         style={{ flex: 1, flexDirection: "row"}}
       >
         <div className="authorDetailDiv">
        <text className="authorDetailTxt"> Create Article </text>
        </div>
       <input
          className="inputText"
          type="text"
          value={articleTitle}
          placeholder="Enter Alticle title"
          onChange={e => this.setArticleTitle(e.target.value)}
        />
     
         <textarea
          className="textArea"
          type="text"
          value={articleDetail}
          placeholder="Please Add Detail"
          onChange={e => this.setArticleDetail(e.target.value)}
        />
        <div className="authorDetailDiv">
        <text className="authorDetailTxt">Author Detail</text>
        </div>
         <input
          className="inputText"
          type="text"
          value={authorName}
          placeholder="Enter Name"
          onChange={e => this.setAuthorName(e.target.value)}
        />
         <input 
          className="inputText"
          type="text"
          value={authorEmailId}
          placeholder="Enter emailId"
          onChange={e => this.setAuthorEmailId(e.target.value)}
        />
       <div className="saveCancelBtn">
        <button
         className='saveCloseBtn'
         onClick={() => this.cancel()}
       >Cancel</button>
        <button
         className='saveCloseBtn'
         onClick={() => this.onSubmit() }
       >Save Article</button>
       </div>
        </div>
        }
        
     </div>
     )
   }
 }

 const mapDispatchToProps = (dispatch) => ({
   ...bindActionCreators({addArticle}, dispatch)
 })

export default withRouter(connect(null,mapDispatchToProps)(App));
