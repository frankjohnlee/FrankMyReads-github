import React from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
class MainBookScreen extends React.Component {


	render(){
		const { books, changeShelf } = this.props;
		const currentlyReadingList = books.filter(book => (book.shelf === "currentlyReading"));
		const wantToReadList = books.filter(book => (book.shelf === "wantToRead"));
		const readList = books.filter(book => (book.shelf === "read"));
		const mapAllThree = [
			["Currently Reading", currentlyReadingList],
			["Want to Read", wantToReadList],
			["Read", readList]
		]


		return (
			<div className="list-books">
				<div className="list-books-title">
				<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
				<div>
					{
						mapAllThree.map((customObj)=>{
							return (
								 <BookShelf
									 bookShelfName = {customObj[0]}
									 bookList = {customObj[1]}
									 key={customObj}
									 changeShelf = {changeShelf}
									 />
							)
						})
					}
				</div>
				</div>

			</div>
		)
	}
}

export default MainBookScreen
