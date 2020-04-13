/*
 * Created by Yash Khandelwal on 014/04/20.
 */
import React, { Component } from 'react'

import Book from './Book'


class BookShelf extends Component{

    render(){

        return(

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.bookList.map((book) => {

                            return(

                                <li key={book.id}>
                                    <Book book={book} onShelfChange={this.props.onShelfChange} />
                                </li>
                            )
                        })
                    }
                </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;