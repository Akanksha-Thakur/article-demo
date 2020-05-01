// import React, { useState } from 'react';
// import { useDispatch, connect } from "react-redux";

// import './App.css';
// import { addArticle } from './action';

//  App() {
//   const [isCreateArticle, createArticle]= useState( false );
//   const [articleTitle, setArticleTitle]=useState('');
//   const [articleDiscription, setArticleDiscription]=useState('');
//   const [articleDetail, setArticleDetail]=useState('');
//   const [authorName, setAuthorName]=useState('');
//   const [authorEmailId, setAuthorEmailId]=useState('');

//   const dispatch = useDispatch();
 
//   return (
//     <div className="App">
//      {!isCreateArticle ? <button
//         className='createArticlBtn'
//         onClick={() => createArticle(!isCreateArticle)}
//       >Create Article</button> :
//       <div
//         className="createArticleDialog"
//         style={{ flex: 1, flexDirection: "row"}}
//       >
//       <input
//          type="text"
//          value={articleTitle}
//          placeholder="Enter Alticle title"
//          onChange={e => setArticleTitle(e.target.value)}
//        />
//         <input
//          type="text"
//          value={articleDiscription}
//          placeholder="Article Discription"
//          onChange={e => setArticleDiscription(e.target.value)}
//        />
//         <input
//          type="text"

//          value={articleDetail}
//          placeholder="Please Add Title"
//          onChange={e => setArticleDetail(e.target.value)}
//        />
//        <text className="authorDetailTxt">Author Detail </text>
//         <input
//          type="text"
//          value={authorName}
//          placeholder="Enter Name"
//          onChange={e => setAuthorName(e.target.value)}
//        />
//         <input 
//          type="text"
//          value={authorEmailId}
//          placeholder="Enter emailId"
//          onChange={e => setAuthorEmailId(e.target.value)}
//        />
//        <button
//         className='createArticlBtn'
//         onClick={() => dispatch(addArticle({articleTitle, articleDiscription, articleDetail, authorName, authorEmailId})) }
//       >Create Article</button>
//        </div>
//        }
       
//     </div>
//   );
// } 

// const mapDispatchToProps = {
//   ...addArticle,
// };

// export default connect(mapDispatchToProps)(App);
