import React from 'react'
import Book from './Book'
class BookShelf extends React.Component {
	constructor(props){
		super(props)
		console.log(this.props);
	}
	render(){

		const booksListTag = this.state.bookList;
		return (
			<div className="bookshelf">
				  <h2 className="bookshelf-title">{this.props.bookShelfName}</h2>
					<div className="bookshelf-books">
						  <ol className="books-grid">
							<li>
								{
									booksList.map((bookObject) =>
									  (<Book bookObject = {bookObject}/>)
									)
								}
								<Book/>
							</li>
						  </ol>
					</div>
			</div>
		)
	}
}

export default BookShelf
