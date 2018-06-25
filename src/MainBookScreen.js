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
		const { books } = this.state;
		const currentlyReadingList = books.filter(book => (book.shelf === "currentlyReading"));
		const wantToReadList = books.filter(book => (book.shelf === "wantToRead"));
		const readList = books.filter(book => (book.shelf === "read"));
		console.log("MainBookScreen read", readList);
		console.log("MainBookScreen this.prop", this.props);
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
