const articleList = function (state = [], action) {
    switch (action.type) {
      case "ADD_ARTICLE":
        return state.concat(action.text)
        // if(state ==0) {
        //   state =   Object.assign({}, state, {
        //     articleList: action.text
        //   })
        // }
        // else {
        //   debugger
        //  return state.articleList.concat(Object.assign({}, state, {
        //   articleList: action.text
        // })) }
       
    return state
      default:
        return state;
    }
  };

  export default articleList;