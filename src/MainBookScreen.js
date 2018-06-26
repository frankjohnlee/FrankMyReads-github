import React from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
class MainBookScreen extends React.Component {
	state = {
		books: []
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
		const { books } = this.state;
		const currentlyReadingList = books.filter(book => (book.shelf === "currentlyReading"));
		const wantToReadList = books.filter(book => (book.shelf === "wantToRead"));
		const readList = books.filter(book => (book.shelf === "read"));
		console.log("MainBookScreen currentlyReadingList", currentlyReadingList);
		console.log("MainBookScreen wantToReadList", wantToReadList);
		console.log("MainBookScreen readList", readList);
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
