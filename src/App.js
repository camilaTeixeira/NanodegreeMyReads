import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
//import SearchBook from './SearchBook'
import ListBooks from './ListBooks'

class BooksApp extends Component {
  
 
 state = {
   books: [],
    optionsMove: [
    { value: 'Move to...', option: 'none' },
    { value: 'currentlyReading', option: 'Currently Reading' },
    { value: 'wantToRead', option: 'Want to Read' },
    { value: 'read', option: 'Read' },
    { value: 'none', option: 'None' },
  ]
 }



  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks books={this.state.books} />
        
      )}/>       
      </div>
    )
  }
}

export default BooksApp
