import React from 'react'
import BookChanger from './BookChanger'
import PropTypes from 'prop-types'
class Book extends React.Component {
	static propTypes = {
		bookObj: PropTypes.object.isRequired,
		changeShelf: PropTypes.func.isRequired,
		currentShelf: PropTypes.string.isRequired
	}
	render(){
		const bookObj = this.props.bookObj;
		const thumbNail = bookObj.imageLinks && bookObj.imageLinks.thumbnail;
		const bookTitle = bookObj.title;
		const authorList = bookObj.authors;
		return (
			<div className="book">
				<div className="book-top">
				<div className="book-cover"
					style={{
						width: 128,
						height: 193,
						backgroundImage: `url(${thumbNail})` }}>
				</div>
				<BookChanger
					bookObj = {bookObj}
					changeShelf = {this.props.changeShelf}
					currentShelf= {this.props.currentShelf}/>
				</div>
				<div className="book-title">{bookTitle}</div>
				<div className="book-authors">{authorList}</div>
			</div>
		)
	}
}

export default Book
