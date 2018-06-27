import React from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
class Search extends React.Component {
	state = {
		query: '',
		booksFound: []
	}

	handleChange(event){
		const newQuery = event.target.value.trim();
		console.log("newQuery", newQuery);
		if (newQuery){
			this.setState({query: newQuery});

			BooksAPI.search(newQuery, 20).then(
				(books) => {
					books.length > 0 ?
					this.setState({booksFound: books}): this.setState({booksFound: []})
				})
			}
			else {
					this.setState({
						booksFound: [],
						query: ''
					})
				}
		}
	render(){
		const { toggleSearch, handleChange, changeShelf } = this.props;
		const { query, booksFound } = this.state;
		return (
			<div>
				<div className="search-books">
					<div className="search-books-bar">
						<Link className="close-search"  to="/">Close</Link>
						<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value = { query }
							onChange = { (event) => this.handleChange(event) }/>

						</div>
					</div>
					<div className="search-books-results">
						<BookShelf
							bookShelfName = {""}
							bookList = {booksFound}
							key={query}
							changeShelf = {changeShelf}
							/>
						{
							booksFound.length === 0 && query !== "" && (
								<div className=''>
									<h3>No books were found.  Please try again!</h3>
								</div>

							)
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Search
