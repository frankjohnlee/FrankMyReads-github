import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
class BookShelf extends React.Component {
	static propTypes = {
		bookList: PropTypes.array.isRequired,
		changeShelf: PropTypes.func.isRequired
	}
	render(){
		const bookList = this.props.bookList;
		return (
			<div className="bookshelf">
					<h2 className="bookshelf-title">{this.props.bookShelfName}</h2>
					<div className="bookshelf-books">
							<ol className="books-grid">

								{
									bookList.map((bookObj)=>{
										return (
											<Book
												id= {"Book Component: " + bookObj.title}
												bookObj = {bookObj}
												changeShelf = {this.props.changeShelf}
												currentShelf = {this.props.bookShelfName}/>
										)
									})
								}

							</ol>
					</div>
			</div>
		)
	}

}

export default BookShelf
