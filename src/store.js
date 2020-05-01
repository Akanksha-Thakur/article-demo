import { createStore } from 'redux';
import articleList from './reducer' 

let store = createStore(articleList);

export default store ;