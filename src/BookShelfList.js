/*
 * Created by Yash Khandelwal on 014/04/20.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class BookShelfList extends Component{

    render(){

        return(

        <div class="list-books">

            <div className="list-books-content">
                <div>
                    <BookShelf shelfTitle="Currently Reading" bookList={this.props.currentlyReading} onShelfChange={this.props.onShelfChange} />

                    <BookShelf shelfTitle="Want to Read" bookList={this.props.wantToRead} onShelfChange={this.props.onShelfChange} />

                    <BookShelf shelfTitle="Reads" bookList={this.props.read} onShelfChange={this.props.onShelfChange} />
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add Book</Link>
            </div>

        </div>

       

        )
    }
}

export default BookShelfList;