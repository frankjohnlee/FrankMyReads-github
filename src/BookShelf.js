import React from 'react'
import Book from './Book'
class BookShelf extends React.Component {
	constructor(props){
		super(props)
		console.log(this.props);
	}
	render(){

		return (
			<div className="bookshelf">
				  <h2 className="bookshelf-title">{this.props.bookShelfName}</h2>
					<div className="bookshelf-books">
						  <ol className="books-grid">
							<li>
								<Book/>
							</li>
						  </ol>
					</div>
			</div>
		)
	}
}

export default BookShelf
