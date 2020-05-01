import React, { useState } from 'react';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import logo from './logo.svg';
import './App.css';

const articleList = [
    {articleTitle: 'asd', articleDiscription: 'sfdsdfsdf', articleDetail: 'sadasdasdasd'},
    {articleTitle: 'asd', articleDiscription: 'sfdsdfsdf', articleDetail: 'aaaaaaa'},
    {articleTitle: 'asd', articleDiscription: 'sfdsdfsdf', articleDetail: 'aaaaaaa'},
    {articleTitle: 'asd', articleDiscription: 'sfdsdfsdf', articleDetail: 'aaaaaaa'},
    {articleTitle: 'asd', articleDiscription: 'sfdsdfsdf', articleDetail: 'aaaaaaa'},
]

class ArticleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          articleList: [],
          filteredData: []
        }
    }

    filterData(searchText) {
      const text = searchText.toString().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const { articleList } = this.state;
   
    const filteredData =  articleList.filter((list) => {
      list.id.match(text)});
    this.setState({ searchText, filteredData, articleList: filteredData });
    if(searchText.length == 0 ) {
      this.setState({articleList: this.props.articleList})
    }
    }

    componentDidMount() {
      this.setState({articleList: this.props.articleList})
    }

    share = () => {
      
     
      alert(
        'Do you want to share article'
      )    
    }
    render() {
      
  return (
    <div className="arlicleList">
      <text>Article List</text>
      <BootstrapTable
        data={this.state.articleList}
        search
        hover
        responsive
        tableHeaderClass='my-header-class'
        containerClass='my-container-class'
        tableContainerClass='my-table-container-class'
        tab
        tableStyle={{ backgroundColor: "#eee", }}
      >
        <TableHeaderColumn dataField="articleTitle" isKey dataAlign="right" dataSort>Article Title</TableHeaderColumn>
        <TableHeaderColumn dataField="articleDetail" dataSort>Article Details</TableHeaderColumn>
        <TableHeaderColumn dataField="articleDetail" dataAlign="center" >Author Name</TableHeaderColumn>
        <TableHeaderColumn dataField="authorEmailId" dataAlign="center" >Author EmailId</TableHeaderColumn>
      </BootstrapTable>
      <button
         className='saveCloseBtn'
         onClick={() => this.share()}
       >Share Article</button>
    </div>
  );
}
}

const mapStateToProps = (state) =>  {
    return {
    articleList: state
  }
}


export default withRouter(connect(mapStateToProps)(ArticleList));
