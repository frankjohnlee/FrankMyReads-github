import React from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
class MainBookScreen extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			books: []
		}
	}
	componentDidMount() {
	  BooksAPI.getAll()
		.then((books) => {
		  this.setState(() => ({
			books
		  }))
		})
	}
	render(){
		console.log(this.state.books);
		const currentlyReadingList = this.state.books.filter(book => (book.shelf === "currentlyReading"));
		const wantToReadList = this.state.books.filter(book => (book.shelf === "wantToRead"));
		const readList = this.state.books.filter(book => (book.shelf === "read"));
		return (
			<div className="list-books">
			  <div className="list-books-title">
				<h1>MyReads</h1>
			  </div>
			  <div className="list-books-content">
				<div>
				  <BookShelf bookShelfName = {"Currently Reading"} bookList = {currentlyReadingList}/>
				  <BookShelf bookShelfName = {"Want to Read"} bookList = {currentlyReadingList}/>
				   <BookShelf bookShelfName = {"Read"} bookList = {currentlyReadingList}/>
				</div>
			  </div>

			</div>
		)
	}
}

export default MainBookScreen
