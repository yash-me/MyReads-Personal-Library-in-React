/*
 * Created by Yash Khandelwal on 014/04/20.
 */
import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import BookShelfList from './BookShelfList'
import SearchBook from './SearchBook'



class BooksApp extends React.Component {
  state = {
    
    books:[],    
    loading: true,
  }


  componentDidMount(){

    BooksAPI.getAll()

    .then((books) => {

        this.setState(() => ({

            books:books,
            loading:false,

        }))
    })
  }

  


  onShelfChange = (book, shelf) => {

      BooksAPI.update(book, shelf)

      .then(
          this.setState((state) => ({

              books: state.books.map(b => {

                  if(b.title  === book.title){

                      b.shelf = shelf;
                      return b
                  }
                  else{

                      return b
                  }
              }),
          }))
      )
  }


  resetSearch = () => {
    BooksAPI.getAll()

    .then((books) => {

        this.setState(() => ({

            books:books,
            loading:false,

        }))
    })
  };



  render() {
        const state = this.state;
        const currentlyReading = state.books.filter((book) => book.shelf === 'currentlyReading')
        const wantToRead = state.books.filter((book) => book.shelf === 'wantToRead')
        const read = state.books.filter((book) => book.shelf === 'read')

        return (
            <div className="app">
                <Route path="/" exact render={() => (
                    <div>
                        <div className="list-books-title">
                            <h1>My Reads: Your Personal Library</h1>
                        </div>
                        {/* {JSON.stringify(currentlyReading)} */}
                        {
                            !state.loading ? (
                                <BookShelfList
                                    currentlyReading={currentlyReading}
                                    wantToRead={wantToRead}
                                    read={read}
                                    onShelfChange={this.onShelfChange}
                                />
                            ) : (
                                <div className="loader"/>
                            )
                        }
                    </div>
                )}/>
                <Route path="/search" render={({history}) => (
                    <SearchBook
                        onShelfChange={this.onShelfChange}
                        history={history}
                        books={currentlyReading.concat(wantToRead, read)}
                        resetSearch={this.resetSearch}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
