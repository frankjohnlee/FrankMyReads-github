import React from 'react'
import './App.css'
import Search from './Search'
import MainBookScreen from './MainBookScreen'
import * as BooksAPI from './BooksAPI'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
		books: []
	}

	changeShelf (book, shelf){
		BooksAPI.update(book, shelf).then(respond => {
			// Update the local version of books to reflect this change
			book.shelf = shelf;


			// Get array of books without the current one
			var bookArray = this.state.books.filter(
				(currBook) => (currBook.id !== book.id)
			);


			// add the new book
			bookArray.push(book);

			this.setState({
				books: bookArray
			})

		})
	}

	componentDidMount() {
		BooksAPI.getAll()
		.then((books) => {
			this.setState(() => ({
			books
			}))
		})
	}

	render() {
		const { books } = this.state;
		return (

				<Router>
					<div>
							<Route exact path="/search" render={() => (
								<Search
									changeShelf = {this.changeShelf.bind(this)}/>
							)}/>

							<Route exact  path="/" render={() => (
									<MainBookScreen
										books = {books}
										changeShelf = {this.changeShelf.bind(this)}/>
							)}/>


						<div className="open-search">
								<Link to="/search">Search</Link>
						</div>
					</div>
				</Router>

		)
	}
}


export default BooksApp
